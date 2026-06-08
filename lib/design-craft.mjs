/**
 * Design craft rules distilled from emil-design-eng, impeccable, and design-taste-frontend.
 * Used in Stitch prompts (upstream) and design QA (downstream).
 */
import { sanitizePostCaptions, sanitizeProfileText, isRegistrationListingNoise } from "./fb-caption-sanitize.mjs";

const AI_PURPLE_RE = /#6366f1|#8b5cf6|#7c3aed|#a855f7|indigo-\d+|from-indigo|from-purple|bg-gradient-to-[rb].*purple/i;
const FAKE_RATING_RE = /★★★★|4\.9\s*\/\s*5|#1 rated|best in town|trusted by thousands|world-class|seamless|elevate your|game-changer/i;
const GENERIC_COPY_RE = /\b(elevate|empower|supercharge|leverage|unleash|transform your|next-gen|cutting-edge|streamline)\b/i;
const THREE_CARD_RE = /(?:grid-cols-3|col-span-1|three-column|3-column)/i;
const CREAM_BG_RE = /#f[5-9a-f][f5-9a-f][ef][0-9a-f]{3}|#faf7f1|#fbf9f4|#f5f3ee|rgb\(\s*25[0-5]\s*,\s*24[0-9]\s*,\s*23[0-9]/i;
const GHOST_CARD_RE = /border\s*:\s*1px[^;]*;\s*[^}]*box-shadow\s*:\s*[^;]*(?:1[6-9]|[2-9]\d)px/i;
const LARGE_RADIUS_RE = /border-radius\s*:\s*(?:2[4-9]|[3-9]\d)px/i;

/**
 * One-line design read for Stitch (Section 0.B from design-taste-frontend).
 * @param {object} input
 */
export function buildDesignRead(input) {
  const city = input.city ? ` in ${input.city}` : "";
  const layout = input.layoutArchetype || input.layoutFamily || "bespoke";
  return (
    `Reading this as: a first homepage for ${input.businessName}${city} (${input.vertical || "local business"}), ` +
    `${input.mood || "premium local brand"} tone, **${layout}** archetype — must feel like a one-off commission, not a reused template.`
  );
}

/**
 * Creative direction paragraph for Stitch (colors/fonts invented by model).
 * @param {object} input
 */
export function buildCreativeDirection(input) {
  return [
    `**${input.businessName}** is a ${input.vertical || "local business"}${input.city ? ` in ${input.city}` : ""}.`,
    `Design as if you won a paid branding project: distinctive hero, memorable section rhythm, premium polish.`,
    `Layout seed: **${input.layoutArchetype || input.layoutFamily}** — interpret literally but creatively.`,
    `You choose the full color palette and typography — there is nothing to extract from a website.`,
    input.photoCount > 0
      ? `They have ${input.photoCount} real Facebook photos — design hero and gallery for authentic local imagery.`
      : `Photo slots will be filled from Facebook after build — leave generous image regions.`,
  ].join("\n");
}

export function buildColorDirection(_input) {
  return [
    "**Stitch decides all colors.** There is no brand manual, no website, and nothing to extract.",
    "Derive a cohesive 4–5 color system from business type, name, location, and post voice.",
    "Define `--brand-primary`, `--brand-secondary`, `--brand-accent`, and neutrals in `:root`.",
    "Each business must look visually distinct — do not reuse the same palette across mockups.",
    "Avoid Facebook platform grays (#333, #666, #ddd) and generic SaaS purple/indigo.",
  ].join("\n");
}

export function buildTypographyDirection(input) {
  const display = input.fontDisplay || "a distinctive display face";
  const body = input.fontBody || "a readable body face";
  return [
    `Choose typography that matches **${input.vertical || "this business"}** — premium and readable.`,
    `Suggested pairing (you may adapt if a better fit exists): **${display}** (headlines) + **${body}** (body).`,
    `Load from Google Fonts. Never default to Inter, Roboto, or Arial as the primary personality.`,
    "Establish a clear type scale (display, h2, body, small) with intentional letter-spacing on labels.",
  ].join("\n");
}

/**
 * Craft rules block injected into Stitch prompt.
 * @param {object} input
 */
export function buildStitchCraftRules(input) {
  const v = input.designVariance ?? 7;
  const m = input.motionIntensity ?? 4;
  const d = input.visualDensity ?? 5;

  return `
### Design read (follow this)
${buildDesignRead(input)}

### Uniqueness mandate
- This homepage is for **${input.businessName}** only — it must not resemble other local-business sites or AI templates.
- **Invent** layout rhythm, section names, color story, and typographic personality for this business.
- Layout archetype **${input.layoutArchetype || input.layoutFamily}**: ${input.layoutDescription}
- Primary CTA: **"${input.primaryCta}"**. Phone as \`tel:\` in header and hero.
- ${input.antiPatterns || "Avoid generic SaaS patterns."}

### Layout discipline
- Hero fits initial viewport: H1 max 2 lines, subhead max 20 words, primary CTA visible without scrolling.
- **No** repeated identical 3-column icon-card rows across sections.
- Vary structure: split hero → offerings (list, staggered grid, or bento) → gallery → visit → contact.
- Max 1 small uppercase eyebrow per 3 sections. Nav ~64–72px, phone or CTA visible on desktop.
- Cards only when elevation adds hierarchy; prefer spacing, rules, and type otherwise.

### Color & typography (you decide)
${buildColorDirection(input)}

${buildTypographyDirection(input)}

- No purple/indigo SaaS gradients. No generic cream/beige page background unless the business genuinely calls for it.
- No em dashes (—) in copy. No emojis. No buzzwords: elevate, seamless, world-class, game-changer.

### Motion & interaction (emil-design-eng)
- Dials: variance ${v}/10 · motion ${m}/10 · density ${d}/10
- UI transitions: 150–250ms, **ease-out**. Never \`transition: all\`.
- Buttons: \`:active { transform: scale(0.97) }\`. Include \`prefers-reduced-motion\`.
- Animate **transform** and **opacity** only.

### Anti-slop checklist
- No fake star ratings unless review score is in the brief.
- No side-stripe accent borders on cards. No gradient text on headlines.
- No lorem ipsum. No stock URLs. Gallery and hero sized for **their** Facebook photos.
- Form is preview-only — never simulate "Message sent".
`.trim();
}

/**
 * Sanitize post captions for stitch prompt (skip registry/listing lines).
 * @param {string[]} captions
 */
export function craftSafeCaptions(captions) {
  return sanitizePostCaptions(captions || []).filter((c) => !isRegistrationListingNoise(c));
}

/**
 * Run craft audit on built HTML/CSS (post-build).
 * @param {{ html: string, css: string, promptInput?: object }} opts
 */
export function runCraftAudit({ html, css, promptInput = {} }) {
  const combined = html + "\n" + css;
  const findings = [];
  const blockers = [];
  const warnings = [];

  function fail(msg) {
    blockers.push(msg);
    findings.push(`FAIL: ${msg}`);
  }
  function warn(msg) {
    warnings.push(msg);
    findings.push(`WARN: ${msg}`);
  }
  function pass(msg) {
    findings.push(`OK: ${msg}`);
  }

  if (AI_PURPLE_RE.test(combined)) fail("Purple/indigo SaaS gradient — invent a business-specific palette");
  else pass("No AI purple gradient");

  if (FAKE_RATING_RE.test(html)) fail("Fake ratings or hype copy detected");
  else pass("No fake ratings/hype");

  if (GENERIC_COPY_RE.test(html)) warn("Generic marketing buzzword in copy");
  else pass("No obvious buzzwords");

  const threeColHits = (html.match(/grid-cols-3|col-span-1/gi) || []).length;
  if (threeColHits >= 3) warn(`Repeated 3-column grid pattern (${threeColHits} hits) — likely template layout`);
  else pass("Layout: no excessive 3-col grids");

  const fontFamilies = [...css.matchAll(/font-family\s*:\s*([^;}{]+)/gi)].map((m) => m[1].toLowerCase());
  const briefDisplay = (promptInput.fontDisplay || "").toLowerCase();
  const briefBody = (promptInput.fontBody || "").toLowerCase();
  const hasBriefFontCss = /design-qa:\s*brief brand fonts/i.test(css);
  const usesBriefFonts =
    hasBriefFontCss ||
    ((!briefDisplay || fontFamilies.some((f) => f.includes(briefDisplay.split(" ")[0]))) &&
      (!briefBody || fontFamilies.some((f) => f.includes(briefBody.split(" ")[0]))));

  const interOnly =
    fontFamilies.length > 0 &&
    fontFamilies.every((f) => /\binter\b/.test(f) || /system-ui|sans-serif|inherit/.test(f)) &&
    fontFamilies.some((f) => /\binter\b/.test(f));

  if (interOnly && !hasBriefFontCss && /cdn\.tailwindcss\.com/i.test(html)) {
    warn("Inter-only typography (Tailwind export) — brief fonts should be injected by design-qa");
  } else if (interOnly && !usesBriefFonts) {
    fail("Inter-only typography — match brief brand fonts");
  } else if (briefDisplay && !usesBriefFonts) {
    warn(`CSS fonts may not match brief (${promptInput.fontDisplay} / ${promptInput.fontBody})`);
  } else pass("Typography: brand fonts referenced");

  if (CREAM_BG_RE.test(css) && !/heritage|ranch|cattle|farm|artisan|bakery/i.test(promptInput.mood || "")) {
    warn("Warm cream/beige body background — common AI default; prefer brand-tinted neutrals");
  }

  if (GHOST_CARD_RE.test(css)) warn("Ghost-card pattern (1px border + heavy shadow) detected");
  if (LARGE_RADIUS_RE.test(css)) warn("Very large border-radius on containers (24px+) — reads as AI-rounded");

  const eyebrowCount = (html.match(/uppercase[^"']*tracking|tracking-[\w\[\]-]+[^"']*uppercase|letter-spacing:\s*0\.[12]/gi) || []).length;
  if (eyebrowCount > 6) warn(`${eyebrowCount} uppercase-tracked labels — cap ~1 eyebrow per 3 sections`);
  else pass(`Eyebrow count: ${eyebrowCount}`);

  if (/transition\s*:\s*all\b/i.test(css)) warn("transition: all present — prefer specific properties");
  else pass("No transition: all");

  if (!css.includes("prefers-reduced-motion")) warn("Missing prefers-reduced-motion block");
  else pass("Reduced motion: present");

  if (!/:active[\s\S]{0,120}scale\s*\(\s*0\.9/i.test(css)) warn("Buttons missing :active press feedback (scale 0.97)");
  else pass("Button :active feedback");

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    const h1Text = h1Match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (h1Text.split(/\s+/).length > 12) warn(`Hero H1 may be too long (${h1Text.split(/\s+/).length} words)`);
    else pass("Hero H1 length reasonable");
  }

  return { findings, blockers, warnings, ok: blockers.length === 0 };
}

export { sanitizeProfileText };
