/**
 * Extract live site URL from brief markdown.
 */

/**
 * @param {string} brief
 * @returns {string}
 */
export function pickLiveUrl(brief) {
  const live =
    brief.match(/\*\*Live URL:\*\*\s*(https?:\/\/[^\s]+)/i)?.[1]?.trim() ||
    brief.match(/\*\*Source:\*\*\s*(https?:\/\/[^\s]+)/i)?.[1]?.trim();
  return live || "";
}

/**
 * @param {string} brief
 * @param {RegExp} re
 * @param {string} [fallback]
 */
export function pickBriefField(brief, re, fallback = "") {
  const m = brief.match(re);
  return m?.[1]?.trim() ?? fallback;
}
