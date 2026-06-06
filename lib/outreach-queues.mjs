/**
 * Per-batch review + send queues (data/batches/batch-{N}/queues.json).
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { parseOutreachMd } from "./parse-outreach.mjs";
import { slugDir } from "./paths.mjs";

function batchDir(batchNum) {
  return path.join(root, "data", "batches", `batch-${batchNum}`);
}

function queuesPath(batchNum) {
  return path.join(batchDir(batchNum), "queues.json");
}

function emptyQueues() {
  return { review: [], send: [], groqQueue: [], sendQueue: [] };
}

export function loadQueues(batchNum) {
  const p = queuesPath(batchNum);
  if (!fs.existsSync(p)) return emptyQueues();
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    return {
      review: Array.isArray(data.review) ? data.review : [],
      send: Array.isArray(data.send) ? data.send : [],
      groqQueue: Array.isArray(data.groqQueue) ? data.groqQueue : [],
      sendQueue: Array.isArray(data.sendQueue) ? data.sendQueue : [],
    };
  } catch {
    return emptyQueues();
  }
}

export function saveQueues(batchNum, data) {
  fs.mkdirSync(batchDir(batchNum), { recursive: true });
  const tmp = `${queuesPath(batchNum)}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + "\n", "utf8");
  fs.renameSync(tmp, queuesPath(batchNum));
}

function findReview(data, slug) {
  return data.review.find((r) => r.slug === slug);
}

/** @returns {{ batchNum: string, slug: string, attempt: number } | null} */
export function popGroqJob() {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return null;

  const batchIds = fs
    .readdirSync(batchesDir)
    .filter((d) => d.startsWith("batch-"))
    .map((d) => d.replace(/^batch-/, ""))
    .sort((a, b) => String(a).localeCompare(String(b)));

  for (const batchNum of batchIds) {
    const data = loadQueues(batchNum);
    if (!data.groqQueue.length) continue;

    const slug = data.groqQueue.shift();
    const item = findReview(data, slug);
    if (!item) continue;

    item.status = "drafting";
    item.draftingAt = new Date().toISOString();
    saveQueues(batchNum, data);
    return { batchNum, slug, attempt: item.attempt || 1 };
  }
  return null;
}

export function markGroqReady(batchNum, slug, { error } = {}) {
  const data = loadQueues(batchNum);
  const item = findReview(data, slug);
  if (!item) return;

  if (error) {
    item.status = "failed";
    item.error = error;
    item.failedAt = new Date().toISOString();
  } else {
    item.status = "ready";
    item.readyAt = new Date().toISOString();
    delete item.error;
  }
  saveQueues(batchNum, data);
}

export function enqueueReview(batchNum, slug) {
  const data = loadQueues(batchNum);
  const existing = findReview(data, slug);
  if (existing && !["approved"].includes(existing.status)) {
    if (!data.groqQueue.includes(slug)) data.groqQueue.push(slug);
    saveQueues(batchNum, data);
    return existing;
  }
  if (existing?.status === "approved") return existing;

  const entry = {
    slug,
    status: "awaiting_draft",
    attempt: 1,
    enqueuedAt: new Date().toISOString(),
  };
  data.review.push(entry);
  data.groqQueue.push(slug);
  saveQueues(batchNum, data);
  return entry;
}

export function getCurrentReviewItem(batchNum) {
  const data = loadQueues(batchNum);
  const item = data.review.find((r) => r.status === "ready");
  if (!item) {
    return {
      empty: true,
      drafting: data.review.some((r) => ["awaiting_draft", "drafting", "regenerating"].includes(r.status)),
      counts: summarizeCounts(data),
      queues: data,
    };
  }

  let email = null;
  let parseError = null;
  try {
    const parsed = parseOutreachMd(item.slug);
    const briefPath = slugDir(item.slug, "brief.md");
    let businessName = item.slug;
    if (fs.existsSync(briefPath)) {
      businessName = fs.readFileSync(briefPath, "utf8").match(/\*\*Name:\*\*\s*(.+)/i)?.[1]?.trim() || item.slug;
    }
    email = {
      to: parsed.to,
      subject: parsed.subject,
      text: parsed.text,
      mockupUrl: parsed.mockupUrl,
      businessName,
    };
  } catch (err) {
    parseError = err.message;
  }

  return {
    empty: false,
    slug: item.slug,
    attempt: item.attempt,
    readyAt: item.readyAt,
    email,
    parseError,
    counts: summarizeCounts(data),
    queues: data,
  };
}

export function approveReview(batchNum, slug) {
  const data = loadQueues(batchNum);
  const item = findReview(data, slug);
  if (!item) throw new Error(`Slug not in review queue: ${slug}`);
  if (item.status !== "ready") throw new Error(`Cannot approve — status is ${item.status}, expected ready`);

  item.status = "approved";
  item.approvedAt = new Date().toISOString();

  const sendEntry = {
    slug,
    status: "queued",
    approvedAt: item.approvedAt,
    batchNum: String(batchNum),
  };
  data.send.push(sendEntry);
  data.sendQueue.push(slug);

  const auditPath = path.join(batchDir(batchNum), "approved-log.txt");
  fs.appendFileSync(auditPath, `${item.approvedAt}\t${slug}\n`, "utf8");

  saveQueues(batchNum, data);
  return sendEntry;
}

export function regenerateReview(batchNum, slug) {
  const data = loadQueues(batchNum);
  const item = findReview(data, slug);
  if (!item) throw new Error(`Slug not in review queue: ${slug}`);
  if (!["ready", "failed"].includes(item.status)) {
    throw new Error(`Cannot regenerate — status is ${item.status}`);
  }

  item.status = "regenerating";
  item.attempt = (item.attempt || 1) + 1;
  item.regeneratingAt = new Date().toISOString();
  delete item.readyAt;
  delete item.error;

  data.groqQueue = data.groqQueue.filter((s) => s !== slug);
  data.groqQueue.push(slug);

  saveQueues(batchNum, data);
  return item;
}

/** @returns {{ batchNum: string, slug: string } | null} */
export function popSendJob() {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return null;

  const batchIds = fs
    .readdirSync(batchesDir)
    .filter((d) => d.startsWith("batch-"))
    .map((d) => d.replace(/^batch-/, ""))
    .sort((a, b) => String(a).localeCompare(String(b)));

  for (const batchNum of batchIds) {
    const data = loadQueues(batchNum);
    if (!data.sendQueue.length) continue;

    const slug = data.sendQueue.shift();
    const sendItem = data.send.find((s) => s.slug === slug && s.status === "queued");
    if (sendItem) {
      sendItem.status = "sending";
      sendItem.sendingAt = new Date().toISOString();
    }
    saveQueues(batchNum, data);
    return { batchNum, slug };
  }
  return null;
}

export function markSendResult(batchNum, slug, { ok, error, sentAt }) {
  const data = loadQueues(batchNum);
  const sendItem = data.send.find((s) => s.slug === slug);
  if (sendItem) {
    sendItem.status = ok ? "sent" : "failed";
    if (ok) sendItem.sentAt = sentAt || new Date().toISOString();
    else sendItem.error = error;
  }
  saveQueues(batchNum, data);
}

export function getQueueSummary(batchNum) {
  const data = loadQueues(batchNum);
  return { ...summarizeCounts(data), queues: data };
}

export function listBatchesWithQueues() {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return [];
  return fs
    .readdirSync(batchesDir)
    .filter((d) => d.startsWith("batch-") && fs.existsSync(path.join(batchesDir, d, "queues.json")))
    .map((d) => d.replace(/^batch-/, ""));
}

function summarizeCounts(data) {
  const reviewReady = data.review.filter((r) => r.status === "ready").length;
  const reviewPending = data.review.filter((r) =>
    ["awaiting_draft", "drafting", "regenerating"].includes(r.status)
  ).length;
  const reviewFailed = data.review.filter((r) => r.status === "failed").length;
  const reviewApproved = data.review.filter((r) => r.status === "approved").length;
  const sendQueued = data.send.filter((s) => s.status === "queued").length;
  const sendSending = data.send.filter((s) => s.status === "sending").length;
  const sendSent = data.send.filter((s) => s.status === "sent").length;
  const sendFailed = data.send.filter((s) => s.status === "failed").length;

  return {
    reviewReady,
    reviewPending,
    reviewFailed,
    reviewApproved,
    reviewTotal: data.review.length,
    sendQueued,
    sendSending,
    sendSent,
    sendFailed,
    groqPending: data.groqQueue.length,
    sendPending: data.sendQueue.length,
  };
}
