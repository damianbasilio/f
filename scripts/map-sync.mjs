/**
 * Inject or refresh Google Maps embed from brief.md address.
 * Usage: node scripts/map-sync.mjs the-dhaba
 */
import fs from "node:fs";
import path from "node:path";
import { hasUsableMapLocation, resolveMapQuery } from "../lib/brief-fields.mjs";
import { injectGoogleMap } from "../lib/map-embed.mjs";
import { root } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/map-sync.mjs <slug>");
  process.exit(1);
}

const briefPath = slugDir(slug, "brief.md");
const htmlPath = slugDir(slug, "index.html");

if (!fs.existsSync(briefPath)) {
  console.error(`Missing ${briefPath}`);
  process.exit(1);
}
if (!fs.existsSync(htmlPath)) {
  console.error(`Missing ${htmlPath}`);
  process.exit(1);
}

const brief = fs.readFileSync(briefPath, "utf8");
const address = resolveMapQuery(brief);
if (!hasUsableMapLocation(brief)) {
  console.error("No usable **Location:** or **Coordinates:** in brief.md — map embed skipped");
  process.exit(1);
}

const businessName = brief.match(/\*\*Name:\*\*\s*(.+)/i)?.[1]?.trim() || slug;
const html = fs.readFileSync(htmlPath, "utf8");
const result = injectGoogleMap(html, { address, businessName, brief });

fs.writeFileSync(htmlPath, result.html.startsWith("<!DOCTYPE") ? result.html : "<!DOCTYPE html>\n" + result.html, "utf8");
console.log(`Map synced for ${slug}: ${result.mapAddress} (${result.mapSource})`);
