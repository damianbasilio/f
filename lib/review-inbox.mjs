/**
 * Unified review inbox — all batches, ready items first.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { mockupUrl, slugDir, mockupsRoot } from "./paths.mjs";
import { loadQueues } from "./outreach-queues.mjs";
import { isSlugSent, checkOutreachQa } from "./outreach-send.mjs";
import { parseOutreachMd } from "./parse-outreach.mjs";

const INBOX_STATUSES = new Set(["ready", "failed", "drafting", "regenerating", "awaiting_draft", "approved"]);

function readLeadMeta(slug) {
  const leadPath = slugDir(slug, "lead.json");
  if (!fs.existsSync(leadPath)) return { name: slug, city: "" };
  try {
    const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
    return { name: lead.name || slug, city: lead.city || "" };
  } catch {
    return { name: slug, city: "" };
  }
}

function localPreviewUrl(slug) {
  return `/preview/${slug}/`;
}

/**
 * @returns {object[]}
 */
export function listReviewInbox() {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return [];

  /** @type {object[]} */
  const items = [];

  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    const batchNum = d.replace(/^batch-/, "");
    const data = loadQueues(batchNum);

    for (const item of data.review) {
      if (!INBOX_STATUSES.has(item.status)) continue;
      if (item.status === "approved") {
        const sendItem = data.send.find((s) => s.slug === item.slug);
        if (!sendItem || sendItem.status === "sent" || isSlugSent(item.slug)) continue;
      } else if (isSlugSent(item.slug)) {
        continue;
      }

      const meta = readLeadMeta(item.slug);
      const hasMockup = fs.existsSync(path.join(mockupsRoot(), item.slug, "index.html"));

      items.push({
        batchNum,
        slug: item.slug,
        status: item.status,
        attempt: item.attempt || 1,
        readyAt: item.readyAt || item.enqueuedAt || null,
        businessName: meta.name,
        city: meta.city,
        mockupUrl: hasMockup ? mockupUrl(item.slug) : null,
        localPreviewUrl: hasMockup ? localPreviewUrl(item.slug) : null,
        hasMockup,
      });
    }
  }

  const rank = (s) => ({ ready: 0, approved: 1, failed: 2, regenerating: 3, drafting: 4, awaiting_draft: 5 }[s] ?? 9);
  items.sort(
    (a, b) =>
      rank(a.status) - rank(b.status) ||
      String(a.readyAt || "").localeCompare(String(b.readyAt || "")) ||
      a.businessName.localeCompare(b.businessName)
  );

  return items;
}

function mockupMtime(slug) {
  const indexPath = path.join(mockupsRoot(), slug, "index.html");
  if (!fs.existsSync(indexPath)) return null;
  try {
    return fs.statSync(indexPath).mtime.toISOString();
  } catch {
    return null;
  }
}

export function getReviewItemDetail(batchNum, slug) {
  const data = loadQueues(batchNum);
  const item = data.review.find((r) => r.slug === slug);
  if (!item) return null;
  if (isSlugSent(slug)) return null;

  const meta = readLeadMeta(slug);
  const hasMockup = fs.existsSync(path.join(mockupsRoot(), slug, "index.html"));

  let email = null;
  let parseError = null;
  try {
    const parsed = parseOutreachMd(slug);
    const briefPath = slugDir(slug, "brief.md");
    let businessName = meta.name;
    if (fs.existsSync(briefPath)) {
      businessName = fs.readFileSync(briefPath, "utf8").match(/\*\*Name:\*\*\s*(.+)/i)?.[1]?.trim() || meta.name;
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

  const sendItem = data.send.find((s) => s.slug === slug);
  const outreachQa = email ? checkOutreachQa(slug) : { ok: false, stdout: "", stderr: "" };
  const sendBlockReason = outreachQa.ok
    ? null
    : (outreachQa.stdout + outreachQa.stderr)
        .split("\n")
        .filter((l) => l.includes("✗"))
        .slice(0, 2)
        .map((l) => l.replace(/^\s*✗\s*/, ""))
        .join("; ") || "outreach QA not passing";
  const sendStatus = sendItem?.status || null;
  const sendError = sendItem?.error || null;
  const canRetrySend =
    item.status === "approved" &&
    Boolean(email) &&
    outreachQa.ok &&
    ["failed", "queued", "sending"].includes(sendStatus || "");

  return {
    batchNum,
    slug,
    status: item.status,
    attempt: item.attempt,
    readyAt: item.readyAt,
    businessName: meta.name,
    city: meta.city,
    email,
    parseError,
    sendBlockReason,
    sendStatus,
    sendError,
    canRetrySend,
    mockupUrl: hasMockup ? mockupUrl(slug) : null,
    localPreviewUrl: hasMockup ? localPreviewUrl(slug) : null,
    hasMockup,
    mockupMtime: mockupMtime(slug),
    canApprove: item.status === "ready" && Boolean(email) && outreachQa.ok,
    canRegenerate: ["ready", "failed"].includes(item.status),
    canRebuild: Boolean(fs.existsSync(slugDir(slug, "lead.json")) && fs.existsSync(slugDir(slug, "verification.json"))),
  };
}

export function summarizeInbox(items) {
  return {
    ready: items.filter((i) => i.status === "ready").length,
    failed: items.filter((i) => i.status === "failed").length,
    drafting: items.filter((i) => ["drafting", "regenerating", "awaiting_draft"].includes(i.status)).length,
    total: items.length,
  };
}
