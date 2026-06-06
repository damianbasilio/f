/**
 * Outreach email copy — Groq AI (preferred) or template fallback.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { getVerticalProfile } from "./vertical-profiles.mjs";
import { slugDir, mockupUrl } from "./paths.mjs";
import { groqChatCompletion, getGroqConfig } from "./groq-client.mjs";
import { SYSTEM_PROMPT, buildGroqUserPrompt } from "./outreach-groq-prompt.mjs";
import { OUTREACH_SIGNATURE } from "./parse-outreach.mjs";
import { sanitizePostCaptions } from "./fb-caption-sanitize.mjs";

const MAX_BODY_WORDS = 180;
const BANNED_PHRASES = [
  "does a lot of the work",
  "simple site could make it easier",
  "hours, menu, and directions",
  "I came across your Facebook page",
  "website layout for",
];

/** @type {Set<string>} */
const batchUsedOpenings = new Set();

export function resetBatchDedup() {
  batchUsedOpenings.clear();
}

/**
 * @param {string} slug
 */
export function loadOutreachContext(slug) {
  const dir = slugDir(slug);
  const brief = fs.readFileSync(path.join(dir, "brief.md"), "utf8");
  const inputPath = path.join(dir, "stitch", "prompt-input.json");
  const scrapePath = path.join(dir, "facebook-scrape.json");

  const input = fs.existsSync(inputPath) ? JSON.parse(fs.readFileSync(inputPath, "utf8")) : {};
  const scrape = fs.existsSync(scrapePath) ? JSON.parse(fs.readFileSync(scrapePath, "utf8")) : {};
  const leadFile = path.join(dir, "lead.json");
  const lead = fs.existsSync(leadFile) ? JSON.parse(fs.readFileSync(leadFile, "utf8")) : {};

  const profile = getVerticalProfile(lead.business_category || input.category, slug);

  return {
    slug,
    businessName: pick(brief, /\*\*Name:\*\*\s*(.+)/i, slug),
    email: pick(brief, /\*\*Email:\*\*\s*(.+)/i, lead.emails || ""),
    liveUrl: pick(brief, /\*\*Live URL:\*\*\s*(https?:\/\/[^\s]+)/i, lead.facebook || ""),
    city: input.city || lead.city || extractCity(pick(brief, /\*\*Location:\*\*\s*(.+)/i, "")),
    location: input.location || pick(brief, /\*\*Location:\*\*\s*(.+)/i, ""),
    phone: input.phone || scrape.phone || lead.phone_number || "",
    category: lead.business_category || input.category || "local_business",
    reviewScore: lead.review_score ?? input.reviewScore,
    description: scrape.description || input.description || input.fullDescription || "",
    profileSummary: scrape.profileSummary || input.profileSummary || "",
    hours: input.hours || scrape.hours || scrape.profileAbout?.hours || "",
    postCaptions: sanitizePostCaptions(scrape.postCaptions || input.postCaptions || []),
    mockupSections: input.mockupSections || [],
    heroH1: input.heroH1 || pick(brief, /\*\*H1:\*\*\s*(.+)/i, ""),
    primaryCta: input.primaryCta || pick(brief, /\*\*Primary CTA:\*\*\s*(.+)/i, "contact us"),
    verticalLabel: profile.verticalLabel,
    profile,
    activityEvidence: pick(brief, /## Activity verification[\s\S]*?\*\*Evidence:\*\*\s*(.+)/i, "Active Facebook page"),
    mockupUrl: mockupUrl(slug),
    shortName: shortenName(pick(brief, /\*\*Name:\*\*\s*(.+)/i, slug)),
  };
}


/**
 * @param {string} slug
 * @param {number} batchIndex
 */
export async function buildFbOutreachCopy(slug, batchIndex = 0) {
  const cfg = getGroqConfig();
  if (cfg.enabled) {
    return buildFbOutreachCopyGroq(slug, batchIndex, cfg);
  }
  console.warn(`  ○ GROQ_API_KEY not set — using template outreach for ${slug}`);
  return buildFbOutreachCopyTemplate(slug, batchIndex);
}

/**
 * @param {string} slug
 * @param {number} batchIndex
 * @param {ReturnType<typeof getGroqConfig>} cfg
 */
async function buildFbOutreachCopyGroq(slug, batchIndex, cfg) {
  const ctx = loadOutreachContext(slug);
  const userPrompt = buildGroqUserPrompt(ctx);

  let usage;
  let lastError;

  for (let attempt = 0; attempt <= 2; attempt++) {
    const temperature = attempt === 0 ? 0.75 : 0.35;
    try {
      const { content, usage: u } = await groqChatCompletion(
        {
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt },
          ],
          temperature,
        },
        cfg
      );
      usage = u;

      const parsed = parseGroqJson(content);
      const copy = groqCopyFromParsed(parsed, ctx);

      fs.mkdirSync(slugDir(slug), { recursive: true });
      fs.writeFileSync(
        slugDir(slug, "outreach-groq.json"),
        JSON.stringify(
          {
            model: cfg.model,
            generatedAt: new Date().toISOString(),
            usage,
            raw: parsed,
          },
          null,
          2
        ) + "\n",
        "utf8"
      );

      return copy;
    } catch (err) {
      lastError = err;
      if (attempt < 2) {
        console.warn(`  Groq outreach for ${slug} — retrying (${attempt + 2}/3): ${err.message}`);
      }
    }
  }

  throw lastError || new Error(`Groq outreach failed for ${slug}`);
}

/** AI output as-is. Signature is added in writeGroqOutreachMd only. */
function groqCopyFromParsed(parsed, ctx) {
  return {
    subject: String(parsed.subject || ""),
    body: String(parsed.body || ""),
    mockupUrl: ctx.mockupUrl,
    email: ctx.email,
    emailSource: ctx.liveUrl,
    activityEvidence: ctx.activityEvidence,
    businessName: ctx.businessName,
    liveUrl: ctx.liveUrl,
    source: "groq",
  };
}

function parseGroqJson(content) {
  return JSON.parse(content);
}

/**
 * Template fallback when GROQ_API_KEY is not set.
 * @param {string} slug
 * @param {number} batchIndex
 */
export function buildFbOutreachCopyTemplate(slug, batchIndex = 0) {
  const ctx = loadOutreachContext(slug);
  const seed = hashSlug(slug) + batchIndex;

  const compliment = buildCompliment(ctx, seed);
  const bodyParts = [
    compliment,
    buildOpportunity(ctx, seed),
    buildPreview(ctx, seed),
    pickVariant(PRICING, seed + 3),
    pickVariant(CTAS, seed + 4),
  ].map(polish);
  trimToWordLimit(bodyParts, MAX_BODY_WORDS);

  return {
    subject: buildSubject(ctx, seed),
    greeting: buildGreeting(ctx),
    compliment: bodyParts[0],
    opportunity: bodyParts[1],
    preview: bodyParts[2],
    pricing: bodyParts[3],
    cta: bodyParts[4],
    mockupUrl: ctx.mockupUrl,
    email: ctx.email,
    emailSource: ctx.liveUrl,
    activityEvidence: ctx.activityEvidence,
    businessName: ctx.businessName,
    liveUrl: ctx.liveUrl,
    source: "template",
  };
}

/**
 * @param {ReturnType<typeof buildFbOutreachCopy>} copy
 */
export function writeOutreachMd(slug, copy) {
  if (copy.body) {
    writeGroqOutreachMd(slug, copy);
    return;
  }
  const template = fs.readFileSync(path.join(root, "templates", "outreach.template.md"), "utf8");
  let out = template;
  const fields = {
    BUSINESS_NAME: copy.businessName,
    EMAIL: copy.email,
    SUBJECT: copy.subject,
    GREETING: copy.greeting,
    COMPLIMENT_PARAGRAPH: copy.compliment,
    OPPORTUNITY_PARAGRAPH: copy.opportunity,
    PREVIEW_PARAGRAPH: copy.preview,
    MOCKUP_URL: copy.mockupUrl,
    PRICING_PARAGRAPH: copy.pricing,
    CTA_PARAGRAPH: copy.cta,
    EMAIL_SOURCE: copy.emailSource,
    ACTIVITY_EVIDENCE: copy.activityEvidence,
    LIVE_URL: copy.liveUrl,
  };
  for (const [k, v] of Object.entries(fields)) out = out.replaceAll(`{{${k}}}`, v);
  fs.writeFileSync(slugDir(slug, "outreach.md"), out, "utf8");
}

/**
 * @param {ReturnType<typeof buildFbOutreachCopy>} copy
 */
function writeGroqOutreachMd(slug, copy) {
  const out = `# ${copy.businessName} - outreach

**To:** ${copy.email}  
**Subject:** ${copy.subject}

${copy.body.trim()}

${OUTREACH_SIGNATURE}

---

## Verification row

| Field | Value |
| ----- | ----- |
| Email | ${copy.email} (${copy.emailSource}) |
| Activity | ${copy.activityEvidence} |
| Live URL | ${copy.mockupUrl} |
| Current site | ${copy.liveUrl} |
`;
  fs.writeFileSync(slugDir(slug, "outreach.md"), out, "utf8");
}

function buildSubject(ctx, seed) {
  const { shortName, city, profile } = ctx;
  const cat = profile.verticalLabel.split("/")[0].trim().toLowerCase();
  const formats = [
    `quick thought on ${shortName}`,
    city ? `${city} ${cat} — homepage sketch` : `made something for ${shortName}`,
    `homepage idea for ${shortName}`,
    `a preview for ${shortName}`,
    city ? `something for ${shortName} in ${city}` : `site sketch for ${shortName}`,
  ];
  let subject = pickVariant(formats, seed);
  for (const banned of BANNED_PHRASES) {
    if (subject.toLowerCase().includes(banned)) {
      subject = pickVariant(formats, seed + 7);
      break;
    }
  }
  return subject;
}

function buildGreeting(ctx) {
  const owner = ctx.owner;
  if (owner && owner.length > 1 && owner.length < 20) return `Hi ${owner},`;
  return "Hi,";
}

function buildCompliment(ctx, seed) {
  const { shortName, city, postCaptions, description, profile, reviewScore } = ctx;
  const place = city ? ` in ${city}` : "";
  const caption = postCaptions.find((c) => c.length >= 25 && !/see more about/i.test(c))?.slice(0, 80).replace(/[.!?]+$/, "");
  const descBit = description?.slice(0, 70).replace(/[.!?]+$/, "");

  const candidates = [];

  if (caption && caption.length > 20) {
    candidates.push(
      `I was looking at businesses${place} and spent some time on ${shortName}'s Facebook page — ${lcfirst(caption)}.`,
      `${shortName}${place} stood out to me, especially your post about ${lcfirst(caption.slice(0, 50))}.`
    );
  }

  if (descBit && descBit.length > 25) {
    candidates.push(`While researching${place || " local businesses"}, ${shortName} caught my eye — ${lcfirst(descBit)}.`);
  }

  if (reviewScore && reviewScore >= 4.5) {
    candidates.push(
      `${shortName}${place} has built a solid reputation (${reviewScore} stars doesn't happen by accident). I wanted to reach out with something practical.`
    );
  }

  const verticalOpenings = {
    food: [
      `${shortName}${place} clearly has regulars who care about what you serve. That kind of following deserves a homepage that matches the energy of your page.`,
    ],
    pet: [
      `The care ${shortName} shows in every grooming photo${place ? ` around ${city}` : ""} comes through — pet parents notice that.`,
    ],
    trades: [
      `${shortName}${place} looks like the kind of crew people call when they need help fast. That reliability should be obvious the second someone finds you online.`,
    ],
    fitness: [
      `${shortName}${place} has a real community vibe on Facebook. New members should feel that before they ever visit.`,
    ],
    salon: [
      `Your work at ${shortName}${place} speaks for itself in the photos you share — that portfolio deserves its own home page.`,
    ],
    general: [
      `${shortName}${place} is doing meaningful work in the community. I put together something that might help new customers find you faster.`,
    ],
  };

  const key = profile.categoryKey || "general";
  candidates.push(...(verticalOpenings[key] || verticalOpenings.general));

  let opening = pickVariant(candidates.filter(Boolean), seed);
  let attempts = 0;
  while (batchUsedOpenings.has(opening.slice(0, 40)) && attempts < 8) {
    opening = pickVariant(candidates.filter(Boolean), seed + attempts + 1);
    attempts++;
  }
  batchUsedOpenings.add(opening.slice(0, 40));

  for (const banned of BANNED_PHRASES) {
    if (opening.toLowerCase().includes(banned)) {
      opening = `${shortName}${place} is clearly doing something right. I wanted to share a quick idea.`;
    }
  }
  return opening;
}

function buildOpportunity(ctx, seed) {
  const { shortName, city, profile, primaryCta } = ctx;
  const place = city ? ` in ${city}` : "";

  const byKey = {
    food: [
      `A dedicated homepage would put your menu, hours, and a call button right where Google searchers land — alongside your Facebook page, not instead of it.`,
      `When someone searches for food${place}, a simple site with photos and ${primaryCta.toLowerCase()} gives them one place to decide.`,
    ],
    pet: [
      `A booking-friendly homepage with your grooming services and gallery would make it easier for new pet parents to choose ${shortName}.`,
      `Your Facebook posts do the storytelling — a site would add a clear path to ${primaryCta.toLowerCase()}.`,
    ],
    trades: [
      `When someone needs help${place}, a homepage with your services and a one-tap call button beats digging through a social feed.`,
      `A site built around ${primaryCta.toLowerCase()} and your service area would capture calls from people searching right now.`,
    ],
    fitness: [
      `A homepage with class info and a membership inquiry path would help newcomers${place} take the next step without DMing.`,
    ],
    salon: [
      `An appointment-ready homepage with your services and work gallery would complement what you already post.`,
    ],
    general: [
      `A lightweight homepage would give Google searchers one welcoming place to see what ${shortName} offers and how to reach you.`,
      `New customers${place} often check Google first — a simple site puts your phone and services where they expect them.`,
    ],
  };

  const key = profile.categoryKey || "general";
  return pickVariant(byKey[key] || byKey.general, seed);
}

function buildPreview(ctx, seed) {
  const sections = ctx.mockupSections?.slice(0, 3) || ["services", "photo gallery", "contact section"];
  const sectionStr =
    sections.length >= 2
      ? `${sections[0]}, ${sections[1]}${sections[2] ? `, and ${sections[2]}` : ""}`
      : "your services and contact info";

  const variants = [
    `I mocked up a homepage with ${sectionStr} — all built from what you already share on Facebook.`,
    `I put together a quick preview using your Facebook photos: ${sectionStr}.`,
    `Here's a concept I built from your page content — ${sectionStr}, plus a click-to-call button.`,
  ];
  return pickVariant(variants, seed);
}

const PRICING = [
  "Happy to share what building it out would run if you're interested, or hop on a quick call if that's easier.",
  "If you want to take it live, reply with questions or jump on a short call to walk through scope and cost.",
  "The preview is just a concept. Reply if you'd like details, or happy to chat by phone if you prefer.",
];

const CTAS = [
  "No pressure at all. Worth a look when you have five minutes.",
  "Totally up to you. Reply anytime if you'd like a quick walkthrough.",
  "If it's useful, I'm glad to hop on a short call and talk through it.",
  "Feel free to ignore this if the timing's off. Otherwise, just reply.",
  "When you have a spare moment, I'd love to hear what you think.",
  "No rush. The preview link is there whenever you want to peek.",
  "If it resonates, reply and we can chat. If not, no worries.",
  "Happy to answer questions by email or on a quick call, whichever is easier.",
];

function pick(text, re, fb = "") {
  return text.match(re)?.[1]?.trim() || fb;
}

function extractCity(location) {
  const m = location.match(/,\s*([^,]+),?\s*[A-Z]{2}/);
  return m?.[1]?.trim() || "";
}

function shortenName(name) {
  return name.replace(/\s+(LLC|Inc\.?|Co\.?|Corp\.?)$/i, "").trim();
}

function pickVariant(arr, seed) {
  if (!arr.length) return "";
  return arr[Math.abs(seed) % arr.length];
}

function hashSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

function lcfirst(s) {
  if (!s) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
}

function stripEmDashes(s) {
  return String(s)
    .split("\n")
    .map((line) =>
      line
        .replace(/\s*[—–]\s*/g, ", ")
        .replace(/[—–]/g, "-")
        .replace(/,\s*,+/g, ",")
        .replace(/,\s+\./g, ".")
        .replace(/  +/g, " ")
        .trimEnd()
    )
    .join("\n");
}

function polish(s) {
  return stripEmDashes(s).replace(/\s+/g, " ").trim();
}

function trimToWordLimit(parts, max) {
  let total = parts.reduce((n, p) => n + wordCount(p), 0);
  while (total > max && parts.length) {
    const longest = parts.reduce((best, p, i) => (wordCount(p) > wordCount(parts[best]) ? i : best), 0);
    const words = parts[longest].split(/\s+/);
    if (words.length <= 6) break;
    parts[longest] = words.slice(0, -2).join(" ") + ".";
    total = parts.reduce((n, p) => n + wordCount(p), 0);
  }
}

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}
