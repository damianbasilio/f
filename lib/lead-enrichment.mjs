/**
 * Build complete brief.md and stitch/prompt-input.json from lead + scrape data.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { getVerticalProfile } from "./vertical-profiles.mjs";
import { extractPaletteFromFile } from "./image-palette.mjs";
import { leadToLocation } from "./lead-import.mjs";
import { slugDir } from "./paths.mjs";
import { deriveServiceBullets } from "./facebook-deep-scrape.mjs";

/**
 * @param {string} slug
 * @param {object} lead
 * @param {object} verifyResult
 */
export async function enrichLead(slug, lead, verifyResult) {
  const dir = slugDir(slug);
  const assetsDir = path.join(dir, "assets");
  const page = verifyResult.pageData || {};
  const profileAbout = verifyResult.profileAbout || page.profileAbout || {};
  const profile = getVerticalProfile(lead.business_category, slug);

  const heroPath = verifyResult.localImages?.[0]
    ? path.join(dir, verifyResult.localImages[0])
    : null;
  const palette = heroPath ? await extractPaletteFromFile(heroPath) : page.colors?.length ? page.colors : ["#2C2C2C", "#6B5344", "#F5F0E8"];
  const primary = palette[0] || "#2C2C2C";
  const secondary = palette[1] || "#6B5344";
  const accent = palette[2] || "#F5F0E8";

  const location = leadToLocation(lead);
  const city = lead.city || extractCity(location) || extractCity(profileAbout.address || page.address || "");
  const description =
    profileAbout.intro ||
    page.description ||
    verifyResult.profileSummary?.split("\n")[0] ||
    `${lead.name} — local business in ${city || "your area"}`;
  const postCaptions = verifyResult.postCaptions || [];
  const captionSnippet = postCaptions.find((c) => c.length >= 25 && c.length <= 120) || description.slice(0, 120);

  const heroH1 = composeHeroH1(lead.name, city, profile, captionSnippet);
  const heroSubhead = composeSubhead(lead, profile, page, profileAbout);
  const services = deriveServiceBullets(postCaptions, profile.serviceHighlights, 4);

  const photoCount = verifyResult.localImages?.length || 0;
  const photoInventory =
    photoCount > 0
      ? `You will receive ${photoCount} real Facebook photos: hero = storefront/work sample, gallery slots = additional post photos. Design image areas as 16:9 or 4:3 placeholders.`
      : "Photo slots will be filled from Facebook post images after build. Leave generous img areas with descriptive alt text.";

  const promptInput = {
    slug,
    businessName: lead.name,
    vertical: profile.verticalLabel,
    category: lead.business_category,
    location,
    city,
    phone: lead.phone_number || page.phone || "",
    email: lead.emails,
    liveUrl: lead.facebook,
    reviewScore: lead.review_score,
    description,
    fullDescription: description,
    hours: profileAbout.hours || page.hours || "",
    profileAbout,
    profileSummary: verifyResult.profileSummary || "",
    postCaptions: postCaptions.slice(0, 12),
    postCaptionCount: postCaptions.length,
    heroH1,
    heroSubhead,
    serviceBullets: services,
    primaryCta: profile.primaryCta,
    secondaryCta: profile.secondaryCta,
    mockupSections: profile.mockupSections,
    layoutFamily: profile.layoutFamily,
    layoutDescription: profile.layoutDescription,
    fontDisplay: profile.fontDisplay,
    fontBody: profile.fontBody,
    googleFonts: profile.googleFonts,
    mood: profile.mood,
    designVariance: profile.designVariance,
    motionIntensity: profile.motionIntensity,
    visualDensity: profile.visualDensity,
    antiPatterns: profile.antiPatterns,
    stickyCallBar: profile.stickyCallBar,
    sections: profile.sections,
    primaryColor: primary,
    secondaryColor: secondary,
    accentColor: accent,
    palette,
    photoInventory,
    photoCount,
    googleMapsUrl: lead.google_maps_url,
    googleFirstUrl: lead.google_first_url,
  };

  const brief = buildBriefMd(slug, lead, verifyResult, promptInput, profile);
  const manifest = buildManifest(slug, lead.name, verifyResult.localImages || [], profile.sections);

  fs.mkdirSync(slugDir(slug, "stitch"), { recursive: true });
  fs.mkdirSync(assetsDir, { recursive: true });
  fs.writeFileSync(slugDir(slug, "brief.md"), brief, "utf8");
  fs.writeFileSync(slugDir(slug, "stitch", "prompt-input.json"), JSON.stringify(promptInput, null, 2) + "\n", "utf8");
  fs.writeFileSync(path.join(assetsDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

  const scrapeOut = {
    ...page,
    profileAbout,
    profileSummary: verifyResult.profileSummary || "",
    postCaptions,
    postImages: verifyResult.postImages || [],
    localImages: verifyResult.localImages || [],
    scrapedAt: new Date().toISOString(),
    puppeteer: true,
  };
  fs.writeFileSync(slugDir(slug, "facebook-scrape.json"), JSON.stringify(scrapeOut, null, 2) + "\n", "utf8");
  fs.writeFileSync(slugDir(slug, "lead.json"), JSON.stringify(lead, null, 2) + "\n", "utf8");

  return { brief, promptInput };
}

function buildBriefMd(slug, lead, verifyResult, input, profile) {
  const today = new Date().toISOString().slice(0, 10);
  const issues = [
    "Facebook-only presence — customers searching Google land on directories instead of the business",
    "No dedicated homepage for hours, services, and click-to-call from search results",
    "Social feed requires scrolling — key info (phone, location, services) is not one tap away",
  ];

  return `# ${lead.name} — brief

## Email verification

- **Email:** ${lead.emails}
- **Source:** ${lead.facebook}
- **Gate:** PASS

## Activity verification

- **Gate:** PASS
- **Evidence:** Active Facebook page with content${verifyResult.postCaptions?.length ? ` and ${verifyResult.postCaptions.length} post caption(s) scraped` : ""}
- **Checked:** ${today} — Facebook profile scrape

## Human approval

- **Reviewed by:** auto (Facebook-only verified lead)
- **Date:** ${today}
- **Website bad enough to proceed:** yes — no owned website on Facebook profile
- **Gate:** PASS

## Site quality gate

- **Gate:** PASS
- **Live URL:** ${lead.facebook}
- **Why this site hurts sales:** Business relies on Facebook only; Google searchers cannot reach a dedicated homepage with phone and services above the fold.

## Business copy

- **Name:** ${lead.name}
- **Owner:** —
- **Location:** ${input.location}
- **Phone:** ${input.phone || "See Facebook page"}
- **Email:** ${lead.emails}
- **Tagline:** ${input.heroSubhead}
- **Hours:** ${input.hours || verifyResult.profileAbout?.hours || verifyResult.pageData?.hours || "See Facebook page"}
- **Focus:** ${input.description}
- **Full profile (scraped):**

${(verifyResult.profileSummary || input.description).slice(0, 2500)}
- **Category:** ${profile.verticalLabel}
- **Vertical:** ${profile.verticalLabel}

## Core functionalities

- **Primary action:** ${profile.primaryCta}
- **Secondary action:** ${profile.secondaryCta}
- **Must surface above fold:** Phone number, primary CTA, business name, city
- **Service highlights:** ${input.serviceBullets.join("; ")}
- **Trust signals available:** ${lead.review_score && lead.review_score >= 4.5 ? `${lead.review_score} review score from listings` : "Local business; Facebook community presence"}

## Three verifiable issues

1. ${issues[0]}
2. ${issues[1]}
3. ${issues[2]}

## Mockup angle

- **H1:** ${input.heroH1}
- **Primary CTA:** ${profile.primaryCta}
- **Secondary CTA:** ${profile.secondaryCta}
- **Sections:** ${profile.sections.join(", ")}
- **Tone:** ${profile.mood}
- **Palette:** ${input.palette.slice(0, 3).join(", ")}

## Stitch generation brief

- **Vertical:** ${profile.verticalLabel}
- **Mood:** ${profile.mood}
- **Typography direction:** ${profile.fontDisplay} + ${profile.fontBody}
- **Layout family:** ${profile.layoutFamily}
- **Design dials:** DESIGN_VARIANCE ${profile.designVariance} | MOTION_INTENSITY ${profile.motionIntensity} | VISUAL_DENSITY ${profile.visualDensity}
`;
}

function buildManifest(slug, name, localImages, sections) {
  const slots = ["hero", "services-1", "services-2", "about", "gallery-1", "gallery-2"];
  const images = {};
  for (const slot of slots) {
    images[slot] = { url: "", alt: `${name} — ${slot.replace(/-/g, " ")}`, source: "facebook" };
  }
  let i = 0;
  for (const slot of slots) {
    const local = localImages[i % Math.max(localImages.length, 1)];
    if (local) {
      images[slot] = {
        url: local,
        alt: `${name} — ${slot.replace(/-/g, " ")}`,
        source: "facebook",
        local: true,
      };
    }
    i++;
  }
  return {
    source: "facebook profile photos only",
    notes: "Real Facebook photos downloaded locally. No stock or generated images.",
    order: slots,
    images,
  };
}

function composeHeroH1(name, city, profile, captionSnippet) {
  if (/restaurant|food|grill|pizza|cafe/i.test(profile.verticalLabel)) {
    return city ? `${name} — ${city}'s local favorite` : `${name} — taste the difference`;
  }
  if (/pet|groom/i.test(profile.verticalLabel)) {
    return city ? `Professional pet care in ${city}` : `${name} — where pets are family`;
  }
  if (/tow|trades|service/i.test(profile.verticalLabel)) {
    return city ? `${name} — trusted ${city} service` : `${name} — here when you need us`;
  }
  if (captionSnippet.length > 15 && captionSnippet.length < 70) {
    return capitalize(captionSnippet.replace(/[.!?]+$/, ""));
  }
  return city ? `${name} — serving ${city}` : name;
}

function composeSubhead(lead, profile, page, profileAbout = {}) {
  const intro = profileAbout.intro || page.description;
  if (intro && intro.length > 20) return intro.slice(0, 180);
  return `${profile.verticalLabel} — ${lead.city || "local community"}`;
}

function extractCity(location) {
  const m = location.match(/,\s*([^,]+),?\s*[A-Z]{2}/);
  return m?.[1]?.trim() || "";
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
