/**
 * Per-batch review + send queues (data/batches/batch-{N}/queues.json).
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { parseOutreachMd } from "./parse-outreach.mjs";
import { slugDir } from "./paths.mjs";
import { isSlugSent, checkOutreachQa } from "./outreach-send.mjs";

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
    if (["drafting", "regenerating"].includes(existing.status)) {
      existing.status = "awaiting_draft";
      delete existing.draftingAt;
    }
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
  const item = data.review.find((r) => r.status === "ready" && !isSlugSent(r.slug));
  if (!item) {
    return {
      empty: true,
      drafting: data.review.some(
        (r) => ["awaiting_draft", "drafting", "regenerating"].includes(r.status) && !isSlugSent(r.slug)
      ),
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

  const qa = checkOutreachQa(slug);
  if (!qa.ok) {
    const reason = (qa.stdout + qa.stderr)
      .split("\n")
      .filter((l) => l.includes("✗"))
      .slice(0, 2)
      .map((l) => l.replace(/^\s*✗\s*/, ""))
      .join("; ");
    throw new Error(reason || "Outreach QA not passing — cannot approve yet");
  }

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

/**
 * After a mockup rebuild — always re-queue Groq email draft (works when status is approved too).
 */
/** Reset review/send queue state before a full pipeline retry. */
export function resetLeadQueuesForRetry(batchNum, slug) {
  if (isSlugSent(slug)) throw new Error("Lead already sent — cannot retry");

  const data = loadQueues(batchNum);
  data.send = data.send.filter((s) => s.slug !== slug || s.status === "sent");
  data.sendQueue = data.sendQueue.filter((s) => s !== slug);

  const item = findReview(data, slug);
  if (item) {
    item.status = "awaiting_draft";
    item.attempt = (item.attempt || 1) + 1;
    item.retriedAt = new Date().toISOString();
    delete item.readyAt;
    delete item.approvedAt;
    delete item.error;
    delete item.failedAt;
    delete item.regeneratingAt;
    delete item.draftingAt;
  }

  data.groqQueue = data.groqQueue.filter((s) => s !== slug);
  if (item) data.groqQueue.push(slug);
  saveQueues(batchNum, data);
}

export function queueEmailRedraftAfterRebuild(batchNum, slug) {
  const data = loadQueues(batchNum);
  let item = findReview(data, slug);

  if (!item) {
    saveQueues(batchNum, data);
    enqueueReview(batchNum, slug);
    return loadQueues(batchNum).review.find((r) => r.slug === slug);
  }

  if (item.status === "approved") {
    item.status = "regenerating";
    item.attempt = (item.attempt || 1) + 1;
    item.regeneratingAt = new Date().toISOString();
    delete item.readyAt;
    delete item.approvedAt;

    const sendItem = data.send.find((s) => s.slug === slug);
    if (sendItem && sendItem.status !== "sent") {
      sendItem.status = "cancelled";
      delete sendItem.error;
    }
    data.sendQueue = data.sendQueue.filter((s) => s !== slug);
  } else if (["ready", "failed"].includes(item.status)) {
    item.status = "regenerating";
    item.attempt = (item.attempt || 1) + 1;
    item.regeneratingAt = new Date().toISOString();
    delete item.readyAt;
    delete item.error;
  } else if (!["drafting", "regenerating", "awaiting_draft"].includes(item.status)) {
    item.status = "regenerating";
    item.regeneratingAt = new Date().toISOString();
  }

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

export function requeueSend(batchNum, slug) {
  if (isSlugSent(slug)) throw new Error("Lead already sent");

  const data = loadQueues(batchNum);
  const review = findReview(data, slug);
  if (!review || review.status !== "approved") {
    throw new Error("Lead is not approved — use Approve and send first");
  }

  const now = new Date().toISOString();
  let sendItem = data.send.find((s) => s.slug === slug && s.status !== "sent");
  if (!sendItem) {
    sendItem = { slug, status: "queued", approvedAt: review.approvedAt || now, batchNum: String(batchNum) };
    data.send.push(sendItem);
  } else {
    sendItem.status = "queued";
    sendItem.approvedAt = review.approvedAt || sendItem.approvedAt || now;
    sendItem.batchNum = String(batchNum);
    delete sendItem.error;
    delete sendItem.sendingAt;
    delete sendItem.sentAt;
  }
  data.send = data.send.filter((s) => s.slug !== slug || s === sendItem || s.status === "sent");

  data.sendQueue = data.sendQueue.filter((s) => s !== slug);
  data.sendQueue.push(slug);
  saveQueues(batchNum, data);
  return sendItem;
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
  const pending = (r) => !isSlugSent(r.slug);
  const reviewReady = data.review.filter((r) => r.status === "ready" && pending(r)).length;
  const reviewPending = data.review.filter(
    (r) => ["awaiting_draft", "drafting", "regenerating"].includes(r.status) && pending(r)
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
