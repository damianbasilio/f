/**
 * Sync review/send queues with status.md sent state; close stale review items.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { isSlugSent, markSent } from "./outreach-send.mjs";
import { setStatusStage } from "./status-update.mjs";
import { slugDir } from "./paths.mjs";
import { loadQueues, saveQueues } from "./outreach-queues.mjs";
import { kickGroqDraftWorker } from "./groq-draft-worker.mjs";

/** Drafts left in "drafting" after a crash mid-write or before markGroqReady. */
const STUCK_DRAFT_MS = 3 * 60 * 1000;

function ensureSendSent(data, batchNum, slug, item, sentAt) {
  let sendItem = data.send.find((s) => s.slug === slug);
  const ts = sentAt || new Date().toISOString();
  if (!sendItem) {
    data.send.push({
      slug,
      status: "sent",
      approvedAt: item?.approvedAt || ts,
      sentAt: ts,
      batchNum: String(batchNum),
    });
    return;
  }
  sendItem.status = "sent";
  sendItem.sentAt = sendItem.sentAt || ts;
  delete sendItem.error;
}

function syncReviewItemSent(data, batchNum, slug, sentAt) {
  const item = data.review.find((r) => r.slug === slug);
  const ts = sentAt || new Date().toISOString();

  if (item && item.status !== "approved") {
    item.status = "approved";
    item.approvedAt = item.approvedAt || ts;
  }

  ensureSendSent(data, batchNum, slug, item, ts);
  data.groqQueue = data.groqQueue.filter((s) => s !== slug);
  data.sendQueue = data.sendQueue.filter((s) => s !== slug);

  if (!isSlugSent(slug)) markSent(slug);
  setStatusStage(slug, "outreach", "done");
}

/**
 * Sync queues.json with status.md / send records. Optionally close pending review items.
 * @param {{ closePending?: boolean, quiet?: boolean }} opts
 */
export function reconcileSentState({ closePending = false, quiet = false } = {}) {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return { batchesUpdated: 0, slugsClosed: 0 };

  let batchesUpdated = 0;
  let slugsClosed = 0;

  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    const batchNum = d.replace(/^batch-/, "");
    const data = loadQueues(batchNum);
    let dirty = false;

    for (const item of data.review) {
      const { slug } = item;
      const sendItem = data.send.find((s) => s.slug === slug);

      if (isSlugSent(slug) || sendItem?.status === "sent") {
        const before = JSON.stringify({ item: item.status, send: sendItem?.status });
        syncReviewItemSent(data, batchNum, slug, sendItem?.sentAt);
        const after = JSON.stringify({
          item: data.review.find((r) => r.slug === slug)?.status,
          send: data.send.find((s) => s.slug === slug)?.status,
        });
        if (before !== after) dirty = true;
        continue;
      }

      if (sendItem?.status === "failed" && isSlugSent(slug)) {
        sendItem.status = "sent";
        dirty = true;
      }
    }

    if (closePending) {
      for (const item of data.review) {
        if (!["ready", "drafting", "awaiting_draft", "regenerating"].includes(item.status)) continue;
        if (!fs.existsSync(slugDir(item.slug, "outreach.md"))) continue;

        syncReviewItemSent(data, batchNum, item.slug);
        slugsClosed++;
        dirty = true;
        if (!quiet) console.log(`[reconcile] closed pending review → sent: ${item.slug}`);
      }
    }

    if (dirty) {
      saveQueues(batchNum, data);
      batchesUpdated++;
      if (!quiet) console.log(`[reconcile] updated batch ${batchNum}`);
    }
  }

  return { batchesUpdated, slugsClosed };
}

/**
 * Fix review items stuck in drafting/regenerating after a crash or interrupted worker.
 * - outreach.md exists → mark ready
 * - no outreach.md and draftingAt older than STUCK_DRAFT_MS → re-queue for Groq
 */
export function reconcileStuckDrafts({ quiet = false } = {}) {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return { batchesUpdated: 0, draftsReady: 0, draftsRequeued: 0 };

  let batchesUpdated = 0;
  let draftsReady = 0;
  let draftsRequeued = 0;
  const now = Date.now();

  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    const batchNum = d.replace(/^batch-/, "");
    const data = loadQueues(batchNum);
    let dirty = false;

    for (const item of data.review) {
      if (!["drafting", "regenerating"].includes(item.status)) continue;
      if (isSlugSent(item.slug)) continue;

      const hasOutreach = fs.existsSync(slugDir(item.slug, "outreach.md"));
      if (hasOutreach) {
        item.status = "ready";
        item.readyAt = item.readyAt || new Date().toISOString();
        delete item.error;
        delete item.draftingAt;
        delete item.regeneratingAt;
        draftsReady++;
        dirty = true;
        if (!quiet) console.log(`[reconcile] closed stuck draft → ready: ${item.slug}`);
        continue;
      }

      const startedAt = Date.parse(item.draftingAt || item.regeneratingAt || "");
      if (!Number.isFinite(startedAt) || now - startedAt < STUCK_DRAFT_MS) continue;

      item.status = "awaiting_draft";
      delete item.draftingAt;
      delete item.regeneratingAt;
      if (!data.groqQueue.includes(item.slug)) data.groqQueue.push(item.slug);
      draftsRequeued++;
      dirty = true;
      if (!quiet) console.log(`[reconcile] re-queued stuck draft: ${item.slug}`);
    }

    if (dirty) {
      saveQueues(batchNum, data);
      batchesUpdated++;
    }
  }

  if (draftsRequeued) kickGroqDraftWorker();
  return { batchesUpdated, draftsReady, draftsRequeued };
}

/** Re-queue sends left in "sending" after a server crash/restart. */
export function reconcileStuckSends({ quiet = false } = {}) {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return { batchesUpdated: 0, sendsRequeued: 0 };

  let batchesUpdated = 0;
  let sendsRequeued = 0;

  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    const batchNum = d.replace(/^batch-/, "");
    const data = loadQueues(batchNum);
    let dirty = false;

    for (const sendItem of data.send) {
      if (sendItem.status !== "sending" || isSlugSent(sendItem.slug)) continue;
      sendItem.status = "queued";
      delete sendItem.sendingAt;
      if (!data.sendQueue.includes(sendItem.slug)) data.sendQueue.push(sendItem.slug);
      sendsRequeued++;
      dirty = true;
      if (!quiet) console.log(`[reconcile] re-queued stuck send: ${sendItem.slug}`);
    }

    if (dirty) {
      saveQueues(batchNum, data);
      batchesUpdated++;
    }
  }

  return { batchesUpdated, sendsRequeued };
}

/**
 * Leads with a built mockup but missing from the review queue (e.g. pipeline interrupted).
 */
export function recoverOrphanReviewLeads(batchNum, { quiet = false } = {}) {
  const batchDir = path.join(root, "data", "batches", `batch-${batchNum}`);
  const slugsPath = path.join(batchDir, "slugs.txt");
  if (!fs.existsSync(slugsPath)) return { recovered: [] };

  const slugs = fs
    .readFileSync(slugsPath, "utf8")
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  const data = loadQueues(batchNum);
  const recovered = [];

  for (const slug of slugs) {
    if (isSlugSent(slug)) continue;
    if (!fs.existsSync(slugDir(slug, "index.html"))) continue;
    if (data.review.some((r) => r.slug === slug)) continue;

    data.review.push({
      slug,
      status: "awaiting_draft",
      attempt: 1,
      enqueuedAt: new Date().toISOString(),
      recoveredAt: new Date().toISOString(),
    });
    if (!data.groqQueue.includes(slug)) data.groqQueue.push(slug);
    recovered.push(slug);
    if (!quiet) console.log(`[reconcile] recovered orphan lead for review: ${slug}`);
  }

  if (recovered.length) {
    saveQueues(batchNum, data);
    kickGroqDraftWorker();
  }
  return { recovered };
}

/**
 * Recover orphan review leads across every batch with queues.json.
 * @param {{ quiet?: boolean }} [opts]
 */
export function recoverAllOrphanReviewLeads({ quiet = false } = {}) {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return { recovered: [] };

  const all = [];
  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    const batchNum = d.replace(/^batch-/, "");
    const { recovered } = recoverOrphanReviewLeads(batchNum, { quiet });
    all.push(...recovered);
  }
  return { recovered: all };
}
