/**
 * Build enriched Facebook-specific Stitch prompt from prompt-input.json.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";
import {
  buildDesignRead,
  buildStitchCraftRules,
  buildCreativeDirection,
  buildColorDirection,
  buildTypographyDirection,
  craftSafeCaptions,
  sanitizeProfileText,
} from "./design-craft.mjs";
import { isRegistrationListingNoise } from "./fb-caption-sanitize.mjs";

function cleanHeroCopy(text, fallback) {
  const s = String(text || "").trim();
  if (!s || isRegistrationListingNoise(s) || /^see more about/i.test(s)) return fallback;
  if (s.length > 90) return s.slice(0, 87) + "…";
  return s;
}

const PLACEHOLDER_RE = /\(TBD\)|\(e\.g\.|\(none|\(free text|\(see brief\)/i;
const REQUIRED_KEYS = [
  "businessName",
  "vertical",
  "location",
  "heroH1",
  "primaryCta",
  "layoutFamily",
  "description",
];

/**
 * @param {string} slug
 */
export function buildFbPromptFields(slug) {
  const inputPath = slugDir(slug, "stitch", "prompt-input.json");
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Missing ${inputPath} — run enrichment first`);
  }
  const input = JSON.parse(fs.readFileSync(inputPath, "utf8"));

  const errors = [];
  for (const key of REQUIRED_KEYS) {
    const val = input[key];
    if (val == null || String(val).trim() === "") errors.push(`Missing ${key}`);
    else if (PLACEHOLDER_RE.test(String(val))) errors.push(`${key} still has placeholder text`);
  }
  if (errors.length) {
    throw new Error(`Cannot build Stitch prompt for ${slug}:\n  - ${errors.join("\n  - ")}`);
  }

  const safeCaptions = craftSafeCaptions(input.postCaptions || []);
  const captions = safeCaptions
    .slice(0, 12)
    .map((c, i) => `${i + 1}. "${c.slice(0, 400)}${c.length > 400 ? "…" : ""}"`)
    .join("\n");

  const aboutDetails = [];
  if (input.hours) aboutDetails.push(`- **Hours:** ${input.hours}`);
  if (input.profileAbout?.address) aboutDetails.push(`- **Address:** ${input.profileAbout.address}`);
  if (input.profileAbout?.rating) {
    aboutDetails.push(
      `- **Facebook rating:** ${input.profileAbout.rating}${input.profileAbout.ratingCount ? ` (${input.profileAbout.ratingCount} reviews)` : ""}`
    );
  }
  if (input.profileAbout?.likes) aboutDetails.push(`- **Facebook likes:** ${input.profileAbout.likes}`);
  if (input.profileAbout?.priceRange) aboutDetails.push(`- **Price range:** ${input.profileAbout.priceRange}`);

  const profileBlock = sanitizeProfileText(
    input.profileSummary ? input.profileSummary.slice(0, 3500) : input.description
  );

  return {
    SLUG: slug,
    BUSINESS_NAME: input.businessName,
    LIVE_URL: input.liveUrl,
    VERTICAL: input.vertical,
    CITY: input.city || "",
    FULL_ADDRESS: input.location,
    PHONE: input.phone || "See Facebook page",
    EMAIL: input.email,
    REVIEW_SCORE: input.reviewScore != null ? String(input.reviewScore) : "Not provided",
    DESCRIPTION: input.description,
    FULL_DESCRIPTION: input.fullDescription || input.description,
    HOURS: input.hours || "See Facebook page for current hours",
    PROFILE_DETAILS: aboutDetails.length ? aboutDetails.join("\n") : "Use location and phone from above.",
    PROFILE_SUMMARY: profileBlock,
    POST_CAPTIONS: captions || "Use Facebook page description for copy voice — skip listing/registration post lines.",
    POST_COUNT: String(safeCaptions.length || input.postCaptionCount || 0),
    HERO_H1: cleanHeroCopy(input.heroH1, input.city ? `${input.businessName} — ${input.city}` : input.businessName),
    HERO_SUBHEAD: cleanHeroCopy(input.heroSubhead, input.description?.slice(0, 160) || input.businessName),
    PRIMARY_CTA: input.primaryCta,
    SECONDARY_CTA: input.secondaryCta,
    SERVICE_BULLETS: (input.serviceBullets || []).map((b) => `- ${b}`).join("\n"),
    LAYOUT_ARCHETYPE: input.layoutArchetype || input.layoutFamily,
    LAYOUT_FAMILY: input.layoutArchetype || input.layoutFamily,
    LAYOUT_DESCRIPTION: input.layoutDescription,
    STICKY_CALL_BAR: input.stickyCallBar
      ? "**Mobile:** Include sticky bottom call bar with tel: link for emergency/trades vertical."
      : "",
    SECTIONS_LIST: (input.sections || []).join(" → "),
    PHOTO_INVENTORY: input.photoInventory,
    MOOD: input.mood,
    ANTI_PATTERNS: input.antiPatterns,
    DESIGN_VARIANCE: String(input.designVariance),
    MOTION_INTENSITY: String(input.motionIntensity),
    VISUAL_DENSITY: String(input.visualDensity),
    DESIGN_READ: buildDesignRead(input),
    DESIGN_CRAFT_RULES: buildStitchCraftRules(input),
    CREATIVE_DIRECTION: buildCreativeDirection(input),
    COLOR_DIRECTION: buildColorDirection(input),
    TYPOGRAPHY_DIRECTION: buildTypographyDirection(input),
  };
}

/**
 * @param {string} slug
 */
export function writeFbStitchPrompt(slug) {
  const templatePath = path.join(root, "templates", "stitch-prompt-fb.template.md");
  const template = fs.readFileSync(templatePath, "utf8");
  const fields = buildFbPromptFields(slug);

  let out = template;
  for (const [key, value] of Object.entries(fields)) {
    out = out.replaceAll(`{{${key}}}`, value || "");
  }

  const stitchDir = slugDir(slug, "stitch");
  fs.mkdirSync(stitchDir, { recursive: true });
  const outPath = path.join(stitchDir, "prompt.md");
  fs.writeFileSync(outPath, out, "utf8");
  return outPath;
}
