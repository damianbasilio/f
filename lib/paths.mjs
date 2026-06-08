/**
 * All mockup site folders live under preview/ so client URLs read cleanly:
 * https://sites.damianbasilio.dev/preview/{slug}
 */
import path from "node:path";
import { root } from "./load-env.mjs";
import { MOCKUP_BASE, MOCKUPS_DIR } from "./constants.mjs";

/** Absolute path to preview/ */
export function mockupsRoot() {
  return path.join(root, MOCKUPS_DIR);
}

/** Absolute path to preview/{slug}/… */
export function slugDir(slug, ...parts) {
  return path.join(root, MOCKUPS_DIR, slug, ...parts);
}

/** Public mockup URL for outreach emails */
export function mockupUrl(slug) {
  return `${MOCKUP_BASE}/${slug}`;
}
