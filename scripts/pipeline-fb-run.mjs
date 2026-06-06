/**
 * Main Facebook leads pipeline orchestrator.
 * Usage: node scripts/pipeline-fb-run.mjs <slugs.txt|slug...> [--batch N] [--skip-stitch]
 */
import fs from "node:fs";
import path from "node:path";
import { root, loadEnv, getStitchApiKeys } from "../lib/load-env.mjs";
import { parseSlugs } from "../lib/slugs.mjs";
import { verifyAndScrapeFacebook } from "../lib/facebook-verify.mjs";
import { enrichLead } from "../lib/lead-enrichment.mjs";
import { writeFbStitchPrompt } from "../lib/stitch-prompt-fb.mjs";
import { buildSlug } from "../lib/stitch-build-one.mjs";
import { runPool, logPoolStart } from "../lib/stitch-pool.mjs";
import { postBuildQueue } from "../lib/post-build-queue.mjs";
import { resetBatchDedup } from "../lib/outreach-email-fb.mjs";
import { enqueueReview } from "../lib/outreach-queues.mjs";
import { drainGroqQueue } from "../lib/groq-draft-worker.mjs";
import { slugDir } from "../lib/paths.mjs";

const skipStitch = process.argv.includes("--skip-stitch");
const batchIdx = process.argv.indexOf("--batch");
const batchNum = batchIdx !== -1 && process.argv[batchIdx + 1] ? process.argv[batchIdx + 1] : Date.now();
const slugs = parseSlugs(process.argv.filter((a) => !["--skip-stitch", "--batch"].includes(a) && a !== process.argv[batchIdx + 1]), 2);

if (slugs.length === 0) {
  console.error("Usage: node scripts/pipeline-fb-run.mjs <slug...|slugs.txt> [--batch N] [--skip-stitch]");
  process.exit(1);
}

loadEnv();
resetBatchDedup();

const batchDir = path.join(root, "data", "batches", `batch-${batchNum}`);
fs.mkdirSync(batchDir, { recursive: true });

/** @type {object} */
const status = {
  batchId: batchNum,
  startedAt: new Date().toISOString(),
  slugs: {},
  passed: [],
  skipped: [],
  failed: [],
};

console.log(`\nFacebook Leads pipeline — batch ${batchNum} (${slugs.length} slug(s))\n`);

for (const slug of slugs) {
  console.log(`\n══ ${slug} ══`);
  const dir = slugDir(slug);
  const leadPath = path.join(dir, "lead.json");

  if (!fs.existsSync(leadPath)) {
    console.error(`  ✗ missing lead.json — run import-leads first`);
    status.failed.push(slug);
    status.slugs[slug] = { step: "import", status: "fail", reason: "missing lead.json" };
    continue;
  }

  const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
  const fbUrl = lead.facebook || lead.url;
  const assetsDir = path.join(dir, "assets");

  console.log(`  verifying Facebook profile…`);
  const verify = await verifyAndScrapeFacebook(fbUrl, lead, slug, assetsDir);

  fs.writeFileSync(path.join(dir, "verification.json"), JSON.stringify(verify, null, 2) + "\n", "utf8");

  if (verify.status === "skip") {
    console.log(`  ○ SKIP — ${verify.reason} (${verify.fbWebsiteUrl || "no url"})`);
    status.skipped.push(slug);
    status.slugs[slug] = { step: "verify", status: "skip", reason: verify.reason };
    continue;
  }

  if (verify.status === "error") {
    console.error(`  ✗ verify error: ${verify.error}`);
    status.failed.push(slug);
    status.slugs[slug] = { step: "verify", status: "fail", reason: verify.error };
    continue;
  }

  console.log(`  ✓ PASS — ${verify.reason}`);

  try {
    console.log(`  enriching brief…`);
    await enrichLead(slug, lead, verify);
    console.log(`  ✓ brief.md + prompt-input.json`);

    writeFbStitchPrompt(slug);
    console.log(`  ✓ stitch prompt`);
  } catch (err) {
    console.error(`  ✗ enrich/prompt: ${err.message}`);
    status.failed.push(slug);
    status.slugs[slug] = { step: "enrich", status: "fail", reason: err.message };
    continue;
  }

  status.passed.push(slug);
  status.slugs[slug] = { step: "enrich", status: "pass" };
}

const stitchSlugs = status.passed.filter((s) => !skipStitch);

if (stitchSlugs.length && getStitchApiKeys().length) {
  logPoolStart(stitchSlugs);
  const poolResults = await runPool(stitchSlugs, async (slug, worker) => {
    await buildSlug(slug, worker);
    return postBuildQueue(slug, { outreach: false });
  });

  for (const br of poolResults) {
    if (!br.ok) {
      status.slugs[br.slug] = { ...status.slugs[br.slug], stitch: "fail", error: br.error?.message };
      if (status.passed.includes(br.slug)) {
        status.passed = status.passed.filter((s) => s !== br.slug);
        status.failed.push(br.slug);
      }
    } else {
      status.slugs[br.slug] = {
        ...status.slugs[br.slug],
        stitch: "pass",
        postBuild: br.value?.ok ? "pass" : "fail",
        deploy: br.value?.summary?.deploy || "—",
      };
    }
  }

} else if (stitchSlugs.length) {
  console.log("\n○ Stitch skipped — no STITCH_API_KEY in .env (use --skip-stitch to silence)");
}

function canEnqueueForReview(slug, slugStatus) {
  if (slugStatus?.postBuild === "pass") return true;
  if (slugStatus?.stitch !== "pass") return false;
  const htmlPath = slugDir(slug, "index.html");
  if (!fs.existsSync(htmlPath)) return false;
  const evalPath = slugDir(slug, "design-qa", "site-eval.md");
  if (!fs.existsSync(evalPath)) return false;
  return /\*\*Result:\*\*\s*PASS/i.test(fs.readFileSync(evalPath, "utf8"));
}

for (const slug of status.passed) {
  const slugStatus = status.slugs[slug];
  if (canEnqueueForReview(slug, slugStatus)) {
    if (slugStatus?.postBuild !== "pass") {
      console.log(`  ○ review enqueue (site built; post-build had non-blocking QA issues)`);
    }
    enqueueReview(batchNum, slug);
    console.log(`  ✓ enqueued for review ${slug}`);
    status.slugs[slug] = { ...status.slugs[slug], outreach: "queued" };
  }
}

status.finishedAt = new Date().toISOString();
fs.writeFileSync(path.join(batchDir, "status.json"), JSON.stringify(status, null, 2) + "\n", "utf8");

if (!process.env.FB_PIPELINE_SPAWNED) {
  console.log("\n  Drafting outreach emails (Groq queue)…");
  await drainGroqQueue();
}

console.log(`\n── Batch ${batchNum} complete ──`);
console.log(`  Passed: ${status.passed.length} | Skipped: ${status.skipped.length} | Failed: ${status.failed.length}`);
console.log(`  Status: data/batches/batch-${batchNum}/status.json`);
console.log(`  Review: data/batches/batch-${batchNum}/queues.json`);
console.log(`\n→ Open http://localhost:3456 to review and approve emails one at a time.`);
