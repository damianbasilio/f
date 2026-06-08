/**
 * Main Facebook leads pipeline orchestrator.
 * Each slug flows verify → enrich → stitch → post-build → review without waiting for the batch.
 * Usage: node scripts/pipeline-fb-run.mjs <slugs.txt|slug...> [--batch N] [--skip-stitch]
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, getStitchApiKeys, getPipelineConcurrency } from "../lib/load-env.mjs";
import { parseSlugs } from "../lib/slugs.mjs";
import { runPool, logPoolStart } from "../lib/stitch-pool.mjs";
import { runConcurrentPool } from "../lib/concurrent-pool.mjs";
import { runSlugPipeline } from "../lib/pipeline-slug.mjs";
import { createBatchPipelineStatus } from "../lib/batch-pipeline-status.mjs";
import { resetBatchDedup } from "../lib/outreach-email-fb.mjs";
import { drainGroqQueue } from "../lib/groq-draft-worker.mjs";
import { ensureFbLeadRegistry } from "../lib/fb-lead-registry.mjs";

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
ensureFbLeadRegistry();

const { status, recordSlugResult, recordPoolFailure, save } = createBatchPipelineStatus(batchNum);

console.log(
  `\nFacebook Leads pipeline — batch ${batchNum} (${slugs.length} slug(s), per-slug streaming)\n`
);

const stitchEnabled = !skipStitch && getStitchApiKeys().length > 0;
let poolResults;

if (stitchEnabled) {
  logPoolStart(slugs);
  console.log("Each worker: verify → enrich → stitch → post-build → review (no batch wait between steps).\n");
  poolResults = await runPool(slugs, async (slug, worker) => {
    const result = await runSlugPipeline(slug, worker, { batchNum, skipStitch });
    recordSlugResult(slug, result);
    return result;
  });
} else {
  if (slugs.length && !skipStitch) {
    console.log("\n○ Stitch skipped — no STITCH_API_KEY in .env (use --skip-stitch to silence)");
  }
  const concurrency = getPipelineConcurrency(slugs.length);
  console.log(`Preflight pool: ${concurrency} concurrent worker(s), ${slugs.length} slug(s).\n`);
  poolResults = await runConcurrentPool(
    slugs,
    async (slug) => {
      const result = await runSlugPipeline(slug, null, { batchNum, skipStitch: true });
      recordSlugResult(slug, result);
      return result;
    },
    { concurrency }
  );
}

for (const br of poolResults) {
  if (br.ok) continue;
  recordPoolFailure(br.slug, br.error?.message);
}

save();

if (!process.env.FB_PIPELINE_SPAWNED) {
  console.log("\n  Finishing outreach drafts (Groq queue)…");
  await drainGroqQueue();
}

console.log(`\n── Batch ${batchNum} complete ──`);
const retryCount = status.retry?.length || 0;
console.log(
  `  Passed: ${status.passed.length} | Skipped: ${status.skipped.length} | Failed: ${status.failed.length}` +
    (retryCount ? ` | Stitch retry: ${retryCount}` : "")
);
console.log(`  Status: data/batches/batch-${batchNum}/status.json`);
console.log(`  Review: data/batches/batch-${batchNum}/queues.json`);
console.log(`\n→ Open http://localhost:3456 to review and approve emails one at a time.`);
