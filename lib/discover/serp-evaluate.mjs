/**
 * Evaluate Google SERP organic results for FB-only lead candidacy.
 * Scans top results — does not assume #1 is the only signal, and does not
 * treat any Facebook URL at #2/#3 as belonging to the business without a name match.
 */
import { facebookPageSiteKey, isFacebookUrl } from "../facebook-detect.mjs";
import {
  classifyDiscoveryWebsite,
  extractFacebookUrl,
  isSkippedSerpUrl,
  passesSerpPrefilter,
} from "./filters.mjs";

const GENERIC_NAME_TOKENS = new Set([
  "the",
  "and",
  "llc",
  "inc",
  "corp",
  "co",
  "company",
  "services",
  "service",
  "shop",
  "store",
  "auto",
  "home",
  "local",
  "best",
  "pro",
  "plus",
  "group",
  "repair",
  "salon",
  "towing",
  "cleaning",
  "care",
]);

const FB_SKIP_PATH = /\/(?:groups|posts|watch|events|marketplace|photo|photos|videos|reel|story|stories|share)\//i;

/**
 * @param {string} name
 */
function nameTokens(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 3 && !GENERIC_NAME_TOKENS.has(t));
}

/**
 * @param {string} fbUrl
 * @param {string} businessName
 * @param {string} [serpTitle]
 */
export function facebookUrlMatchesBusiness(fbUrl, businessName, serpTitle = "") {
  if (!fbUrl || !isFacebookUrl(fbUrl)) return false;
  if (FB_SKIP_PATH.test(fbUrl)) return false;

  const tokens = nameTokens(businessName);
  if (!tokens.length) return false;

  const key = facebookPageSiteKey(fbUrl) || "";
  const slug = key.replace(/^facebook\.com\//, "").replace(/^page\//, "");
  const haystack = `${slug} ${serpTitle}`.toLowerCase().replace(/[^a-z0-9]+/g, " ");

  let hits = 0;
  for (const token of tokens) {
    if (token.length >= 4 && (slug.includes(token) || haystack.includes(token))) hits += 1;
    else if (token.length === 3 && slug.includes(token)) hits += 1;
  }

  // Require at least one strong (4+ char) token hit, or two weaker hits
  const strongHits = tokens.filter((t) => t.length >= 4 && (slug.includes(t) || haystack.includes(t))).length;
  return strongHits >= 1 || hits >= 2;
}

/**
 * @param {string} businessName
 * @param {{ rank: number, url: string, title?: string }[]} results
 * @param {number} [maxRank]
 */
export function findMatchingFacebookInResults(businessName, results, maxRank = 8) {
  for (const row of results) {
    if (row.rank > maxRank) break;
    if (!isFacebookUrl(row.url)) continue;
    if (FB_SKIP_PATH.test(row.url)) continue;
    if (facebookUrlMatchesBusiness(row.url, businessName, row.title || "")) {
      return { url: row.url.trim(), rank: row.rank };
    }
  }
  return null;
}

/**
 * @param {object} params
 * @param {string} params.businessName
 * @param {string} [params.websiteUri]
 * @param {{ rank: number, url: string, title?: string }[]} params.organicResults
 */
export function evaluateSerpForLead({ businessName, websiteUri, organicResults }) {
  const filtered = (organicResults || []).filter((r) => r.url && !isSkippedSerpUrl(r.url));
  if (!filtered.length) {
    return { pass: false, reason: "no_organic_results", googleFirstUrl: "", facebook: "" };
  }

  const first = filtered[0];
  const googleFirstUrl = first.url;
  const fbFromGbp = extractFacebookUrl(websiteUri);

  if (fbFromGbp) {
    return {
      pass: true,
      reason: "gbp_facebook_confirmed",
      googleFirstUrl,
      facebook: fbFromGbp,
    };
  }

  // Scan top results for this business's Facebook page before rejecting on #1
  const matchedFb = findMatchingFacebookInResults(businessName, filtered);
  if (matchedFb) {
    return {
      pass: true,
      reason: `matched_fb_rank_${matchedFb.rank}`,
      googleFirstUrl,
      facebook: matchedFb.url,
    };
  }

  if (classifyDiscoveryWebsite(first.url) === "owned") {
    return { pass: false, reason: "serp_first_is_owned_site", googleFirstUrl, facebook: "" };
  }

  if (!passesSerpPrefilter(first.url)) {
    return { pass: false, reason: "serp_first_not_directory", googleFirstUrl, facebook: "" };
  }

  return { pass: false, reason: "no_matching_facebook_in_serp", googleFirstUrl, facebook: "" };
}
