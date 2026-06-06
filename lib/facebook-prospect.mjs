/**
 * Auto-PASS screening results for Facebook-only businesses (no dedicated website).
 */

/**
 * @param {string} url
 * @param {import('./facebook-scrape.mjs').FacebookPageData | null} [page]
 */
export function buildFacebookOnlyScreen(url, page = null) {
  const evidence = page?.title
    ? `Facebook page "${page.title}" — no dedicated business website`
    : "Facebook page URL — business has no dedicated website";

  const screen = {
    sourceUrl: url,
    scannedAt: new Date().toISOString(),
    recommendation: "facebook_only",
    agentGate: "PASS",
    totalScore: 50,
    maxScore: 50,
    finalVerdict: "Pass — Facebook-only, no dedicated website",
    facebookOnly: true,
    categories: null,
    summary:
      "Facebook-only presence — auto-PASS. Business has no dedicated website; pitch a real landing page built from their Facebook content.",
    markdownBlock: "",
  };

  screen.markdownBlock = `## Site screen (auto — Facebook-only)

- **Agent gate (auto):** PASS
- **Recommendation:** facebook_only
- **Total score:** 50/50 (auto-PASS — no dedicated website)
- **Final verdict:** ${screen.finalVerdict}
- **Summary:** ${screen.summary}

**Why auto-PASS:**

- **Facebook page only:** ${evidence}
- **No owned business domain:** Outreach opportunity — build a real website from Facebook page content and post photos

> Facebook URLs always PASS the funnel — they indicate the business does not have a real website yet.`;
  return screen;
}

/**
 * @param {string} url
 * @param {import('./facebook-scrape.mjs').FacebookPageData | null} [page]
 */
export function buildFacebookOnlyActivity(url, page = null) {
  const hasRecentPosts = Boolean(page?.postImages?.length || page?.description);
  const activity = {
    sourceUrl: url,
    scannedAt: new Date().toISOString(),
    agentGate: "PASS",
    recommendation: hasRecentPosts ? "active_facebook" : "facebook_presence",
    facebookOnly: true,
    summary: hasRecentPosts
      ? "Active Facebook presence with page content and/or post imagery — auto-PASS for activity."
      : "Facebook page reachable — auto-PASS (verify posts manually if needed).",
    recentSignals: hasRecentPosts
      ? [
          {
            id: "facebook_content",
            label: "Facebook page has content or post images",
            evidence: page?.postImages?.length
              ? `${page.postImages.length} post image(s) found on page`
              : "Page description or profile content found",
          },
        ]
      : [],
    dormancySignals: [],
    weakSignals: [],
    newestDatedContent: null,
    pagesScanned: [url],
    markdownBlock: "",
  };

  activity.markdownBlock = `## Activity screen (auto — Facebook)

- **Agent gate (auto):** PASS
- **Recommendation:** ${activity.recommendation}
- **Summary:** ${activity.summary}

> Facebook-only businesses auto-PASS activity — presence on Facebook implies the business is operating.`;
  return activity;
}
