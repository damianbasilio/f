/**
 * Per-vertical CTAs, mood, and design dials for Facebook-only mockups.
 * Layout archetype + typography pair rotate per slug for visual variety.
 */

import { isDirectoryListing } from "./directory-hosts.mjs";

const LAYOUT_ARCHETYPES = [
  {
    id: "split-editorial",
    description:
      "Split hero: asymmetric photo column (55–60%) vs. typographic column; headline flush left, phone + CTA stacked; optional thin vertical rule or color band separating columns.",
  },
  {
    id: "cinematic-bleed",
    description:
      "Full-bleed hero photo with directional gradient overlay (not centered vignette); headline anchored bottom-left or bottom-right; strong contrast type; optional sticky mobile call bar.",
  },
  {
    id: "magazine-stack",
    description:
      "Editorial magazine: oversized display headline, narrow reading measure (640px), photo band breaks between sections, pull-quote or stat strip mid-page.",
  },
  {
    id: "asymmetric-overlap",
    description:
      "Offset hero image overlapping a colored content panel; credibility strip overlaps photo edge; services in staggered two-column rhythm, not uniform cards.",
  },
  {
    id: "bento-showcase",
    description:
      "Bento-style grid: hero spans 2 cells, services and gallery as varied tile sizes; no identical card heights; one accent tile in primary color.",
  },
  {
    id: "story-column",
    description:
      "Single-column story scroll: hero type-first (minimal photo), sections separated by generous padding and subtle background shifts; gallery as horizontal scroll strip.",
  },
  {
    id: "diagonal-cut",
    description:
      "Diagonal or angled section dividers (clip-path or skewed bands); hero with angled color block behind headline; dynamic but not chaotic.",
  },
  {
    id: "mosaic-hero",
    description:
      "Photo mosaic hero (2–4 crops from their business context) with headline overlay; services as list with icons or numerals, not 3-col cards.",
  },
  {
    id: "minimal-luxury",
    description:
      "Restrained luxury: large margins, small caps labels sparingly, one hero image with lots of negative space; serif display + clean sans body.",
  },
  {
    id: "bold-type-stack",
    description:
      "Typography-led: hero is mostly type (72px+ display), photo secondary or below fold; high contrast color blocks between sections.",
  },
  {
    id: "cardless-flow",
    description:
      "No card UI: sections flow with borders, rules, and background tints only; services as definition list or two-column prose + icons.",
  },
  {
    id: "boutique-window",
    description:
      "Boutique storefront feel: framed hero like a shop window, soft shadow, gallery as masonry; warm or refined palette depending on vertical.",
  },
];

const FONT_PAIRS = [
  { display: "Fraunces", body: "Outfit", google: "Fraunces:opsz,wght@9..144,600;700&family=Outfit:wght@400;500;600" },
  { display: "Instrument Serif", body: "Instrument Sans", google: "Instrument+Serif&family=Instrument+Sans:wght@400;500;600" },
  { display: "Libre Baskerville", body: "Figtree", google: "Libre+Baskerville:wght@400;700&family=Figtree:wght@400;500;600" },
  { display: "Syne", body: "DM Sans", google: "Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600" },
  { display: "Cormorant Garamond", body: "Montserrat", google: "Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600" },
  { display: "Playfair Display", body: "Source Sans 3", google: "Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;600" },
  { display: "Oswald", body: "Source Sans 3", google: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700" },
  { display: "DM Serif Display", body: "DM Sans", google: "DM+Serif+Display&family=DM+Sans:wght@400;500;600;700" },
  { display: "Source Serif 4", body: "Nunito", google: "Source+Serif+4:opsz,wght@8..60,600;700&family=Nunito:wght@400;600;700" },
  { display: "Barlow Condensed", body: "Barlow", google: "Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600" },
  { display: "Lora", body: "Work Sans", google: "Lora:wght@600;700&family=Work+Sans:wght@400;500;600" },
  { display: "Bitter", body: "Raleway", google: "Bitter:wght@600;700&family=Raleway:wght@400;500;600" },
];

/**
 * @param {string|null|undefined} url
 * @returns {"none"|"directory"|"owned"}
 */
export function classifyWebsiteUrl(url) {
  if (!url || typeof url !== "string") return "none";
  const trimmed = url.trim();
  if (!trimmed || !/^https?:\/\//i.test(trimmed)) return "none";
  if (isDirectoryListing(trimmed)) return "directory";
  try {
    new URL(trimmed);
    return "owned";
  } catch {
    return "none";
  }
}

/**
 * @param {string} category
 * @param {string} slug
 */
export function getVerticalProfile(category, slug) {
  const key = normalizeCategory(category);
  const base = PROFILES[key] || PROFILES.general;
  const layoutIdx = hashSlug(slug) % LAYOUT_ARCHETYPES.length;
  const fontIdx = hashSlug(slug + ":fonts") % FONT_PAIRS.length;
  const fonts = FONT_PAIRS[fontIdx];
  const layout = LAYOUT_ARCHETYPES[layoutIdx];

  return {
    ...base,
    categoryKey: key,
    layoutFamily: layout.id,
    layoutArchetype: layout.id,
    layoutDescription: layout.description,
    fontDisplay: fonts.display,
    fontBody: fonts.body,
    googleFonts: fonts.google,
  };
}

function normalizeCategory(cat) {
  if (!cat) return "general";
  const c = cat.toLowerCase().replace(/\s+/g, "_");
  if (/restaurant|food|cafe|bakery|bar|grill|pizza|diner/.test(c)) return "food";
  if (/pet_groom|groom|vet|animal/.test(c)) return "pet";
  if (/tow|recovery|plumb|electric|hvac|roof|contract|construction|repair|auto|handyman|handywoman|handyperson/.test(c))
    return "trades";
  if (/fitness|gym|yoga|crossfit|sport/.test(c)) return "fitness";
  if (/salon|spa|barber|beauty|nail|tan/.test(c)) return "salon";
  if (/florist|flower|greenhouse|nursery|garden/.test(c)) return "florist";
  if (/law|legal|attorney|dental|clinic|medical|doctor/.test(c)) return "professional";
  return "general";
}

const PROFILES = {
  food: {
    verticalLabel: "Restaurant / food service",
    mood: "Warm, appetizing, neighborhood favorite — invite hunger and comfort",
    primaryCta: "View menu & call",
    secondaryCta: "Get directions",
    sections: ["hero", "credibility", "menu-highlights", "about", "gallery", "visit", "contact"],
    mockupSections: ["menu hero", "hours block", "photo gallery", "map & directions"],
    serviceHighlights: ["Daily specials", "Catering & events", "Dine-in & takeout"],
    designVariance: 9,
    motionIntensity: 5,
    visualDensity: 7,
    antiPatterns:
      "No fake Google star widgets unless review_score provided. No SaaS feature grids. Food sites should feel sensory (texture, warmth, appetite), not corporate.",
    stickyCallBar: false,
  },
  pet: {
    verticalLabel: "Pet grooming / pet services",
    mood: "Friendly, caring, trustworthy — pets are family",
    primaryCta: "Book grooming",
    secondaryCta: "Call us",
    sections: ["hero", "credibility", "services", "gallery", "about", "visit", "contact"],
    mockupSections: ["grooming services", "photo gallery from posts", "booking call CTA"],
    serviceHighlights: ["Full-service grooming", "Breed-specific care", "Walk-ins welcome"],
    designVariance: 8,
    motionIntensity: 4,
    visualDensity: 6,
    antiPatterns: "No menu section. No restaurant language. Soft or playful but not childish unless posts suggest it.",
    stickyCallBar: false,
  },
  trades: {
    verticalLabel: "Trades / towing / home services",
    mood: "Reliable, local, ready when you need us — competent and direct",
    primaryCta: "Call now",
    secondaryCta: "Request a quote",
    sections: ["hero", "credibility", "services", "service-area", "about", "visit", "contact"],
    mockupSections: ["emergency call CTA", "service list", "service area map", "sticky phone bar"],
    serviceHighlights: ["24/7 availability", "Licensed & insured", "Local service area"],
    designVariance: 7,
    motionIntensity: 3,
    visualDensity: 5,
    antiPatterns:
      "No menu or reservation language. Phone must be tel: in header and hero. Sticky mobile call bar required. Industrial clarity beats decoration.",
    stickyCallBar: true,
  },
  fitness: {
    verticalLabel: "Fitness / gym",
    mood: "Energetic, community-driven, motivating",
    primaryCta: "Start your membership",
    secondaryCta: "View class schedule",
    sections: ["hero", "credibility", "programs", "about", "gallery", "visit", "contact"],
    mockupSections: ["membership CTA", "programs section", "community photos", "contact form"],
    serviceHighlights: ["Group classes", "Personal training", "Flexible memberships"],
    designVariance: 8,
    motionIntensity: 6,
    visualDensity: 6,
    antiPatterns: "No menu language. Bold type and movement; avoid generic gym stock layout.",
    stickyCallBar: false,
  },
  salon: {
    verticalLabel: "Salon / spa / personal care",
    mood: "Polished, relaxing, appointment-ready",
    primaryCta: "Book appointment",
    secondaryCta: "View services",
    sections: ["hero", "credibility", "services", "gallery", "about", "visit", "contact"],
    mockupSections: ["services menu", "work gallery", "booking CTA", "hours & location"],
    serviceHighlights: ["Cut & color", "Special occasion styling", "Walk-ins when available"],
    designVariance: 9,
    motionIntensity: 4,
    visualDensity: 6,
    antiPatterns: "No food menu language. Gallery should showcase work, not template beauty shots.",
    stickyCallBar: false,
  },
  florist: {
    verticalLabel: "Florist / greenhouse / garden",
    mood: "Organic, seasonal, handcrafted — living things and color",
    primaryCta: "Shop flowers",
    secondaryCta: "Visit us",
    sections: ["hero", "credibility", "offerings", "seasonal", "gallery", "visit", "contact"],
    mockupSections: ["seasonal highlights", "gallery", "visit & hours"],
    serviceHighlights: ["Custom arrangements", "Events & weddings", "Plants & gifts"],
    designVariance: 9,
    motionIntensity: 4,
    visualDensity: 7,
    antiPatterns: "No restaurant menu unless they serve food. Celebrate botanical texture and seasonality.",
    stickyCallBar: false,
  },
  professional: {
    verticalLabel: "Professional services",
    mood: "Trustworthy, established, clear expertise",
    primaryCta: "Schedule consultation",
    secondaryCta: "Call our office",
    sections: ["hero", "credibility", "services", "about", "testimonials", "visit", "contact"],
    mockupSections: ["practice overview", "services", "credentials strip", "contact form"],
    serviceHighlights: ["Free consultation", "Experienced team", "Serving the local community"],
    designVariance: 7,
    motionIntensity: 3,
    visualDensity: 5,
    antiPatterns: "Conservative layout. No flashy animations. No fake awards.",
    stickyCallBar: false,
  },
  general: {
    verticalLabel: "Local business",
    mood: "Professional, welcoming, community-rooted",
    primaryCta: "Contact us",
    secondaryCta: "Learn more",
    sections: ["hero", "credibility", "services", "about", "gallery", "visit", "contact"],
    mockupSections: ["services overview", "photo gallery", "contact section", "map & hours"],
    serviceHighlights: ["Quality service", "Local & trusted", "Easy to reach"],
    designVariance: 8,
    motionIntensity: 4,
    visualDensity: 5,
    antiPatterns: "Avoid generic 3-column icon cards. Copy must be specific to this Facebook page.",
    stickyCallBar: false,
  },
};

function hashSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}
