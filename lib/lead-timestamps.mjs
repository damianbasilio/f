/**
 * Lead timestamp fields on preview/{slug}/lead.json:
 * sentAt, repliedAt, followUp1SentAt, status (e.g. "dead")
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { mockupsRoot, slugDir } from "./paths.mjs";
import { isSlugSent } from "./outreach-send.mjs";
import { loadQueues, listBatchesWithQueues } from "./outreach-queues.mjs";
import { getPipelineTimezone } from "./schedule-time.mjs";

function leadPath(slug) {
  return slugDir(slug, "lead.json");
}

export function readLead(slug) {
  const p = leadPath(slug);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

export function updateLead(slug, patch) {
  const p = leadPath(slug);
  if (!fs.existsSync(p)) {
    throw new Error(`Missing lead.json for ${slug}`);
  }
  const lead = readLead(slug) || {};
  const next = { ...lead, ...patch };
  const tmp = `${p}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(next, null, 2) + "\n", "utf8");
  fs.renameSync(tmp, p);
  return next;
}

export function setLeadTimestamp(slug, field, iso) {
  return updateLead(slug, { [field]: iso });
}

export function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase()
    .replace(/^<|>$/g, "");
}

/** Extract bare email from a From header value. */
export function parseEmailFromHeader(from) {
  const raw = String(from || "").trim();
  const angle = raw.match(/<([^>]+)>/);
  if (angle) return normalizeEmail(angle[1]);
  const mailto = raw.match(/[\w.+-]+@[\w.-]+\.\w+/);
  return mailto ? normalizeEmail(mailto[0]) : normalizeEmail(raw);
}

export function leadEmails(lead) {
  if (!lead?.emails) return [];
  return String(lead.emails)
    .split(/[,;]/)
    .map((e) => normalizeEmail(e))
    .filter((e) => e.includes("@"));
}

/**
 * @returns {{ slug: string, lead: object } | null}
 */
export function findLeadByEmail(email, { requireNoReply = true } = {}) {
  const target = normalizeEmail(email);
  if (!target) return null;

  const rootDir = mockupsRoot();
  if (!fs.existsSync(rootDir)) return null;

  for (const slug of fs.readdirSync(rootDir)) {
    const lead = readLead(slug);
    if (!lead) continue;
    const emails = leadEmails(lead);
    if (!emails.includes(target)) continue;
    if (requireNoReply && lead.repliedAt) continue;
    return { slug, lead };
  }
  return null;
}

/**
 * @returns {{ slug: string, lead: object }[]}
 */
export function listAllLeads() {
  const rootDir = mockupsRoot();
  if (!fs.existsSync(rootDir)) return [];

  const out = [];
  for (const slug of fs.readdirSync(rootDir)) {
    const lead = readLead(slug);
    if (lead) out.push({ slug, lead });
  }
  return out;
}

function readSentAtFromStatus(slug) {
  const statusPath = slugDir(slug, "status.md");
  if (!fs.existsSync(statusPath)) return null;
  const text = fs.readFileSync(statusPath, "utf8");
  const m = text.match(/\*\*Sent at:\*\*\s*(.+)/i);
  return m ? m[1].trim() : null;
}

function readSentAtFromQueues(slug) {
  for (const batchNum of listBatchesWithQueues()) {
    const data = loadQueues(batchNum);
    const sendItem = data.send.find((s) => s.slug === slug && s.sentAt);
    if (sendItem?.sentAt) return sendItem.sentAt;
  }
  return null;
}

/**
 * Backfill sentAt on lead.json from status.md or batch queues.
 * @returns {string | null} ISO timestamp if found/backfilled
 */
export function backfillSentAt(slug) {
  const lead = readLead(slug);
  if (!lead) return null;
  if (lead.sentAt) return lead.sentAt;

  let iso = readSentAtFromStatus(slug);
  if (!iso) iso = readSentAtFromQueues(slug);
  if (!iso) return null;

  setLeadTimestamp(slug, "sentAt", iso);
  return iso;
}

function isLeadSentForBackfill(slug) {
  return isSlugSent(slug) || !!readSentAtFromQueues(slug);
}

/**
 * Backfill sentAt for all leads that were sent but lack lead.json sentAt.
 * @returns {{ backfilled: number, alreadySet: number, sentNoTimestamp: number, notSent: number }}
 */
export function backfillAllSentAt() {
  let backfilled = 0;
  let alreadySet = 0;
  let sentNoTimestamp = 0;
  let notSent = 0;

  for (const { slug, lead } of listAllLeads()) {
    if (lead.sentAt) {
      alreadySet += 1;
      continue;
    }
    if (!isLeadSentForBackfill(slug)) {
      notSent += 1;
      continue;
    }
    const iso = backfillSentAt(slug);
    if (iso) {
      backfilled += 1;
      console.log(`  ✓ ${slug} → ${iso}`);
    } else {
      sentNoTimestamp += 1;
      console.log(`  ○ ${slug} — sent but no timestamp in status.md or queues.json`);
    }
  }

  return { backfilled, alreadySet, sentNoTimestamp, notSent };
}

/**
 * Get sentAt, backfilling from legacy sources when missing.
 */
export function getSentAt(slug) {
  const lead = readLead(slug);
  if (lead?.sentAt) return lead.sentAt;
  return backfillSentAt(slug);
}

/** Read sentAt without writing lead.json. */
function getSentAtReadonly(slug) {
  const lead = readLead(slug);
  if (lead?.sentAt) return lead.sentAt;
  const fromStatus = readSentAtFromStatus(slug);
  if (fromStatus) return fromStatus;
  if (isSlugSent(slug)) return readSentAtFromQueues(slug);
  return null;
}

/**
 * Earliest outreach send timestamp across all leads (ISO string), or null.
 */
export function getFirstOutreachSendAt() {
  let earliest = null;
  let earliestMs = Infinity;

  for (const { slug } of listAllLeads()) {
    const sentAt = getSentAtReadonly(slug);
    if (!sentAt) continue;
    const ms = new Date(sentAt).getTime();
    if (Number.isNaN(ms) || ms >= earliestMs) continue;
    earliestMs = ms;
    earliest = sentAt;
  }

  return earliest;
}

/** Gmail search `after:` date from ISO timestamp (YYYY/MM/DD, pipeline timezone). */
export function formatGmailAfterDate(iso) {
  const local = new Date(new Date(iso).toLocaleString("en-US", { timeZone: getPipelineTimezone() }));
  const y = local.getFullYear();
  const m = String(local.getMonth() + 1).padStart(2, "0");
  const d = String(local.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
}
