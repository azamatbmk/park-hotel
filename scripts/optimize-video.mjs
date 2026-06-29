import { renameSync, statSync, existsSync } from "fs";
import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";
import path from "path";

const input = path.resolve("public/video/main1.webm");
const backup = path.resolve("public/video/main1.orig.webm");
const output = path.resolve("public/video/main1-opt.webm");

if (!ffmpegPath) {
  console.error("ffmpeg binary not found");
  process.exit(1);
}

if (!existsSync(input)) {
  console.error("input video not found:", input);
  process.exit(1);
}

const before = statSync(input).size;
console.log(`compressing ${(before / (1024 * 1024)).toFixed(2)} MB video...`);

const result = spawnSync(
  ffmpegPath,
  [
    "-y",
    "-i",
    input,
    "-an",
    "-c:v",
    "libvpx-vp9",
    "-crf",
    "38",
    "-b:v",
    "0",
    "-row-mt",
    "1",
    "-vf",
    "scale='min(1280,iw)':-2",
    output,
  ],
  { stdio: "inherit" }
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const after = statSync(output).size;
console.log(`result: ${(before / (1024 * 1024)).toFixed(2)} MB -> ${(after / (1024 * 1024)).toFixed(2)} MB`);

if (!existsSync(backup)) {
  renameSync(input, backup);
}

renameSync(output, input);
