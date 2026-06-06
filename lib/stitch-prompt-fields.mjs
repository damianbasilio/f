/**
 * Build Stitch prompt field map from brief + brand-extract.json.
 */
import fs from "node:fs";
import path from "node:path";
import { brandFieldsForPrompt } from "./extract-brand.mjs";
import { slugDir } from "./paths.mjs";

const WP_PLATFORM_DEFAULTS = new Set([
  "#007cba", "#006ba1", "#005a87", "#004a59", "#00d084", "#00a32a", "#7a00df",
  "#0693e3", "#9b51e0", "#ff6900", "#fcb900", "#cf2e2e", "#abb8c3",
]);

export function readBriefField(brief, re, fallback = "") {
  const m = brief.match(re);
  return m?.[1]?.trim() ?? fallback;
}

export function buildPromptFields(slug, brief, brand) {
  const liveUrl =
    readBriefField(brief, /\*\*Live URL:\*\*\s*(https?:\/\/[^\s]+)/i) ||
    brand?.sourceUrl ||
    "";

  const fields = {
    SLUG: slug,
    BUSINESS_NAME: readBriefField(brief, /\*\*Name:\*\*\s*(.+)/i, slug),
    LIVE_URL: liveUrl,
    VERTICAL: readBriefField(
      brief,
      /\*\*Vertical:\*\*\s*(.+)/i,
      readBriefField(brief, /## Stitch generation brief[\s\S]*?\*\*Vertical:\*\*\s*(.+)/i, "local business")
    ),
    FULL_ADDRESS: readBriefField(brief, /\*\*Location:\*\*\s*(.+)/i, ""),
    TAGLINE: readBriefField(brief, /\*\*Tagline:\*\*\s*(.+)/i, ""),
    PHONE: readBriefField(brief, /\*\*Phone:\*\*\s*(.+)/i, ""),
    EMAIL: readBriefField(brief, /\*\*Email:\*\*\s*(.+)/i, ""),
    HOURS: readBriefField(brief, /\*\*Hours:\*\*\s*(.+)/i, ""),
    FOCUS: readBriefField(brief, /\*\*Focus:\*\*\s*(.+)/i, ""),
    ONE_LINE_DESCRIPTION: readBriefField(
      brief,
      /\*\*Mockup angle[\s\S]*?\*\*H1:\*\*\s*(.+)/i,
      readBriefField(brief, /\*\*H1:\*\*\s*(.+)/i, readBriefField(brief, /\*\*Focus:\*\*\s*(.+)/i, ""))
    ),
    MOOD: readBriefField(
      brief,
      /\*\*Mood:\*\*\s*(.+)/i,
      readBriefField(brief, /\*\*Tone:\*\*\s*(.+)/i, "professional, local, trustworthy")
    ),
    PRIMARY_CTA: readBriefField(brief, /\*\*Primary CTA:\*\*\s*(.+)/i, "Call or contact"),
    TYPOGRAPHY_NOTES: readBriefField(
      brief,
      /\*\*Typography feel:\*\*\s*(.+)/i,
      readBriefField(brief, /\*\*Typography direction:\*\*\s*(.+)/i, "distinctive pairing appropriate to vertical")
    ),
    DESIGN_VARIANCE: readBriefField(brief, /\|\s*DESIGN_VARIANCE\s*\|\s*(\d+)/i, "7"),
    MOTION_INTENSITY: readBriefField(brief, /\|\s*MOTION_INTENSITY\s*\|\s*(\d+)/i, "4"),
    VISUAL_DENSITY: readBriefField(brief, /\|\s*VISUAL_DENSITY\s*\|\s*(\d+)/i, "5"),
    CORE_FUNCTIONALITIES: formatCoreFunctionalities(brief),
    SITE_PROBLEMS: formatSiteProblems(brief),
    ORIGINAL_SITE_SUMMARY: formatOriginalSiteSummary(brief, brand, liveUrl),
    BRAND_COLORS: "",
    PRIMARY_COLOR: "",
    SECONDARY_COLOR: "",
    ACCENT_COLOR: "",
    NEUTRAL_COLORS: "",
    FONT_PRIMARY: "",
    FONT_SECONDARY: "",
    CSS_VARIABLES: "",
    LIVE_SITE_NOTES: "",
    PALETTE_NOTES: readBriefField(brief, /\*\*Palette:\*\*\s*(.+)/i, ""),
    ANTI_SLOP_RULES: ANTI_SLOP_BLOCK,
  };

  if (brand) {
    Object.assign(fields, brandFieldsForPrompt(brand));
  } else {
    const liveColors = readBriefField(brief, /\*\*Colors detected:\*\*\s*(.+)/i, "");
    if (liveColors) fields.BRAND_COLORS = liveColors;
    fields.LIVE_SITE_NOTES = readBriefField(
      brief,
      /\*\*Palette direction:\*\*\s*(.+)/i,
      "Run brand:extract before stitch:build."
    );
  }

  if (!fields.PALETTE_NOTES || fields.PALETTE_NOTES === "TBD") {
    fields.PALETTE_NOTES = fields.CSS_VARIABLES || fields.BRAND_COLORS || "See brand extract";
  }

  return fields;
}

function formatCoreFunctionalities(brief) {
  const section = brief.match(/## Core functionalities[\s\S]*?(?=##|$)/i)?.[0];
  if (!section) return "Infer from vertical and Focus in brief.";
  const items = [...section.matchAll(/^-\s+\*\*(.+?):\*\*\s*(.+)/gm)].map(
    (m) => `- **${m[1]}:** ${m[2]}`
  );
  return items.length ? items.join("\n") : section.replace(/## Core functionalities\s*/i, "").trim();
}

function formatSiteProblems(brief) {
  const issues = brief.match(/## Three verifiable issues[\s\S]*?(?=##|$)/i)?.[0] || "";
  const why = readBriefField(brief, /\*\*Why this site hurts sales:\*\*\s*(.+)/i, "");
  const lines = [...issues.matchAll(/^\d+\.\s*(.+)$/gm)].map((m) => `- ${m[1].trim()}`);
  if (why) lines.push(`- ${why}`);
  return lines.join("\n") || "See brief site quality gate.";
}

function formatOriginalSiteSummary(brief, brand, liveUrl) {
  const parts = [`**Current website (redesign this):** ${liveUrl || "TBD"}`];
  if (brand?.title) parts.push(`**Current site title:** ${brand.title}`);
  if (brand?.platform) parts.push(`**Platform:** ${brand.platform}`);
  if (brand?.contentSummary) parts.push(`**What the live site communicates:** ${brand.contentSummary}`);
  const tone = readBriefField(brief, /\*\*Tone:\*\*\s*(.+)/i, "");
  if (tone) parts.push(`**Brand tone (from research):** ${tone}`);
  return parts.join("\n");
}

const ANTI_SLOP_BLOCK = `- Do NOT use generic AI landing-page templates (3-column feature cards, purple/indigo gradients, Inter + giant hero blob).
- Do NOT use Material Symbols / icon-font grids as the main visual language.
- Do NOT invent fake awards, star ratings, BBB badges, or "#1 rated" claims unless in the brief.
- Do NOT default to Tailwind CDN utility-class soup — write dedicated CSS with the brand variables below.
- Layout must feel specific to THIS business vertical — not a SaaS startup or Webflow clone.
- Use the exact brand hex colors provided — not a generic blue/orange HVAC palette unless those hex values match.`;

export function validatePromptFields(fields) {
  const errors = [];
  if (!fields.LIVE_URL?.startsWith("http")) errors.push("missing Live URL in prompt");
  if (!fields.BRAND_COLORS && !fields.CSS_VARIABLES) errors.push("no brand colors — run brand:extract");
  if (!fields.CORE_FUNCTIONALITIES || fields.CORE_FUNCTIONALITIES.includes("Infer from")) {
    errors.push("brief missing ## Core functionalities — required before Stitch");
  }
  return errors;
}

export function loadBrandExtract(root, slug) {
  const brandPath = slugDir(slug, "stitch", "brand-extract.json");
  if (!fs.existsSync(brandPath)) return null;
  return JSON.parse(fs.readFileSync(brandPath, "utf8"));
}
