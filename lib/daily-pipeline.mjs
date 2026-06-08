/**
 * Autonomous daily outreach pipeline orchestrator.
 * PM2 entry point — registers node-cron schedules in Mexico City time.
 */
import fs from "node:fs";
import path from "node:path";
import cron from "node-cron";
import { fileURLToPath } from "node:url";
import { loadEnv } from "./load-env.mjs";
import { runDiscoverToPipelineStream } from "./discover-to-pipeline-stream.mjs";
import { drainGroqQueue } from "./groq-draft-worker.mjs";
import {
  approveReview,
  loadQueues,
  markGroqReady,
  getQueueSummary,
} from "./outreach-queues.mjs";
import { slugDir } from "./paths.mjs";
import { getPipelineTimezone, formatLocalTime } from "./schedule-time.mjs";
import { runGmailReplyCheck } from "./gmail-reply-checker.mjs";
import { runFollowupWorker } from "./followup-queue-worker.mjs";
import { runScheduledSendQueue } from "./send-queue-worker.mjs";

let jobRunning = false;

async function withJobLock(name, fn) {
  if (jobRunning) {
    console.warn(`[daily-pipeline] skip ${name} — prior job still running`);
    return null;
  }
  jobRunning = true;
  console.log(`\n[daily-pipeline] ▶ ${name} started at ${formatLocalTime()}`);
  try {
    return await fn();
  } catch (err) {
    console.error(`[daily-pipeline] ✗ ${name} failed:`, err.message);
    throw err;
  } finally {
    jobRunning = false;
    console.log(`[daily-pipeline] ■ ${name} finished at ${formatLocalTime()}\n`);
  }
}

/**
 * Auto-approve all ready review items in a batch.
 */
export function autoApproveBatch(batchNum) {
  const data = loadQueues(batchNum);

  for (const item of data.review) {
    if (item.status === "drafting" && fs.existsSync(slugDir(item.slug, "outreach.md"))) {
      markGroqReady(batchNum, item.slug);
      item.status = "ready";
    }
  }

  let approved = 0;
  let failures = 0;

  for (const item of loadQueues(batchNum).review) {
    if (item.status !== "ready") continue;
    try {
      approveReview(batchNum, item.slug);
      approved += 1;
      console.log(`  ✓ auto-approved ${item.slug}`);
    } catch (err) {
      failures += 1;
      console.log(`  ✗ auto-approve ${item.slug}: ${err.message}`);
    }
  }

  const summary = getQueueSummary(batchNum);
  return { approved, failures, queued: summary.sendQueued + summary.sendPending };
}

/**
 * Phase 1: 6 AM — discover, import, draft, auto-approve, queue.
 */
export async function runMorningPipeline() {
  loadEnv();
  const batchNum = Date.now();
  const maxSearches = Number(process.env.PIPELINE_MAX_SEARCHES) || 30;

  const result = await runDiscoverToPipelineStream({
    maxSearches,
    batchNum,
  });

  await drainGroqQueue();

  const { approved, failures, queued } = autoApproveBatch(batchNum);
  const imported = result.streamStats?.imported ?? 0;

  console.log(
    `[morning-pipeline] batch=${batchNum} imported=${imported} approved=${approved} queued=${queued} failures=${failures}`
  );

  return { batchNum, imported, approved, queued, failures };
}

/**
 * Phase 2+3: 8 AM — reply check, follow-ups, send queue (8 AM–12 PM window).
 */
export async function runEightAmJobs() {
  await runGmailReplyCheck();
  await runFollowupWorker({ skipReplyCheck: true });
  await runScheduledSendQueue();
}

function startScheduler() {
  loadEnv();
  const tz = getPipelineTimezone();

  const morning = cron.schedule(
    "0 6 * * *",
    () => {
      withJobLock("morning-pipeline", runMorningPipeline).catch(() => {});
    },
    { timezone: tz }
  );

  const eightAm = cron.schedule(
    "0 8 * * *",
    () => {
      withJobLock("eight-am-jobs", runEightAmJobs).catch(() => {});
    },
    { timezone: tz }
  );

  morning.start();
  eightAm.start();

  console.log(`[daily-pipeline] scheduler active (${tz})`);
  console.log("  6:00 AM — discover, import, draft, auto-approve, queue");
  console.log("  8:00 AM — reply check, follow-ups, send queue (8 AM–12 PM)");
  console.log(`  local time now: ${formatLocalTime()}`);
}

const selfPath = fileURLToPath(import.meta.url);
const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(selfPath);

if (isMain) {
  const args = process.argv.slice(2);

  if (args.includes("--once-morning")) {
    runMorningPipeline()
      .then(() => process.exit(0))
      .catch(() => process.exit(1));
  } else if (args.includes("--once-eight-am")) {
    runEightAmJobs()
      .then(() => process.exit(0))
      .catch(() => process.exit(1));
  } else {
    startScheduler();
    setInterval(() => {}, 60_000);
  }
}
