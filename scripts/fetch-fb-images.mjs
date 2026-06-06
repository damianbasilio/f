/**
 * Download FB images and apply to manifest (FB-only, no generated fallbacks).
 * Usage: node scripts/fetch-fb-images.mjs [--file slugs.txt] [slug...]
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { root } from "../lib/load-env.mjs";
import { parseSlugs } from "../lib/slugs.mjs";
import { slugDir } from "../lib/paths.mjs";

const fileIdx = process.argv.indexOf("--file");
const slugs =
  fileIdx !== -1 && process.argv[fileIdx + 1]
    ? parseSlugs(["", "", process.argv[fileIdx + 1]], 2)
    : parseSlugs(process.argv.filter((a) => a !== "--file"), 2);

if (slugs.length === 0) {
  console.error("Usage: node scripts/fetch-fb-images.mjs <slug...|--file slugs.txt>");
  process.exit(1);
}

for (const slug of slugs) {
  const manifestPath = slugDir(slug, "assets", "manifest.json");
  const scrapePath = slugDir(slug, "facebook-scrape.json");
  if (!fs.existsSync(manifestPath)) {
    console.warn(`skip ${slug}: no manifest`);
    continue;
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const localOnly = Object.values(manifest.images || {}).every(
    (e) => !e.url || e.url.startsWith("assets/fb-") || e.local
  );
  if (!localOnly) {
    console.warn(`skip ${slug}: manifest must use local assets/fb-* only`);
    continue;
  }
  const img = spawnSync(process.execPath, [path.join(root, "scripts", "apply-images.mjs"), slug], {
    cwd: root,
    encoding: "utf8",
  });
  console.log(img.status === 0 ? `✓ ${slug} images applied` : `✗ ${slug}: ${img.stderr}`);
}
