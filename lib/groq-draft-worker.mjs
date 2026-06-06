/**
 * Background FIFO Groq draft worker (global groqQueue across batches).
 */
import fs from "node:fs";
import { buildFbOutreachCopy, writeOutreachMd } from "./outreach-email-fb.mjs";
import { popGroqJob, markGroqReady } from "./outreach-queues.mjs";
import { slugDir } from "./paths.mjs";

let running = false;
/** @type {string | null} */
let currentSlug = null;
/** @type {string | null} */
let currentBatch = null;

export function getGroqWorkerStatus() {
  return {
    groqRunning: running,
    groqCurrentSlug: currentSlug,
    groqCurrentBatch: currentBatch,
  };
}

async function processOneGroqJob() {
  const job = popGroqJob();
  if (!job) return false;

  const { batchNum, slug, attempt } = job;
  currentSlug = slug;
  currentBatch = batchNum;

  if (!fs.existsSync(slugDir(slug, "brief.md"))) {
    markGroqReady(batchNum, slug, { error: `missing brief.md for ${slug}` });
    console.warn(`[groq-worker] skipped ${slug} (no mockup data — stale queue entry?)`);
    currentSlug = null;
    currentBatch = null;
    return true;
  }

  try {
    const copy = await buildFbOutreachCopy(slug, attempt - 1);
    writeOutreachMd(slug, copy);
    markGroqReady(batchNum, slug);
    console.log(`[groq-worker] ✓ drafted ${slug} (batch ${batchNum}, attempt ${attempt})`);
  } catch (err) {
    markGroqReady(batchNum, slug, { error: err.message });
    console.error(`[groq-worker] ✗ ${slug}: ${err.message}`);
  } finally {
    currentSlug = null;
    currentBatch = null;
  }
  return true;
}

async function workerLoop() {
  while (running) {
    const didWork = await processOneGroqJob();
    if (!didWork) break;
  }
  running = false;
}

/** Start background worker if idle (non-blocking). */
export function kickGroqDraftWorker() {
  if (running) return;
  running = true;
  workerLoop().catch((err) => {
    console.error("[groq-worker] loop error:", err.message);
    running = false;
  });
}

/** Process all pending Groq jobs (blocking — for CLI pipeline). */
export async function drainGroqQueue() {
  while (await processOneGroqJob()) {
    /* sequential */
  }
}
