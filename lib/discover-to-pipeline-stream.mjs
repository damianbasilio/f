/**
 * Discover (batch Places + batch SERP) then stream each candidate:
 * verify → import → stitch → post-build → review — no batch wait after SERP.
 */
import fs from "node:fs";
import path from "node:path";
import { loadEnv, root } from "./load-env.mjs";
import { runDiscover } from "./discover/discover-run-core.mjs";
import { verifyDiscoverCandidate } from "./discover/verify-candidate.mjs";
import { createBatchImportState } from "./import-one-lead.mjs";
import { createBatchPipelineStatus } from "./batch-pipeline-status.mjs";
import { createSlugPipelineQueue, logPipelineQueueStart } from "./slug-pipeline-queue.mjs";
import { createWorkQueue } from "./work-queue.mjs";
import { resetBatchDedup } from "./outreach-email-fb.mjs";
import { drainGroqQueue } from "./groq-draft-worker.mjs";
import { ensureFbLeadRegistry } from "./fb-lead-registry.mjs";

function requireDiscoverKeys(dryRun) {
  if (dryRun) return;
  if (!process.env.GOOGLE_PLACES_API_KEY) {
    throw new Error("Missing GOOGLE_PLACES_API_KEY in .env");
  }
  if (!process.env.DATAFORSEO_LOGIN || !process.env.DATAFORSEO_PASSWORD) {
    throw new Error("Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD in .env");
  }
}

/**
 * @param {object} opts
 */
export async function runDiscoverToPipelineStream(opts = {}) {
  loadEnv();
  resetBatchDedup();
  ensureFbLeadRegistry();
  requireDiscoverKeys(opts.dryRun);

  const batchNum = opts.batchNum ?? Date.now();
  const skipStitch = opts.skipStitch ?? false;
  const skipActivity = opts.skipActivity ?? false;

  const importState = createBatchImportState(batchNum);
  const batchStatus = createBatchPipelineStatus(batchNum);

  const verifyConcurrency = Math.max(
    1,
    Number(process.env.DISCOVER_VERIFY_CONCURRENCY) ||
      Number(process.env.PIPELINE_CONCURRENCY) ||
      2
  );

  const pipelineQueue = createSlugPipelineQueue({
    batchNum,
    skipStitch,
    recordSlugResult: batchStatus.recordSlugResult,
    recordPoolFailure: batchStatus.recordPoolFailure,
    recordStitchRetry: batchStatus.recordStitchRetry,
  });

  const streamStats = {
    candidates: 0,
    verified: 0,
    imported: 0,
    verifySkipped: 0,
    duplicates: 0,
  };

  /** @type {object[]} */
  const verifiedLeads = [];

  console.log(`\n${"═".repeat(60)}`);
  console.log(`  1/2 — Discover (Places + batch SERP) — batch ${batchNum}`);
  console.log(`  2/2 — Per-lead pipeline (GBP Facebook now; SERP leads as results arrive)`);
  console.log(`       verify → import → stitch → post-build → review`);
  console.log(`${"═".repeat(60)}\n`);

  logPipelineQueueStart(pipelineQueue);

  const verifyQueue = createWorkQueue({
    concurrency: verifyConcurrency,
    worker: async (candidate) => {
      streamStats.candidates += 1;
      const name = candidate.name || "unknown";
      console.log(`\n  ↳ verify ${name}…`);

      const outcome = await verifyDiscoverCandidate(candidate, { skipActivity });
      if (!outcome.ok) {
        streamStats.verifySkipped += 1;
        console.log(`    ○ skip — ${outcome.reason}`);
        return;
      }

      streamStats.verified += 1;
      verifiedLeads.push(outcome.lead);

      const { slug, duplicate } = importState.importOne(outcome.lead);
      if (duplicate) {
        streamStats.duplicates += 1;
        console.log(`    ○ duplicate — already ${slug}`);
        return;
      }

      streamStats.imported += 1;
      console.log(`    ✓ imported ${slug} → pipeline queue`);
      pipelineQueue.enqueue(slug);
    },
  });

  const discoverResult = await runDiscover({
    dryRun: opts.dryRun,
    noShuffle: opts.noShuffle,
    queriesFile: opts.queriesFile,
    maxSearches: opts.maxSearches,
    serpBudgetUsd: opts.serpBudgetUsd,
    onCandidate: (candidate) => {
      verifyQueue.push(candidate);
    },
  });

  await verifyQueue.close();
  await verifyQueue.drain();

  pipelineQueue.close();
  await pipelineQueue.drain();

  const outputDir = path.join(root, "data", "discover", "output");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  if (verifiedLeads.length) {
    const verifiedPath = path.join(outputDir, `verified-${timestamp}.json`);
    fs.writeFileSync(verifiedPath, JSON.stringify(verifiedLeads, null, 2) + "\n", "utf8");
    importState.finalize(verifiedPath);
    console.log(`\n  Verified export → ${path.relative(root, verifiedPath)}`);
  } else {
    importState.finalize(null);
  }

  batchStatus.save();

  if (!opts.dryRun && !process.env.FB_PIPELINE_SPAWNED) {
    console.log("\n  Finishing outreach drafts (Groq queue)…");
    await drainGroqQueue();
  }

  const { status } = batchStatus;
  console.log(`\n── Batch ${batchNum} complete ──`);
  console.log(`  Discover candidates: ${streamStats.candidates}`);
  console.log(
    `  Verified + imported: ${streamStats.imported} (${streamStats.verifySkipped} skipped, ${streamStats.duplicates} duplicates)`
  );
  const retryCount = status.retry?.length || 0;
  console.log(
    `  Pipeline passed: ${status.passed.length} | skipped: ${status.skipped.length} | failed: ${status.failed.length}` +
      (retryCount ? ` | stitch retry: ${retryCount}` : "")
  );
  console.log(`  Status: data/batches/batch-${batchNum}/status.json`);
  console.log(`  Review: data/batches/batch-${batchNum}/queues.json`);
  console.log(`\n→ Open http://localhost:3456 to review and approve emails.\n`);

  return { batchNum, discoverResult, streamStats, status };
}
