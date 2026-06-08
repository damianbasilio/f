/**
 * Background worker — full rebuild when outreach/send QA fails.
 */
import { postBuildQueue } from "./post-build-queue.mjs";
import { rebuildSlugFromStitch } from "./rebuild-from-stitch.mjs";
import { queueEmailRedraftAfterRebuild, resetLeadQueuesForRetry } from "./outreach-queues.mjs";
import { kickGroqDraftWorker } from "./groq-draft-worker.mjs";
import { isSlugSent } from "./outreach-send.mjs";
import {
  readQaRebuildAttempts,
  writeQaRebuildAttempts,
  getMaxQaAutoRebuildAttempts,
  isQaAutoRebuildEnabled,
} from "./qa-rebuild-attempts.mjs";

/** @type {{ slug: string, batchNum: string, reason: string }[]} */
const pending = [];
/** @type {Map<string, { running: boolean, error?: string, startedAt?: string, finishedAt?: string }>} */
const statusBySlug = new Map();

let running = false;

export function isQaRelatedFailure(reason) {
  if (!reason) return false;
  if (/status\.md:.*not done/i.test(reason)) return false;
  return /qa:check|qa-check|design-qa|placeholder|prefers-reduced-motion|duplicate img|stock\/placeholder|issue\(s\) total/i.test(
    reason
  );
}

export function getQaRebuildStatus() {
  return {
    qaRebuildRunning: running,
    qaRebuilds: Object.fromEntries(statusBySlug.entries()),
    qaRebuildPending: pending.length,
  };
}

export function scheduleOutreachQaAutoRebuild(batchNum, slug, reason) {
  if (!isQaAutoRebuildEnabled() || !isQaRelatedFailure(reason)) return false;
  if (isSlugSent(slug)) return false;
  if (pending.some((j) => j.slug === slug) || statusBySlug.get(slug)?.running) return false;

  pending.push({ slug, batchNum: String(batchNum), reason });
  kickQaAutoRebuildWorker();
  return true;
}

export function kickQaAutoRebuildWorker() {
  if (running) return;
  running = true;
  workerLoop().catch((err) => {
    console.error("[qa-auto-rebuild] loop error:", err.message);
    running = false;
  });
}

async function workerLoop() {
  while (pending.length) {
    const job = pending.shift();
    if (!job) break;

    const { slug, batchNum, reason } = job;
    if (isSlugSent(slug)) continue;

    statusBySlug.set(slug, { running: true, startedAt: new Date().toISOString() });
    console.log(`\n[qa-auto-rebuild] ↻ ${slug} — send QA failed: ${reason}`);

    try {
      await runOutreachQaAutoRebuild(slug, batchNum, reason);
      statusBySlug.set(slug, { running: false, finishedAt: new Date().toISOString() });
    } catch (err) {
      statusBySlug.set(slug, { running: false, error: err.message });
      console.error(`[qa-auto-rebuild] ✗ ${slug}:`, err.message);
    }
  }
  running = false;
}

async function runOutreachQaAutoRebuild(slug, batchNum, reason) {
  resetLeadQueuesForRetry(batchNum, slug);

  const max = getMaxQaAutoRebuildAttempts();
  let attempts = readQaRebuildAttempts(slug);
  let result = null;

  while (attempts < max) {
    attempts++;
    writeQaRebuildAttempts(slug, attempts, { reason });
    console.log(`[qa-auto-rebuild]   stitch rebuild ${attempts}/${max}`);

    await rebuildSlugFromStitch(slug, { clearOutreach: true });
    result = await postBuildQueue(slug, {
      outreach: true,
      forceDeploy: true,
      skipAutoRebuild: true,
      batchNum,
    });

    if (result.ok) break;
    reason = result.blockers?.[0]?.message || reason;
  }

  const deployed = result?.summary?.deploy === "live" || result?.summary?.deploy === "pushed";
  if (!result?.ok && !deployed) {
    throw new Error(result?.blockers?.[0]?.message || "QA still failing after auto-rebuild");
  }

  queueEmailRedraftAfterRebuild(batchNum, slug);
  kickGroqDraftWorker();
  console.log(`[qa-auto-rebuild]   ✓ rebuilt and re-queued email draft for ${slug}`);
}
