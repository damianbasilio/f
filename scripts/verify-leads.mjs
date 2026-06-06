/**
 * Verify leads have no owned website on Facebook profile.
 * Usage: node scripts/verify-leads.mjs <slug...|--file slugs.txt>
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "../lib/load-env.mjs";
import { parseSlugs } from "../lib/slugs.mjs";
import { verifyAndScrapeFacebook } from "../lib/facebook-verify.mjs";
import { slugDir } from "../lib/paths.mjs";

const slugs = parseSlugs(process.argv, 2);
if (slugs.length === 0) {
  console.error("Usage: node scripts/verify-leads.mjs <slug...|--file slugs.txt>");
  process.exit(1);
}

for (const slug of slugs) {
  const leadPath = slugDir(slug, "lead.json");
  if (!fs.existsSync(leadPath)) {
    console.error(`✗ ${slug}: missing lead.json`);
    continue;
  }
  const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
  const assetsDir = slugDir(slug, "assets");
  console.log(`\n── ${slug} ──`);
  const result = await verifyAndScrapeFacebook(lead.facebook || lead.url, lead, slug, assetsDir);
  fs.writeFileSync(slugDir(slug, "verification.json"), JSON.stringify(result, null, 2) + "\n", "utf8");
  console.log(`  ${result.status.toUpperCase()} — ${result.reason}`);
  if (result.fbWebsiteUrl) console.log(`  FB website: ${result.fbWebsiteUrl} (${result.fbWebsiteClass})`);
}
