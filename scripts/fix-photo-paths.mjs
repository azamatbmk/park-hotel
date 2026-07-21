import fs from "fs";
import path from "path";

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(ts|tsx)$/.test(entry.name)) continue;
    const before = fs.readFileSync(full, "utf8");
    const after = before
      .replace(/original:\s*'photos\//g, "original: '/photos/")
      .replace(/thumbnail:\s*'photos\//g, "thumbnail: '/photos/")
      .replace(/original:\s*"photos\//g, 'original: "/photos/')
      .replace(/thumbnail:\s*"photos\//g, 'thumbnail: "/photos/');
    if (after !== before) {
      fs.writeFileSync(full, after);
      console.log("fixed", full);
    }
  }
}

walk("app");
