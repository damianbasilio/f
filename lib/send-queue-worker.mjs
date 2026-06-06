/**
 * Background send queue worker — 45s spacing between sends.
 */
import { getSendDelayMs, delayBetweenSends, sendOutreachForSlug } from "./outreach-send.mjs";
import { popSendJob, markSendResult } from "./outreach-queues.mjs";

let running = false;
/** @type {string | null} */
let currentSlug = null;
/** @type {string | null} */
let currentBatch = null;

export function getSendWorkerStatus() {
  return {
    sendRunning: running,
    sendCurrentSlug: currentSlug,
    sendCurrentBatch: currentBatch,
  };
}

async function processOneSendJob() {
  const job = popSendJob();
  if (!job) return false;

  const { batchNum, slug } = job;
  currentSlug = slug;
  currentBatch = batchNum;

  try {
    const result = await sendOutreachForSlug(slug);
    if (result.ok) {
      markSendResult(batchNum, slug, { ok: true, sentAt: result.sentAt });
      console.log(`[send-worker] ✓ sent ${slug} → batch ${batchNum}`);
    } else {
      markSendResult(batchNum, slug, { ok: false, error: result.reason || result.result });
      console.error(`[send-worker] ✗ ${slug}: ${result.reason || result.result}`);
    }
  } catch (err) {
    markSendResult(batchNum, slug, { ok: false, error: err.message });
    console.error(`[send-worker] ✗ ${slug}: ${err.message}`);
  } finally {
    currentSlug = null;
    currentBatch = null;
  }
  return true;
}

async function workerLoop() {
  const delayMs = getSendDelayMs();
  let first = true;

  while (running) {
    const didWork = await processOneSendJob();
    if (!didWork) break;
    if (!first && delayMs > 0) {
      await delayBetweenSends(delayMs);
    }
    first = false;
  }
  running = false;
}

/** Start background worker if idle (non-blocking). */
export function kickSendWorker() {
  if (running) return;
  running = true;
  workerLoop().catch((err) => {
    console.error("[send-worker] loop error:", err.message);
    running = false;
  });
}
