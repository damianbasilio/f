/**
 * Detect Facebook business page URLs and derive per-page site keys (not apex facebook.com).
 */

const FB_HOST_RE = /(^|\.)facebook\.com$/i;
const FB_SHORT_RE = /(^|\.)fb\.com$/i;

/**
 * @param {string} url
 */
export function isFacebookUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const host = new URL(url.trim()).hostname.toLowerCase().replace(/^www\./, "").replace(/^m\./, "");
    return FB_HOST_RE.test(host) || FB_SHORT_RE.test(host);
  } catch {
    return false;
  }
}

/**
 * Canonical registry/funnel key for a single Facebook page.
 * @param {string} url
 * @returns {string|null}
 */
export function facebookPageSiteKey(url) {
  if (!isFacebookUrl(url)) return null;
  let parsed;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }

  const idParam = parsed.searchParams.get("id");
  if (idParam && /^\d+$/.test(idParam)) {
    return `facebook.com/page/${idParam}`;
  }

  const path = parsed.pathname.replace(/\/+$/, "") || "/";
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "profile.php") {
    return idParam ? `facebook.com/page/${idParam}` : null;
  }

  if (segments[0] === "pages") {
    const numeric = segments.find((s) => /^\d{8,}$/.test(s));
    if (numeric) return `facebook.com/page/${numeric}`;
    const slug = segments[segments.length - 1];
    if (slug && slug !== "category" && !/^\d+$/.test(slug)) {
      return `facebook.com/${slug.toLowerCase()}`;
    }
  }

  if (segments[0] === "share" && segments[1]) {
    return `facebook.com/share/${segments[1]}`;
  }

  if (segments[0] === "people" && segments[1]) {
    return `facebook.com/people/${segments[1].toLowerCase()}`;
  }

  if (segments[0] === "p" && segments[1]) {
    return `facebook.com/p/${segments[1]}`;
  }

  const skipRoots = new Set(["watch", "groups", "events", "marketplace", "gaming", "login", "help"]);
  if (segments[0] && !skipRoots.has(segments[0].toLowerCase())) {
    if (/^\d{8,}$/.test(segments[0])) return `facebook.com/page/${segments[0]}`;
    return `facebook.com/${segments[0].toLowerCase()}`;
  }

  return path !== "/" ? `facebook.com${path.toLowerCase()}` : null;
}
