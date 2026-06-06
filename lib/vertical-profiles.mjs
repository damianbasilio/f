/**
 * Per-vertical layout, typography, CTAs, and design dials for Facebook-only mockups.
 */

import { isDirectoryListing } from "./directory-hosts.mjs";

const LAYOUT_FAMILIES = [
  "split-hero",
  "full-bleed-photo",
  "editorial-stack",
  "asymmetric-grid",
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
  const layoutIdx = hashSlug(slug) % LAYOUT_FAMILIES.length;
  return {
    ...base,
    categoryKey: key,
    layoutFamily: LAYOUT_FAMILIES[layoutIdx],
    layoutDescription: LAYOUT_DESCRIPTIONS[LAYOUT_FAMILIES[layoutIdx]],
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
  if (/salon|spa|barber|beauty|nail/.test(c)) return "salon";
  if (/law|legal|attorney|dental|clinic|medical|doctor/.test(c)) return "professional";
  return "general";
}

const LAYOUT_DESCRIPTIONS = {
  "split-hero": "Split hero: 55% photo left, headline + tel CTA + trust line right; phone visible without scroll on desktop.",
  "full-bleed-photo": "Full-bleed photo hero with dark gradient overlay; headline and primary CTA centered; sticky mobile call bar.",
  "editorial-stack": "Editorial stack: narrow content column, large typographic headline, photo band below fold, services as horizontal cards.",
  "asymmetric-grid": "Asymmetric grid: offset hero image, overlapping credibility strip, services in staggered two-column layout.",
};

const PROFILES = {
  food: {
    verticalLabel: "Restaurant / food service",
    mood: "Warm, appetizing, neighborhood favorite",
    fontDisplay: "DM Serif Display",
    fontBody: "DM Sans",
    googleFonts: "DM+Serif+Display&family=DM+Sans:wght@400;500;600;700",
    primaryCta: "View menu & call",
    secondaryCta: "Get directions",
    sections: ["hero", "credibility", "menu-highlights", "about", "gallery", "visit", "contact"],
    mockupSections: ["menu hero", "hours block", "photo gallery", "map & directions"],
    serviceHighlights: ["Daily specials", "Catering & events", "Dine-in & takeout"],
    designVariance: 8,
    motionIntensity: 5,
    visualDensity: 7,
    antiPatterns: "No fake Google star widgets unless review_score provided. Include menu/reservations language, not generic SaaS features.",
    stickyCallBar: false,
  },
  pet: {
    verticalLabel: "Pet grooming / pet services",
    mood: "Friendly, caring, trustworthy with pets",
    fontDisplay: "Source Serif 4",
    fontBody: "Nunito",
    googleFonts: "Source+Serif+4:opsz,wght@8..60,600;700&family=Nunito:wght@400;600;700",
    primaryCta: "Book grooming",
    secondaryCta: "Call us",
    sections: ["hero", "credibility", "services", "gallery", "about", "visit", "contact"],
    mockupSections: ["grooming services", "photo gallery from posts", "booking call CTA"],
    serviceHighlights: ["Full-service grooming", "Breed-specific care", "Walk-ins welcome"],
    designVariance: 7,
    motionIntensity: 4,
    visualDensity: 6,
    antiPatterns: "No menu section. No restaurant language. Focus on pet care and booking.",
    stickyCallBar: false,
  },
  trades: {
    verticalLabel: "Trades / towing / home services",
    mood: "Reliable, local, ready when you need us",
    fontDisplay: "Barlow Condensed",
    fontBody: "Barlow",
    googleFonts: "Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600",
    primaryCta: "Call now",
    secondaryCta: "Request a quote",
    sections: ["hero", "credibility", "services", "service-area", "about", "visit", "contact"],
    mockupSections: ["emergency call CTA", "service list", "service area map", "sticky phone bar"],
    serviceHighlights: ["24/7 availability", "Licensed & insured", "Local service area"],
    designVariance: 6,
    motionIntensity: 3,
    visualDensity: 5,
    antiPatterns: "No menu or reservation language. Phone must be tel: link in header and hero. Sticky mobile call bar required.",
    stickyCallBar: true,
  },
  fitness: {
    verticalLabel: "Fitness / gym",
    mood: "Energetic, community-driven, welcoming",
    fontDisplay: "Oswald",
    fontBody: "Source Sans 3",
    googleFonts: "Oswald:wght@500;600;700&family=Source+Sans+3:wght@400;600;700",
    primaryCta: "Start your membership",
    secondaryCta: "View class schedule",
    sections: ["hero", "credibility", "programs", "about", "gallery", "visit", "contact"],
    mockupSections: ["membership CTA", "programs section", "community photos", "contact form"],
    serviceHighlights: ["Group classes", "Personal training", "Flexible memberships"],
    designVariance: 7,
    motionIntensity: 5,
    visualDensity: 6,
    antiPatterns: "No menu language. Focus on classes, membership, and community from Facebook posts.",
    stickyCallBar: false,
  },
  salon: {
    verticalLabel: "Salon / spa / personal care",
    mood: "Polished, relaxing, appointment-ready",
    fontDisplay: "Cormorant Garamond",
    fontBody: "Montserrat",
    googleFonts: "Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600",
    primaryCta: "Book appointment",
    secondaryCta: "View services",
    sections: ["hero", "credibility", "services", "gallery", "about", "visit", "contact"],
    mockupSections: ["services menu", "work gallery", "booking CTA", "hours & location"],
    serviceHighlights: ["Cut & color", "Special occasion styling", "Walk-ins when available"],
    designVariance: 8,
    motionIntensity: 4,
    visualDensity: 6,
    antiPatterns: "No food menu language. Gallery should showcase styling work from Facebook photos.",
    stickyCallBar: false,
  },
  professional: {
    verticalLabel: "Professional services",
    mood: "Trustworthy, established, clear expertise",
    fontDisplay: "Libre Baskerville",
    fontBody: "Source Sans 3",
    googleFonts: "Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600",
    primaryCta: "Schedule consultation",
    secondaryCta: "Call our office",
    sections: ["hero", "credibility", "services", "about", "testimonials", "visit", "contact"],
    mockupSections: ["practice overview", "services", "credentials strip", "contact form"],
    serviceHighlights: ["Free consultation", "Experienced team", "Serving the local community"],
    designVariance: 6,
    motionIntensity: 3,
    visualDensity: 5,
    antiPatterns: "Conservative layout. No flashy animations. No fake awards.",
    stickyCallBar: false,
  },
  general: {
    verticalLabel: "Local business",
    mood: "Professional, welcoming, community-rooted",
    fontDisplay: "Playfair Display",
    fontBody: "Work Sans",
    googleFonts: "Playfair+Display:wght@600;700&family=Work+Sans:wght@400;500;600",
    primaryCta: "Contact us",
    secondaryCta: "Learn more",
    sections: ["hero", "credibility", "services", "about", "gallery", "visit", "contact"],
    mockupSections: ["services overview", "photo gallery", "contact section", "map & hours"],
    serviceHighlights: ["Quality service", "Local & trusted", "Easy to reach"],
    designVariance: 7,
    motionIntensity: 4,
    visualDensity: 5,
    antiPatterns: "Avoid generic 3-column icon cards. Use business-specific copy from Facebook scrape.",
    stickyCallBar: false,
  },
};

function hashSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}
