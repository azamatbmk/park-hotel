import sharp from "sharp";
import { rename, unlink } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const root = path.resolve("public/photos");

const targets = [
  { file: "aboutbg.jpg", maxWidth: 1920, quality: 78 },
  { file: "roomsbg.png", maxWidth: 1920, quality: 80 },
  { file: "restbg.png", maxWidth: 1920, quality: 80 },
  { file: "spabg.png", maxWidth: 1920, quality: 80 },
  { file: "spa-paige-bg.png", maxWidth: 1920, quality: 80 },
  { file: "contactsbg.png", maxWidth: 1920, quality: 80 },
  { file: "rooms-page-bg.png", maxWidth: 1920, quality: 80 },
  { file: "excursionsbg.png", maxWidth: 1920, quality: 80 },
];

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

for (const { file, maxWidth, quality } of targets) {
  const input = path.join(root, file);
  if (!existsSync(input)) {
    console.log(`skip: ${file} (not found)`);
    continue;
  }

  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const outputExt = ext === ".png" ? ".webp" : ".webp";
  const output = path.join(root, `${base}${outputExt}`);
  const backup = path.join(root, `${base}.orig${ext}`);

  const before = (await import("fs")).statSync(input).size;

  let pipeline = sharp(input).rotate().resize({ width: maxWidth, withoutEnlargement: true });

  if (outputExt === ".webp") {
    pipeline = pipeline.webp({ quality, effort: 6 });
  }

  await pipeline.toFile(output);

  const after = (await import("fs")).statSync(output).size;

  if (!existsSync(backup)) {
    await rename(input, backup);
  } else {
    await unlink(input);
  }

  console.log(`${file} -> ${base}${outputExt}: ${formatSize(before)} -> ${formatSize(after)}`);
}

// Small poster for video hero (LCP)
const posterInput = path.join(root, "aboutbg.orig.jpg");
const posterSource = existsSync(posterInput) ? posterInput : path.join(root, "aboutbg.webp");
if (existsSync(posterSource)) {
  const posterOut = path.join("public/photos", "aboutbg-poster.webp");
  await sharp(posterSource)
    .rotate()
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 72, effort: 6 })
    .toFile(posterOut);
  const posterSize = (await import("fs")).statSync(posterOut).size;
  console.log(`aboutbg-poster.webp: ${formatSize(posterSize)}`);
}
