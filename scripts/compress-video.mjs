/**
 * Re-encodes the hero master in video-src/ into a web-weight file in public/,
 * plus a poster jpg for first paint.
 *
 * The master comes out of Higgsfield at 2560x1440 and ~18 Mbps. That is far
 * too heavy for an autoplaying background and is what made the hero lag.
 * Run this after replacing the master:
 *
 *   npm run compress:video
 *
 * Settings:
 *  - 1920 wide is plenty: it is a backdrop, never studied.
 *  - CRF holds quality constant; maxrate/bufsize cap the worst bursts.
 *  - `-an` strips audio; `+faststart` lets playback begin early.
 *  - yuv420p for universal decoder support.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpeg from 'ffmpeg-static';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'video-src', 'hero.master.mp4');
const output = path.join(root, 'public', 'jai-hero.mp4');
const poster = path.join(root, 'public', 'jai-hero-poster.jpg');

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);

execFileSync(
  ffmpeg,
  [
    '-y', '-loglevel', 'error',
    '-i', input,
    '-vf', 'scale=1920:-2:flags=lanczos',
    '-c:v', 'libx264',
    '-profile:v', 'high',
    '-preset', 'slow',
    '-crf', '25',
    '-maxrate', '4M',
    '-bufsize', '8M',
    '-pix_fmt', 'yuv420p',
    '-an',
    '-movflags', '+faststart',
    output,
  ],
  { stdio: 'inherit' }
);

execFileSync(
  ffmpeg,
  ['-y', '-loglevel', 'error', '-i', output, '-frames:v', '1', '-q:v', '4', poster],
  { stdio: 'inherit' }
);

console.log(
  `jai-hero.mp4: ${mb(fs.statSync(input).size)} MB -> ${mb(fs.statSync(output).size)} MB, ` +
    `poster ${mb(fs.statSync(poster).size)} MB`
);
