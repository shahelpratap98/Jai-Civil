/**
 * Generates width variants for every photo in public/projects/, so the gallery
 * can serve a 640px file into a 350px tile instead of the full 1920px master.
 *
 *   npm run optimize:images
 *
 * Run it after adding or replacing a photo. Variants are written alongside the
 * original as name-640.jpg and name-1280.jpg; the original stays as the 1920w
 * candidate. <Photo> builds the srcset from the base filename, so nothing
 * needs wiring up per image.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpeg from 'ffmpeg-static';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'public', 'projects');

const WIDTHS = [640, 1280];
const kb = (bytes) => (bytes / 1024).toFixed(0);

const originals = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.jpg') && !/-\d+\.jpg$/.test(f));

let generated = 0;
let saved = 0;

for (const file of originals) {
  const base = file.replace(/\.jpg$/, '');
  for (const width of WIDTHS) {
    const out = path.join(dir, `${base}-${width}.jpg`);
    execFileSync(
      ffmpeg,
      [
        '-y', '-loglevel', 'error',
        '-i', path.join(dir, file),
        // Never upscale: a master narrower than the target is copied as is.
        '-vf', `scale='min(${width},iw)':-2:flags=lanczos`,
        '-q:v', '4',
        out,
      ],
      { stdio: 'inherit' }
    );
    // A master that is already small can re-encode heavier than it started.
    // Copy the original over the variant so a candidate always exists and is
    // never the more expensive download.
    if (fs.statSync(out).size >= fs.statSync(path.join(dir, file)).size) {
      fs.copyFileSync(path.join(dir, file), out);
    }
    generated++;
  }
  const full = fs.statSync(path.join(dir, file)).size;
  const small = fs.statSync(path.join(dir, `${base}-640.jpg`)).size;
  saved += full - small;
  console.log(`${base}: ${kb(full)} KB -> ${kb(small)} KB at 640w`);
}

console.log(
  `\n${generated} variants from ${originals.length} photos. ` +
    `A gallery of 640w files is ${kb(saved)} KB lighter than the masters.`
);
