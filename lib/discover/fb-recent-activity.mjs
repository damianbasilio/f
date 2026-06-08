/**
 * Detect recent Facebook post activity from verify scrape payload.
 */
import { extractPostTimestampsFromHtml } from "../facebook-deep-scrape.mjs";

const MONTHS =
  "january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec";
const MONTH_DATE_RE = new RegExp(
  `\\b(${MONTHS})\\s+\\d{1,2}(?:,?\\s+|\\s+)\\(?\\d{4}\\)?|\\b\\d{1,2}\\s+(${MONTHS})\\s+\\d{4}`,
  "gi"
);
const ISO_DATE_RE = /\b(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})\b/g;
const RELATIVE_RE = /\b(\d{1,3})\s*(h|hr|hrs|hour|hours|d|day|days|w|wk|week|weeks)\b/gi;
const INACTIVE_RE =
  /permanently closed|no longer (?:open|operating|in business)|out of business|we (?:have )?closed|business closed|closed permanently|ceased operations/i;

/**
 * @param {string} text
 * @param {Date} now
 */
function datesFromText(text, now) {
  /** @type {Date[]} */
  const out = [];
  for (const m of text.matchAll(MONTH_DATE_RE)) {
    const d = Date.parse(m[0].replace(/[()]/g, ""));
    if (!Number.isNaN(d)) out.push(new Date(d));
  }
  for (const m of text.matchAll(ISO_DATE_RE)) {
    const d = new Date(+m[1], +m[2] - 1, +m[3]);
    if (!Number.isNaN(d.getTime())) out.push(d);
  }
  for (const m of text.matchAll(RELATIVE_RE)) {
    const n = Number(m[1]);
    const unit = m[2].toLowerCase();
    const d = new Date(now);
    if (/^h/.test(unit)) d.setHours(d.getHours() - n);
    else if (/^d/.test(unit)) d.setDate(d.getDate() - n);
    else if (/^w/.test(unit)) d.setDate(d.getDate() - n * 7);
    out.push(d);
  }
  return out;
}

/**
 * @param {object} params
 * @param {number[]} [params.postTimestamps] unix seconds
 * @param {string[]} [params.postCaptions]
 * @param {string[]} [params.postImages]
 * @param {string} [params.profileSummary]
 * @param {number} [params.maxAgeMonths]
 */
export function assessFacebookActivity(params) {
  const maxAgeMonths = params.maxAgeMonths ?? 12;
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setMonth(cutoff.getMonth() - maxAgeMonths);

  const combinedText = [...(params.postCaptions || []), params.profileSummary || ""].join("\n");

  if (INACTIVE_RE.test(combinedText)) {
    return { active: false, reason: "profile_says_closed", newestPostAt: null };
  }

  /** @type {Date[]} */
  const dated = [];

  for (const ts of params.postTimestamps || []) {
    dated.push(new Date(ts * 1000));
  }
  for (const d of datesFromText(combinedText, now)) {
    dated.push(d);
  }

  const recent = dated.filter((d) => d >= cutoff && d <= now);
  if (recent.length) {
    const newest = recent.reduce((a, b) => (a > b ? a : b));
    return {
      active: true,
      reason: "recent_post_dated",
      newestPostAt: newest.toISOString(),
    };
  }

  const staleOnly =
    dated.length > 0 &&
    dated.every((d) => d < cutoff);
  if (staleOnly) {
    const newest = dated.reduce((a, b) => (a > b ? a : b));
    return {
      active: false,
      reason: "posts_too_old",
      newestPostAt: newest.toISOString(),
    };
  }

  const captionCount = (params.postCaptions || []).filter((c) => c.length >= 25).length;
  const imageCount = (params.postImages || []).length;

  // Feed scroll loaded post media — proxy for recent activity when FB hides timestamps
  if (captionCount >= 1 && imageCount >= 2) {
    return {
      active: true,
      reason: "feed_content_present",
      newestPostAt: null,
    };
  }

  return { active: false, reason: "no_recent_posts", newestPostAt: null };
}

/**
 * @param {object} verifyResult
 * @param {number} [maxAgeMonths]
 */
export function assessFacebookActivityFromVerify(verifyResult, maxAgeMonths) {
  return assessFacebookActivity({
    postTimestamps: verifyResult.postTimestamps || [],
    postCaptions: verifyResult.postCaptions,
    postImages: verifyResult.postImages,
    profileSummary: verifyResult.profileSummary,
    maxAgeMonths,
  });
}

export { extractPostTimestampsFromHtml };
