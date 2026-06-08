/**
 * Mexico City scheduling helpers for the outreach pipeline.
 */
import { loadEnv } from "./load-env.mjs";

export const DEFAULT_TZ = "America/Mexico_City";

export function getPipelineTimezone() {
  loadEnv();
  return process.env.PIPELINE_TIMEZONE?.trim() || DEFAULT_TZ;
}

/** @returns {Date} */
function nowInTz(tz = getPipelineTimezone()) {
  return new Date(new Date().toLocaleString("en-US", { timeZone: tz }));
}

/**
 * Send window: 8:00 AM inclusive through 11:59:59 AM (12:00 PM exclusive).
 */
export function isWithinSendWindow(now = new Date()) {
  const local = new Date(now.toLocaleString("en-US", { timeZone: getPipelineTimezone() }));
  const hour = local.getHours();
  return hour >= 8 && hour < 12;
}

/**
 * Ms until 8:00 AM send start today (pipeline timezone). Returns 0 if already past 8 AM.
 */
export function msUntilMorningSendStart(now = new Date()) {
  const tz = getPipelineTimezone();
  const local = new Date(now.toLocaleString("en-US", { timeZone: tz }));
  if (local.getHours() >= 8) return 0;

  const target = new Date(local);
  target.setHours(8, 0, 0, 0);

  const utcNow = now.getTime();
  const offsetMs = utcNow - local.getTime();
  return Math.max(0, target.getTime() + offsetMs - utcNow);
}

/**
 * SERP batch deadline: poll until 8 AM when discover runs in the morning window (6–8 AM),
 * otherwise use DISCOVER_SERP_BATCH_TIMEOUT_MS (default 2 hours).
 */
export function resolveSerpBatchDeadlineMs(submittedAt = Date.now()) {
  loadEnv();
  const fixedMs = Number(process.env.DISCOVER_SERP_BATCH_TIMEOUT_MS) || 7_200_000;
  const untilSend = msUntilMorningSendStart(new Date(submittedAt));
  if (untilSend > 0) return submittedAt + untilSend;
  return submittedAt + fixedMs;
}

/**
 * Milliseconds until the next 8:00 AM send window in pipeline timezone.
 */
export function msUntilNextSendWindow(now = new Date()) {
  const tz = getPipelineTimezone();
  const local = new Date(now.toLocaleString("en-US", { timeZone: tz }));
  const next = new Date(local);
  next.setHours(8, 0, 0, 0);

  if (local.getHours() >= 8 && local.getHours() < 12) {
    return 0;
  }
  if (local.getHours() >= 12) {
    next.setDate(next.getDate() + 1);
  }

  const utcNow = now.getTime();
  const offsetMs = utcNow - local.getTime();
  return Math.max(0, next.getTime() + offsetMs - utcNow);
}

export function formatLocalTime(now = new Date()) {
  return now.toLocaleString("en-US", {
    timeZone: getPipelineTimezone(),
    dateStyle: "medium",
    timeStyle: "short",
  });
}
