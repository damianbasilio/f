import { parseSlugs } from "../lib/slugs.mjs";
import { parseOutreachMd, hasOutreachSignature } from "../lib/parse-outreach.mjs";
import {
  getSendDelayMs,
  delayBetweenSends,
  sendOutreachForSlug,
} from "../lib/outreach-send.mjs";

const doSend = process.argv.includes("--send");
const force = process.argv.includes("--force");
const skipLiveCheck = process.argv.includes("--skip-live-check");

function parseTestTo() {
  const idx = process.argv.indexOf("--test-to");
  if (idx === -1 || !process.argv[idx + 1]) return null;
  return process.argv[idx + 1].trim();
}

const testTo = parseTestTo();
const isTestSend = Boolean(testTo);

function parseSendSlugs() {
  const fileIdx = process.argv.indexOf("--file");
  if (fileIdx !== -1 && process.argv[fileIdx + 1]) {
    return parseSlugs(["", "", process.argv[fileIdx + 1]], 2);
  }
  const skipFlags = new Set(["--send", "--force", "--skip-live-check", "--file", "--test-to"]);
  const skipNextValueFor = new Set(["--file", "--test-to"]);
  const args = process.argv.slice(2).filter((a, i, arr) => {
    if (skipFlags.has(a)) return false;
    if (i > 0 && skipNextValueFor.has(arr[i - 1])) return false;
    return true;
  });
  return parseSlugs(["", "", ...args], 2);
}

const slugs = parseSendSlugs();

if (slugs.length === 0) {
  console.error(
    "Usage: node scripts/outreach-send.mjs <slug...|--file batch.txt> [--send] [--force] [--skip-live-check] [--test-to email]"
  );
  process.exit(1);
}

if (isTestSend && !doSend) {
  console.error("--test-to requires --send");
  process.exit(1);
}

function printPreview(slug, { to, subject, text, mockupUrl }) {
  console.log(`\n── ${slug} (dry-run) ──`);
  console.log(`To:      ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Mockup:  ${mockupUrl}`);
  console.log("─".repeat(40));
  console.log(text);
  console.log("─".repeat(40));
  console.log("(Add --send to deliver via Gmail)");
}

/**
 * @returns {{ slug: string, result: string, reason?: string }}
 */
async function processSlug(slug) {
  if (!doSend) {
    let parsed;
    try {
      parsed = parseOutreachMd(slug);
    } catch (err) {
      return { slug, result: "fail", reason: err.message };
    }
    if (isTestSend) {
      parsed.to = testTo;
      parsed.subject = `[TEST] ${parsed.subject}`;
    }
    printPreview(slug, parsed);
    return { slug, result: "dry-run" };
  }

  if (isTestSend) {
    let parsed;
    try {
      parsed = parseOutreachMd(slug);
    } catch (err) {
      return { slug, result: "fail", reason: err.message };
    }
    parsed.to = testTo;
    parsed.subject = `[TEST] ${parsed.subject}`;
    const body = `[TEST — not sent to the business. Intended recipient was in outreach.md.]\n\n${parsed.text}`;
    if (!hasOutreachSignature(body)) {
      return { slug, result: "fail", reason: "email body missing signature block before send" };
    }
    const { sendEmail } = await import("../lib/outreach-send.mjs");
    try {
      await sendEmail({ to: parsed.to, subject: parsed.subject, text: body });
      console.log(`\n✓ Test sent ${slug} → ${parsed.to}`);
      return { slug, result: "test-sent" };
    } catch (err) {
      return { slug, result: "fail", reason: err.message };
    }
  }

  const row = await sendOutreachForSlug(slug, { force, skipLiveCheck });
  if (row.result === "skipped") {
    return { slug, result: "skipped", reason: row.reason };
  }
  if (!row.ok) {
    return { slug, result: "fail", reason: row.reason };
  }
  console.log(`\n✓ Sent ${slug} at ${row.sentAt}`);
  return { slug, result: "sent" };
}

const results = [];
const delayMs = getSendDelayMs();

for (let i = 0; i < slugs.length; i++) {
  const row = await processSlug(slugs[i]);
  results.push(row);
  if (doSend && row.result === "sent" && i < slugs.length - 1 && delayMs > 0) {
    console.log(`  … waiting ${delayMs / 1000}s before next send`);
    await delayBetweenSends(delayMs);
  }
}

console.log("\n── Summary ──");
console.log("| Slug | Result | Notes |");
console.log("| ---- | ------ | ----- |");
for (const r of results) {
  const notes = (r.reason || "").replace(/\|/g, "\\|").slice(0, 80);
  console.log(`| ${r.slug} | ${r.result} | ${notes} |`);
}

const anyFail = results.some((r) => r.result === "fail");
if (anyFail) process.exit(1);

if (!doSend && results.some((r) => r.result === "dry-run")) {
  console.log("\n→ Dry-run only. Re-run with --send after git push and review.");
}
