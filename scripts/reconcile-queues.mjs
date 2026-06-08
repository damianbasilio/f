#!/usr/bin/env node
/**
 * Sync queue state with status.md; optionally close stale review items as sent.
 * Usage: node scripts/reconcile-queues.mjs [--close-pending]
 */
import { reconcileSentState, reconcileStuckDrafts, reconcileStuckSends } from "../lib/queue-reconcile.mjs";

const closePending = process.argv.includes("--close-pending");
const result = {
  sent: reconcileSentState({ closePending, quiet: false }),
  drafts: reconcileStuckDrafts({ quiet: false }),
  sends: reconcileStuckSends({ quiet: false }),
};
console.log(JSON.stringify(result, null, 2));
