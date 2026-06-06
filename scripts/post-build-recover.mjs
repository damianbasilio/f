/**
 * Re-run post-build (QA, deploy, images) for a slug after stitch build.
 * Usage: node scripts/post-build-recover.mjs <slug> [--enqueue BATCH_NUM]
 */
import fs from "node:fs";
import { postBuildQueue } from "../lib/post-build-queue.mjs";
import { enqueueReview } from "../lib/outreach-queues.mjs";
import { kickGroqDraftWorker } from "../lib/groq-draft-worker.mjs";
import { slugDir } from "../lib/paths.mjs";

const slug = process.argv[2];
const batchIdx = process.argv.indexOf("--enqueue");
const batchNum = batchIdx !== -1 ? process.argv[batchIdx + 1] : null;

if (!slug) {
  console.error("Usage: node scripts/post-build-recover.mjs <slug> [--enqueue BATCH_NUM]");
  process.exit(1);
}

if (!fs.existsSync(slugDir(slug, "index.html"))) {
  console.error(`Missing ${slugDir(slug, "index.html")} — run stitch build first`);
  process.exit(1);
}

const result = await postBuildQueue(slug);
console.log("\n── Summary ──");
console.log(`post-build: ${result.ok ? "pass" : "fail"}`);
console.log(`deploy: ${result.summary?.deploy}`);
console.log(`design QA: ${result.summary?.designQa}`);
console.log(`site eval: ${result.summary?.siteEval}`);

if (batchNum && (result.ok || result.summary?.siteEval === "pass")) {
  enqueueReview(batchNum, slug);
  kickGroqDraftWorker();
  console.log(`Enqueued ${slug} for review (batch ${batchNum})`);
}

process.exit(result.ok ? 0 : 1);
