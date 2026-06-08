/**
 * FB-verify discovery candidates and export import-ready JSON (with emails).
 * Usage: node scripts/discover-verify-export.mjs <candidates.json>
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, root } from "../lib/load-env.mjs";
import { verifyAndScrapeFacebook } from "../lib/facebook-verify.mjs";
import { toImportLead } from "../lib/discover/normalize-lead.mjs";
import { validateLead } from "../lib/lead-import.mjs";
import { deriveSlug } from "../lib/lead-import.mjs";
import { assessFacebookActivityFromVerify } from "../lib/discover/fb-recent-activity.mjs";

loadEnv();

const skipActivity = process.argv.includes("--skip-activity");
const maxPostAgeMonths = Number(process.env.DISCOVER_FB_MAX_POST_AGE_MONTHS) || 12;

const fileArg = process.argv[2];
if (!fileArg) {
  console.error("Usage: node scripts/discover-verify-export.mjs <candidates.json>");
  process.exit(1);
}

const inputPath = path.isAbsolute(fileArg) ? fileArg : path.join(root, fileArg);
if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

const candidates = JSON.parse(fs.readFileSync(inputPath, "utf8"));
if (!Array.isArray(candidates)) {
  console.error("Expected JSON array of candidates");
  process.exit(1);
}

/** @type {object[]} */
const verified = [];
/** @type {object[]} */
const skipped = [];
/** @type {object[]} */
const failed = [];

console.log(`\nDiscover verify-export — ${candidates.length} candidate(s)`);
if (!skipActivity) {
  console.log(`  Activity filter: posts within ${maxPostAgeMonths} months (use --skip-activity to disable)\n`);
} else {
  console.log(`  Activity filter: disabled\n`);
}

for (const candidate of candidates) {
  const name = candidate.name || "unknown";
  const fbUrl = candidate.facebook || candidate.url;

  if (!fbUrl || !/facebook\.com/i.test(fbUrl)) {
    skipped.push({ name, reason: "no_facebook_url" });
    console.log(`  ○ SKIP ${name} — no Facebook URL`);
    continue;
  }

  const slug = deriveSlug(name, candidate.city || "");
  const assetsDir = path.join(root, "data", "discover", "output", ".verify-tmp", slug);
  fs.mkdirSync(assetsDir, { recursive: true });

  console.log(`  → ${name}…`);
  const result = await verifyAndScrapeFacebook(fbUrl, candidate, slug, assetsDir);

  if (result.status === "skip") {
    skipped.push({ name, reason: result.reason, fbWebsiteUrl: result.fbWebsiteUrl });
    console.log(`    ○ SKIP — ${result.reason}${result.fbWebsiteUrl ? ` (${result.fbWebsiteUrl})` : ""}`);
    continue;
  }

  if (result.status === "error") {
    failed.push({ name, reason: result.error || "verify_error" });
    console.log(`    ✗ ERROR — ${result.error}`);
    continue;
  }

  const email =
    result.profileAbout?.email ||
    result.pageData?.email ||
    candidate.emails ||
    "";

  if (!email || !String(email).includes("@")) {
    skipped.push({ name, reason: "no_email_on_facebook" });
    console.log(`    ○ SKIP — no email on Facebook profile`);
    continue;
  }

  if (!skipActivity) {
    const activity = assessFacebookActivityFromVerify(result, maxPostAgeMonths);
    if (!activity.active) {
      skipped.push({
        name,
        reason: `inactive_fb_${activity.reason}`,
        newestPostAt: activity.newestPostAt,
      });
      console.log(`    ○ SKIP — inactive (${activity.reason})`);
      continue;
    }
  }

  const enriched = {
    ...toImportLead(candidate),
    emails: String(email).trim(),
    facebook: fbUrl,
    url: fbUrl,
    phone_number:
      candidate.phone_number ||
      result.profileAbout?.phone ||
      result.pageData?.phone ||
      "",
  };

  if (result.profileAbout?.address && !enriched.street) {
    enriched.street = result.profileAbout.address.split(",")[0]?.trim() || enriched.street;
  }

  try {
    validateLead(enriched, verified.length);
    verified.push(enriched);
    const deadSite =
      result.reason === "fb_website_owned_but_dead" && result.fbWebsiteUrl
        ? ` — stale site ${result.fbWebsiteUrl}`
        : "";
    console.log(`    ✓ PASS — ${email}${deadSite}`);
  } catch (err) {
    skipped.push({ name, reason: err.message });
    console.log(`    ○ SKIP — ${err.message}`);
  }
}

const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const outputDir = path.join(root, "data", "discover", "output");
fs.mkdirSync(outputDir, { recursive: true });

const outPath = path.join(outputDir, `verified-${timestamp}.json`);
fs.writeFileSync(outPath, JSON.stringify(verified, null, 2) + "\n", "utf8");

const reportPath = path.join(outputDir, `verify-report-${timestamp}.json`);
fs.writeFileSync(
  reportPath,
  JSON.stringify(
    {
      input: path.relative(root, inputPath),
      verified: verified.length,
      skipped: skipped.length,
      failed: failed.length,
      skippedDetails: skipped,
      failedDetails: failed,
      output: path.relative(root, outPath),
      finishedAt: new Date().toISOString(),
    },
    null,
    2
  ) + "\n",
  "utf8"
);

console.log(`\n  Verified: ${verified.length} | Skipped: ${skipped.length} | Failed: ${failed.length}`);
console.log(`  Import-ready → ${path.relative(root, outPath)}`);
console.log(`  Report → ${path.relative(root, reportPath)}\n`);
