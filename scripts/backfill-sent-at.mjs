/**
 * Backfill lead.json sentAt from status.md and batch queues.json.
 * Usage: node scripts/backfill-sent-at.mjs
 */
import { backfillAllSentAt } from "../lib/lead-timestamps.mjs";

console.log("Backfilling sentAt for sent leads…\n");

const summary = backfillAllSentAt();

console.log(
  `\nDone — backfilled=${summary.backfilled} already-set=${summary.alreadySet} sent-no-timestamp=${summary.sentNoTimestamp} not-sent=${summary.notSent}`
);
