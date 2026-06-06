/**
 * Build system + user prompts for Groq outreach generation.
 */
import { sanitizePostCaptions } from "./fb-caption-sanitize.mjs";

const SYSTEM_PROMPT = `You write short, human cold emails for Damian Basilio, a freelance web developer.

Your goal is NOT to sell in the subject line or the first sentence. Your goal is to make a busy business owner curious enough to open the email and keep reading. The homepage preview is the reveal, not the hook.

Write ONE cohesive email, not a fill-in-the-blank template. Sound like Damian noticed something genuine about their business and is sharing a thoughtful idea, not like a cold outreach bot.

Tone:
- Curious, respectful, human. Like a note from someone who actually looked at their page.
- Do NOT open like a pitch. No "I built you a website" energy in the subject or first paragraph.
- Earn attention first (specific compliment, local detail, something from a post). Then gently mention they do not have their own website. Then casually reveal you mocked up a homepage idea from what they already share on Facebook.
- Never sound desperate, salesy, or like a mass email. No hype words (amazing, incredible, game-changer).

Required content (weave naturally, in this order):
1. OPENING: one specific, genuine observation from their Facebook only. No website talk yet. No "I put together" yet. Never quote Facebook UI text like "See more about [Name]".
2. TRANSITION: start with "But I noticed" and say clearly they do not have their own website (use the words website or site, not just "online presence" or "Facebook-only"). One short paragraph on how that might be leaving bookings/calls on the table. Helpful, not lecturing.
3. REVEAL: casually mention you sketched or mocked up a homepage idea from their Facebook photos/posts. Not corporate wording. Example tone: "On a whim I pulled together a quick page concept from what you already post on Facebook" NOT "I put together a homepage preview for your business using your Facebook profile"
4. Brief mention of what the mockup includes (sections from context)
5. Preview URL on its own line (exact URL from context)
6. Soft closing, no pressure
7. One short final line: gently hint that building it out is a straightforward project with a flat fee for local businesses (e.g. "flat fee for local businesses", "one flat project fee", "simple flat rate for small businesses"). Offer reply or a quick call. No exact dollar amounts. Do NOT say "paid", "not free", or anything that sounds transactional or harsh. Keep it confident and low-friction.

Do NOT include a "concept preview only / not affiliated" disclaimer. The mockup site already shows that.
Do NOT include a signature, sign-off name, or "Best, Damian". The email ends after the closing line. A signature is added separately when sent.

Subject line rules:
- Make them WANT to open it. Lead with curiosity about THEM, not about your deliverable.
- Include business name with proper capitalization OR a specific hook they will recognize (city, award, post topic).
- Under 55 characters. Slightly professional but warm. Vary the angle each time.
- Do NOT mention homepage, website, preview, built, mockup, or Facebook in the subject unless absolutely subtle.
- Do NOT paste a long quote from a post into the subject.
- BANNED subjects: "Site preview for [Name]", "Built a homepage from...", "Homepage idea for...", "[Name] - homepage preview", anything that reads like a sales template or a freelancer mass blast
- Good subjects: "Your Grundy County award post", "Rustic Scruff in Coal City", "Quick note about JBS Towing", "Something I noticed about your grooming page"
- Bad subjects: "Built a homepage draft using Rustic Scruff's Facebook content", "Site preview for JBS Towing", "Saw your post about Chaparral is freezing but we're just warming up"

Body rules:
- Use blank lines between paragraphs
- Greeting on its own line: "Hi," then blank line
- Preview URL on its own line
- 90-170 words (excluding URL)
- NEVER use em dashes. Use commas, periods, or hyphens (-) instead
- Never say "I came across your Facebook page" or "website layout for"
- Never say "does a lot of the work" or "simple site could make it easier"
- Do not invent facts
- Do not mention AI, mockup tools, or Stitch

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
    .slice(0, 8)
    .map((c, i) => `${i + 1}. ${c.slice(0, 400)}`)
    .join("\n");

  const profileBlock = ctx.profileSummary
    ? ctx.profileSummary.slice(0, 2500)
    : [ctx.description, ctx.hours ? `Hours: ${ctx.hours}` : ""].filter(Boolean).join("\n");

  const sections = (ctx.mockupSections || []).slice(0, 4).join(", ") || "services, gallery, contact";
  const subjectHint = buildSubjectHint(ctx);

  return `Write one complete outreach email for this business.

## Business
- Name: ${ctx.businessName} (proper capitalization in subject and body)
- Type: ${ctx.verticalLabel}
- City/area: ${ctx.city || "unknown"}
- Location: ${ctx.location || "unknown"}
- Phone: ${ctx.phone || "unknown"}
- Review score (if any): ${ctx.reviewScore ?? "not provided"}
- Facebook: ${ctx.liveUrl} (no standalone website)

## What we know from their Facebook (use at least one specific detail in the OPENING)
${profileBlock || ctx.description || "(limited profile data)"}

## Recent posts (use a specific detail from here in the OPENING; never quote "See more about" UI text)
${posts || "(no useful post captions scraped — use profile description instead)"}

## What Damian mocked up (reveal this AFTER the opening, not in the subject)
- Preview URL (own line in body): ${ctx.mockupUrl}
- Source: their Facebook photos and posts
- Hero headline: ${ctx.heroH1 || "n/a"}
- Primary CTA: ${ctx.primaryCta || "contact us"}
- Sections: ${sections}

## Subject line
Curiosity first. Make ${ctx.businessName}'s owner want to open this. Do NOT pitch the website in the subject.
${subjectHint}

## Example flow (adapt, do not copy)
Hi,

[Specific observation from their Facebook. No pitch. No website mention.]

[But I noticed you don't have your own website yet + one sentence on why that might matter for their type of business.]

[Casual reveal: you sketched/mocked up a page idea from what they post on Facebook. Mention 1-2 sections like ${sections}.]

${ctx.mockupUrl}

[Soft closing.]

[One line: flat fee for local businesses (no dollar amount, do not say "paid") + reply or quick call. you want details.]

Do NOT end with a signature or "Best, Damian". Stop after the closing line.

Return JSON with keys: subject, body`;
}

export { SYSTEM_PROMPT };

function buildSubjectHint(ctx) {
  const { shortName, city, postCaptions } = ctx;
  const post = sanitizePostCaptions(postCaptions || []).find((c) => c.length >= 25);
  const examples = [
    city ? `${shortName} in ${city}` : `Quick note about ${shortName}`,
    `Something I noticed about ${shortName}`,
    post && /award|best/i.test(post) ? `Your Grundy County award post` : "",
    post && /freezing|snow|winch/i.test(post) ? `Your roadside post (${shortName})` : "",
    city ? `Your ${city} page caught my eye` : `Your page caught my eye (${shortName})`,
  ].filter(Boolean);
  const angles = [];
  if (city) angles.push(`city: ${city}`);
  if (post) angles.push(`post angle: ${post.slice(0, 55)}`);
  return `Good subject style (adapt, keep under 55 chars): ${examples.join("; ")}.${angles.length ? ` Hooks available: ${angles.join("; ")}.` : ""} Do NOT use homepage/website/built/preview/Facebook in the subject. Do NOT paste a full post quote into the subject.`;
}
