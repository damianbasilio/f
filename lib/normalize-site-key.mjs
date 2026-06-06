/**
 * Canonical site key for prospect dedup (registry + funnel).
 */
import { facebookPageSiteKey, isFacebookUrl } from "./facebook-detect.mjs";

const PLATFORM_SUFFIXES = [
  "wordpress.com",
  "wixsite.com",
  "squarespace.com",
  "godaddysites.com",
  "weebly.com",
  "yolasite.com",
  "blogspot.com",
  "tumblr.com",
  "myshopify.com",
  "webflow.io",
  "carrd.co",
  "strikingly.com",
  "jimdosite.com",
  "sites.google.com",
];

/**
 * @param {string} url
 * @returns {string|null}
 */
export function normalizeSiteKey(url) {
  if (!url || typeof url !== "string") return null;
  let parsed;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }

  const host = parsed.hostname.toLowerCase().replace(/^www\./, "").replace(/^m\./, "");
  if (!host) return null;

  if (isFacebookUrl(url)) {
    return facebookPageSiteKey(url);
  }

  for (const suffix of PLATFORM_SUFFIXES) {
    if (host === suffix || host.endsWith(`.${suffix}`)) {
      return host;
    }
  }

  const parts = host.split(".");
  if (parts.length >= 2) {
    return parts.slice(-2).join(".");
  }
  return host;
}
