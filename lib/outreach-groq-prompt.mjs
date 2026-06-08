/**
 * Build system + user prompts for Groq outreach generation.
 */
import { sanitizePostCaptions, sanitizeProfileText } from "./fb-caption-sanitize.mjs";

/** Body word limits (preview URL line excluded). Keep in sync with outreach-email-fb.mjs enforcement. */
export const GROQ_BODY_WORD_MIN = 80;
export const GROQ_BODY_WORD_MAX = 110;

const SYSTEM_PROMPT = `You write short, human cold emails for Damian Basilio, a freelance web developer.

HARD LIMIT (most important rule): the email body must be ${GROQ_BODY_WORD_MIN}-${GROQ_BODY_WORD_MAX} words. The preview URL on its own line does NOT count. Count before you return JSON. Short sentences. No filler. If you run long, cut adjectives and merge ideas — never add another paragraph.

Your goal is NOT to sell in the subject or first sentence. Make the owner curious enough to keep reading. The homepage preview is the reveal, not the hook.

Tone: curious, respectful, human. Not salesy. No hype words (amazing, incredible, game-changer).

Required beats, email MUST have all of these. (keep each to short sentences — all ${GROQ_BODY_WORD_MIN}-${GROQ_BODY_WORD_MAX} words combined):
1. OPENING: one specific observation from their Facebook. No website talk yet.
2. TRANSITION: start with "But I noticed" — they have no own website; one line on why that might cost bookings.
3. REVEAL: you sketched a homepage idea from their Facebook; name 1-2 sections that fit THEIR business.
4. Preview URL on its own line (exact URL from context).
5. Closing: one natural sentence inviting a reply or quick call + one line on flat fee for local businesses. No dollar amounts. No "paid" or "not free". Never use "I'd love to", "I would love to", "explore further", or "Please reply or give me a quick call to explore further". Vary the closing — do not reuse the same phrasing across emails.

Format:
- Greeting MUST EXPLICITELY be first: "Hi," on its own line, then blank line
- Blank lines between paragraphs
- Preview URL on its own line
- No signature, no "Best, Damian"
- Emojis are BANNED.
- NEVER use em dashes — use commas, periods, or hyphens (-)
- Never say "I came across your Facebook page", "website layout for", "does a lot of the work", or "simple site could make it easier"
- Do not invent facts. Do not mention AI, mockup tools, or Stitch
- No "concept preview only" disclaimer
- All sentences must be complete.
- Beats must be correctly separated.
- Never quote specific numbers, dates, or verbatim details from posts — reference the theme, not the data
- Never use "I'd love to", "would love to", or "explore further"
- "But I noticed" transition is REQUIRED — do not skip it
- Never use "I'd love to", "would love to", "Let's chat soon", "Let's talk soon", "get started"


Subject (under 55 chars): curiosity about THEM, not your deliverable. No homepage/website/preview/built/mockup/Facebook in subject. BANNED: "Site preview for [Name]", "Built a homepage from...", "Homepage idea for...".

Post filtering: never quote listing IDs, Reg: codes, SKUs, or asterisk-number tags. Skip livestock/catalog listing posts.

Return valid JSON only:
{
  "subject": "curiosity-first subject line",
  "body": "full email with \\n\\n between paragraphs"
}`;

/**
 * @param {object} ctx
 */
export function buildGroqUserPrompt(ctx) {
  const posts = sanitizePostCaptions(ctx.postCaptions || [])
    .slice(0, 3)
    .map((c, i) => `${i + 1}. ${c.slice(0, 200)}`)
    .join("\n");

  const profileBlock = sanitizeProfileText(
    ctx.profileSummary
      ? ctx.profileSummary.slice(0, 600)
      : [ctx.description, ctx.hours ? `Hours: ${ctx.hours}` : ""].filter(Boolean).join("\n")
  );

  const sections = (ctx.mockupSections || []).slice(0, 3).join(", ") || "services, gallery, contact";
  const subjectHint = buildSubjectHint(ctx);

  return `Write one outreach email. Body: ${GROQ_BODY_WORD_MIN}-${GROQ_BODY_WORD_MAX} words (preview URL excluded). One Groq call — count words before returning JSON.

## Business
- Name: ${ctx.businessName}
- Type: ${ctx.verticalLabel}
- City: ${ctx.city || "unknown"}
- Facebook: ${ctx.liveUrl} (no standalone website)

## Facebook (one specific detail for the OPENING)
${profileBlock || ctx.description || "(limited profile data)"}

## Posts (pick one human detail; skip listing/Reg:/SKU lines)
${posts || "(use profile description)"}

## Mockup (reveal AFTER opening — not in subject)
- URL (own line): ${ctx.mockupUrl}
- Sections: ${sections}

## Subject
${subjectHint}

## Length target (~90 words — adapt, do not copy verbatim)
Hi,

[One sentence: specific Facebook observation.]

[But I noticed you don't have your own website yet + one short sentence why that matters for a ${ctx.verticalLabel}.]

[One sentence: sketched a page idea from your Facebook with ${sections}.]

${ctx.mockupUrl}

[One sentence soft close + flat fee for local businesses + reply or quick call.]

Return JSON: subject, body. Body must be ${GROQ_BODY_WORD_MIN}-${GROQ_BODY_WORD_MAX} words excluding the URL line.`;
}

export { SYSTEM_PROMPT };

function buildSubjectHint(ctx) {
  const { shortName, city, postCaptions } = ctx;
  const post = sanitizePostCaptions(postCaptions || []).find((c) => c.length >= 25);
  const examples = [
    city ? `${shortName} in ${city}` : `Quick note about ${shortName}`,
    `Something I noticed about ${shortName}`,
    city ? `Your ${city} page caught my eye` : `Your page caught my eye (${shortName})`,
  ].filter(Boolean);
  return `Under 55 chars. Curiosity first. Examples: ${examples.join("; ")}.${post ? ` Hook: ${post.slice(0, 40)}.` : ""} No website/homepage/preview in subject.`;
}
