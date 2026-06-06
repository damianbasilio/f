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
} from "../lib/outreach-queues.mjs";
import { kickGroqDraftWorker, getGroqWorkerStatus } from "../lib/groq-draft-worker.mjs";
import { kickSendWorker, getSendWorkerStatus } from "../lib/send-queue-worker.mjs";

const app = express();
const port = Number(process.env.PORT || 3456);
const scriptsDir = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(root, "public")));
app.get("/outreach-report-:id.md", (req, res) => {
  const p = path.join(root, `outreach-report-${req.params.id}.md`);
  if (fs.existsSync(p)) res.type("text/markdown").send(fs.readFileSync(p, "utf8"));
  else res.status(404).send("Not found");
});

/** @type {import('node:child_process').ChildProcess|null} */
let pipelineProcess = null;
let pipelineLog = "";

app.get("/api/status", (_req, res) => {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) {
    return res.json({ batches: [], latestReport: null });
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

  res.json({
    batches,
    latestReport: reports[0] || null,
    pipelineRunning: Boolean(pipelineProcess),
    workers: { ...getGroqWorkerStatus(), ...getSendWorkerStatus() },
  });
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

app.post("/api/import", (req, res) => {
  try {
    const body = req.body?.leads ?? req.body;
    if (!body) return res.status(400).json({ error: "No JSON body" });

    const batchNum = Date.now();
    const importPath = path.join(root, "data", "imports", `import-${batchNum}.json`);
    fs.mkdirSync(path.dirname(importPath), { recursive: true });
    fs.writeFileSync(importPath, JSON.stringify(body, null, 2) + "\n", "utf8");

    const proc = spawn(process.execPath, [path.join(scriptsDir, "import-leads.mjs"), importPath, "--batch", String(batchNum)], {
      cwd: root,
    });
    let out = "";
    proc.stdout.on("data", (d) => (out += d));
    proc.stderr.on("data", (d) => (out += d));
    proc.on("close", (code) => {
      if (code !== 0) return res.status(500).json({ error: out });
      res.json({ batchNum, output: out, slugsFile: `data/batches/batch-${batchNum}/slugs.txt` });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/pipeline/run", (req, res) => {
  const batchNum = req.body?.batchNum;
  if (!batchNum) return res.status(400).json({ error: "batchNum required" });

  const slugsFile = path.join(root, "data", "batches", `batch-${batchNum}`, "slugs.txt");
  if (!fs.existsSync(slugsFile)) return res.status(404).json({ error: "Batch not found" });

  if (pipelineProcess) return res.status(409).json({ error: "Pipeline already running" });

  pipelineLog = "";

  pipelineProcess = spawn(
    process.execPath,
    [path.join(scriptsDir, "pipeline-fb-run.mjs"), slugsFile, "--batch", String(batchNum)],
    { cwd: root, env: { ...process.env, FB_PIPELINE_SPAWNED: "1" } }
  );

  pipelineProcess.stdout.on("data", (d) => {
    pipelineLog += d.toString();
  });
  pipelineProcess.stderr.on("data", (d) => {
    pipelineLog += d.toString();
  });
  pipelineProcess.on("close", (code) => {
    pipelineLog += `\n[Pipeline exited with code ${code}]\n`;
    pipelineProcess = null;
    kickGroqDraftWorker();
  });

  res.json({ started: true, batchNum });
});

app.get("/api/pipeline/log", (_req, res) => {
  res.json({ running: Boolean(pipelineProcess), log: pipelineLog });
});

app.listen(port, () => {
  console.log(`Facebook Leads UI → http://localhost:${port}`);
  kickGroqDraftWorker();
  kickSendWorker();
});
