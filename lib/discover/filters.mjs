/**
 * Discovery prefilter — wraps existing libs + discover-only booking SaaS hosts.
 */
import { isDirectoryListing } from "../directory-hosts.mjs";
import { isFacebookUrl } from "../facebook-detect.mjs";
import { classifyWebsiteUrl } from "../vertical-profiles.mjs";

/** Booking / link-in-bio SaaS — not owned business sites (discover-only list). */
const BOOKING_HOST_PATTERNS = [
  /(?:^|\.)glossgenius\.com$/i,
  /(?:^|\.)booksy\.com$/i,
  /(?:^|\.)square\.site$/i,
  /(?:^|\.)squarespace\.com$/i,
  /(?:^|\.)wixsite\.com$/i,
  /(?:^|\.)myshopify\.com$/i,
  /(?:^|\.)vagaro\.com$/i,
  /(?:^|\.)fresha\.com$/i,
  /(?:^|\.)schedulicity\.com$/i,
  /(?:^|\.)setmore\.com$/i,
  /(?:^|\.)acuityscheduling\.com$/i,
  /(?:^|\.)calendly\.com$/i,
  /(?:^|\.)mindbodyonline\.com$/i,
  /(?:^|\.)styleseat\.com$/i,
  /(?:^|\.)treatwell\.(?:com|co\.uk)$/i,
  /(?:^|\.)simplybook\.(?:me|it)$/i,
];

/**
 * @param {string} url
 * @returns {boolean}
 */
export function isBookingPlatform(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const host = new URL(url.trim()).hostname.toLowerCase();
    return BOOKING_HOST_PATTERNS.some((re) => re.test(host));
  } catch {
    return false;
  }
}

/**
 * @param {string|null|undefined} url
 * @returns {"none"|"directory"|"owned"}
 */
export function classifyDiscoveryWebsite(url) {
  if (!url || typeof url !== "string") return "none";
  const trimmed = url.trim();
  if (!trimmed || !/^https?:\/\//i.test(trimmed)) return "none";
  if (isFacebookUrl(trimmed)) return "directory";
  if (isDirectoryListing(trimmed)) return "directory";
  if (isBookingPlatform(trimmed)) return "directory";
  return classifyWebsiteUrl(trimmed);
}

/**
 * Website prefilter — keep FB-only / no site / directory / booking SaaS.
 * @param {string|null|undefined} websiteUri
 */
export function passesWebsitePrefilter(websiteUri) {
  const cls = classifyDiscoveryWebsite(websiteUri);
  return cls === "none" || cls === "directory";
}

/**
 * SERP prefilter — keep if first organic is social or directory.
 * @param {string|null|undefined} firstUrl
 */
export function passesSerpPrefilter(firstUrl) {
  if (!firstUrl) return false;
  if (isFacebookUrl(firstUrl)) return true;
  if (isDirectoryListing(firstUrl)) return true;
  if (isBookingPlatform(firstUrl)) return true;
  return false;
}

/**
 * @param {string|null|undefined} url
 */
export function extractFacebookUrl(url) {
  if (!url || !isFacebookUrl(url)) return null;
  return url.trim();
}

/**
 * Skip URLs that are not useful organic results.
 * @param {string} url
 */
export function isSkippedSerpUrl(url) {
  if (!url) return true;
  const lower = url.toLowerCase();
  if (/google\.com\/maps/i.test(lower)) return true;
  if (/google\.com\/search/i.test(lower)) return true;
  if (/webcache\.googleusercontent\.com/i.test(lower)) return true;
  if (/accounts\.google\.com/i.test(lower)) return true;
  return false;
}
