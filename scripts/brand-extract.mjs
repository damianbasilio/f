/**
 * Extract brand signals from a business's current live website.
 * Output: {slug}/stitch/brand-extract.json + updates brief Brand signals section.
 *
 * Usage: node scripts/brand-extract.mjs <slug>
 */
import fs from "node:fs";
import path from "node:path";
import { extractBrandFromUrl, mergeBrandIntoBrief } from "../lib/extract-brand.mjs";
import { extractOwnerFromUrl, mergeOwnerIntoBrief } from "../lib/extract-owner.mjs";
import { readBriefField } from "../lib/slugs.mjs";
import { root } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/brand-extract.mjs <slug>");
  process.exit(1);
}

const briefPath = slugDir(slug, "brief.md");
if (!fs.existsSync(briefPath)) {
  console.error(`Missing ${briefPath}`);
  process.exit(1);
}

const brief = fs.readFileSync(briefPath, "utf8");
const urlMatch = brief.match(/\*\*Live URL:\*\*\s*(https?:\/\/[^\s]+)/i);
const siteUrl = urlMatch?.[1]?.trim();
if (!siteUrl) {
  console.error("brief.md missing **Live URL:** under Site quality gate");
  process.exit(1);
}

console.log(`Extracting brand from ${siteUrl}…`);
const brand = await extractBrandFromUrl(siteUrl);

const stitchDir = slugDir(slug, "stitch");
fs.mkdirSync(stitchDir, { recursive: true });
const outPath = path.join(stitchDir, "brand-extract.json");
fs.writeFileSync(outPath, JSON.stringify(brand, null, 2) + "\n", "utf8");

if (brand.facebookPage) {
  fs.writeFileSync(
    slugDir(slug, "facebook-scrape.json"),
    JSON.stringify(brand.facebookPage, null, 2) + "\n",
    "utf8"
  );
  if (brand.postImages?.length) {
    fs.mkdirSync(slugDir(slug, "assets"), { recursive: true });
    fs.writeFileSync(
      slugDir(slug, "assets", "facebook-images.json"),
      JSON.stringify({ sourceUrl: siteUrl, images: brand.postImages }, null, 2) + "\n",
      "utf8"
    );
    console.log(`Facebook images: ${brand.postImages.length} → assets/facebook-images.json`);
  }
}

let updatedBrief = mergeBrandIntoBrief(brief, brand);

const businessName = readBriefField(updatedBrief, /\*\*Name:\*\*\s*(.+)/i, slug);
if (!/\*\*Owner:\*\*/i.test(updatedBrief)) {
  try {
    const owner = await extractOwnerFromUrl(siteUrl, businessName);
    updatedBrief = mergeOwnerIntoBrief(updatedBrief, owner, { attempted: true });
    if (owner) console.log(`Owner: ${owner.fullName} (${owner.source})`);
    else console.log("Owner: — (no owner name found on live site)");
  } catch (err) {
    console.warn(`Owner extract skipped: ${err.message}`);
  }
}

fs.writeFileSync(briefPath, updatedBrief, "utf8");

console.log(`Wrote ${outPath}`);
console.log(`Colors: ${brand.colors.slice(0, 8).join(", ") || "(none detected)"}`);
console.log(`Fonts: ${brand.fonts.join(", ") || "(none detected)"}`);
