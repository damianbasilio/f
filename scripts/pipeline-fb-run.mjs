/**
 * Main Facebook leads pipeline orchestrator.
 * Usage: node scripts/pipeline-fb-run.mjs <slugs.txt|slug...> [--batch N] [--skip-stitch]
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { root, loadEnv, getStitchApiKeys } from "../lib/load-env.mjs";
import { parseSlugs } from "../lib/slugs.mjs";
import { verifyAndScrapeFacebook } from "../lib/facebook-verify.mjs";
import { enrichLead } from "../lib/lead-enrichment.mjs";
import { writeFbStitchPrompt } from "../lib/stitch-prompt-fb.mjs";
import { buildSlug } from "../lib/stitch-build-one.mjs";
import { runPool, logPoolStart } from "../lib/stitch-pool.mjs";
import { postBuildQueue } from "../lib/post-build-queue.mjs";
import { resetBatchDedup, buildFbOutreachCopy, writeOutreachMd } from "../lib/outreach-email-fb.mjs";
import { writeBatchSummary } from "../lib/pipeline-summary.mjs";
import { slugDir } from "../lib/paths.mjs";

const skipStitch = process.argv.includes("--skip-stitch");
const batchIdx = process.argv.indexOf("--batch");
const batchNum = batchIdx !== -1 && process.argv[batchIdx + 1] ? process.argv[batchIdx + 1] : Date.now();
const slugs = parseSlugs(process.argv.filter((a) => !["--skip-stitch", "--batch"].includes(a) && a !== process.argv[batchIdx + 1]), 2);

if (slugs.length === 0) {
  console.error("Usage: node scripts/pipeline-fb-run.mjs <slug...|slugs.txt> [--batch N] [--skip-stitch]");
  process.exit(1);
}

loadEnv();
resetBatchDedup();

const batchDir = path.join(root, "data", "batches", `batch-${batchNum}`);
fs.mkdirSync(batchDir, { recursive: true });

/** @type {object} */
const status = {
  batchId: batchNum,
  startedAt: new Date().toISOString(),
  slugs: {},
  passed: [],
  skipped: [],
  failed: [],
};

console.log(`\nFacebook Leads pipeline — batch ${batchNum} (${slugs.length} slug(s))\n`);

for (const slug of slugs) {
  console.log(`\n══ ${slug} ══`);
  const dir = slugDir(slug);
  const leadPath = path.join(dir, "lead.json");

  if (!fs.existsSync(leadPath)) {
    console.error(`  ✗ missing lead.json — run import-leads first`);
    status.failed.push(slug);
    status.slugs[slug] = { step: "import", status: "fail", reason: "missing lead.json" };
    continue;
  }

  const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
  const fbUrl = lead.facebook || lead.url;
  const assetsDir = path.join(dir, "assets");

  console.log(`  verifying Facebook profile…`);
  const verify = await verifyAndScrapeFacebook(fbUrl, lead, slug, assetsDir);

  fs.writeFileSync(path.join(dir, "verification.json"), JSON.stringify(verify, null, 2) + "\n", "utf8");

  if (verify.status === "skip") {
    console.log(`  ○ SKIP — ${verify.reason} (${verify.fbWebsiteUrl || "no url"})`);
    status.skipped.push(slug);
    status.slugs[slug] = { step: "verify", status: "skip", reason: verify.reason };
    continue;
  }

  if (verify.status === "error") {
    console.error(`  ✗ verify error: ${verify.error}`);
    status.failed.push(slug);
    status.slugs[slug] = { step: "verify", status: "fail", reason: verify.error };
    continue;
  }

  console.log(`  ✓ PASS — ${verify.reason}`);

  try {
    console.log(`  enriching brief…`);
    await enrichLead(slug, lead, verify);
    console.log(`  ✓ brief.md + prompt-input.json`);

    writeFbStitchPrompt(slug);
    console.log(`  ✓ stitch prompt`);
  } catch (err) {
    console.error(`  ✗ enrich/prompt: ${err.message}`);
    status.failed.push(slug);
    status.slugs[slug] = { step: "enrich", status: "fail", reason: err.message };
    continue;
  }

  status.passed.push(slug);
  status.slugs[slug] = { step: "enrich", status: "pass" };
}

const stitchSlugs = status.passed.filter((s) => !skipStitch);

if (stitchSlugs.length && getStitchApiKeys().length) {
  logPoolStart(stitchSlugs);
  const poolResults = await runPool(stitchSlugs, async (slug, worker) => {
    await buildSlug(slug, worker);
    return postBuildQueue(slug, { outreach: false });
  });

  for (const br of poolResults) {
    if (!br.ok) {
      status.slugs[br.slug] = { ...status.slugs[br.slug], stitch: "fail", error: br.error?.message };
      if (status.passed.includes(br.slug)) {
        status.passed = status.passed.filter((s) => s !== br.slug);
        status.failed.push(br.slug);
      }
    } else {
      status.slugs[br.slug] = {
        ...status.slugs[br.slug],
        stitch: "pass",
        postBuild: br.value?.ok ? "pass" : "fail",
        deploy: br.value?.summary?.deploy || "—",
      };
    }
  }

} else if (stitchSlugs.length) {
  console.log("\n○ Stitch skipped — no STITCH_API_KEY in .env (use --skip-stitch to silence)");
}

let draftCount = 0;

for (const slug of status.passed) {
  try {
    const copy = await buildFbOutreachCopy(slug, draftCount++);
    writeOutreachMd(slug, copy);
    console.log(`  ✓ outreach draft ${slug} (${copy.source || "groq"})`);
    status.slugs[slug] = { ...status.slugs[slug], outreach: "drafted" };
  } catch (err) {
    console.error(`  ✗ outreach ${slug}: ${err.message}`);
  }
}

status.finishedAt = new Date().toISOString();
fs.writeFileSync(path.join(batchDir, "status.json"), JSON.stringify(status, null, 2) + "\n", "utf8");

const reportScript = path.join(path.dirname(fileURLToPath(import.meta.url)), "outreach-report.mjs");
spawnSync(process.execPath, [reportScript, "--batch", String(batchNum)], { cwd: root, stdio: "inherit" });

spawnSync(process.execPath, [path.join(path.dirname(fileURLToPath(import.meta.url)), "hub-sync.mjs")], {
  cwd: root,
  stdio: "inherit",
});

console.log(`\n── Batch ${batchNum} complete ──`);
console.log(`  Passed: ${status.passed.length} | Skipped: ${status.skipped.length} | Failed: ${status.failed.length}`);
console.log(`  Status: data/batches/batch-${batchNum}/status.json`);
console.log(`  Report: outreach-report-${batchNum}.md`);
console.log(`\n→ Review outreach-report-${batchNum}.md before: npm run outreach:send -- --file data/batches/batch-${batchNum}/approved.txt --send`);
