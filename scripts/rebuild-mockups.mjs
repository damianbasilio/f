/**
 * Re-enrich leads, Stitch rebuild, post-build + deploy — no outreach.
 * Usage: node scripts/rebuild-mockups.mjs <slug...|--file slugs.txt>
 */
import fs from "node:fs";
import { loadEnv } from "../lib/load-env.mjs";
import { parseSlugs } from "../lib/slugs.mjs";
import { slugDir } from "../lib/paths.mjs";
import { enrichLead } from "../lib/lead-enrichment.mjs";
import { buildSlug } from "../lib/stitch-build-one.mjs";
import { postBuildQueue } from "../lib/post-build-queue.mjs";
import { clearStitchBuildArtifacts } from "../lib/rebuild-mockup-one.mjs";
import { runPool, logPoolStart } from "../lib/stitch-pool.mjs";

loadEnv();

const slugs = (() => {
  const fileIdx = process.argv.indexOf("--file");
  if (fileIdx !== -1 && process.argv[fileIdx + 1]) {
    return parseSlugs(["", "", process.argv[fileIdx + 1]], 2);
  }
  return parseSlugs(process.argv.filter((a) => a !== "--file"), 2);
})();

if (!slugs.length) {
  console.error("Usage: node scripts/rebuild-mockups.mjs <slug...|--file slugs.txt>");
  process.exit(1);
}

console.log(`\nRebuild mockups — ${slugs.length} slug(s), no outreach\n`);

for (const slug of slugs) {
  const leadPath = slugDir(slug, "lead.json");
  const verifyPath = slugDir(slug, "verification.json");
  if (!fs.existsSync(leadPath) || !fs.existsSync(verifyPath)) {
    console.error(`  ✗ ${slug} — missing lead.json or verification.json`);
    process.exit(1);
  }

  console.log(`  ↻ re-enrich ${slug}`);
  const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
  const verify = JSON.parse(fs.readFileSync(verifyPath, "utf8"));
  await enrichLead(slug, lead, verify);

  clearStitchBuildArtifacts(slug);
  const brandPath = slugDir(slug, "stitch", "brand-extract.json");
  if (fs.existsSync(brandPath)) fs.unlinkSync(brandPath);
}

logPoolStart(slugs);
const results = await runPool(slugs, async (slug, worker) => {
  await buildSlug(slug, { ...worker, rebuild: true });
  return postBuildQueue(slug, { outreach: false });
});

console.log("\n── Rebuild summary ──");
for (const row of results) {
  if (row.ok) {
    const deploy = row.value?.summary?.deploy || "—";
    console.log(`  ✓ ${row.slug} (deploy: ${deploy})`);
  } else {
    console.log(`  ✗ ${row.slug}: ${row.error?.message || row.error}`);
  }
}

const failed = results.filter((r) => !r.ok);
process.exit(failed.length ? 1 : 0);
