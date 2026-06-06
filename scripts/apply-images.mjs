/**
 * Apply assets/manifest.json to index.html image slots.
 *
 * Manifest format ({slug}/assets/manifest.json):
 * {
 *   "source": "official site",
 *   "images": {
 *     "hero": { "url": "https://...", "alt": "...", "source": "official" },
 *     "menu-1": { "url": "assets/menu-1.jpg", "alt": "...", "source": "official", "local": true }
 *   },
 *   "order": ["hero", "menu-1", "gallery-1"]
 * }
 *
 * HTML: <img data-image="hero" ...> OR plain <img> tags filled in document order via "order".
 *
 * Usage: node scripts/apply-images.mjs the-dhaba
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { root } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/apply-images.mjs <slug>");
  process.exit(1);
}

const siteDir = slugDir(slug);
const htmlPath = path.join(siteDir, "index.html");
const manifestPath = path.join(siteDir, "assets", "manifest.json");
const assetsDir = path.join(siteDir, "assets");

if (!fs.existsSync(htmlPath)) {
  console.error(`Missing ${htmlPath}`);
  process.exit(1);
}
if (!fs.existsSync(manifestPath)) {
  console.error(`Missing ${manifestPath}. Copy templates/manifest.example.json`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const images = manifest.images || manifest;
const order = manifest.order || Object.keys(images).filter((k) => !["source", "notes", "images", "order"].includes(k));

const doc = parse(fs.readFileSync(htmlPath, "utf8"), { comment: true });
const body = doc.querySelector("body");
if (!body) {
  console.error("No <body> in index.html");
  process.exit(1);
}

const tagged = body.querySelectorAll("img[data-image]");
let applied = 0;

for (const img of tagged) {
  const slot = img.getAttribute("data-image");
  const entry = images[slot];
  if (!entry) continue;
  if (applyEntry(img, entry, assetsDir)) applied++;
}

const untagged = body.querySelectorAll("img:not([data-image])");
let orderIndex = 0;
for (const img of untagged) {
  while (orderIndex < order.length) {
    const slot = order[orderIndex++];
    const entry = images[slot];
    if (!entry?.url?.trim()) continue;
    img.setAttribute("data-image", slot);
    if (applyEntry(img, entry, assetsDir)) applied++;
    break;
  }
}

let out = doc.toString();
if (!/^<!DOCTYPE html>/i.test(out.trimStart())) {
  out = "<!DOCTYPE html>\n" + out;
}
fs.writeFileSync(htmlPath, out, "utf8");
writeSources(assetsDir, images, manifest.source);
updateStatus(siteDir, slug);

console.log(`Applied ${applied} image(s) to ${slug}/index.html`);
console.log(`Updated ${path.join(slug, "assets/sources.txt")}`);

function applyEntry(img, entry, assetsDir) {
  const url = typeof entry === "string" ? entry : entry.url;
  if (!url || !url.trim()) return false;
  img.setAttribute("src", url);
  if (entry.alt) img.setAttribute("alt", entry.alt);
  if (entry.loading) img.setAttribute("loading", entry.loading);
  return true;
}

function writeSources(assetsDir, images, defaultSource = "") {
  const lines = ["# Image sources — url | slot | source type", ""];
  for (const [slot, entry] of Object.entries(images)) {
    if (["source", "notes", "images", "order"].includes(slot)) continue;
    const url = typeof entry === "string" ? entry : entry.url;
    const src = typeof entry === "string" ? defaultSource : entry.source || defaultSource;
    const alt = typeof entry === "string" ? "" : entry.alt || "";
    lines.push(`${url} | ${slot} | ${src}${alt ? ` | ${alt}` : ""}`);
  }
  fs.mkdirSync(assetsDir, { recursive: true });
  fs.writeFileSync(path.join(assetsDir, "sources.txt"), lines.join("\n") + "\n", "utf8");
}

function updateStatus(siteDir, slug) {
  const statusPath = path.join(siteDir, "status.md");
  if (!fs.existsSync(statusPath)) return;
  let text = fs.readFileSync(statusPath, "utf8");
  text = text.replace(/\|\s*images\s*\|\s*\w+\s*\|/i, "| images | done |");
  fs.writeFileSync(statusPath, text, "utf8");
}
