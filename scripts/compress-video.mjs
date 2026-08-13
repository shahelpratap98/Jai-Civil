/**
 * Re-encodes the masters in video-src/ into web-weight files in public/, each
 * with a poster jpg for first paint. Run after replacing a master:
 *
 *   npm run compress:video
 *
 * Two decisions here exist because the first hero looked bad:
 *
 *  - NO frame interpolation. That hero was slowed with setpts + minterpolate,
 *    which synthesizes in-between frames and smears every moving edge. That,
 *    not the bitrate, is what read as "blurry". Masters are now generated long
 *    enough to play at 1x, so no frames are invented.
 *  - Loop handling is per clip. The excavator clip was generated with the same
 *    still as its start and end frame, so it already loops (`loop: 'native'`).
 *    The convoy clip is a drive, which cannot end where it began, so a short
 *    dissolve folds the tail back over the head (`loop: 'crossfade'`). Keep
 *    that dissolve short: the truck sits in a slightly different spot at each
 *    end, and a long blend shows as a double exposure.
 *
 * Encode settings: 1920 wide (downscaling a 4K master is itself a sharpening
 * step), CRF 20 with a 10M ceiling, `-an` because these are muted backdrops,
 * and +faststart so playback can begin before the file has fully arrived.
 */
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpeg from 'ffmpeg-static';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Seconds of tail dissolved back over the head, for `loop: 'crossfade'`. */
const XFADE = 0.4;

const JOBS = [
  {
    master: 'hero.master.mp4',
    out: 'jai-hero.mp4',
    poster: 'jai-hero-poster.jpg',
    loop: 'crossfade',
  },
  {
    master: 'hero-earthworks.master.mp4',
    out: 'projects-hero.mp4',
    poster: 'projects-hero-poster.jpg',
    loop: 'native',
  },
];

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);

/** ffmpeg-static ships no ffprobe, so read the duration out of ffmpeg's own
 *  banner. spawnSync, not execFileSync: the banner goes to stderr whether the
 *  probe exits 0 or not. */
function durationOf(file) {
  const { stderr } = spawnSync(ffmpeg, ['-i', file, '-f', 'null', '-'], { encoding: 'utf-8' });
  const match = `${stderr}`.match(/Duration:\s*(\d+):(\d+):([\d.]+)/);
  if (!match) throw new Error(`could not read duration of ${file}`);
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]);
}

const ENCODE = [
  '-c:v', 'libx264',
  '-profile:v', 'high',
  '-preset', 'slow',
  '-crf', '20',
  '-maxrate', '10M',
  '-bufsize', '20M',
  '-pix_fmt', 'yuv420p',
  '-an',
  '-movflags', '+faststart',
];

for (const job of JOBS) {
  const input = path.join(root, 'video-src', job.master);
  const output = path.join(root, 'public', job.out);
  const poster = path.join(root, 'public', job.poster);

  if (!fs.existsSync(input)) {
    console.error(`missing master: ${job.master} — skipped`);
    continue;
  }

  const duration = durationOf(input);
  let loopSeconds = duration;

  if (job.loop === 'crossfade') {
    const loopEnd = duration - XFADE;
    loopSeconds = loopEnd;
    const filter = [
      `[0:v]scale=1920:-2:flags=lanczos,split=3[h][m][t]`,
      `[h]trim=0:${XFADE},setpts=PTS-STARTPTS[head]`,
      `[m]trim=${XFADE}:${loopEnd},setpts=PTS-STARTPTS[mid]`,
      `[t]trim=${loopEnd}:${duration},setpts=PTS-STARTPTS[tail]`,
      `[tail][head]blend=all_expr='A*(1-(T/${XFADE}))+B*(T/${XFADE})',setpts=PTS-STARTPTS[blend]`,
      `[blend][mid]concat=n=2:v=1:a=0[out]`,
    ].join(';');

    execFileSync(
      ffmpeg,
      ['-y', '-loglevel', 'error', '-i', input, '-filter_complex', filter, '-map', '[out]', ...ENCODE, output],
      { stdio: 'inherit' }
    );
  } else {
    execFileSync(
      ffmpeg,
      ['-y', '-loglevel', 'error', '-i', input, '-vf', 'scale=1920:-2:flags=lanczos', ...ENCODE, output],
      { stdio: 'inherit' }
    );
  }

  execFileSync(
    ffmpeg,
    ['-y', '-loglevel', 'error', '-i', output, '-frames:v', '1', '-q:v', '3', poster],
    { stdio: 'inherit' }
  );

  console.log(
    `${job.out}: ${mb(fs.statSync(input).size)} MB -> ${mb(fs.statSync(output).size)} MB ` +
      `(${duration.toFixed(1)}s master -> ${loopSeconds.toFixed(1)}s loop), ` +
      `poster ${mb(fs.statSync(poster).size)} MB`
  );
}
