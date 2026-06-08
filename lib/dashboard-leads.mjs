/**
 * Aggregate leads from preview/{slug}/ for dashboard list.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { mockupsRoot, mockupUrl } from "./paths.mjs";
import { loadQueues } from "./outreach-queues.mjs";
import { isSlugSent } from "./outreach-send.mjs";

function readLead(slugDir) {
  const p = path.join(slugDir, "lead.json");
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function readStatusStages(slug) {
  const statusPath = path.join(mockupsRoot(), slug, "status.md");
  if (!fs.existsSync(statusPath)) return {};
  const text = fs.readFileSync(statusPath, "utf8");
  /** @type {Record<string, string>} */
  const stages = {};
  for (const m of text.matchAll(/\|\s*([^|]+?)\s*\|\s*(\S+)\s*\|/g)) {
    stages[m[1].trim().toLowerCase()] = m[2].trim();
  }
  return stages;
}

function designFailed(statusStages) {
  if (statusStages.stitch === "fail") return true;
  if (statusStages["site-eval"] === "fail") return true;
  for (const [key, val] of Object.entries(statusStages)) {
    if (key.startsWith("design-qa/") && val === "fail") return true;
  }
  return false;
}

/** @type {Map<string, { stitch?: string, postBuild?: string }>} */
let batchSlugCache = null;

function loadBatchSlugStatus() {
  if (batchSlugCache) return batchSlugCache;
  /** @type {Map<string, { stitch?: string, postBuild?: string }>} */
  const map = new Map();
  const batchesDir = path.join(root, "data", "batches");
  if (fs.existsSync(batchesDir)) {
    for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
      const statusPath = path.join(batchesDir, d, "status.json");
      if (!fs.existsSync(statusPath)) continue;
      try {
        const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
        for (const [slug, row] of Object.entries(status.slugs || {})) {
          map.set(slug, row);
        }
        for (const slug of status.failed || []) {
          const row = map.get(slug) || {};
          map.set(slug, { ...row, failed: true });
        }
        for (const slug of status.retry || []) {
          const row = map.get(slug) || {};
          map.set(slug, { ...row, stitch: row.stitch || "retry", failed: true });
        }
        for (const slug of status.skipped || []) {
          const row = map.get(slug) || {};
          map.set(slug, { ...row, status: "skip", failed: true });
        }
        if (status.finishedAt) {
          const slugsPath = path.join(batchesDir, d, "slugs.txt");
          if (fs.existsSync(slugsPath)) {
            const listed = fs
              .readFileSync(slugsPath, "utf8")
              .split(/\r?\n/)
              .map((s) => s.trim())
              .filter(Boolean);
            for (const slug of listed) {
              if (map.has(slug)) continue;
              if (fs.existsSync(path.join(mockupsRoot(), slug, "index.html"))) continue;
              map.set(slug, {
                status: "fail",
                failed: true,
                reason: "batch finished without completing this slug",
              });
            }
          }
        }
      } catch {
        /* ignore */
      }
    }
  }
  batchSlugCache = map;
  return map;
}

function batchPipelineFailed(slug) {
  const row = loadBatchSlugStatus().get(slug);
  if (!row) return false;
  if (row.failed) return true;
  if (row.status === "skip") return true;
  if (row.stitch === "fail" || row.stitch === "retry") return true;
  if (row.postBuild === "fail") return true;
  return false;
}

/**
 * Derive dashboard stage — outreach pipeline only (mockup presence is separate).
 */
function leadStage(slug, statusStages, reviewItem, sendItem) {
  if (sendItem?.status === "sent" || isSlugSent(slug)) return "sent";
  if (sendItem?.status === "failed") return "failed";
  if (sendItem?.status === "sending" || sendItem?.status === "queued") return "approved";

  if (reviewItem && !isSlugSent(slug)) {
    if (reviewItem.status === "ready") return "review_ready";
    if (reviewItem.status === "approved") return "approved";
    if (["awaiting_draft", "drafting", "regenerating"].includes(reviewItem.status)) return "building";
    if (reviewItem.status === "failed") return "failed";
  }

  if (designFailed(statusStages)) return "failed";
  if (batchPipelineFailed(slug)) return "failed";

  const outreachSent = statusStages["outreach-sent"];
  const outreach = statusStages.outreach;
  if (outreachSent && /^done$/i.test(outreachSent) && outreach && /^done$/i.test(outreach)) {
    return "sent";
  }

  const stitch = statusStages.stitch;
  if (stitch === "fail" || stitch === "retry") return "failed";
  if (stitch === "pending" || stitch === "active") return "building";

  return "building";
}

const STAGE_LABELS = {
  building: "Creating design",
  review_ready: "Email ready",
  approved: "Approved",
  sent: "Sent",
  failed: "Failed",
};

function loadQueueMaps() {
  /** @type {Map<string, object>} */
  const reviewBySlug = new Map();
  /** @type {Map<string, object>} */
  const sendBySlug = new Map();

  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return { reviewBySlug, sendBySlug };

  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    const batchNum = d.replace(/^batch-/, "");
    const q = loadQueues(batchNum);
    for (const r of q.review) reviewBySlug.set(r.slug, { batchNum, ...r });
    for (const s of q.send) sendBySlug.set(s.slug, { batchNum, ...s });
  }

  return { reviewBySlug, sendBySlug };
}

/**
 * @returns {object[]}
 */
export function listDashboardLeads() {
  batchSlugCache = null;

  const previewsRoot = mockupsRoot();
  if (!fs.existsSync(previewsRoot)) return [];

  const batchesDir = path.join(root, "data", "batches");
  /** @type {Map<string, string>} slug → batchNum */
  const slugBatch = new Map();

  if (fs.existsSync(batchesDir)) {
    for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
      const batchNum = d.replace(/^batch-/, "");
      const statusPath = path.join(batchesDir, d, "status.json");
      if (fs.existsSync(statusPath)) {
        try {
          const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
          for (const slug of status.passed || []) slugBatch.set(slug, batchNum);
          for (const slug of status.failed || []) slugBatch.set(slug, batchNum);
          for (const slug of status.retry || []) slugBatch.set(slug, batchNum);
          for (const slug of Object.keys(status.slugs || {})) slugBatch.set(slug, batchNum);
        } catch {
          /* ignore */
        }
      }
      const slugsPath = path.join(batchesDir, d, "slugs.txt");
      if (fs.existsSync(slugsPath)) {
        for (const slug of fs.readFileSync(slugsPath, "utf8").split(/\r?\n/).filter(Boolean)) {
          slugBatch.set(slug, batchNum);
        }
      }
    }
  }

  const { reviewBySlug, sendBySlug } = loadQueueMaps();
  const dirs = fs.readdirSync(previewsRoot, { withFileTypes: true }).filter((d) => d.isDirectory());

  /** @type {object[]} */
  const leads = [];

  for (const ent of dirs) {
    const slug = ent.name;
    const dir = path.join(previewsRoot, slug);
    const lead = readLead(dir);
    if (!lead) continue;

    const indexPath = path.join(dir, "index.html");
    const hasMockup = fs.existsSync(indexPath);
    const inBatch = slugBatch.has(slug);
    // Stitch/post-build failures often have lead.json but no index.html — still show in dashboard.
    if (!hasMockup && !inBatch) continue;

    const batchNum = slugBatch.get(slug) || reviewBySlug.get(slug)?.batchNum || sendBySlug.get(slug)?.batchNum || null;
    const batchRow = loadBatchSlugStatus().get(slug);
    const stage = leadStage(slug, readStatusStages(slug), reviewBySlug.get(slug), sendBySlug.get(slug));

    leads.push({
      slug,
      name: lead.name || slug,
      city: lead.city || "",
      email: lead.emails || lead.email || "",
      facebook: lead.facebook || lead.url || "",
      batchNum,
      stage,
      stageLabel: STAGE_LABELS[stage] || stage,
      mockupUrl: hasMockup ? mockupUrl(slug) : null,
      hasOutreach: fs.existsSync(path.join(dir, "outreach.md")),
      pipelineError: batchRow?.error || batchRow?.reason || null,
    });
  }

  leads.sort((a, b) => a.name.localeCompare(b.name));
  return leads;
}
