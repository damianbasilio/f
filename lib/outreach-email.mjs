/**
 * Human, business-specific outreach email copy from brief.md fields.
 */
import { isFacebookUrl } from "./facebook-detect.mjs";

const MAX_BODY_WORDS = 125;

/**
 * @typedef {{
 *   businessName: string,
 *   shortName: string,
 *   email: string,
 *   liveUrl: string,
 *   emailSource: string,
 *   activityEvidence: string,
 *   vertical: string,
 *   category: string,
 *   tagline: string,
 *   focus: string,
 *   location: string,
 *   city: string,
 *   owner: string,
 *   whyHurts: string,
 *   serviceHighlights: string[],
 *   issues: string[],
 *   mockupH1: string,
 *   primaryCta: string,
 *   secondaryCta: string,
 *   tone: string,
 *   isFacebook: boolean,
 *   businessType: string,
 * }} OutreachContext
 */

/**
 * @param {string} brief
 * @param {string} slug
 */
export function parseOutreachContext(brief, slug) {
  const pick = (re, fb = "") => brief.match(re)?.[1]?.trim() || fb;

  const businessName = pick(/\*\*Name:\*\*\s*(.+)/i, slug);
  const liveUrl = pick(/\*\*Live URL:\*\*\s*(https?:\/\/[^\s]+)/i, pick(/\*\*Source:\*\*\s*(https?:\/\/[^\s]+)/i));
  const location = pick(/\*\*Location:\*\*\s*(.+)/i, "");
  const city = extractCity(location, businessName);

  const serviceRaw = pick(/\*\*Service highlights:\*\*\s*(.+)/i, "");
  const serviceHighlights = serviceRaw
    ? serviceRaw
        .split(/[;•]/)
        .map(cleanServiceHighlight)
        .filter((s) => s.length > 3 && s.length < 80)
    : [];

  const issues = [...(brief.match(/## Three verifiable issues[\s\S]*?(?=##|$)/i)?.[0] || "").matchAll(/^\d+\.\s*(.+)$/gm)].map(
    (m) => m[1].trim()
  );

  const ownerRaw = pick(/\*\*Owner:\*\*\s*(.+)/i, "");
  const owner = parseOwnerFirstName(ownerRaw, businessName);

  const vertical = pick(/\*\*Vertical:\*\*\s*(.+)/i, pick(/\*\*Category:\*\*\s*(.+)/i, ""));
  const category = pick(/\*\*Category:\*\*\s*(.+)/i, "");

  const ctx = {
    businessName,
    shortName: shortenBusinessName(businessName),
    email: pick(/\*\*Email:\*\*\s*(.+)/i),
    liveUrl,
    emailSource: pick(/## Email verification[\s\S]*?\*\*Source:\*\*\s*(.+)/i, liveUrl),
    activityEvidence: pick(/## Activity verification[\s\S]*?\*\*Evidence:\*\*\s*(.+)/i, "see brief"),
    vertical,
    category,
    tagline: pick(/\*\*Tagline:\*\*\s*(.+)/i, ""),
    focus: pick(/\*\*Focus:\*\*\s*(.+)/i, ""),
    location,
    city,
    owner,
    whyHurts: pick(/\*\*Why this site hurts sales:\*\*\s*(.+)/i, ""),
    serviceHighlights,
    issues,
    mockupH1: pick(/\*\*H1:\*\*\s*(.+)/i, ""),
    primaryCta: pick(/\*\*Primary action:\*\*\s*(.+)/i, pick(/\*\*Primary CTA:\*\*\s*(.+)/i, "")),
    secondaryCta: pick(/\*\*Secondary action:\*\*\s*(.+)/i, ""),
    tone: pick(/\*\*Tone:\*\*\s*(.+)/i, ""),
    isFacebook: isFacebookUrl(liveUrl),
    businessType: "local",
  };

  ctx.businessType = inferBusinessType(ctx);
  return ctx;
}

/**
 * @param {OutreachContext} ctx
 * @param {string} slug
 * @param {string} mockupUrl
 * @param {string} greeting
 */
export function buildOutreachCopy(ctx, slug, mockupUrl, greeting) {
  const seed = hashSlug(slug);
  const subject = buildSubject(ctx, seed);
  const compliment = buildCompliment(ctx, seed);
  const opportunity = buildOpportunity(ctx, seed);
  const preview = buildPreviewParagraph(ctx, seed);
  const pricing = pickVariant(PRICING_LINES, seed + 1);
  const cta = pickVariant(CTA_LINES, seed + 2);
  const disclaimer = `*(Concept preview only. Not affiliated with ${ctx.businessName}.)*`;

  const bodyParts = [compliment, opportunity, preview, pricing, cta].map(polishEmailSentence);
  trimBodyToWordLimit(bodyParts, MAX_BODY_WORDS);

  return {
    subject,
    greeting,
    compliment: bodyParts[0],
    opportunity: bodyParts[1],
    preview: bodyParts[2],
    pricing: bodyParts[3],
    cta: bodyParts[4],
    mockupUrl,
    disclaimer,
  };
}

const PRICING_LINES = [
  "I keep it simple for local businesses: one flat project fee, no monthly retainers.",
  "If you ever want numbers, I work on flat project fees. No ongoing contracts.",
  "Happy to talk scope whenever works. Flat-fee projects only, no monthly plans.",
];

const CTA_LINES = [
  "No pressure at all. If you'd like a quick walkthrough, just reply.",
  "Worth a five-minute look when you have time. Happy to answer questions.",
  "If it's useful, I'm glad to hop on a short call and talk through the idea.",
  "Totally up to you. Reply anytime if you want me to walk you through it.",
];

function buildSubject(ctx, seed) {
  const name = ctx.shortName;
  const formats = [
    `a thought on ${name}'s online presence`,
    `homepage idea for ${name}`,
    `quick preview for ${name}`,
    `website layout for ${name}`,
  ];
  let subject = pickVariant(formats, seed);
  if (wordCount(subject) > 7) {
    subject = pickVariant(
      [`homepage idea for ${name}`, `quick preview for ${name}`, `site idea for ${name}`],
      seed
    );
  }
  return styleSubjectLine(subject, ctx.businessName);
}

function buildCompliment(ctx, seed) {
  const { businessType, city, serviceHighlights, focus, tagline, mockupH1, tone, businessName, shortName } = ctx;

  if (businessType === "facebook") {
    const local = city ? ` in ${city}` : "";
    return pickVariant(
      [
        `${shortName} clearly has a real following${local}. Your Facebook page does a lot of the work. A simple site could make it even easier for new customers to find hours, menu, and directions.`,
        `I came across ${shortName}${local} on Facebook and liked what you're putting out there. A dedicated homepage could give first-time visitors the same warmth without making them scroll a feed.`,
        `${shortName} looks like a neighborhood staple${local}. You've built something people care about on Facebook. A clean website would help new folks discover you faster.`,
      ],
      seed
    );
  }

  if (businessType === "food" && serviceHighlights.length >= 2) {
    const a = serviceHighlights[0].replace(/\.$/, "");
    const b = serviceHighlights[1].replace(/\.$/, "");
    const place = city ? ` in ${city}` : "";
    return pickVariant(
      [
        `${shortName}${place} has real personality. Dishes like ${a} and ${b} deserve a homepage that makes people hungry before they finish scrolling.`,
        `What you're doing at ${shortName}${place} stands out. ${a}, ${b}. That kind of menu should be the first thing someone sees online.`,
        `I spent time learning about ${shortName} and kept thinking about ${a}. Food like that deserves to lead the page.`,
      ],
      seed
    );
  }

  if (businessType === "food" && focus) {
    const snippet = firstClause(focus, 100);
    const place = city ? ` around ${city}` : "";
    if (snippet.length > 25) {
      return `${shortName}${place} has something special going on. ${capitalize(snippet)}. That story should hit visitors right away.`;
    }
  }

  if (businessType === "childcare") {
    const tag = cleanTagline(tagline);
    const place = city ? ` in ${city}` : "";
    if (tag) {
      return pickVariant(
        [
          `${shortName}${place} is exactly the kind of place parents hope to find. "${tag}" should be the feeling families get the moment they land on your site.`,
          `Families searching for care${place} need to feel trust fast. ${shortName}'s ${tag.toLowerCase()} approach deserves a homepage that shows classrooms, staff, and how to tour.`,
        ],
        seed
      );
    }
    return `${shortName}${place} does meaningful work with little ones. Parents should be able to picture your classrooms and book a tour without hunting for a phone number.`;
  }

  if (mockupH1 && mockupH1.length > 15 && mockupH1.length < 90 && !/discover the|welcome to/i.test(mockupH1)) {
    return pickVariant(
      [
        `${shortName} is building something worth noticing. ${capitalize(stripTrailingPeriod(mockupH1))}. That message belongs front and center.`,
        `I like what ${shortName} is going for: ${lcfirst(stripTrailingPeriod(mockupH1))}. It should be the first thing people feel on your site.`,
      ],
      seed
    );
  }

  const tag = cleanTagline(tagline);
  if (tag && !isGenericTagline(tag)) {
    return pickVariant(
      [
        `${shortName} has a clear point of view. "${tag}" comes through in what you do.`,
        `There's real heart behind ${shortName}. ${tag.charAt(0).toUpperCase() + tag.slice(1)}.`,
      ],
      seed
    );
  }

  if (focus) {
    const snippet = firstClause(focus, 110);
    if (snippet.length > 30) {
      return `${shortName} stands out for ${lcfirst(stripTrailingPeriod(snippet))}. That should be obvious the second someone visits your site.`;
    }
  }

  if (tone) {
    const toneBit = firstClause(tone, 60);
    return `${shortName} has a ${lcfirst(toneBit)} vibe that would shine through even more with the right homepage.`;
  }

  return `${shortName} is doing solid work${city ? ` in ${city}` : ""}. I wanted to reach out with something that might help more customers find you.`;
}

function buildOpportunity(ctx, seed) {
  const lines = improvementLines(ctx);
  return pickVariant(lines, seed);
}

/**
 * Gain-only copy: what a better site would do for them. Never restate current-site problems.
 * @param {OutreachContext} ctx
 * @returns {string[]}
 */
function improvementLines(ctx) {
  const signals = [ctx.whyHurts, ...ctx.issues, ctx.focus, ctx.primaryCta, ctx.mockupH1]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const cta = humanCtaHint(ctx.primaryCta);
  const dish = ctx.serviceHighlights[0] ? lcfirst(cleanServiceHighlight(ctx.serviceHighlights[0])) : "";
  const place = ctx.city ? ` in ${ctx.city}` : "";

  if (ctx.businessType === "facebook") {
    return [
      `A simple homepage alongside your Facebook page would put hours, menu, and directions right where Google searches land.`,
      `A dedicated site would give new visitors one welcoming place to see what you offer and how to reach you.`,
      `A lightweight website built from what you already share online would help more locals discover ${ctx.shortName}${place}.`,
    ];
  }

  if (ctx.businessType === "food") {
    const foodLead = dish || "your best dishes";
    if (/cater|event|festival|market|pop-up/i.test(signals)) {
      return [
        `Leading with appetizing photos, market dates, and an easy catering path would help more planners book ${ctx.shortName}.`,
        `A homepage that showcases ${foodLead} up top with simple ${cta || "catering inquiries"} would turn more visitors into booked events.`,
        `Putting your food front and center with a clear ${cta || "catering"} button would make it easier for customers to say yes on the spot.`,
      ];
    }
    return [
      `Hero photos of ${foodLead} plus a clear path to ${cta || "reach you"} would make the first visit feel as inviting as the meal.`,
      `Leading with your menu and ${cta || "contact info"} would help hungry customers take the next step while they're still excited.`,
      `A photo-rich homepage with ${cta || "ordering or inquiries"} one tap away would bring more of the right people through the door.`,
    ];
  }

  if (ctx.businessType === "childcare") {
    return [
      `Opening with classroom photos, trust signals, and a tour button would help parents picture their child with you before they call.`,
      `A parent-friendly homepage with hours, your philosophy, and easy tour requests would make enrollment feel warm and approachable.`,
      `Leading with real classroom imagery and a simple ${cta || "tour booking"} path would help families${place} feel confident faster.`,
    ];
  }

  if (ctx.businessType === "salon") {
    return [
      `A polished homepage with service photos and easy ${cta || "booking"} would help new clients picture their visit before they call.`,
      `Leading with your best work and a clear ${cta || "appointment"} path would turn more browsers into booked chairs.`,
    ];
  }

  if (ctx.businessType === "fitness" || ctx.businessType === "trades") {
    return [
      `A portfolio-forward homepage with service areas and an easy quote path would help customers trust you at a glance.`,
      `Leading with results photos and a simple way to call or request an estimate would turn more local searches into booked jobs.`,
    ];
  }

  if (ctx.businessType === "farm") {
    return [
      `A homepage with harvest photos, pickup details, and market days upfront would help more locals plan a visit.`,
      `Leading with what's in season and how to buy would make it easier for customers to support you every week.`,
    ];
  }

  if (/photo|image|gallery|portfolio/i.test(signals)) {
    return [
      `Real photos up top would let visitors feel your work before they read a word.`,
      `A visual-first homepage would do more of the selling while customers are still browsing.`,
    ];
  }

  if (/book|tour|enroll|reserv|appoint/i.test(signals)) {
    return [
      `A clear ${cta || "booking"} path on the homepage would capture interest while it's highest.`,
      `Making ${cta || "the next step"} obvious on mobile would help more visitors follow through.`,
    ];
  }

  if (/menu|order|cater/i.test(signals)) {
    return [
      `Leading with what you serve and how to ${cta || "order"} would help customers act while they're hungry.`,
      `A homepage built around your offer and ${cta || "getting in touch"} would turn more visits into sales.`,
    ];
  }

  return [
    `A sharper mobile-first homepage would help more visitors understand what you offer and take the next step.`,
    `Leading with your strongest offer and an easy call-to-action would turn more traffic into real inquiries.`,
    `Putting your best work and ${cta || "contact"} front and center would help the right customers find you faster.`,
  ];
}

function buildPreviewParagraph(ctx, seed) {
  const { businessType, primaryCta, mockupH1, serviceHighlights, shortName } = ctx;
  const ctaHint = humanCtaHint(primaryCta);
  const dish = serviceHighlights[0]?.replace(/\.$/, "");

  if (businessType === "facebook") {
    return pickVariant(
      [
        `I pulled together a quick homepage concept using photos and details from your Facebook page.`,
        `I mocked up a simple site idea based on what you're already sharing online.`,
      ],
      seed
    );
  }

  if (businessType === "food" && dish) {
    const food = lcfirst(dish);
    return pickVariant(
      [
        `I put together a preview that leads with ${food} and makes ${ctaHint || "getting in touch"} obvious.`,
        `I sketched a homepage concept with your food up front and a clear path to ${ctaHint || "reach you"}.`,
      ],
      seed
    );
  }

  if (businessType === "childcare") {
    return pickVariant(
      [
        `I built a quick preview with classroom photos, trust signals, and a clear tour button up top.`,
        `I mocked up how a parent-friendly homepage could look with enrollment and tour info front and center.`,
      ],
      seed
    );
  }

  if (mockupH1) {
    return pickVariant(
      [
        `I put together a preview around "${stripTrailingPeriod(mockupH1)}" so the first screen matches what ${shortName} is about.`,
        `I sketched a homepage concept that leads with your main message and makes the next step obvious.`,
      ],
      seed
    );
  }

  if (ctaHint) {
    return `I put together a quick preview that makes ${ctaHint} the easy next step.`;
  }

  return pickVariant(
    [
      `I put together a quick homepage preview you can scroll through on your phone.`,
      `I sketched a cleaner mobile-first version so you can see how it might feel.`,
    ],
    seed
  );
}

function humanCtaHint(primaryCta) {
  if (!primaryCta) return "";
  const t = primaryCta.toLowerCase();
  if (t.includes("cater")) return "catering inquiries";
  if (t.includes("tour") || t.includes("enroll")) return "booking a tour";
  if (t.includes("call")) return "calling you";
  if (t.includes("reserv") || t.includes("book")) return "booking";
  if (t.includes("order") || t.includes("menu")) return "ordering";
  if (t.includes("quote")) return "requesting a quote";
  if (t.includes("email")) return "reaching out";
  const short = firstClause(primaryCta, 40);
  return short ? lcfirst(stripTrailingPeriod(short)) : "";
}

function inferBusinessType(ctx) {
  if (ctx.isFacebook) return "facebook";
  const text = [ctx.focus, ctx.vertical, ctx.category, ctx.businessName, ctx.tagline, ctx.mockupH1]
    .join(" ")
    .toLowerCase();
  if (/preschool|daycare|childcare|child care|early education/.test(text)) return "childcare";
  if (/restaurant|cafe|bakery|grill|food|catering|kitchen|bar\b|empanada|filipino|burger|taco/.test(text)) return "food";
  if (/salon|spa|beauty|hair|nail/.test(text)) return "salon";
  if (/dance|studio|gym|fitness|yoga/.test(text)) return "fitness";
  if (/farm|market|organic|produce/.test(text)) return "farm";
  if (/law|attorney|legal|plumb|hvac|roof|contractor/.test(text)) return "trades";
  return "local";
}

function extractCity(location, businessName) {
  const m = location.match(/,\s*([A-Za-z][A-Za-z\s.'-]{1,28}),\s*[A-Z]{2}\b/);
  if (m) return m[1].trim();
  const nameCity = businessName.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?),\s*[A-Z]{2}\b/);
  if (nameCity) return nameCity[1];
  return "";
}

function shortenBusinessName(name) {
  return name
    .replace(/\s+(LLC|Inc\.?|L\.?L\.?C\.?|PLLC|PA|PC)\.?$/i, "")
    .replace(/\s+and\s+Childcare$/i, "")
    .replace(/\s+Preschool and Childcare$/i, " Preschool")
    .trim();
}

function parseOwnerFirstName(ownerRaw, businessName) {
  if (!ownerRaw || /^[-—–]|none|unknown|n\/a|mother|father|team/i.test(ownerRaw)) return "";
  const director = ownerRaw.match(/\b([A-Z][a-z]+)\b(?:\s+[A-Z][a-z]+)?\s*(?:\(|—|–|-)/)?.[1];
  if (director && director.length > 2) return director;
  const first = ownerRaw.match(/^([A-Z][a-z]+)/)?.[1];
  if (first && first.length > 2 && !businessName.toLowerCase().startsWith(first.toLowerCase())) return first;
  return "";
}

function cleanTagline(tagline) {
  const t = stripTrailingPeriod(tagline);
  if (!t || isGenericTagline(t)) return "";
  return t;
}

function isGenericTagline(t) {
  return (
    /^discover the\b/i.test(t) ||
    /^welcome to\b/i.test(t) ||
    /difference$/i.test(t) ||
    /^catering, pop-ups/i.test(t) ||
    t.split(/\s+/).length <= 2
  );
}

function firstClause(text, maxLen = 90) {
  const clause = text.split(/[.;]/)[0]?.trim() || text;
  if (clause.length <= maxLen) return clause;
  return clause.slice(0, maxLen).replace(/\s+\S*$/, "").trim();
}

function hashSlug(slug) {
  return [...slug].reduce((sum, c) => sum + c.charCodeAt(0), 0);
}

function pickVariant(arr, seed) {
  return arr[Math.abs(seed) % arr.length];
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function styleSubjectLine(subject, businessName) {
  let out = subject.toLowerCase();
  for (const token of businessName.split(/\s+/)) {
    if (token.length < 2) continue;
    const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out.replace(new RegExp(escaped, "gi"), token);
  }
  return out;
}

function trimBodyToWordLimit(parts, maxWords) {
  const count = () => parts.join(" ").split(/\s+/).filter(Boolean).length;
  const trimOrder = [0, 3, 4, 1, 2];
  while (count() > maxWords) {
    let changed = false;
    for (const idx of trimOrder) {
      if (count() <= maxWords) break;
      const shortened = shortenSentence(parts[idx]);
      if (shortened !== parts[idx]) {
        parts[idx] = shortened;
        changed = true;
      }
    }
    if (!changed) break;
  }
}

function cleanServiceHighlight(raw) {
  let s = raw.trim().replace(/^custom-modify\s+/i, "");
  if (/pool table|dart|arcade|parking lot/i.test(s)) return "";
  if (/^steaks and seafood$/i.test(s)) return "steaks and seafood";
  return s.replace(/\s+/g, " ");
}

function shortenSentence(text) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  if (sentences.length > 1) return sentences[0].trim();
  const words = text.replace(/\.$/, "").split(/\s+/);
  if (words.length > 12) return `${words.slice(0, 12).join(" ")}.`;
  return text;
}

export function polishEmailSentence(text) {
  let out = text
    .replace(/\s*[—–]\s*/g, ". ")
    .replace(/\s*;\s*/g, ". ")
    .replace(/:\./g, ".")
    .replace(/\.\s*\./g, ".")
    .replace(/\s+/g, " ")
    .trim();
  out = out.replace(/(^|[.!?]\s+|:\s+)([a-z])/g, (_, prefix, letter) => prefix + letter.toUpperCase());
  if (!/[.!?]$/.test(out)) out += ".";
  return out;
}

function stripTrailingPeriod(s) {
  return s.replace(/\.\s*$/, "");
}

function lcfirst(s) {
  if (!s) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
