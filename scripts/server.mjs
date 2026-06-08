/**
 * Local UI server — paste/upload JSON, run pipeline, review emails.
 * Usage: npm run server
 */
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { root } from "../lib/load-env.mjs";
import {
  getQueueSummary,
  getCurrentReviewItem,
  approveReview,
  regenerateReview,
  requeueSend,
  queueEmailRedraftAfterRebuild,
} from "../lib/outreach-queues.mjs";
import { kickGroqDraftWorker, getGroqWorkerStatus } from "../lib/groq-draft-worker.mjs";
import { kickSendWorker, getSendWorkerStatus } from "../lib/send-queue-worker.mjs";
import { kickQaAutoRebuildWorker, getQaRebuildStatus } from "../lib/qa-auto-rebuild-worker.mjs";
import { listDashboardLeads } from "../lib/dashboard-leads.mjs";
import {
  JOB_STAGES,
  createJob,
  loadJob,
  listJobs,
  getActiveJob,
  appendJobLog,
  finishJob,
  saveJob,
  reconcileStaleJobs,
} from "../lib/dashboard-jobs.mjs";
import {
  reconcileSentState,
  reconcileStuckDrafts,
  reconcileStuckSends,
  recoverAllOrphanReviewLeads,
} from "../lib/queue-reconcile.mjs";
import { listReviewInbox, getReviewItemDetail, summarizeInbox } from "../lib/review-inbox.mjs";
import { rebuildMockupOne } from "../lib/rebuild-mockup-one.mjs";
import { retryLeadPipeline, findBatchForSlug } from "../lib/retry-lead-pipeline.mjs";
import { deleteLead, leadExists } from "../lib/delete-lead.mjs";
import { isSlugSent } from "../lib/outreach-send.mjs";
import { mockupsRoot } from "../lib/paths.mjs";

const app = express();
const port = Number(process.env.PORT || 3456);
const scriptsDir = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(root, "public")));
app.use("/preview", express.static(mockupsRoot()));
app.get("/outreach-report-:id.md", (req, res) => {
  const p = path.join(root, `outreach-report-${req.params.id}.md`);
  if (fs.existsSync(p)) res.type("text/markdown").send(fs.readFileSync(p, "utf8"));
  else res.status(404).send("Not found");
});

/** @type {import('node:child_process').ChildProcess|null} */
let pipelineProcess = null;
/** @type {import('node:child_process').ChildProcess|null} */
let searchProcess = null;
/** @type {string|null} */
let activeJobId = null;
let pipelineLog = "";

/** @type {Map<string, { running: boolean, error?: string, startedAt?: string }>} */
const rebuildBySlug = new Map();
/** @type {Map<string, { running: boolean, error?: string, startedAt?: string }>} */
const retryBySlug = new Map();

function extractBatchFromLog(log) {
  const m = log.match(/batch[- ](\d{10,})/i) || log.match(/Imported batch (\d+)/i);
  return m ? m[1] : null;
}

function wireJobProcess(proc, jobId) {
  activeJobId = jobId;
  const job = loadJob(jobId);
  if (!job) return;

  proc.stdout.on("data", (d) => {
    const chunk = d.toString();
    pipelineLog += chunk;
    appendJobLog(job, chunk);
    const batch = extractBatchFromLog(job.log);
    if (batch) job.batchNum = batch;
    saveJob(job);
  });
  proc.stderr.on("data", (d) => {
    const chunk = d.toString();
    pipelineLog += chunk;
    appendJobLog(job, chunk);
    saveJob(job);
  });
  proc.on("close", (code) => {
    pipelineLog += `\n[Exited with code ${code}]\n`;
    const batch = extractBatchFromLog(job.log);
    finishJob(job, code ?? 1, batch);
    activeJobId = null;
    pipelineProcess = null;
    searchProcess = null;
    kickGroqDraftWorker();
  });
}

app.get("/api/leads", (_req, res) => {
  res.json({ leads: listDashboardLeads() });
});

app.delete("/api/leads/:slug", (req, res) => {
  const { slug } = req.params;
  if (!leadExists(slug)) return res.status(404).json({ error: "Lead not found" });
  if (pipelineProcess || searchProcess) {
    return res.status(409).json({ error: "Cannot delete while a pipeline job is running" });
  }
  if (rebuildBySlug.get(slug)?.running) {
    return res.status(409).json({ error: "Cannot delete while mockup rebuild is running" });
  }
  if (retryBySlug.get(slug)?.running) {
    return res.status(409).json({ error: "Cannot delete while pipeline retry is running" });
  }

  try {
    const result = deleteLead(slug);
    rebuildBySlug.delete(slug);
    retryBySlug.delete(slug);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/jobs", (_req, res) => {
  res.json({ jobs: listJobs(), stages: JOB_STAGES, active: getActiveJob() });
});

app.get("/api/jobs/:id", (req, res) => {
  const job = loadJob(req.params.id);
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json({ job, stages: JOB_STAGES });
});

app.post("/api/search/start", (req, res) => {
  if (!pipelineProcess && !searchProcess) {
    reconcileStaleJobs({ quiet: true });
  }
  if (pipelineProcess || searchProcess) {
    return res.status(409).json({ error: "A job is already running" });
  }

  const maxSearches = Math.max(1, Math.min(Number(req.body?.maxSearches) || 5, 50));
  const serpBudget = req.body?.serpBudget != null ? Number(req.body.serpBudget) : undefined;
  const args = ["--max-searches", String(maxSearches)];
  if (serpBudget != null && !Number.isNaN(serpBudget)) {
    args.push("--serp-budget", String(serpBudget));
  }

  pipelineLog = "";
  const job = createJob({ type: "search", label: `Discover · ${maxSearches} searches` });
  searchProcess = spawn(process.execPath, [path.join(scriptsDir, "discover-to-pipeline.mjs"), ...args], {
    cwd: root,
    env: { ...process.env, FB_PIPELINE_SPAWNED: "1" },
  });
  wireJobProcess(searchProcess, job.id);

  res.json({ started: true, jobId: job.id });
});

/** Build status payload shared by /api/status and /api/snapshot */
function getStatusPayload() {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) {
    return { batches: [], latestReport: null, pipelineRunning: false, activeJob: null, workers: {}, rebuilds: {} };
  }
  const batches = fs
    .readdirSync(batchesDir)
    .filter((d) => d.startsWith("batch-"))
    .map((d) => {
      const batchNum = d.replace(/^batch-/, "");
      const statusPath = path.join(batchesDir, d, "status.json");
      const queuesPath = path.join(batchesDir, d, "queues.json");
      let status = null;
      let queues = null;
      if (fs.existsSync(statusPath)) status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
      if (fs.existsSync(queuesPath)) queues = getQueueSummary(batchNum);
      return { id: d, batchNum, status, queues };
    })
    .sort((a, b) => b.id.localeCompare(a.id));

  const reports = fs.readdirSync(root).filter((f) => /^outreach-report-\d+\.md$/.test(f));
  reports.sort().reverse();

  return {
    batches,
    latestReport: reports[0] || null,
    pipelineRunning: Boolean(pipelineProcess || searchProcess),
    activeJob: getActiveJob(),
    workers: { ...getGroqWorkerStatus(), ...getSendWorkerStatus(), ...getQaRebuildStatus() },
    rebuilds: Object.fromEntries(rebuildBySlug.entries()),
    retries: Object.fromEntries(retryBySlug.entries()),
  };
}

function getPipelinePayload() {
  const live = Boolean(pipelineProcess || searchProcess);
  const job = live ? (activeJobId ? loadJob(activeJobId) : getActiveJob()) : null;
  return {
    running: live,
    log: pipelineLog,
    job,
  };
}

app.get("/api/snapshot", (_req, res) => {
  const items = listReviewInbox();
  res.json({
    serverTime: new Date().toISOString(),
    status: getStatusPayload(),
    pipeline: getPipelinePayload(),
    jobs: listJobs(),
    stages: JOB_STAGES,
    leads: listDashboardLeads(),
    inbox: {
      items,
      counts: summarizeInbox(items),
      rebuilds: Object.fromEntries(rebuildBySlug.entries()),
      retries: Object.fromEntries(retryBySlug.entries()),
    },
  });
});

app.get("/api/status", (_req, res) => {
  res.json(getStatusPayload());
});

app.get("/api/workers/status", (_req, res) => {
  res.json({ ...getGroqWorkerStatus(), ...getSendWorkerStatus() });
});

app.get("/api/batch/:batchNum/queues", (req, res) => {
  const { batchNum } = req.params;
  const queuesPath = path.join(root, "data", "batches", `batch-${batchNum}`, "queues.json");
  if (!fs.existsSync(queuesPath)) return res.status(404).json({ error: "No queues for batch" });
  res.json(getQueueSummary(batchNum));
});

app.get("/api/batch/:batchNum/review/current", (req, res) => {
  const { batchNum } = req.params;
  res.json(getCurrentReviewItem(batchNum));
});

app.post("/api/batch/:batchNum/review/retry-send", (req, res) => {
  try {
    const { batchNum } = req.params;
    const slug = req.body?.slug;
    if (!slug) return res.status(400).json({ error: "slug required" });

    requeueSend(batchNum, slug);
    kickSendWorker();
    res.json({ ok: true, slug });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/batch/:batchNum/review/approve", (req, res) => {
  try {
    const { batchNum } = req.params;
    const slug = req.body?.slug;
    if (!slug) return res.status(400).json({ error: "slug required" });

    approveReview(batchNum, slug);
    kickSendWorker();
    res.json({ ok: true, slug });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/batch/:batchNum/review/regenerate", (req, res) => {
  try {
    const { batchNum } = req.params;
    const slug = req.body?.slug;
    if (!slug) return res.status(400).json({ error: "slug required" });

    regenerateReview(batchNum, slug);
    kickGroqDraftWorker();
    res.json({ ok: true, slug });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/review/inbox", (_req, res) => {
  const items = listReviewInbox();
  const rebuilds = Object.fromEntries(rebuildBySlug.entries());
  res.json({ items, counts: summarizeInbox(items), rebuilds });
});

app.get("/api/review/:batchNum/:slug", (req, res) => {
  const detail = getReviewItemDetail(req.params.batchNum, req.params.slug);
  if (!detail) return res.status(404).json({ error: "Review item not found" });
  const rebuild = rebuildBySlug.get(req.params.slug);
  res.json({
    ...detail,
    rebuilding: Boolean(rebuild?.running),
    rebuildError: rebuild?.error || null,
    rebuildFinishedAt: rebuild?.finishedAt || null,
  });
});

app.post("/api/leads/:slug/retry", (req, res) => {
  const { slug } = req.params;
  if (!leadExists(slug)) return res.status(404).json({ error: "Lead not found" });
  if (isSlugSent(slug)) return res.status(400).json({ error: "Lead already sent — cannot retry" });
  if (pipelineProcess || searchProcess) {
    return res.status(409).json({ error: "Cannot retry while a batch pipeline job is running" });
  }
  if (retryBySlug.get(slug)?.running || rebuildBySlug.get(slug)?.running) {
    return res.status(409).json({ error: "Retry already running for this lead" });
  }

  const batchNum = req.body?.batchNum || findBatchForSlug(slug);
  if (!batchNum) return res.status(400).json({ error: "No batch found for this lead" });

  retryBySlug.set(slug, { running: true, startedAt: new Date().toISOString() });
  res.json({ started: true, slug, batchNum });

  (async () => {
    try {
      await retryLeadPipeline(slug, { batchNum });
      kickGroqDraftWorker();
      retryBySlug.set(slug, { running: false, finishedAt: new Date().toISOString() });
    } catch (err) {
      retryBySlug.set(slug, { running: false, error: err.message });
      console.error(`[retry] ✗ ${slug}:`, err.message);
    }
  })();
});

app.post("/api/review/:batchNum/:slug/rebuild-mockup", (req, res) => {
  const { batchNum, slug } = req.params;
  const detail = getReviewItemDetail(batchNum, slug);
  if (!detail) return res.status(404).json({ error: "Review item not found" });
  if (!detail.canRebuild) return res.status(400).json({ error: "Cannot rebuild — missing lead data" });
  if (rebuildBySlug.get(slug)?.running) return res.status(409).json({ error: "Rebuild already running" });

  rebuildBySlug.set(slug, { running: true, startedAt: new Date().toISOString() });
  res.json({ started: true, slug });

  (async () => {
    try {
      await rebuildMockupOne(slug);
      try {
        queueEmailRedraftAfterRebuild(batchNum, slug);
        kickGroqDraftWorker();
      } catch (err) {
        console.warn(`[rebuild] email re-draft queue skipped for ${slug}:`, err.message);
      }
      rebuildBySlug.set(slug, { running: false, finishedAt: new Date().toISOString() });
    } catch (err) {
      rebuildBySlug.set(slug, { running: false, error: err.message });
      console.error(`[rebuild] ✗ ${slug}:`, err.message);
    }
  })();
});

app.get("/api/pipeline/log", (_req, res) => {
  res.json(getPipelinePayload());
});

app.listen(port, () => {
  const staleJobs = reconcileStaleJobs({ quiet: true });
  if (staleJobs.cleared) {
    console.log(`[reconcile] closed ${staleJobs.cleared} stale job(s) from prior session`);
  }
  reconcileSentState({ quiet: true });
  const stuckDrafts = reconcileStuckDrafts({ quiet: true });
  if (stuckDrafts.draftsReady || stuckDrafts.draftsRequeued) {
    console.log(
      `[reconcile] unstuck drafts: ${stuckDrafts.draftsReady} ready, ${stuckDrafts.draftsRequeued} re-queued`
    );
  }
  const stuck = reconcileStuckSends({ quiet: true });
  if (stuck.sendsRequeued) {
    console.log(`[reconcile] re-queued ${stuck.sendsRequeued} stuck send(s) after restart`);
  }
  const { recovered } = recoverAllOrphanReviewLeads({ quiet: true });
  if (recovered.length) {
    console.log(`[reconcile] recovered ${recovered.length} orphan lead(s) for review`);
  }
  console.log(`Facebook Leads UI → http://localhost:${port}`);
  kickGroqDraftWorker();
  kickSendWorker();
  kickQaAutoRebuildWorker();
});
