/**
 * Filter Facebook scrape UI junk from post captions before prompts or copy.
 */

const JUNK_CAPTION_RES = [
  /^see more about\b/i,
  /^see more\b/i,
  /^view more\b/i,
  /^\S+@\S+\.\S+$/,
  /^https?:\/\//i,
  /^[\w.-]+\.(com|net|org|glossgenius\.com)/i,
  /^\d+\s+\w+\s+(st|street|ave|avenue|road|rd|blvd|drive|dr|way|lane|ln)\b/i,
  /^[\d\s.()-]{7,}$/,
];

/**
 * @param {string} caption
 */
export function isUsefulCaption(caption) {
  const s = String(caption || "").trim();
  if (s.length < 20) return false;
  return !JUNK_CAPTION_RES.some((re) => re.test(s));
}

/**
 * @param {string[]} captions
 */
export function sanitizePostCaptions(captions) {
  return (captions || []).filter(isUsefulCaption);
}

/**
 * Strip Facebook UI fragments from generated email copy.
 * @param {string} text
 * @param {object} [ctx]
 */
export function stripFbUiJunk(text, ctx = {}) {
  let out = String(text || "");
  const name = ctx.shortName || ctx.businessName || "";
  const namePat = name ? name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : "[^\\n.]+";

  out = out.replace(new RegExp(`\\b(?:Saw|I saw) your post about See more about ${namePat}[^.!?]*[.!?]?`, "gi"), "");
  out = out.replace(new RegExp(`\\bpost about See more about ${namePat}[^.!?]*[.!?]?`, "gi"), "");
  out = out.replace(new RegExp(`See more about ${namePat}[^.!?]*[.!?]?`, "gi"), "");
  out = out.replace(/\b(?:Saw|I saw) your post about See more about[^.!?]*[.!?]?/gi, "");
  out = out.replace(/\bSee more about\b[^.!?]*[.!?]?/gi, "");
  out = out.replace(/\s{2,}/g, " ");
  out = out.replace(/\n{3,}/g, "\n\n");
  return out.trim();
}
