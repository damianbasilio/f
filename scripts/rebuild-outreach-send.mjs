/**
 * Rebuild mockups, draft outreach, queue, and send for specific slugs.
 * Usage: node scripts/rebuild-outreach-send.mjs <slug...>
 */
import fs from "node:fs";
import path from "node:path";
import { root, loadEnv } from "../lib/load-env.mjs";
import { slugDir } from "../lib/paths.mjs";
import { rebuildMockupOne } from "../lib/rebuild-mockup-one.mjs";
import { buildFbOutreachCopy, writeOutreachMd } from "../lib/outreach-email-fb.mjs";
import { loadQueues, saveQueues, enqueueReview, approveReview } from "../lib/outreach-queues.mjs";
import { sendOutreachForSlug } from "../lib/outreach-send.mjs";
import { markSendResult } from "../lib/outreach-queues.mjs";
import { verifyAndScrapeFacebook } from "../lib/facebook-verify.mjs";
import { parseSlugs } from "../lib/slugs.mjs";

loadEnv();

const BATCH = "1780804222880";
const slugs = parseSlugs(process.argv, 2);

if (!slugs.length) {
  console.error("Usage: node scripts/rebuild-outreach-send.mjs <slug...>");
  process.exit(1);
}

function findReview(data, slug) {
  return data.review.find((r) => r.slug === slug);
}

async function restoreJadeanIfNeeded(slug) {
  if (fs.existsSync(slugDir(slug, "lead.json"))) return false;

  const importPath = path.join(root, "data", "imports", `import-${BATCH}.json`);
  if (!fs.existsSync(importPath)) throw new Error(`Missing import file for restore: ${importPath}`);

  const leads = JSON.parse(fs.readFileSync(importPath, "utf8"));
  const lead = leads.find((l) => l.name?.includes("Jadean") || l.facebook?.includes("JadeansSmokinSixO"));
  if (!lead) throw new Error("Jadean lead not found in import JSON");

  fs.mkdirSync(slugDir(slug, "assets"), { recursive: true });
  fs.writeFileSync(slugDir(slug, "lead.json"), JSON.stringify(lead, null, 2) + "\n", "utf8");
  console.log(`  ↻ restored ${slug} from import JSON`);

  console.log(`  → verify ${slug}`);
  const result = await verifyAndScrapeFacebook(lead.facebook || lead.url, lead, slug, slugDir(slug, "assets"));
  fs.writeFileSync(slugDir(slug, "verification.json"), JSON.stringify(result, null, 2) + "\n", "utf8");
  console.log(`  ✓ verify — ${result.status}`);
  return true;
}

function queueReadyForSend(batchNum, slug) {
  const data = loadQueues(batchNum);
  let review = findReview(data, slug);
  const now = new Date().toISOString();

  if (!review) {
    enqueueReview(batchNum, slug);
    const fresh = loadQueues(batchNum);
    review = findReview(fresh, slug);
    review.status = "ready";
    review.readyAt = now;
    saveQueues(batchNum, fresh);
    return approveReview(batchNum, slug);
  }

  review.status = "ready";
  review.readyAt = now;
  delete review.error;

  let send = data.send.find((s) => s.slug === slug);
  if (!send) {
    saveQueues(batchNum, data);
    return approveReview(batchNum, slug);
  }

  send.status = "queued";
  send.approvedAt = now;
  send.batchNum = String(batchNum);
  delete send.error;
  delete send.sendingAt;
  delete send.sentAt;
  data.sendQueue = data.sendQueue.filter((s) => s !== slug);
  data.sendQueue.push(slug);
  saveQueues(batchNum, data);
  return send;
}

console.log(`\nRebuild + outreach + send — ${slugs.length} slug(s)\n`);

for (const slug of slugs) {
  await restoreJadeanIfNeeded(slug);

  console.log(`\n══ Rebuild: ${slug} ══`);
  try {
    await rebuildMockupOne(slug);
    console.log(`  ✓ rebuild complete`);
  } catch (err) {
    console.error(`  ✗ rebuild failed: ${err.message}`);
    continue;
  }

  console.log(`  → draft outreach`);
  try {
    const copy = await buildFbOutreachCopy(slug, 0);
    writeOutreachMd(slug, copy);
    console.log(`  ✓ outreach.md (${copy.source || "groq"})`);
  } catch (err) {
    console.error(`  ✗ draft failed: ${err.message}`);
    continue;
  }

  try {
    queueReadyForSend(BATCH, slug);
    console.log(`  ✓ queued for send`);
  } catch (err) {
    console.error(`  ✗ queue failed: ${err.message}`);
    continue;
  }

  console.log(`  → send email`);
  const result = await sendOutreachForSlug(slug, { force: true });
  if (result.ok) {
    markSendResult(BATCH, slug, { ok: true, sentAt: result.sentAt });
    console.log(`  ✓ sent → ${result.sentAt || "ok"}`);
  } else {
    markSendResult(BATCH, slug, { ok: false, error: result.reason || result.result });
    console.error(`  ✗ send failed: ${result.reason || result.result}`);
  }
}

console.log("\nDone.");
