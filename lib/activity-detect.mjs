/**
 * Automated activity verification from live site HTML.
 *
 * Learned from Kiltie School rejection: directory listings and evergreen
 * "contact us to register" copy are NOT proof of current operation.
 * Require dated evidence within the last 12–18 months.
 */
import { fetchHtml as fetchPageHtml } from "./fetch-page.mjs";

const MONTHS =
  "january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec";
const MONTH_DATE_RE = new RegExp(
  `\\b(${MONTHS})\\s+\\d{1,2}(?:,?\\s+|\\s+)\\(?\\d{4}\\)?|\\b\\d{1,2}\\s+(${MONTHS})\\s+\\d{4}`,
  "gi"
);
const ISO_DATE_RE = /\b(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})\b/g;
const YEAR_RE = /\b(20\d{2})\b/g;
const CLOSED_RE =
  /permanently closed|no longer (?:open|operating|in business)|out of business|we (?:have )?closed|business closed|closed permanently|ceased operations/i;

/** @typedef {{ id: string, label: string, evidence: string }} ActivitySignal */

/**
 * @param {string} siteUrl
 * @param {{ fetchBlog?: boolean }} [opts]
 */
export async function verifyActivityFromUrl(siteUrl, opts = {}) {
  const pages = await collectPages(siteUrl, opts.fetchBlog !== false);
  const combined = pages.map((p) => p.html).join("\n");
  const lower = combined.toLowerCase();

  /** @type {ActivitySignal[]} */
  const recentSignals = [];
  /** @type {ActivitySignal[]} */
  const dormancySignals = [];
  /** @type {ActivitySignal[]} */
  const weakSignals = [];

  const now = new Date();
  const currentYear = now.getFullYear();
  const recentCutoff = new Date(now);
  recentCutoff.setMonth(recentCutoff.getMonth() - 14);
  const staleCutoff = new Date(now);
  staleCutoff.setFullYear(staleCutoff.getFullYear() - 2);

  const datedEvents = extractDatedEvents(combined);
  const recentEvents = datedEvents.filter((d) => d.date >= recentCutoff);
  const newest = datedEvents.length ? datedEvents.reduce((a, b) => (a.date > b.date ? a : b)) : null;

  const uploadYears = [...combined.matchAll(/wp-content\/uploads\/(20\d{2})\//gi)].map((m) => +m[1]);
  const maxUploadYear = uploadYears.length ? Math.max(...uploadYears) : 0;
  if (maxUploadYear >= currentYear - 2) {
    recentSignals.push({
      id: "recent_media_uploads",
      label: "Recent WordPress media uploads",
      evidence: `Site assets uploaded in ${maxUploadYear} (wp-content/uploads/${maxUploadYear}/)`,
    });
  }

  if (/founded in 20(2[3-9]|30)\b/i.test(combined) && /now available|currently|open for|accepting orders|pork now|eggs now|booking for/i.test(combined)) {
    recentSignals.push({
      id: "young_business_operational",
      label: "Recently founded business with current offerings",
      evidence: "Founded 2023+ with present-tense product/service availability on site",
    });
  }

  if (newest && newest.date >= recentCutoff) {
    recentSignals.push({
      id: "newest_dated_content",
      label: "Recent dated content on site",
      evidence: `${newest.label} (${newest.date.toISOString().slice(0, 10)})`,
    });
  }
  const oldestRecentYear = Math.max(...[...combined.matchAll(YEAR_RE)].map((m) => +m[1]), 0);

  if (CLOSED_RE.test(combined)) {
    dormancySignals.push({
      id: "explicit_closed",
      label: "Site states business is closed",
      evidence: "Copy mentions closed / no longer operating",
    });
  }

  if (recentEvents.length) {
    const sample = recentEvents.slice(0, 3);
    for (const ev of sample) {
      if (recentSignals.some((s) => s.id === "newest_dated_content")) continue;
      recentSignals.push({
        id: "dated_content_recent",
        label: "Recent dated content on site",
        evidence: `${ev.label} (${ev.date.toISOString().slice(0, 10)})`,
      });
    }
  }

  const copyrightMatch = combined.match(/©\s*(20\d{2})|copyright\s*(20\d{2})/i);
  const copyrightYear = copyrightMatch ? +(copyrightMatch[1] || copyrightMatch[2]) : 0;
  if (copyrightYear >= currentYear - 1) {
    recentSignals.push({
      id: "recent_copyright",
      label: "Recent copyright year",
      evidence: `© ${copyrightYear} in site footer`,
    });
  } else if (copyrightYear && copyrightYear < currentYear - 2) {
    dormancySignals.push({
      id: "stale_copyright",
      label: "Stale copyright year",
      evidence: `© ${copyrightYear} — no ${currentYear - 1}/${currentYear} updates detected`,
    });
  }

  if (newest && newest.date < staleCutoff) {
    dormancySignals.push({
      id: "stale_newest_content",
      label: "Newest dated site content is years old",
      evidence: `Most recent dated reference: ${newest.label} (${newest.date.getFullYear()})`,
    });
  }

  const yearsFound = [...new Set([...combined.matchAll(YEAR_RE)].map((m) => +m[1]))].sort((a, b) => b - a);
  const hasRecentYear = yearsFound.some((y) => y >= currentYear - 1);
  if (yearsFound.length && !hasRecentYear && yearsFound[0] < currentYear - 2) {
    dormancySignals.push({
      id: "no_recent_years",
      label: "No content references in the last 2 years",
      evidence: `Newest year found in HTML: ${yearsFound[0]}`,
    });
  }

  // WordPress blog with only legacy posts (Kiltie pattern)
  if (/wordpress\.com|wp-block-post|entry-content|class=["']post-/i.test(combined)) {
    const blogYears = yearsFound.filter((y) => y >= 2005 && y <= currentYear);
    if (blogYears.length && blogYears[0] < currentYear - 2 && !recentEvents.length) {
      dormancySignals.push({
        id: "stale_wordpress_blog",
        label: "WordPress blog with no posts since ~" + blogYears[0],
        evidence: "Blog-style site; newest dated content predates outreach window",
      });
    }
  }

  // Do NOT count these as recent activity
  if (/listed on|directory|facebook\.com|instagram\.com/i.test(combined) && !recentEvents.length) {
    weakSignals.push({
      id: "directory_or_social_only",
      label: "Directory/social link without dated proof",
      evidence: "Third-party listing or social link ≠ proof business is operating now",
    });
  }
  if (/new (?:fall|spring|summer|winter) classes|register for|contact (?:us|carolyn|owner)/i.test(combined) && !recentEvents.length) {
    weakSignals.push({
      id: "evergreen_enrollment_copy",
      label: "Evergreen enrollment copy without dates",
      evidence: '"Register for classes" with no schedule/recent post — may be abandoned site',
    });
  }

  let agentGate = "FAIL";
  let recommendation = "skip_inactive";

  if (dormancySignals.length >= 1 && recentSignals.length === 0) {
    agentGate = "FAIL";
    recommendation = "skip_inactive";
  } else if (recentSignals.length >= 1 && dormancySignals.length === 0) {
    agentGate = "PENDING";
    recommendation = "verify_manually";
  } else if (recentSignals.length >= 1) {
    agentGate = "PENDING";
    recommendation = "verify_manually";
  } else if (
    dormancySignals.length === 0 &&
    (/hours|open (?:mon|daily|every day)|monday|tuesday|wednesday|thursday|friday|saturday|sunday/i.test(combined) ||
      /\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/.test(combined))
  ) {
    agentGate = "PENDING";
    recommendation = "near_miss_unverified";
  } else {
    agentGate = "FAIL";
    recommendation = "skip_unverified";
  }

  const summary = buildSummary(recommendation, recentSignals, dormancySignals, newest);

  return {
    sourceUrl: siteUrl,
    scannedAt: new Date().toISOString(),
    pagesScanned: pages.map((p) => p.url),
    recommendation,
    agentGate,
    recentSignals,
    dormancySignals,
    weakSignals,
    newestDatedContent: newest ? { label: newest.label, date: newest.date.toISOString() } : null,
    yearsFound,
    summary,
    markdownBlock: formatMarkdownBlock({
      agentGate,
      recommendation,
      summary,
      recentSignals,
      dormancySignals,
      weakSignals,
      newestDatedContent: newest,
    }),
  };
}

async function collectPages(siteUrl, fetchBlog) {
  const pages = [];
  const home = await fetchHtml(siteUrl);
  pages.push({ url: siteUrl, html: home });

  if (!fetchBlog) return pages;

  const base = new URL(siteUrl);
  const blogPaths = ["/blog/", "/blog", "/news/", "/news", "/events/", "/events"];
  for (const p of blogPaths) {
    try {
      const url = new URL(p, base).href;
      if (url === siteUrl || url === siteUrl + "/") continue;
      const html = await fetchHtml(url);
      if (html.length > 500 && html !== home) {
        pages.push({ url, html });
        break;
      }
    } catch {
      /* skip */
    }
  }
  return pages;
}

async function fetchHtml(url) {
  return fetchPageHtml(url);
}

/**
 * @returns {{ date: Date, label: string }[]}
 */
function extractDatedEvents(html) {
  const events = [];
  const seen = new Set();

  for (const m of html.matchAll(MONTH_DATE_RE)) {
    const raw = m[0];
    const d = parseLooseDate(raw);
    if (!d || d.getFullYear() < 2005 || d.getFullYear() > 2030) continue;
    const key = d.toISOString().slice(0, 10);
    if (seen.has(key)) continue;
    seen.add(key);
    events.push({ date: d, label: raw.trim() });
  }

  for (const m of html.matchAll(/Published\s+([A-Za-z]+\s+\d{1,2},?\s+\d{4})/gi)) {
    const d = parseLooseDate(m[1]);
    if (!d) continue;
    const key = d.toISOString().slice(0, 10);
    if (seen.has(key)) continue;
    seen.add(key);
    events.push({ date: d, label: m[1] });
  }

  for (const m of html.matchAll(/Last Updated on\s+([A-Za-z]+\s+\d{1,2},?\s+\d{4})/gi)) {
    const d = parseLooseDate(m[1]);
    if (!d) continue;
    const key = d.toISOString().slice(0, 10);
    if (seen.has(key)) continue;
    seen.add(key);
    events.push({ date: d, label: `Last updated ${m[1]}` });
  }

  for (const m of html.matchAll(/(\d{1,2}\/\d{1,2}\/(20\d{2}))/g)) {
    const d = parseLooseDate(m[1]);
    if (!d) continue;
    const key = d.toISOString().slice(0, 10);
    if (seen.has(key)) continue;
    seen.add(key);
    events.push({ date: d, label: m[1] });
  }

  // "July 17, 2010" inline
  for (const m of html.matchAll(/\b([A-Za-z]+ \d{1,2}, (20\d{2}))/g)) {
    const d = parseLooseDate(m[1]);
    if (!d) continue;
    const key = d.toISOString().slice(0, 10);
    if (seen.has(key)) continue;
    seen.add(key);
    events.push({ date: d, label: m[1] });
  }

  return events.sort((a, b) => b.date - a.date);
}

function parseLooseDate(raw) {
  const t = Date.parse(raw.replace(/(\d+)(st|nd|rd|th)/i, "$1"));
  return Number.isNaN(t) ? null : new Date(t);
}

function buildSummary(recommendation, recent, dormant, newest) {
  if (recommendation === "skip_inactive") {
    const reason = dormant[0]?.evidence || "No dated activity in last ~14 months";
    return `Auto-FAIL activity: likely inactive — ${reason}. Directory listings and evergreen contact copy do not count.`;
  }
  if (recommendation === "skip_unverified") {
    return "Auto-FAIL activity: cannot verify current operation — no recent dated evidence on site.";
  }
  if (recommendation === "near_miss_unverified") {
    return "Near miss: phone/hours on site but no dated proof — Damian must confirm business is still operating.";
  }
  if (recent.length) {
    return `Possible active: ${recent.length} recent signal(s) — Damian must confirm business is still operating.`;
  }
  return "Activity unverified.";
}

function formatMarkdownBlock(data) {
  const lines = [
    "## Activity screen (auto — run `npm run activity:check -- <slug>`)",
    "",
    `- **Agent gate (auto):** ${data.agentGate}`,
    `- **Recommendation:** ${data.recommendation}`,
    `- **Summary:** ${data.summary}`,
    "",
  ];
  if (data.newestDatedContent) {
    lines.push(
      `- **Newest dated content found:** ${data.newestDatedContent.label} (${data.newestDatedContent.date.getFullYear()})`,
      ""
    );
  }
  if (data.dormancySignals?.length) {
    lines.push("**Dormancy signals (auto-FAIL):**", "");
    for (const s of data.dormancySignals) lines.push(`- **${s.label}:** ${s.evidence}`);
    lines.push("");
  }
  if (data.recentSignals?.length) {
    lines.push("**Recent activity signals:**", "");
    for (const s of data.recentSignals) lines.push(`- **${s.label}:** ${s.evidence}`);
    lines.push("");
  }
  if (data.weakSignals?.length) {
    lines.push("**Does NOT prove activity:**", "");
    for (const s of data.weakSignals) lines.push(`- ~~${s.label}~~: ${s.evidence}`);
    lines.push("");
  }
  lines.push(
    "> Kiltie School lesson: stale WordPress blog (last posts ~2010) + directory listing ≠ active business."
  );
  return lines.join("\n");
}

export function mergeActivityIntoBrief(brief, activity) {
  const block = activity.markdownBlock + "\n";
  if (brief.includes("## Activity screen")) {
    return brief.replace(/## Activity screen[\s\S]*?(?=## Human approval|## Site screen|## Site quality gate|## Business copy|$)/, block);
  }
  if (brief.includes("## Activity verification")) {
    return brief.replace(
      /(## Activity verification[\s\S]*?)(?=## Human approval|## Site screen|## Site quality gate|$)/,
      `$1\n${block}`
    );
  }
  return brief + "\n" + block;
}

export function applyActivityGateToBrief(brief, activity) {
  let out = mergeActivityIntoBrief(brief, activity);
  const gateVal = activity.agentGate === "PENDING" ? "PENDING" : "FAIL";
  const evidenceNote =
    activity.agentGate === "FAIL"
      ? activity.summary
      : activity.recentSignals.map((s) => s.evidence).join("; ") || activity.summary;

  if (/## Activity verification[\s\S]*?\*\*Gate:\*\*/i.test(out)) {
    out = out.replace(
      /(## Activity verification[\s\S]*?\*\*Gate:\*\*\s*)([^\n]+)/i,
      `$1${gateVal} (auto — ${activity.recommendation})`
    );
  }
  if (/## Activity verification[\s\S]*?\*\*Evidence:\*\*/i.test(out)) {
    out = out.replace(
      /(## Activity verification[\s\S]*?\*\*Evidence:\*\*\s*)([^\n]+)/i,
      `$1${evidenceNote}`
    );
  }
  return out;
}
