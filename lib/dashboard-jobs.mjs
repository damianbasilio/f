/**
 * Dashboard job tracking for discover / pipeline runs.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";

export const JOB_STAGES = [
  { id: "discover", label: "Scraping leads" },
  { id: "verify", label: "Verifying lead search" },
  { id: "import", label: "Importing leads" },
  { id: "facebook", label: "Verifying Facebook profiles" },
  { id: "design", label: "Creating design" },
  { id: "finalize", label: "Final details" },
  { id: "live", label: "Preview live" },
];

const jobsDir = path.join(root, "data", "jobs");

function jobsPath(id) {
  return path.join(jobsDir, `${id}.json`);
}

function defaultStages() {
  /** @type {Record<string, 'pending'|'active'|'done'|'skipped'>} */
  const stages = {};
  for (const s of JOB_STAGES) stages[s.id] = "pending";
  return stages;
}

export function createJob({ type = "search", label = "New search", batchNum = null } = {}) {
  fs.mkdirSync(jobsDir, { recursive: true });
  const id = String(Date.now());
  const job = {
    id,
    type,
    label,
    batchNum,
    running: true,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    exitCode: null,
    currentStage: "discover",
    stages: defaultStages(),
    log: "",
  };
  job.stages.discover = "active";
  saveJob(job);
  return job;
}

export function saveJob(job) {
  fs.mkdirSync(jobsDir, { recursive: true });
  fs.writeFileSync(jobsPath(job.id), JSON.stringify(job, null, 2) + "\n", "utf8");
}

export function loadJob(id) {
  const p = jobsPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export function listJobs(limit = 20) {
  if (!fs.existsSync(jobsDir)) return [];
  return fs
    .readdirSync(jobsDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(jobsDir, f), "utf8")))
    .sort((a, b) => String(b.id).localeCompare(String(a.id)))
    .slice(0, limit);
}

export function getActiveJob() {
  return listJobs(50).find((j) => j.running) || null;
}

/** Close jobs left running:true after a server crash/restart (no live child process). */
export function reconcileStaleJobs({ quiet = false } = {}) {
  if (!fs.existsSync(jobsDir)) return { cleared: 0 };

  let cleared = 0;
  for (const f of fs.readdirSync(jobsDir).filter((name) => name.endsWith(".json"))) {
    const job = JSON.parse(fs.readFileSync(path.join(jobsDir, f), "utf8"));
    if (!job.running) continue;

    const batch = job.batchNum || job.log?.match(/batch[- ](\d{10,})/i)?.[1];
    finishJob(job, 0, batch);
    cleared++;
    if (!quiet) console.log(`[reconcile] closed stale job ${job.id}`);
  }

  return { cleared };
}

/**
 * Infer pipeline stage from accumulated log text.
 * @param {string} log
 * @returns {string}
 */
export function inferStageFromLog(log) {
  const lower = log.toLowerCase();
  if (/live mockup|github pages|✓ live mockup/.test(lower)) return "live";
  if (/post-build|post-build:|images:apply|qa:check|deploy:/.test(lower)) return "finalize";
  if (/stitch pool|stitch project|generate_screen|site ready:/.test(lower)) return "design";
  if (/verifying facebook profile|══ .* ══/.test(log) && /stitch pool/.test(lower) === false) {
    if (/pipeline — batch/.test(lower)) return "facebook";
  }
  if (/imported \d+ lead|import leads|batch-\d+\/slugs/.test(lower)) return "import";
  if (/verify-export|verify facebook \+ export|discover verify/.test(lower)) return "verify";
  if (/discover|google places|serp batch|→ .* in /.test(lower)) return "discover";
  return "discover";
}

/**
 * @param {object} job
 * @param {string} logAppend
 */
export function appendJobLog(job, logAppend) {
  job.log += logAppend;
  const stage = inferStageFromLog(job.log);
  job.currentStage = stage;

  let reached = false;
  for (const { id } of JOB_STAGES) {
    if (id === stage) reached = true;
    if (!reached) job.stages[id] = job.stages[id] === "skipped" ? "skipped" : "done";
    else if (id === stage) job.stages[id] = "active";
    else job.stages[id] = job.stages[id] === "done" ? "done" : "pending";
  }
}

export function finishJob(job, exitCode, batchNum = null) {
  job.running = false;
  job.finishedAt = new Date().toISOString();
  job.exitCode = exitCode;
  if (batchNum) job.batchNum = batchNum;
  for (const { id } of JOB_STAGES) {
    if (job.stages[id] === "active") job.stages[id] = exitCode === 0 ? "done" : "pending";
    if (exitCode === 0 && job.stages[id] === "pending") job.stages[id] = "skipped";
  }
  if (exitCode === 0) {
    job.stages.live = "done";
    job.currentStage = "live";
  }
  saveJob(job);
}
