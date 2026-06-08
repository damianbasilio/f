/**
 * Fetch live site HTML/CSS and extract colors, fonts, content signals for Stitch tailoring.
 * Filters platform defaults (WordPress.com theme colors) so Stitch gets the business palette.
 */
const HEX_RE = /#([0-9a-fA-F]{3,8})\b/g;
const RGB_RE = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g;

const PLATFORM_DEFAULTS = new Set([
  "#007cba", "#006ba1", "#005a87", "#004a59", "#00d084", "#00d082", "#00a32a", "#7a00df",
  "#0693e3", "#9b51e0", "#ff6900", "#fcb900", "#cf2e2e", "#abb8c3", "#f0f0f1",
  "#1e1e1e", "#2271b1", "#135e96", "#2874fc", "#116600",
]);

import { isFacebookUrl } from "./facebook-detect.mjs";
import { extractBrandFromFacebook } from "./facebook-scrape.mjs";
import { fetchHtml, fetchPage } from "./fetch-page.mjs";

export async function extractBrandFromUrl(siteUrl) {
  if (isFacebookUrl(siteUrl)) {
    return extractBrandFromFacebook(siteUrl);
  }

  const html = await fetchHtml(siteUrl);
  const base = new URL(siteUrl);
  const host = base.hostname.toLowerCase();

  const allColors = new Set();
  const businessColors = new Set();
  const fonts = new Set();
  const notes = [];

  const platform = detectPlatform(host, html);
  if (platform) notes.push(`platform: ${platform}`);

  const themeColor = html.match(/<meta[^>]+name=["']theme-color["'][^>]+content=["']([^"']+)["']/i)?.[1];
  if (themeColor) {
    const c = normalizeColor(themeColor);
    if (c) {
      allColors.add(c);
      if (!isPlatformDefault(c)) businessColors.add(c);
    }
  }

  for (const m of html.matchAll(/fonts\.googleapis\.com\/css2?\?[^"']+family=([^"'&;]+)/gi)) {
    fonts.add(decodeURIComponent(m[1].replace(/\+/g, " ").split(":")[0]));
  }

  collectColors(html, allColors);
  collectBusinessColorsFromHtml(html, businessColors);

  const cssLinks = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(
    (m) => resolveUrl(m[1], base)
  );
  const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);

  for (const css of inlineStyles) collectFromCss(css, allColors, fonts, businessColors);
  for (const href of cssLinks.slice(0, 8)) {
    if (/wordpress\.com\/wp-content\/mu-plugins|wp-includes/i.test(href)) continue;
    try {
      const cssRes = await fetchPage(href);
      if (cssRes.ok) collectFromCss(await cssRes.text(), allColors, fonts, businessColors);
    } catch {
      /* skip */
    }
  }

  const rankedAll = rankColors([...allColors]);
  let rankedBusiness = rankColors([...businessColors]);
  if (rankedBusiness.length === 0) rankedBusiness = rankedAll.filter((c) => !isPlatformDefault(c));
  if (rankedBusiness.length === 0) rankedBusiness = rankedAll.slice(0, 6);

  const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim().replace(/\s+/g, " ");
  const metaDesc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1]?.trim();
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "").trim();
  const ogImage = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1];

  const fontList = [...fonts]
    .map((f) => f.replace(/!important/gi, "").trim())
    .filter((f) => f && !/fontawesome|font awesome|icon|sans-serif|serif|monospace|inherit|helvetica neue/i.test(f))
    .slice(0, 6);

  const roles = assignBrandRoles(rankedBusiness.length ? rankedBusiness : rankedAll);

  const cssVariables = buildCssVariables(roles.primary, roles.secondary, roles.accent, roles.neutrals, fontList);

  return {
    sourceUrl: siteUrl,
    extractedAt: new Date().toISOString(),
    platform,
    title,
    metaDescription: metaDesc,
    h1,
    contentSummary: [h1, metaDesc].filter(Boolean).join(" — ").slice(0, 280),
    ogImage: ogImage ? resolveUrl(ogImage, base) : null,
    colors: rankedBusiness,
    allColorsDetected: rankedAll,
    platformDefaultsFiltered: rankedAll.filter((c) => isPlatformDefault(c)),
    fonts: fontList,
    notes,
    primaryColor: roles.primary,
    secondaryColor: roles.secondary,
    accentColor: roles.accent,
    neutralColors: roles.neutrals,
    paletteSummary: summarizePalette(rankedBusiness, platform),
    typographySummary: fontList.slice(0, 3).join(" + ") || "unknown",
    cssVariables,
    stitchGuidance: buildStitchGuidance(siteUrl, [roles.primary, roles.secondary, roles.accent].filter(Boolean), fontList, platform),
  };
}

/** Pick primary/secondary/accent — prefer warm brand hues (red/gold/maroon) over neon/plugin greens. */
function assignBrandRoles(colors) {
  const usable = colors.filter((c) => !isPlatformDefault(c) && !isNeonYellow(c));
  const warm = usable.filter((c) => {
    const h = hexToHue(c);
    return h <= 55 || h >= 320;
  });
  const deep = usable.filter((c) => colorSaturation(c) > 0.25 && !isNeonYellow(c));

  const primary = warm[0] || deep[0] || usable[0] || colors[0] || "";
  const secondary = warm[1] || warm.find((c) => c !== primary) || deep.find((c) => c !== primary) || usable[1] || "";
  const accent = warm[2] || deep.find((c) => c !== primary && c !== secondary) || usable[2] || "";
  const neutrals = colors.filter(isBoringGray).slice(0, 2);

  return { primary, secondary, accent, neutrals };
}

function hexToHue(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max === min) return 0;
  const d = max - min;
  let h = 0;
  if (max === r) h = ((g - b) / d + 6) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return h * 60;
}

function isNeonYellow(hex) {
  return hex.toLowerCase() === "#ffff00" || hex.toLowerCase() === "#ff0";
}

function detectPlatform(host, html) {
  if (host.endsWith(".wordpress.com")) return "WordPress.com (free theme — ignore platform purple/teal defaults)";
  if (/wp-content|wordpress/i.test(html)) return "WordPress (self-hosted)";
  if (/wix\.com|static\.wixstatic/i.test(html)) return "Wix";
  if (/squarespace/i.test(html)) return "Squarespace";
  if (/godaddy|wsimg\.com/i.test(html)) return "GoDaddy";
  return null;
}

function collectBusinessColorsFromHtml(html, set) {
  for (const m of html.matchAll(/<(header|nav|footer|a|button|h1|h2)[^>]*style=["']([^"']+)["']/gi)) {
    addBusinessColorsFromText(m[2], set);
  }
}

function addBusinessColorsFromText(text, businessSet) {
  for (const m of text.matchAll(HEX_RE)) {
    const h = normalizeHex(m[0]);
    if (h && !isPlatformDefault(h) && !isBoringGray(h)) businessSet.add(h);
  }
  for (const m of text.matchAll(RGB_RE)) {
    const hex = rgbToHex(+m[1], +m[2], +m[3]);
    if (hex && !isPlatformDefault(hex) && !isBoringGray(hex)) businessSet.add(hex);
  }
}

function collectFromCss(css, allColors, fonts, businessColors) {
  collectColors(css, allColors, businessColors);
  for (const m of css.matchAll(/font-family\s*:\s*([^;}{]+)/gi)) {
    const raw = m[1].replace(/["']/g, "").split(",")[0].trim();
    if (raw && !/inherit|system-ui|sans-serif|serif|monospace|fontawesome|icon/i.test(raw)) fonts.add(raw);
  }
}

function collectColors(text, allSet, businessSet = null) {
  for (const m of text.matchAll(HEX_RE)) {
    const h = normalizeHex(m[0]);
    if (!h) continue;
    allSet.add(h);
    if (businessSet && !isPlatformDefault(h) && !isBoringGray(h)) businessSet.add(h);
  }
  for (const m of text.matchAll(RGB_RE)) {
    const hex = rgbToHex(+m[1], +m[2], +m[3]);
    if (!hex) continue;
    allSet.add(hex);
    if (businessSet && !isPlatformDefault(hex) && !isBoringGray(hex)) businessSet.add(hex);
  }
}

function normalizeColor(c) {
  if (c.startsWith("#")) return normalizeHex(c);
  return c;
}

function normalizeHex(h) {
  if (h.length === 4) return `#${h[1]}${h[1]}${h[2]}${h[2]}${h[3]}${h[3]}`.toLowerCase();
  if (h.length === 7) return h.toLowerCase();
  return null;
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

function isPlatformDefault(hex) {
  return PLATFORM_DEFAULTS.has(hex.toLowerCase());
}

function isBoringGray(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const spread = Math.max(r, g, b) - Math.min(r, g, b);
  return spread < 12 && r > 195 && g > 195 && b > 195;
}

function rankColors(colors) {
  return colors
    .filter((c) => c.startsWith("#"))
    .sort((a, b) => colorSaturation(b) - colorSaturation(a))
    .slice(0, 12);
}

function colorSaturation(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function summarizePalette(colors, platform) {
  if (colors.length === 0) return "No distinct business colors detected — agent must document Palette in brief from visual review of live URL.";
  const accents = colors.slice(0, 3).join(", ");
  const prefix = platform?.includes("WordPress.com")
    ? "Business colors (platform defaults excluded): "
    : "Primary colors from live site: ";
  return `${prefix}${accents}. Use these exact hex values in CSS — modernize layout only.`;
}

function buildCssVariables(primary, secondary, accent, neutrals, fonts) {
  const lines = [
    ":root {",
    primary ? `  --brand-primary: ${primary};` : "",
    secondary ? `  --brand-secondary: ${secondary};` : "",
    accent ? `  --brand-accent: ${accent};` : "",
    neutrals[0] ? `  --brand-neutral: ${neutrals[0]};` : "",
    fonts[0] ? `  --font-display: "${fonts[0]}", serif;` : "",
    fonts[1] ? `  --font-body: "${fonts[1]}", sans-serif;` : "",
    "}",
  ].filter(Boolean);
  return lines.join("\n");
}

function buildStitchGuidance(url, colors, fonts, platform) {
  return [
    `Redesign ${url} — same business, modern execution.`,
    colors.length ? `Mandatory palette: ${colors.slice(0, 5).join(", ")}.` : "Document palette manually in brief.",
    fonts.length ? `Typography feel: ${fonts.slice(0, 2).join(" + ")}.` : "",
    platform ? `Note: ${platform}. Do not use platform template colors.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function resolveUrl(href, base) {
  try {
    return new URL(href, base).href;
  } catch {
    return href;
  }
}

export function mergeBrandIntoBrief(brief, brand) {
  if (brand.facebookOnly) {
    const postImagesBlock = brand.postImages?.length
      ? `- **Facebook post images (${brand.postImages.length}):** use in \`assets/manifest.json\`\n`
      : "";
    const block = `## Facebook source (no brand colors to extract)

- **Source:** ${brand.sourceUrl}
- **Platform:** ${brand.platform || "Facebook"}
- **Scraped:** ${brand.extractedAt}
- **Colors / typography:** Stitch decides — there is no website or brand manual to sample
- **Guidance:** ${brand.stitchGuidance}
${postImagesBlock}
`;
    if (brief.includes("## Brand from live site")) {
      return brief.replace(/## Brand from live site[\s\S]*?(?=##|$)/, block);
    }
    if (brief.includes("## Facebook source")) {
      return brief.replace(/## Facebook source[\s\S]*?(?=##|$)/, block);
    }
    if (brief.includes("## Brand signals")) {
      return brief.replace("## Brand signals", block + "## Brand signals");
    }
    return brief + "\n" + block;
  }

  const postImagesBlock = brand.postImages?.length
    ? `- **Facebook post images (${brand.postImages.length}):** use in \`assets/manifest.json\` — real photos from their page\n`
    : "";

  const block = `## Brand from live site (auto-extracted)

- **Extracted:** ${brand.extractedAt}
- **Source:** ${brand.sourceUrl}
- **Platform:** ${brand.platform || "unknown"}
- **Primary / secondary / accent:** ${brand.primaryColor || "—"} / ${brand.secondaryColor || "—"} / ${brand.accentColor || "—"}
- **All business colors:** ${brand.colors.join(", ") || "none — fill Palette manually after visual review"}
- **Fonts detected:** ${brand.fonts.join(", ") || "none"}
- **Palette direction:** ${brand.paletteSummary}
- **Typography direction:** ${brand.typographySummary}
- **Stitch guidance:** ${brand.stitchGuidance}
${postImagesBlock}
\`\`\`css
${brand.cssVariables}
\`\`\`

`;

  if (brief.includes("## Brand from live site")) {
    return brief.replace(/## Brand from live site[\s\S]*?(?=##|$)/, block);
  }
  if (brief.includes("## Brand signals")) {
    return brief.replace("## Brand signals", block + "## Brand signals");
  }
  return brief + "\n" + block;
}

export function brandFieldsForPrompt(brand) {
  if (!brand) return {};
  if (brand.facebookOnly) {
    return {
      LIVE_URL: brand.sourceUrl,
      LIVE_SITE_NOTES: brand.stitchGuidance,
      ORIGINAL_SITE_SUMMARY: [
        `**Facebook page:** ${brand.sourceUrl}`,
        brand.title ? `**Title:** ${brand.title}` : "",
        brand.contentSummary ? `**Content:** ${brand.contentSummary}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    };
  }
  return {
    LIVE_URL: brand.sourceUrl,
    BRAND_COLORS: brand.colors.slice(0, 8).join(", ") || "document in brief",
    PRIMARY_COLOR: brand.primaryColor || brand.colors[0] || "",
    SECONDARY_COLOR: brand.secondaryColor || brand.colors[1] || "",
    ACCENT_COLOR: brand.accentColor || brand.colors[2] || "",
    NEUTRAL_COLORS: (brand.neutralColors || []).join(", "),
    FONT_PRIMARY: brand.fonts[0] || "",
    FONT_SECONDARY: brand.fonts[1] || brand.fonts[0] || "",
    CSS_VARIABLES: brand.cssVariables || "",
    PALETTE_NOTES: brand.paletteSummary,
    TYPOGRAPHY_NOTES: brand.fonts.length
      ? `Use ${brand.typographySummary} — match the live site's typographic feel, not generic Inter/Roboto.`
      : "Match vertical-appropriate distinctive fonts.",
    LIVE_SITE_NOTES: brand.stitchGuidance,
    ORIGINAL_SITE_SUMMARY: [
      `**Current website:** ${brand.sourceUrl}`,
      brand.title ? `**Title:** ${brand.title}` : "",
      brand.platform ? `**Platform:** ${brand.platform}` : "",
      brand.contentSummary ? `**Content:** ${brand.contentSummary}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  };
}
