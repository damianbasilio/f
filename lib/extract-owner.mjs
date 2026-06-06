/**
 * Extract a real owner/founder first name from live site content (About pages, etc.).
 */

import { fetchHtml } from "./fetch-page.mjs";

const CORPORATE_WORDS =
  /\b(inc\.?|llc|l\.?l\.?c\.?|corp\.?|company|co\.|supply|group|holdings|enterprises|association)\b/i;

const ROLE_PREFIX =
  /\b(?:owner|founder|co-?owner|proprietor|president|chef\/owner|pastor|reverend|rev\.?)\s*[,:–—-]\s*/i;

/** @typedef {{ fullName: string, firstName: string, secondFirst?: string, source: string, score: number }} OwnerCandidate */

/**
 * @param {string} siteUrl
 * @param {string} businessName
 * @returns {Promise<OwnerCandidate | null>}
 */
export async function extractOwnerFromUrl(siteUrl, businessName) {
  const base = new URL(siteUrl);
  const pages = new Map();

  const homeHtml = await fetchHtmlSafe(siteUrl);
  if (!homeHtml) return null;
  pages.set(siteUrl, htmlToText(homeHtml));

  for (const link of discoverAboutLinks(homeHtml, base)) {
    if (pages.size >= 4) break;
    if (pages.has(link)) continue;
    const html = await fetchHtmlSafe(link);
    if (html) pages.set(link, htmlToText(html));
  }

  /** @type {OwnerCandidate[]} */
  const candidates = [];
  for (const [url, text] of pages) {
    const label = url === siteUrl ? "homepage" : "about page";
    candidates.push(...scoreTextForOwners(text, businessName, label));
  }

  candidates.sort((a, b) => b.score - a.score);
  return candidates[0] || null;
}

/**
 * @param {string} brief
 * @param {string} businessName
 * @returns {OwnerCandidate | null}
 */
export function parseOwnerFieldFromBrief(brief, businessName) {
  const ownerLine = brief.match(/\*\*Owner:\*\*\s*(.+)/i)?.[1]?.trim() || "";
  if (ownerLine && !/^[-—–]|none|unknown|n\/a$/i.test(ownerLine)) {
    return parsePersonLine(ownerLine, businessName, "brief");
  }
  return null;
}

export function parseOwnerFromFocus(brief, businessName) {
  const focus = brief.match(/\*\*Focus:\*\*\s*(.+)/i)?.[1] || "";
  const ownerInFocus = focus.match(/\bowner\s+([A-Z][a-z]+(?:\s+[A-Z][a-z.']+){0,2})/i)?.[1];
  if (ownerInFocus) {
    const parsed = parsePersonLine(ownerInFocus, businessName, "brief focus");
    if (parsed) return parsed;
  }

  const director = focus.match(/\bdirector\s+([A-Z][a-z]+)\b/i)?.[1];
  if (director && isPlausibleFirstName(director, businessName)) {
    return {
      fullName: director,
      firstName: director,
      source: "brief focus",
      score: 40,
    };
  }

  const personAfterSlash = focus.match(/\/\s*([A-Z][a-z]+\s+[A-Z][a-z]+)\s*$/);
  if (personAfterSlash) {
    return parsePersonLine(personAfterSlash[1], businessName, "brief focus");
  }

  return null;
}

/** @deprecated Use parseOwnerFieldFromBrief + parseOwnerFromFocus */
export function parseOwnerFromBrief(brief, businessName) {
  return parseOwnerFieldFromBrief(brief, businessName) || parseOwnerFromFocus(brief, businessName);
}

/**
 * @param {OwnerCandidate | null} contact
 * @returns {string}
 */
export function ownerToGreeting(contact) {
  if (!contact?.firstName) return "Hi,";
  if (contact.secondFirst) return `Hi ${contact.firstName} & ${contact.secondFirst},`;
  return `Hi ${contact.firstName},`;
}

/**
 * @param {string} brief
 * @param {OwnerCandidate | null} owner
 * @param {{ attempted?: boolean }} [opts]
 */
export function mergeOwnerIntoBrief(brief, owner, opts = {}) {
  let line;
  if (owner?.fullName) {
    line = `- **Owner:** ${owner.fullName}${owner.source ? ` (${owner.source})` : ""}`;
  } else if (opts.attempted) {
    line = "- **Owner:** — (no owner name found on live site)";
  } else {
    return brief;
  }

  if (/\*\*Owner:\*\*/i.test(brief)) {
    return brief.replace(/\*\*Owner:\*\*\s*[^\n]*/i, line);
  }
  if (brief.includes("- **Name:**")) {
    return brief.replace(/(- \*\*Name:\*\*[^\n]*\n)/i, `$1${line}\n`);
  }
  if (brief.includes("## Business copy")) {
    return brief.replace("## Business copy\n", `## Business copy\n\n${line}\n`);
  }
  return brief;
}

/**
 * @param {string} brief
 * @param {string} businessName
 * @param {string} liveUrl
 * @param {string} slug
 * @param {string} rootDir
 */
/**
 * @param {string} brief
 * @param {string} businessName
 * @param {string} liveUrl
 * @param {(path: string, data: string) => void} [writeBrief]
 */
export async function resolveOwnerForOutreach(brief, businessName, liveUrl, writeBrief) {
  const fromField = parseOwnerFieldFromBrief(brief, businessName);
  if (fromField) return { greeting: ownerToGreeting(fromField), brief };

  const ownerMarkedAbsent = /\*\*Owner:\*\*\s*[-—–]/i.test(brief);
  const shouldFetchSite = liveUrl && !ownerMarkedAbsent && !/\*\*Owner:\*\*/i.test(brief);

  if (shouldFetchSite) {
    try {
      const extracted = await extractOwnerFromUrl(liveUrl, businessName);
      let updated = mergeOwnerIntoBrief(brief, extracted, { attempted: true });
      if (updated !== brief && writeBrief) writeBrief(updated);
      if (extracted) return { greeting: ownerToGreeting(extracted), brief: updated };
      brief = updated;
    } catch {
      /* fall through */
    }
  }

  const fromFocus = parseOwnerFromFocus(brief, businessName);
  if (fromFocus) return { greeting: ownerToGreeting(fromFocus), brief };

  return { greeting: "Hi,", brief };
}

async function fetchHtmlSafe(url) {
  try {
    return await fetchHtml(url);
  } catch {
    return null;
  }
}

function discoverAboutLinks(html, base) {
  const out = new Set();
  const host = base.hostname.toLowerCase();
  for (const m of html.matchAll(/<a[^>]+href=["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    let href = m[1].trim();
    const text = stripTags(m[2]).toLowerCase();
    try {
      const url = new URL(href, base);
      if (url.hostname.toLowerCase() !== host) continue;
      const pathAndText = `${url.pathname} ${text}`;
      if (/about|our-story|our story|meet(-| )?the|who-we-are|our-team|founder|owner|leadership|pastor|staff/i.test(pathAndText)) {
        out.add(url.href.split("#")[0]);
      }
    } catch {
      /* skip */
    }
  }
  return [...out];
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * @param {string} text
 * @param {string} businessName
 * @param {string} sourceLabel
 * @returns {OwnerCandidate[]}
 */
function scoreTextForOwners(text, businessName, sourceLabel) {
  /** @type {OwnerCandidate[]} */
  const found = [];
  const snippets = text.length > 12000 ? [text.slice(0, 6000), text.slice(6000, 12000)] : [text];

  for (const chunk of snippets) {
    collectMatches(chunk, /\b(?:owned|founded|started|established)\s+by\s+([A-Z][a-z]+(?:\s+[A-Z][a-z.']+){0,2})/gi, 90, found, businessName, sourceLabel);
    collectMatches(
      chunk,
      /\b(?:owner|founder|co-?owner|proprietor|president|chef\/owner|pastor|reverend|rev\.?)\s*[,:–—-]\s*([A-Z][a-z]+(?:\s+[A-Z][a-z.']+){0,2})/gi,
      95,
      found,
      businessName,
      sourceLabel
    );
    collectMatches(chunk, /\b(?:i'?m|i am)\s+([A-Z][a-z]+)\b/g, 70, found, businessName, sourceLabel);
    collectMatches(chunk, /\bmy name is\s+([A-Z][a-z]+(?:\s+[A-Z][a-z.']+)?)\b/gi, 75, found, businessName, sourceLabel);
    collectMatches(chunk, /\bhi,?\s+i'?m\s+([A-Z][a-z]+)\b/gi, 72, found, businessName, sourceLabel);
    collectMatches(chunk, /\bmeet\s+(?:the\s+)?(?:owner\s*,?\s*)?([A-Z][a-z]+)\b/gi, 55, found, businessName, sourceLabel);
  }

  return found;
}

function collectMatches(text, regex, baseScore, found, businessName, sourceLabel) {
  for (const m of text.matchAll(regex)) {
    const raw = m[1]?.trim();
    if (!raw) continue;
    const parsed = parsePersonLine(raw, businessName, sourceLabel);
    if (!parsed) continue;
    parsed.score = baseScore + (parsed.fullName.includes(" ") ? 5 : 0);
    found.push(parsed);
  }
}

/**
 * @param {string} line
 * @param {string} businessName
 * @param {string} sourceLabel
 * @returns {OwnerCandidate | null}
 */
function parsePersonLine(line, businessName, sourceLabel) {
  let raw = line.replace(/\s*\([^)]*\)\s*$/, "").trim();
  raw = raw.replace(ROLE_PREFIX, "").trim();
  if (!raw || CORPORATE_WORDS.test(raw)) return null;

  const duo = raw.match(/^([A-Z][a-z]+)\s+(?:&|and)\s+([A-Z][a-z]+)$/);
  if (duo) {
    if (!isPlausibleFirstName(duo[1], businessName) || !isPlausibleFirstName(duo[2], businessName)) return null;
    return {
      fullName: `${duo[1]} & ${duo[2]}`,
      firstName: duo[1],
      secondFirst: duo[2],
      source: sourceLabel,
      score: 50,
    };
  }

  const parts = raw.split(/\s+/).filter(Boolean);
  if (parts.length === 0 || parts.length > 3) return null;
  const first = parts[0].replace(/[^A-Za-z'.-]/g, "");
  const namesakeOwner = parts.length >= 2 && businessName.toLowerCase().includes(`${first.toLowerCase()}'s`);
  if (!isPlausibleFirstName(first, businessName, { namesakeOwner })) return null;

  return {
    fullName: parts.join(" "),
    firstName: first,
    source: sourceLabel,
    score: 50,
  };
}

function isPlausibleFirstName(name, businessName, opts = {}) {
  if (!name || name.length < 2) return false;
  if (!/^[A-Z][a-z'.-]+$/.test(name)) return false;

  const blocklist = new Set([
    "about",
    "contact",
    "home",
    "welcome",
    "team",
    "staff",
    "office",
    "church",
    "studio",
    "salon",
    "farm",
    "bakery",
    "dance",
    "fitness",
    "wellness",
    "design",
    "auto",
    "roofing",
    "plumbing",
    "lutheran",
    "wordpress",
    "click",
    "read",
    "learn",
    "shop",
    "order",
    "book",
    "view",
    "get",
    "our",
    "the",
    "best",
    "new",
    "modern",
    "little",
    "sun",
    "soil",
    "blue",
    "red",
    "main",
    "east",
    "west",
    "north",
    "south",
  ]);
  if (blocklist.has(name.toLowerCase())) return false;

  const bizTokens = businessTokens(businessName);
  if (bizTokens.has(name.toLowerCase())) {
    if (opts.namesakeOwner) return true;
    return false;
  }

  return true;
}

function businessTokens(businessName) {
  return new Set(
    businessName
      .toLowerCase()
      .replace(/['’]s\b/g, "")
      .split(/[\s&,-]+/)
      .filter((w) => w.length > 2)
  );
}
