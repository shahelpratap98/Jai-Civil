/**
 * Re-encodes the full-size job photos in photo-src/ into web-weight jpgs in
 * public/projects/ (phone photos arrive at 2-4 MB each; the gallery needs
 * ~150-300 KB). Long side capped, quality q:v 4. Run after adding photos:
 *
 *   node scripts/compress-photos.mjs
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpeg from 'ffmpeg-static';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'photo-src');
const outDir = path.join(root, 'public', 'projects');
fs.mkdirSync(outDir, { recursive: true });

const kb = (bytes) => Math.round(bytes / 1024);
let total = 0;

for (const file of fs.readdirSync(srcDir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const input = path.join(srcDir, file);
  const output = path.join(outDir, file.replace(/\.(jpe?g|png)$/i, '.jpg'));

  execFileSync(ffmpeg, [
    '-y', '-loglevel', 'error',
    '-i', input,
    '-vf', "scale=w='if(gte(iw,ih),min(1400,iw),-2)':h='if(gt(ih,iw),min(1400,ih),-2)'",
    '-q:v', '7',
    output,
  ]);

  total++;
  console.log(`${file}: ${kb(fs.statSync(input).size)} KB -> ${kb(fs.statSync(output).size)} KB`);
}
console.log(`${total} photos compressed into public/projects/`);
