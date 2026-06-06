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
      const statusPath = path.join(batchesDir, d, "status.json");
      if (!fs.existsSync(statusPath)) return { id: d, status: null };
      return { id: d, status: JSON.parse(fs.readFileSync(statusPath, "utf8")) };
    })
    .sort((a, b) => b.id.localeCompare(a.id));

  const reports = fs.readdirSync(root).filter((f) => /^outreach-report-\d+\.md$/.test(f));
  reports.sort().reverse();

  res.json({
    batches,
    latestReport: reports[0] || null,
    pipelineRunning: Boolean(pipelineProcess),
  });
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
    { cwd: root }
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
  });

  res.json({ started: true, batchNum });
});

app.get("/api/pipeline/log", (_req, res) => {
  res.json({ running: Boolean(pipelineProcess), log: pipelineLog });
});

app.post("/api/outreach/approve-send", (req, res) => {
  const batchNum = req.body?.batchNum;
  if (!batchNum) return res.status(400).json({ error: "batchNum required" });

  const approvedFile = path.join(root, "data", "batches", `batch-${batchNum}`, "approved.txt");
  if (!fs.existsSync(approvedFile)) return res.status(404).json({ error: "No approved.txt — run pipeline first" });

  const proc = spawn(process.execPath, [path.join(scriptsDir, "outreach-send.mjs"), "--file", approvedFile, "--send"], {
    cwd: root,
  });
  let out = "";
  proc.stdout.on("data", (d) => (out += d));
  proc.stderr.on("data", (d) => (out += d));
  proc.on("close", (code) => {
    res.json({ code, output: out });
  });
});

app.listen(port, () => {
  console.log(`Facebook Leads UI → http://localhost:${port}`);
});
