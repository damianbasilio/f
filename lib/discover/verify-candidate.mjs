/**
 * Verify a single discovery candidate (Facebook scrape, email, activity).
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "../load-env.mjs";
import { verifyAndScrapeFacebook } from "../facebook-verify.mjs";
import { toImportLead } from "./normalize-lead.mjs";
import { validateLead, deriveSlug } from "../lead-import.mjs";
import { assessFacebookActivityFromVerify } from "./fb-recent-activity.mjs";

/**
 * @param {object} candidate
 * @param {{ skipActivity?: boolean, maxPostAgeMonths?: number }} [opts]
 * @returns {Promise<{ ok: true, lead: object, slug: string } | { ok: false, reason: string }>}
 */
export async function verifyDiscoverCandidate(candidate, opts = {}) {
  const skipActivity = opts.skipActivity ?? false;
  const maxPostAgeMonths =
    opts.maxPostAgeMonths ?? (Number(process.env.DISCOVER_FB_MAX_POST_AGE_MONTHS) || 12);

  const name = candidate.name || "unknown";
  const fbUrl = candidate.facebook || candidate.url;

  if (!fbUrl || !/facebook\.com/i.test(fbUrl)) {
    return { ok: false, reason: "no_facebook_url" };
  }

  const slug = deriveSlug(name, candidate.city || "");
  const assetsDir = path.join(root, "data", "discover", "output", ".verify-tmp", slug);
  fs.mkdirSync(assetsDir, { recursive: true });

  const result = await verifyAndScrapeFacebook(fbUrl, candidate, slug, assetsDir);

  if (result.status === "skip") {
    return { ok: false, reason: result.reason || "verify_skip" };
  }
  if (result.status === "error") {
    return { ok: false, reason: result.error || "verify_error" };
  }

  const email =
    result.profileAbout?.email || result.pageData?.email || candidate.emails || "";

  if (!email || !String(email).includes("@")) {
    return { ok: false, reason: "no_email_on_facebook" };
  }

  if (!skipActivity) {
    const activity = assessFacebookActivityFromVerify(result, maxPostAgeMonths);
    if (!activity.active) {
      return { ok: false, reason: `inactive_fb_${activity.reason}` };
    }
  }

  const enriched = {
    ...toImportLead(candidate),
    emails: String(email).trim(),
    facebook: fbUrl,
    url: fbUrl,
    phone_number:
      candidate.phone_number || result.profileAbout?.phone || result.pageData?.phone || "",
  };

  if (result.profileAbout?.address && !enriched.street) {
    enriched.street = result.profileAbout.address.split(",")[0]?.trim() || enriched.street;
  }

  try {
    validateLead(enriched);
    return { ok: true, lead: enriched, slug };
  } catch (err) {
    return { ok: false, reason: err.message };
  }
}
