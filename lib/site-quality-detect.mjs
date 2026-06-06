/**
 * Automated prospect site-quality screening from live HTML + Puppeteer.
 *
 * Seven-category rubric (0–10 each; Business Effectiveness ×1.5 in total).
 * Normalized total 0–50 (higher = worse):
 *   0–15  No pass
 *  16–25  No pass
 *  26–35  Human check
 *  36–50  Pass
 *
 * Usage: import { screenSiteQuality } from "./site-quality-detect.mjs"
 */
import { fetchHtml, fetchPage } from "./fetch-page.mjs";
import { runBrowserChecks } from "./site-quality-puppeteer.mjs";

/** @typedef {{ score: number, issues: string[], verdict: 'Clean' | 'Needs work' | 'Major problems' }} CategoryResult */

const CATEGORY_IDS = [
  "essentialInfo",
  "callToAction",
  "trustCredibility",
  "mobileReadability",
  "visualFreshness",
  "businessEffectiveness",
  "designDebt",
];

const CATEGORY_LABELS = {
  essentialInfo: "Essential Info",
  callToAction: "Call to Action",
  trustCredibility: "Trust & Credibility",
  mobileReadability: "Mobile Readability",
  visualFreshness: "Visual Freshness",
  businessEffectiveness: "Business Effectiveness",
  designDebt: "Design Debt Signals",
};

const WEIGHTED_CATEGORY = "businessEffectiveness";
const BUSINESS_EFFECTIVENESS_WEIGHT = 1.5;
const MAX_TOTAL = 50;
const RAW_MAX_TOTAL = 75; // six categories ×10 + businessEffectiveness ×15
const POINTS_PER_ISSUE = 2;

const RESTAURANT_TYPE_RE = /\b(menu|dinner|lunch|breakfast|restaurant|bar|reservations|cuisine)\b/i;
const LAW_TYPE_RE = /\b(attorney|lawyer|legal|consultation|case|practice)\b/i;
const SERVICE_TYPE_RE = /\b(salon|spa|appointment|treatment|booking|service)\b/i;
const RESERVATION_RE = /opentable|resy|tock|yelp.*reserv|\breserve\b|\breservation\b/i;
const LAW_CONSULT_RE = /\b(free consultation|schedule a call|speak with)\b/i;
const CASE_TYPE_RE = /\b(personal injury|divorce|criminal|dui)\b/i;
const LAW_TRUST_RE = /\b(years of experience|cases won|clients served)\b/i;
const PRICING_RE = /\$|starting at|free quote/i;
const SERVICE_LIST_RE = /\b(service|services|treatment|package|offering)\b/i;
const EMOJI_RE =
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{1F1E6}-\u{1F1FF}]/u;
const GENERIC_NAV_RE = /^(?:home|about|contact|menu|welcome|skip to content|\s|[•|·\-–—])+$/i;

const PHONE_RE = /\+?1?\s?[\(\-]?\d{3}[\)\-\s]?\s?\d{3}[\-\s]?\d{4}/;
const ADDRESS_RE = /\b(street|ave|blvd|suite|st\.)\b|\b\d{5}\b/i;
const HOURS_RE = /\b(monday|tuesday|open|closed|am|pm|hours)\b/i;
const MENU_RE = /\b(menu|food|drinks|order)\b/i;
const CONTACT_HREF_RE = /\b(contact|reach)\b|mailto:/i;
const SOCIAL_RE = /instagram\.com|facebook\.com|twitter\.com|x\.com|tiktok\.com|yelp\.com/i;
const PLACEHOLDER_RE = /\b(lorem ipsum|coming soon|under construction|your text here|placeholder)\b/i;
const BOOKING_RE = /\b(book|reserve|reservation|appointment)\b|opentable|resy|yelp|calendly/i;
const ORDERING_RE = /\b(order)\b|doordash|ubereats|grubhub|tock|toast/i;
const DEPRECATED_TAG_RE = /<(font|center|marquee|blink|strike|tt)\b/i;
const LOGO_IMG_RE = /logo|icon|favicon|sprite/i;

/**
 * @param {number} score
 * @returns {'Clean' | 'Needs work' | 'Major problems'}
 */
function categoryVerdict(score) {
  if (score <= 2) return "Clean";
  if (score <= 6) return "Needs work";
  return "Major problems";
}

/**
 * @param {number} issueCount
 * @returns {number}
 */
function scoreFromIssues(issueCount) {
  return Math.max(0, Math.min(10, issueCount * POINTS_PER_ISSUE));
}

/**
 * @param {number} points
 * @returns {number}
 */
function capPoints(points) {
  return Math.max(0, Math.min(10, points));
}

/**
 * @param {string} text
 * @returns {'RESTAURANT' | 'LAW' | 'SERVICE' | 'GENERAL'}
 */
function detectBusinessType(text) {
  if (RESTAURANT_TYPE_RE.test(text)) return "RESTAURANT";
  if (LAW_TYPE_RE.test(text)) return "LAW";
  if (SERVICE_TYPE_RE.test(text)) return "SERVICE";
  return "GENERAL";
}

/**
 * @param {string} css
 * @param {string} html
 * @returns {Set<string>}
 */
function extractFontFamilies(css, html) {
  /** @type {Set<string>} */
  const families = new Set();
  const generic = new Set([
    "inherit",
    "initial",
    "unset",
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "-apple-system",
    "blinkmacsystemfont",
  ]);

  for (const m of css.matchAll(/font-family\s*:\s*([^;}{]+)/gi)) {
    for (const part of m[1].split(",")) {
      const name = part.trim().replace(/^['"]|['"]$/g, "").toLowerCase();
      if (name && !generic.has(name)) families.add(name);
    }
  }

  for (const m of html.matchAll(/fonts\.googleapis\.com\/css2?\?[^"']*family=([^&"']+)/gi)) {
    for (const family of m[1].split("|")) {
      const name = family.split(":")[0].replace(/\+/g, " ").toLowerCase();
      if (name) families.add(name);
    }
  }

  return families;
}

/**
 * @param {string} html
 * @returns {string}
 */
function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * @param {string} html
 * @returns {{ text: string, href: string }[]}
 */
function extractAnchors(html) {
  /** @type {{ text: string, href: string }[]} */
  const anchors = [];
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = m[1].match(/href\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? "";
    const text = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
    anchors.push({ text, href });
  }
  return anchors;
}

/**
 * @param {string} html
 * @returns {number | null}
 */
function extractCopyrightYear(html) {
  const matches = [
    ...html.matchAll(/(?:©|&copy;|copyright)\s*(?:\(c\)\s*)?(\d{4})/gi),
    ...html.matchAll(/copyright\s+(\d{4})/gi),
  ];
  const years = matches.map((m) => Number(m[1])).filter((y) => y >= 1990 && y <= 2100);
  return years.length ? Math.max(...years) : null;
}

/**
 * @param {string} html
 * @param {string} baseUrl
 * @returns {Promise<string>}
 */
async function collectCss(html, baseUrl) {
  const chunks = [];

  for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) {
    chunks.push(m[1]);
  }

  const hrefs = [...html.matchAll(/<link[^>]+rel=["'][^"']*stylesheet[^"']*["'][^>]*>/gi)]
    .map((m) => m[0].match(/href=["']([^"']+)["']/i)?.[1] || null)
    .filter(Boolean)
    .slice(0, 6);

  for (const href of hrefs) {
    try {
      const abs = new URL(href, baseUrl).href;
      const res = await fetchPage(abs, { timeoutMs: 12_000, attempts: 2 });
      if (res.ok) chunks.push(await res.text());
    } catch {
      /* linked CSS optional */
    }
  }

  return chunks.join("\n");
}

/**
 * @param {string} html
 * @param {string} text
 * @returns {CategoryResult}
 */
function scoreEssentialInfo(html, text) {
  /** @type {string[]} */
  const issues = [];
  const currentYear = new Date().getFullYear();
  const anchors = extractAnchors(html);

  if (!PHONE_RE.test(text)) issues.push("No phone number found");
  if (!ADDRESS_RE.test(text)) issues.push("No address found (street/ave/blvd/suite/zip)");
  if (!HOURS_RE.test(text)) issues.push("No hours found");
  if (!anchors.some((a) => MENU_RE.test(a.text) || MENU_RE.test(a.href))) {
    issues.push("No menu link (menu/food/drinks/order)");
  }
  if (!anchors.some((a) => CONTACT_HREF_RE.test(a.href))) {
    issues.push("No contact page (contact/mailto:/reach)");
  }

  const copyrightYear = extractCopyrightYear(html);
  if (copyrightYear !== null && copyrightYear < currentYear - 3) {
    issues.push(`Copyright year ${copyrightYear} is older than 3 years`);
  }

  const score = scoreFromIssues(issues.length);
  return { score, issues, verdict: categoryVerdict(score) };
}

/**
 * @param {string} html
 * @param {boolean} ctaAboveFold
 * @returns {CategoryResult}
 */
function scoreCallToAction(html, ctaAboveFold) {
  /** @type {string[]} */
  const issues = [];
  const anchors = extractAnchors(html);
  const hrefs = anchors.map((a) => a.href).join(" ");

  if (!ctaAboveFold) issues.push("No CTA button above the fold (first 800px)");
  if (!/tel:/i.test(html)) issues.push("No tel: link anywhere");
  if (!anchors.some((a) => BOOKING_RE.test(a.text) || BOOKING_RE.test(a.href))) {
    issues.push("No booking/reservation link");
  }
  if (!ORDERING_RE.test(hrefs)) issues.push("No online ordering link");
  if (!/<form\b/i.test(html)) issues.push("No contact form");

  const score = scoreFromIssues(issues.length);
  return { score, issues, verdict: categoryVerdict(score) };
}

/**
 * @param {string} html
 * @param {string} text
 * @param {string} baseUrl
 * @returns {Promise<CategoryResult>}
 */
async function scoreTrustCredibility(html, text, baseUrl) {
  /** @type {string[]} */
  const issues = [];
  const currentYear = new Date().getFullYear();

  if (!SOCIAL_RE.test(html)) issues.push("No social media links");

  const imgTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const meaningful = imgTags.filter((tag) => {
    const src = tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i)?.[1] ?? "";
    return src && !LOGO_IMG_RE.test(src) && !LOGO_IMG_RE.test(tag);
  });
  if (meaningful.length < 3) {
    issues.push(`Only ${meaningful.length} meaningful business image(s) — need at least 3`);
  }

  if (PLACEHOLDER_RE.test(text)) issues.push("Placeholder text detected");

  const srcs = meaningful
    .map((tag) => tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i)?.[1])
    .filter(Boolean)
    .slice(0, 12);
  let broken = 0;
  await Promise.all(
    srcs.map(async (src) => {
      try {
        const abs = new URL(src, baseUrl).href;
        const res = await fetchPage(abs, { timeoutMs: 8_000, attempts: 1 });
        if (!res.ok) broken++;
      } catch {
        broken++;
      }
    })
  );
  if (broken > 0) issues.push(`${broken} broken image(s) (non-200 response)`);

  const copyrightYear = extractCopyrightYear(html);
  const visibleYears = [...text.matchAll(/\b(20\d{2})\b/g)].map((m) => Number(m[1]));
  const newestYear = Math.max(copyrightYear ?? 0, ...visibleYears, 0);
  if (newestYear > 0 && newestYear < currentYear - 2) {
    issues.push(`Page last-updated signal is stale (${newestYear})`);
  }

  const score = scoreFromIssues(issues.length);
  return { score, issues, verdict: categoryVerdict(score) };
}

/**
 * @param {string} html
 * @param {Awaited<ReturnType<runBrowserChecks>>} browser
 * @returns {CategoryResult}
 */
function scoreMobileReadability(html, browser) {
  /** @type {string[]} */
  const issues = [];

  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) {
    issues.push("No viewport meta tag");
  }
  if (browser.error) {
    issues.push(`Mobile browser check failed: ${browser.error}`);
  } else {
    if (browser.horizontalScroll) issues.push("Horizontal scroll exists at 390px width");
    if (browser.textTooSmall) issues.push("Visible text smaller than 12px");
    if (browser.tapTargetsTooSmall) {
      issues.push(`${browser.smallTapTargetCount} tap targets under 44px (more than 3)`);
    }
    if (browser.nonResponsiveImages) {
      issues.push("Large images without srcset or max-width constraint");
    }
  }

  const score = scoreFromIssues(issues.length);
  return { score, issues, verdict: categoryVerdict(score) };
}

/**
 * @param {string} html
 * @param {string} css
 * @returns {CategoryResult}
 */
function scoreVisualFreshness(html, css) {
  /** @type {string[]} */
  const issues = [];

  const tables = [...html.matchAll(/<table\b[\s\S]*?<\/table>/gi)];
  if (tables.some((m) => /<(?:div|p)\b/i.test(m[0]))) {
    issues.push("HTML tables used for layout");
  }

  const allTags = (html.match(/<[a-z][^>]*>/gi) || []).length;
  const inlineStyled = (html.match(/\sstyle\s*=\s*["']/gi) || []).length;
  if (allTags > 0 && inlineStyled / allTags > 0.2) {
    issues.push(`Heavy inline styles (${Math.round((inlineStyled / allTags) * 100)}% of elements)`);
  }

  if (DEPRECATED_TAG_RE.test(html)) {
    const found = ["font", "center", "marquee", "blink", "strike", "tt"].filter((tag) =>
      new RegExp(`<${tag}\\b`, "i").test(html)
    );
    issues.push(`Deprecated HTML tags: ${found.map((t) => `<${t}>`).join(", ")}`);
  }

  if (css.length > 200 && !/var\s*\(--/i.test(css)) {
    issues.push("No CSS custom properties in stylesheets");
  }

  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? html.slice(0, 20_000);
  const hasGoogleFonts = /fonts\.googleapis\.com/i.test(head) || /@import[^;]*fonts\.googleapis/i.test(css);
  const hasSystemStack = /-apple-system|system-ui|blinkmacsystemfont|segoe ui/i.test(css);
  if (!hasGoogleFonts && !hasSystemStack) {
    issues.push("No Google Fonts or modern system font stack");
  }

  const jqMatch =
    html.match(/jquery[/.-](\d+)\.(\d+)(?:\.(\d+))?/i) ||
    html.match(/jquery\.fn\.jquery\s*=\s*["'](\d+)\.(\d+)(?:\.(\d+))?["']/i);
  if (jqMatch) {
    const major = Number(jqMatch[1]);
    const minor = Number(jqMatch[2]);
    if (major < 3 || (major === 3 && minor < 0)) {
      issues.push(`Old jQuery version detected (${jqMatch[1]}.${jqMatch[2]})`);
    }
  }

  const score = scoreFromIssues(issues.length);
  return { score, issues, verdict: categoryVerdict(score) };
}

/**
 * @param {string} html
 * @param {string} text
 * @param {Awaited<ReturnType<runBrowserChecks>>} browser
 * @returns {CategoryResult & { businessType: string }}
 */
function scoreBusinessEffectiveness(html, text, browser) {
  /** @type {string[]} */
  const issues = [];
  let points = 0;
  const businessType = detectBusinessType(text);
  const anchors = extractAnchors(html);

  if (businessType === "RESTAURANT") {
    const hasReservation = anchors.some(
      (a) => RESERVATION_RE.test(a.href) || RESERVATION_RE.test(a.text)
    );
    if (!hasReservation) {
      issues.push("No reservation system (OpenTable/Resy/Tock/reserve)");
      points += 3;
    }
    if (!ORDERING_RE.test(anchors.map((a) => a.href).join(" "))) {
      issues.push("No online ordering link");
      points += 2;
    }
    if (anchors.some((a) => (MENU_RE.test(a.text) || MENU_RE.test(a.href)) && a.href.endsWith(".pdf"))) {
      issues.push("Menu CTA links to PDF instead of a real menu page");
      points += 2;
    }
    if (!browser.addressAboveFold) {
      issues.push("No address visible in hero or above the fold");
      points += 2;
    }
  } else if (businessType === "LAW") {
    if (!LAW_CONSULT_RE.test(text)) {
      issues.push('No free consultation CTA ("free consultation", "schedule a call", "speak with")');
      points += 3;
    }
    const firstHalf = text.slice(0, Math.floor(text.length / 2));
    if (!CASE_TYPE_RE.test(firstHalf)) {
      issues.push("No case type list in first 50% of page (personal injury, divorce, criminal, DUI)");
      points += 2;
    }
    if (!LAW_TRUST_RE.test(text)) {
      issues.push('No trust signals ("years of experience", "cases won", "clients served")');
      points += 3;
    }
  } else if (businessType === "SERVICE") {
    if (!browser.bookingAboveFold) {
      issues.push("No booking link or form above the fold (Calendly/Acuity/form)");
      points += 3;
    }
    if (!PRICING_RE.test(text)) {
      issues.push('No pricing signal ("$", "starting at", "free quote")');
      points += 2;
    }
    const listItems = (html.match(/<li[\s>]/gi) || []).length;
    const serviceSections = (html.match(/<h[2-4][^>]*>[^<]*service/gi) || []).length;
    if (listItems < 3 && serviceSections === 0 && !SERVICE_LIST_RE.test(text)) {
      issues.push("No service list visible");
      points += 2;
    }
  } else {
    const first200 = (browser.visibleTextStart || text).slice(0, 200).trim().toLowerCase();
    const weakValueProp =
      first200.length < 40 ||
      GENERIC_NAV_RE.test(first200) ||
      /^(welcome to|click here|home page)/i.test(first200);
    if (weakValueProp) {
      issues.push("No clear value proposition in first 200 characters of visible text");
      points += 3;
    }
    if (!browser.ctaAboveFold) {
      issues.push("No CTA above the fold");
      points += 3;
    }
  }

  const score = capPoints(points);
  return { score, issues, verdict: categoryVerdict(score), businessType };
}

/**
 * @param {string} html
 * @param {string} css
 * @param {Awaited<ReturnType<runBrowserChecks>>} browser
 * @returns {CategoryResult}
 */
function scoreDesignDebt(html, css, browser) {
  /** @type {string[]} */
  const issues = [];
  let points = 0;

  const fontFamilies = extractFontFamilies(css, html);
  if (fontFamilies.size > 5) {
    issues.push(`${fontFamilies.size} distinct font families loaded (>5)`);
    points += 4;
  } else if (fontFamilies.size > 3) {
    issues.push(`${fontFamilies.size} distinct font families loaded (>3)`);
    points += 2;
  }

  if (browser.heroContrastRisk) {
    issues.push("Hero/banner background image without rgba or gradient overlay");
    points += 2;
  }

  let pdfCtaPoints = 0;
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const attrs = m[1];
    const href = attrs.match(/href\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase() ?? "";
    if (!href.endsWith(".pdf")) continue;
    if (/\b(class|role)\s*=\s*["'][^"']*\b(btn|button|cta)\b/i.test(attrs)) {
      pdfCtaPoints += 2;
    }
  }
  if (pdfCtaPoints > 0) {
    const capped = Math.min(4, pdfCtaPoints);
    issues.push(`CTA-styled link(s) point to PDF (${capped / 2} instance(s))`);
    points += capped;
  }

  let uppercaseCount = (css.match(/text-transform\s*:\s*uppercase\b/gi) || []).length;
  uppercaseCount += (html.match(/style\s*=\s*["'][^"']*text-transform\s*:\s*uppercase/gi) || []).length;
  for (const m of html.matchAll(/<([a-z][a-z0-9]*)[^>]*>([^<]{3,})<\/\1>/gi)) {
    const inner = m[2].replace(/<[^>]+>/g, "").trim();
    if (inner.length >= 3 && inner === inner.toUpperCase() && /[A-Z]/.test(inner)) uppercaseCount++;
  }
  if (uppercaseCount > 5) {
    issues.push(`All-caps text overuse (${uppercaseCount} elements/rules)`);
    points += 2;
  }

  const sections = (html.match(/<(section|article|aside)\b/gi) || []).length;
  if (sections < 2) {
    issues.push(`Weak section structure (${sections} semantic section element(s))`);
    points += 2;
  }

  let emojiPoints = 0;
  const textBlocks = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .split(/<(section|article|div|p|h[1-6]|li)\b[^>]*>/gi);
  for (const block of textBlocks) {
    const plain = block.replace(/<[^>]+>/g, " ").trim();
    if (!plain || !EMOJI_RE.test(plain)) continue;
    const context = block.slice(0, 120).toLowerCase();
    if (/review|testimonial|quote|rating|customer/i.test(context)) continue;
    emojiPoints += 1;
    if (emojiPoints >= 3) break;
  }
  if (emojiPoints > 0) {
    const capped = Math.min(3, emojiPoints);
    issues.push(`Emoji used as design element (${capped} instance(s) outside reviews)`);
    points += capped;
  }

  const score = capPoints(points);
  return { score, issues, verdict: categoryVerdict(score) };
}

/**
 * @param {Record<string, CategoryResult>} categories
 * @returns {{ rawTotal: number, totalScore: number }}
 */
function computeTotalScore(categories) {
  const rawTotal = CATEGORY_IDS.reduce((sum, id) => {
    const s = categories[id].score;
    if (id === WEIGHTED_CATEGORY) return sum + s * BUSINESS_EFFECTIVENESS_WEIGHT;
    return sum + s;
  }, 0);
  const totalScore = Math.round((rawTotal * MAX_TOTAL) / RAW_MAX_TOTAL);
  return { rawTotal: Math.round(rawTotal * 10) / 10, totalScore };
}

/**
 * @param {number} totalScore
 * @returns {{ agentGate: 'FAIL' | 'PENDING' | 'PASS', recommendation: string, finalVerdict: string }}
 */
function resolveGate(totalScore) {
  if (totalScore >= 36) {
    return {
      agentGate: "PASS",
      recommendation: "present_to_damian",
      finalVerdict: "Pass",
    };
  }
  if (totalScore >= 26) {
    return {
      agentGate: "PENDING",
      recommendation: "human_review",
      finalVerdict: "Human check.",
    };
  }
  return {
    agentGate: "FAIL",
    recommendation: "skip",
    finalVerdict: "No pass.",
  };
}

/**
 * @param {Record<string, CategoryResult>} categories
 * @param {number} totalScore
 * @param {string} finalVerdict
 * @returns {string}
 */
function buildSummary(categories, totalScore, finalVerdict) {
  const worst = CATEGORY_IDS.map((id) => ({ id, ...categories[id] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .filter((c) => c.score >= 4);

  const worstPart = worst.length
    ? ` Weakest: ${worst.map((c) => `${CATEGORY_LABELS[c.id]} (${c.score}/10)`).join(", ")}.`
    : "";

  return `${finalVerdict} Total ${totalScore}/${MAX_TOTAL}.${worstPart}`;
}

/**
 * @param {{ agentGate: string, recommendation: string, totalScore: number, finalVerdict: string, categories: Record<string, CategoryResult>, summary: string }} data
 * @returns {string}
 */
function formatMarkdownBlock(data) {
  const lines = [
    "## Site screen (auto — run `npm run site:screen -- <slug>`)",
    "",
    `- **Agent gate (auto):** ${data.agentGate}`,
    `- **Recommendation:** ${data.recommendation}`,
    `- **Total score:** ${data.totalScore}/${MAX_TOTAL}`,
    `- **Final verdict:** ${data.finalVerdict}`,
    `- **Summary:** ${data.summary}`,
    "",
  ];

  if (data.businessType) {
    lines.push(`- **Detected business type:** ${data.businessType}`, "");
  }

  for (const id of CATEGORY_IDS) {
    const cat = data.categories[id];
    const weightNote = id === WEIGHTED_CATEGORY ? " (×1.5 in total)" : "";
    lines.push(`### ${CATEGORY_LABELS[id]} — ${cat.score}/10${weightNote}`);
    lines.push("**Issues found:**");
    if (cat.issues.length) {
      for (const issue of cat.issues) lines.push(`- ${issue}`);
    } else {
      lines.push("- None detected");
    }
    lines.push(`**Verdict:** ${cat.verdict}`, "");
  }

  lines.push(
    `### TOTAL SCORE: ${data.totalScore}/${MAX_TOTAL}`,
    "",
    "### FINAL VERDICT:",
    "- 0–15 → No pass.",
    "- 16–25 → No pass.",
    "- 26–35 → Human check.",
    "- 36–50 → Pass",
    "",
    `> Auto gate: **${data.agentGate}** at ${data.totalScore}/${MAX_TOTAL}. Damian still decides on Human check cases.`
  );

  return lines.join("\n");
}

export async function screenSiteQuality(siteUrl) {
  const html = await fetchHtml(siteUrl);
  const text = htmlToText(html);
  const css = await collectCss(html, siteUrl);

  const [browser, trustCredibility] = await Promise.all([
    runBrowserChecks(siteUrl),
    scoreTrustCredibility(html, text, siteUrl),
  ]);

  const businessEffectiveness = scoreBusinessEffectiveness(html, text, browser);
  const { businessType, ...businessCategory } = businessEffectiveness;

  const categories = {
    essentialInfo: scoreEssentialInfo(html, text),
    callToAction: scoreCallToAction(html, browser.ctaAboveFold),
    trustCredibility,
    mobileReadability: scoreMobileReadability(html, browser),
    visualFreshness: scoreVisualFreshness(html, css),
    businessEffectiveness: businessCategory,
    designDebt: scoreDesignDebt(html, css, browser),
  };

  const { rawTotal, totalScore } = computeTotalScore(categories);
  const { agentGate, recommendation, finalVerdict } = resolveGate(totalScore);
  const summary = buildSummary(categories, totalScore, finalVerdict);

  return {
    sourceUrl: siteUrl,
    scannedAt: new Date().toISOString(),
    recommendation,
    agentGate,
    totalScore,
    rawTotal,
    maxScore: MAX_TOTAL,
    rawMaxScore: RAW_MAX_TOTAL,
    businessType,
    businessEffectivenessWeight: BUSINESS_EFFECTIVENESS_WEIGHT,
    finalVerdict,
    categories,
    browserChecks: browser,
    summary,
    markdownBlock: formatMarkdownBlock({
      agentGate,
      recommendation,
      totalScore,
      finalVerdict,
      categories,
      summary,
      businessType,
    }),
  };
}

export function mergeScreenIntoBrief(brief, screen) {
  const block = screen.markdownBlock + "\n";
  if (brief.includes("## Site screen")) {
    return brief.replace(/## Site screen[\s\S]*?(?=## Site quality gate|## Business copy|## Brand|$)/, block);
  }
  if (brief.includes("## Site quality gate")) {
    return brief.replace("## Site quality gate", block + "## Site quality gate");
  }
  return brief + "\n" + block;
}

export function applyAgentGateToBrief(brief, screen) {
  let out = mergeScreenIntoBrief(brief, screen);
  const max = screen.maxScore ?? MAX_TOTAL;
  const autoDisqual =
    screen.agentGate === "FAIL"
      ? screen.totalScore < 16
        ? "yes — solid site foundation (see Site screen)"
        : "yes — not bad enough to pitch (see Site screen)"
      : screen.agentGate === "PENDING"
        ? "borderline — human check (see Site screen)"
        : "no";

  if (/## Site quality gate[\s\S]*?\*\*Gate:\*\*/i.test(out)) {
    out = out.replace(
      /(## Site quality gate[\s\S]*?\*\*Gate:\*\*\s*)([^\n]+)/i,
      `$1${screen.agentGate} (agent pre-assessment — auto screen)`
    );
  }

  if (/\*\*Automatic disqualifiers present\?\*\*/i.test(out)) {
    out = out.replace(/\*\*Automatic disqualifiers present\?\*\*\s*.+/i, `**Automatic disqualifiers present?** ${autoDisqual}`);
  }

  return out;
}

export { CATEGORY_IDS, CATEGORY_LABELS, MAX_TOTAL, RAW_MAX_TOTAL, BUSINESS_EFFECTIVENESS_WEIGHT };
