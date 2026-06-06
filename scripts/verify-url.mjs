/**
 * Verify a Facebook profile URL without importing a lead slug.
 * Usage: node scripts/verify-url.mjs <facebook-url> [business-name]
 */
import fs from "node:fs";
import path from "node:path";
import { verifyAndScrapeFacebook } from "../lib/facebook-verify.mjs";
import { root } from "../lib/load-env.mjs";

const facebookUrl = process.argv[2];
const businessName = process.argv[3] || "Unknown business";

if (!facebookUrl) {
  console.error("Usage: node scripts/verify-url.mjs <facebook-url> [business-name]");
  process.exit(1);
}

const slug =
  "verify-" +
  businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);

const outDir = path.join(root, "data", "verify-runs", slug);
const assetsDir = path.join(outDir, "assets");
fs.mkdirSync(assetsDir, { recursive: true });

const lead = { name: businessName, facebook: facebookUrl, url: facebookUrl };

console.log(`Verifying: ${facebookUrl}\n`);

const result = await verifyAndScrapeFacebook(facebookUrl, lead, slug, assetsDir);
fs.writeFileSync(path.join(outDir, "verification.json"), JSON.stringify(result, null, 2) + "\n");

console.log(`Status:         ${result.status.toUpperCase()}`);
console.log(`Reason:         ${result.reason}`);
console.log(`FB website:     ${result.fbWebsiteUrl || "(none)"}`);
console.log(`Classification: ${result.fbWebsiteClass}`);

if (result.postCaptions?.length) {
  console.log(`Posts scraped:  ${result.postCaptions.length}`);
}
console.log(`Images found:   ${result.postImages?.length ?? 0}`);
console.log(`About fields:   ${Object.keys(result.profileAbout || {}).join(", ") || "(none)"}`);
if (result.profileSummary) {
  console.log(`\nProfile summary (${result.profileSummary.length} chars):`);
  console.log(result.profileSummary.slice(0, 500) + (result.profileSummary.length > 500 ? "…" : ""));
}

if (result.error) console.log(`\nError: ${result.error}`);

console.log(`\nSaved: data/verify-runs/${slug}/verification.json`);
