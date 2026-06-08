/**
 * Approve all ready review items in a batch and send outreach.
 * Usage: node scripts/approve-and-send-batch.mjs <batchNum> [--send]
 */
import fs from "fs";
import { approveReview, loadQueues, markGroqReady } from "../lib/outreach-queues.mjs";
import { slugDir } from "../lib/paths.mjs";
import { drainGroqQueue } from "../lib/groq-draft-worker.mjs";
import { sendOutreachForSlug, getSendDelayMs, delayBetweenSends } from "../lib/outreach-send.mjs";

const batchNum = process.argv[2];
const doSend = process.argv.includes("--send");

if (!batchNum) {
  console.error("Usage: node scripts/approve-and-send-batch.mjs <batchNum> [--send]");
  process.exit(1);
}

await drainGroqQueue();

const data = loadQueues(batchNum);
for (const item of data.review) {
  if (item.status === "approved" || item.status === "sent") continue;
  const hasOutreach = fs.existsSync(slugDir(item.slug, "outreach.md"));
  if (item.status === "drafting" && hasOutreach) {
    markGroqReady(batchNum, item.slug);
    item.status = "ready";
  }
}

for (const item of loadQueues(batchNum).review) {
  if (item.status !== "ready") {
    console.log(`  ○ skip ${item.slug} — ${item.status}`);
    continue;
  }
  try {
    approveReview(batchNum, item.slug);
    console.log(`  ✓ approved ${item.slug}`);
  } catch (err) {
    console.log(`  ✗ ${item.slug}: ${err.message}`);
  }
}

if (doSend) {
  const approved = loadQueues(batchNum).send.filter((s) => s.status === "queued");
  const delayMs = getSendDelayMs();
  for (let i = 0; i < approved.length; i++) {
    const { slug } = approved[i];
    const row = await sendOutreachForSlug(slug);
    if (row.ok) console.log(`  ✓ sent ${slug}`);
    else console.log(`  ✗ ${slug}: ${row.reason || row.result}`);
    if (i < approved.length - 1 && delayMs > 0) await delayBetweenSends(delayMs);
  }
} else {
  console.log("\n  Dry-run approve only. Add --send to deliver emails.");
}
