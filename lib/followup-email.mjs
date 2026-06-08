/**
 * Follow-up email copy — body only, canonical signature via ensureSignature().
 */
import { parseOutreachMd } from "./parse-outreach.mjs";
import { ensureSignature } from "./outreach-send.mjs";
import { mockupUrl } from "./paths.mjs";

/**
 * @param {string} slug
 * @param {{ name?: string }} lead
 * @returns {{ to: string, subject: string, text: string }}
 */
export function buildFollowupEmail(slug, lead) {
  const { subject, to } = parseOutreachMd(slug);
  const businessName = lead.name || slug;
  const previewUrl = mockupUrl(slug);

  const body = `Hi,

Just wanted to make sure you saw the page I put together for ${businessName}:

${previewUrl}

Let me know if you'd like to take a look together.`;

  return { to, subject, text: ensureSignature(body) };
}
