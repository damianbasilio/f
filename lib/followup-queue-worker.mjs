/**
 * Follow-up worker — sends follow-up 1 after 3 days, marks dead after 3 more days.
 */
import { fileURLToPath } from "node:url";
import { loadEnv } from "./load-env.mjs";
import { sendEmail, getSendDelayMs, delayBetweenSends } from "./outreach-send.mjs";
import { buildFollowupEmail } from "./followup-email.mjs";
import {
  listAllLeads,
  getSentAt,
  updateLead,
  setLeadTimestamp,
} from "./lead-timestamps.mjs";
import { runGmailReplyCheck } from "./gmail-reply-checker.mjs";

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * @param {{ skipReplyCheck?: boolean }} opts
 */
export async function runFollowupWorker(opts = {}) {
  loadEnv();

  if (!opts.skipReplyCheck) {
    await runGmailReplyCheck();
  }

  let followupsSent = 0;
  let markedDead = 0;
  let skippedReplied = 0;
  const delayMs = getSendDelayMs();
  const now = Date.now();

  for (const { slug, lead } of listAllLeads()) {
    if (lead.repliedAt) {
      skippedReplied += 1;
      console.log(`[followup-worker] ○ ${slug} — skipped (replied)`);
      continue;
    }

    const sentAt = getSentAt(slug);
    if (!sentAt) continue;

    const sentMs = new Date(sentAt).getTime();
    if (Number.isNaN(sentMs)) continue;

    if (!lead.followUp1SentAt && now - sentMs >= THREE_DAYS_MS) {
      try {
        const { to, subject, text } = buildFollowupEmail(slug, lead);
        const info = await sendEmail({ to, subject, text });
        const followUp1SentAt = new Date().toISOString();
        setLeadTimestamp(slug, "followUp1SentAt", followUp1SentAt);
        followupsSent += 1;
        console.log(
          `[followup-worker] ✓ follow-up sent ${slug} to=${to} messageId=${info.messageId || ""}`
        );
        if (delayMs > 0) await delayBetweenSends(delayMs);
      } catch (err) {
        console.error(`[followup-worker] ✗ ${slug}: ${err.message}`);
      }
      continue;
    }

    if (lead.followUp1SentAt && !lead.repliedAt) {
      const followMs = new Date(lead.followUp1SentAt).getTime();
      if (!Number.isNaN(followMs) && now - followMs >= THREE_DAYS_MS) {
        updateLead(slug, { status: "dead" });
        markedDead += 1;
        console.log(`[followup-worker] ○ ${slug} — marked dead (no reply after follow-up)`);
      }
    }
  }

  console.log(
    `[followup-worker] followups=${followupsSent} dead=${markedDead} skipped-replied=${skippedReplied}`
  );
  return { followupsSent, markedDead, skippedReplied };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isMain) {
  runFollowupWorker()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(`[followup-worker] ✗ ${err.message}`);
      process.exit(1);
    });
}
