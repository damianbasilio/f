/**
 * Background send queue worker — scheduled 8 AM–12 PM with configurable spacing.
 */
import { fileURLToPath } from "node:url";
import {
  getSendDelayMs,
  delayBetweenSends,
  isAlreadySent,
  checkOutreachQa,
  checkLiveMockup,
  sendEmail,
  markSent,
} from "./outreach-send.mjs";
import { parseOutreachMd, hasOutreachSignature } from "./parse-outreach.mjs";
import { syncSlugPipelineStatus } from "./status-sync.mjs";
import { popSendJob, markSendResult, requeueSend, loadQueues, listBatchesWithQueues } from "./outreach-queues.mjs";
import { setLeadTimestamp } from "./lead-timestamps.mjs";
import { isWithinSendWindow, msUntilNextSendWindow, formatLocalTime } from "./schedule-time.mjs";

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
    withinSendWindow: isWithinSendWindow(),
  };
}

export function getSendWindowStatus() {
  const within = isWithinSendWindow();
  let pending = 0;
  for (const batchNum of listBatchesWithQueues()) {
    pending += loadQueues(batchNum).sendQueue.length;
  }
  return {
    withinSendWindow: within,
    localTime: formatLocalTime(),
    pendingSends: pending,
    msUntilNextWindow: within ? 0 : msUntilNextSendWindow(),
  };
}

/**
 * Send one slug with full QA/live-check pipeline; capture Gmail messageId for logging.
 */
async function sendSlugWithLogging(batchNum, slug) {
  let parsed;
  try {
    parsed = parseOutreachMd(slug);
  } catch (err) {
    return { ok: false, reason: err.message };
  }

  if (isAlreadySent(slug)) {
    return { ok: false, reason: "already sent" };
  }

  const qa = checkOutreachQa(slug);
  if (!qa.ok) {
    const tail = (qa.stdout + qa.stderr).split("\n").filter((l) => l.includes("✗")).slice(0, 3).join("; ");
    return { ok: false, reason: tail || "qa:check --outreach failed" };
  }

  const live = await checkLiveMockup(parsed.mockupUrl);
  if (!live.ok) {
    const detail = live.error || `HTTP ${live.status}`;
    return {
      ok: false,
      reason: `mockup not live at ${parsed.mockupUrl} (${detail})`,
    };
  }

  if (!hasOutreachSignature(parsed.text)) {
    return { ok: false, reason: "email body missing signature block before send" };
  }

  try {
    const info = await sendEmail({ to: parsed.to, subject: parsed.subject, text: parsed.text });
    const sentAt = markSent(slug);
    setLeadTimestamp(slug, "sentAt", sentAt);
    return {
      ok: true,
      sentAt,
      to: parsed.to,
      messageId: info.messageId || info.response || "",
    };
  } catch (err) {
    return { ok: false, reason: err.message };
  }
}

async function processOneSendJob() {
  const job = popSendJob();
  if (!job) return false;

  const { batchNum, slug } = job;
  currentSlug = slug;
  currentBatch = batchNum;

  try {
    let result = await sendSlugWithLogging(batchNum, slug);
    if (!result.ok) {
      let reason = result.reason;
      if (/status\.md:.*not done/i.test(reason)) {
        syncSlugPipelineStatus(slug);
        result = await sendSlugWithLogging(batchNum, slug);
        reason = result.reason;
      }
    }

    if (result.ok) {
      markSendResult(batchNum, slug, { ok: true, sentAt: result.sentAt });
      console.log(
        `[send-worker] ${new Date().toISOString()} sent slug=${slug} to=${result.to} messageId=${result.messageId}`
      );
    } else {
      markSendResult(batchNum, slug, { ok: false, error: result.reason });
      console.error(`[send-worker] ✗ ${slug}: ${result.reason}`);
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

/**
 * Scheduled send loop — only runs inside 8 AM–12 PM window; pauses at noon.
 */
export async function runScheduledSendQueue() {
  if (!isWithinSendWindow()) {
    const status = getSendWindowStatus();
    console.log(
      `[send-worker] outside send window (local ${status.localTime}) — ${status.pendingSends} queued, resumes in ~${Math.round(status.msUntilNextWindow / 60_000)} min`
    );
    return { sent: 0, paused: true, reason: "outside_window" };
  }

  const delayMs = getSendDelayMs();
  let sent = 0;
  let first = true;

  console.log(`[send-worker] starting scheduled send window (delay=${delayMs}ms)`);

  while (isWithinSendWindow()) {
    const job = popSendJob();
    if (!job) break;

    const { batchNum, slug } = job;

    if (!isWithinSendWindow()) {
      try {
        requeueSend(batchNum, slug);
        console.log(`[send-worker] requeued ${slug} — send window closed before send`);
      } catch {
        /* sending state may need manual reconcile */
      }
      break;
    }
    currentSlug = slug;
    currentBatch = batchNum;

    try {
      let result = await sendSlugWithLogging(batchNum, slug);
      if (!result.ok && /status\.md:.*not done/i.test(result.reason || "")) {
        syncSlugPipelineStatus(slug);
        result = await sendSlugWithLogging(batchNum, slug);
      }

      if (!isWithinSendWindow()) {
        if (!result.ok) {
          try {
            requeueSend(batchNum, slug);
            console.log(`[send-worker] requeued ${slug} — send window closed`);
          } catch {
            /* already sent or not approvable */
          }
        }
        break;
      }

      if (result.ok) {
        markSendResult(batchNum, slug, { ok: true, sentAt: result.sentAt });
        sent += 1;
        console.log(
          `[send-worker] ${new Date().toISOString()} sent slug=${slug} to=${result.to} messageId=${result.messageId}`
        );
      } else {
        markSendResult(batchNum, slug, { ok: false, error: result.reason });
        console.error(`[send-worker] ✗ ${slug}: ${result.reason}`);
      }
    } catch (err) {
      markSendResult(batchNum, slug, { ok: false, error: err.message });
      console.error(`[send-worker] ✗ ${slug}: ${err.message}`);
    } finally {
      currentSlug = null;
      currentBatch = null;
    }

    if (!isWithinSendWindow()) break;

    const hasMore = listBatchesWithQueues().some((b) => loadQueues(b).sendQueue.length > 0);
    if (!hasMore) break;

    if (!first && delayMs > 0) {
      await delayBetweenSends(delayMs);
    }
    first = false;
  }

  const remaining = getSendWindowStatus().pendingSends;
  if (remaining > 0 && !isWithinSendWindow()) {
    console.log(`[send-worker] paused at noon — ${remaining} emails remain for tomorrow`);
  } else {
    console.log(`[send-worker] window complete — sent=${sent} remaining=${remaining}`);
  }

  return { sent, paused: remaining > 0 && !isWithinSendWindow(), remaining };
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

/** Start background worker if idle (non-blocking) — used by UI server. */
export function kickSendWorker() {
  if (running) return;
  running = true;
  workerLoop().catch((err) => {
    console.error("[send-worker] loop error:", err.message);
    running = false;
  });
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isMain && process.argv.includes("--run")) {
  runScheduledSendQueue()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
}
