import fs from "node:fs";
import path from "node:path";
import { buildRegistry, isBlocked } from "./prospect-registry.mjs";
import { normalizeSiteKey } from "./normalize-site-key.mjs";
import { isFacebookUrl } from "./facebook-detect.mjs";
import { buildFacebookOnlyActivity, buildFacebookOnlyScreen } from "./facebook-prospect.mjs";
import { scrapeFacebookPage } from "./facebook-scrape.mjs";
import { screenSiteQuality } from "./site-quality-detect.mjs";
import { verifyActivityFromUrl } from "./activity-detect.mjs";
import { slimSiteScreen, slimActivity } from "./screen-slim.mjs";
import { root } from "./load-env.mjs";

const CONCURRENCY = 3;

/**
 * @param {string} url
 * @param {{ entries: unknown[] }} registry
 */
export async function evaluateUrl(url, registry) {
  const siteKey = normalizeSiteKey(url);
  const block = isBlocked(url, registry);
  if (block.blocked) {
    return {
      url,
      siteKey,
      status: "blocked",
      matchedSlug: block.matchedSlug,
      activity: null,
      screen: null,
    };
  }

  if (isFacebookUrl(url)) {
    let facebookPage = null;
    try {
      facebookPage = await scrapeFacebookPage(url);
    } catch (err) {
      facebookPage = { sourceUrl: url, finalUrl: url, error: err.message || String(err), scrapedAt: new Date().toISOString() };
    }
    const activity = buildFacebookOnlyActivity(url, facebookPage);
    const screen = buildFacebookOnlyScreen(url, facebookPage);
    return {
      url,
      siteKey,
      status: "passed",
      score: 100,
      weak: false,
      facebookOnly: true,
      facebookPage,
      activity,
      screen,
      activitySlim: slimActivity(activity),
      screenSlim: slimSiteScreen(screen),
    };
  }

  let activity;
  let screen;
  let error = null;

  try {
    [activity, screen] = await Promise.all([verifyActivityFromUrl(url), screenSiteQuality(url)]);
  } catch (err) {
    error = err.message || String(err);
    return { url, siteKey, status: "error", error, activity: null, screen: null };
  }

  const activityFail = activity.agentGate === "FAIL";
  const screenFail = screen.agentGate === "FAIL";
  const borderline = screen.recommendation === "human_review";

  let score = screen.totalScore ?? 0;
  if (borderline) score -= 3;
  if (activityFail) score -= 10;
  if (screenFail) score -= 10;

  const passed = !activityFail && !screenFail;

  return {
    url,
    siteKey,
    status: passed ? "passed" : "failed",
    score,
    borderline,
    activity,
    screen,
    activitySlim: slimActivity(activity),
    screenSlim: slimSiteScreen(screen),
  };
}

/**
 * @param {string[]} urls
 * @param {{ minPass?: number, targetN?: number }} opts
 */
export async function runFunnel(urls, opts = {}) {
  const registry = buildRegistry();
  const unique = [...new Set(urls.map((u) => u.trim()).filter((u) => u.startsWith("http")))];

  /** @type {Awaited<ReturnType<evaluateUrl>>[]} */
  const results = [];

  for (let i = 0; i < unique.length; i += CONCURRENCY) {
    const chunk = unique.slice(i, i + CONCURRENCY);
    const chunkResults = await Promise.all(chunk.map((url) => evaluateUrl(url, registry)));
    results.push(...chunkResults);
  }

  const blocked = results.filter((r) => r.status === "blocked");
  const errors = results.filter((r) => r.status === "error");
  const failed = results.filter((r) => r.status === "failed");
  const targetN = opts.targetN ?? opts.minPass ?? 5;
  const minPass = opts.minPass ?? targetN;

  const allPassed = results.filter((r) => r.status === "passed").sort((a, b) => b.score - a.score);
  const passed = allPassed.slice(0, targetN).map((r, i) => ({ ...r, rank: i + 1 }));

  const summary = {
    generatedAt: new Date().toISOString(),
    targetN,
    poolSize: unique.length,
    passed: passed.map((r) => ({
      url: r.url,
      siteKey: r.siteKey,
      activityGate: r.activitySlim?.agentGate,
      screenGate: r.screenSlim?.agentGate,
      recommendation: r.screenSlim?.recommendation,
      facebookOnly: Boolean(r.facebookOnly),
      score: r.score,
      rank: r.rank,
    })),
    failedCount: failed.length,
    blockedCount: blocked.length,
    errorCount: errors.length,
  };

  const detail = {
    generatedAt: summary.generatedAt,
    results: results.map((r) => ({
      url: r.url,
      siteKey: r.siteKey,
      status: r.status,
      score: r.score ?? null,
      facebookOnly: Boolean(r.facebookOnly),
      matchedSlug: r.matchedSlug ?? null,
      error: r.error ?? null,
      activity: r.activity,
      screen: r.screen,
      facebookPage: r.facebookPage ?? null,
    })),
  };

  return {
    summary,
    detail,
    passed,
    failed,
    blocked,
    errors,
    minPassMet: allPassed.length >= minPass,
  };
}

/**
 * @param {ReturnType<runFunnel> extends Promise<infer R> ? R : never} funnelResult
 */
export function printFunnelTable(funnelResult) {
  const { summary } = funnelResult;
  console.log(`\nFunnel: ${summary.passed.length} passed / ${summary.poolSize} URLs (${summary.blockedCount} blocked, ${summary.failedCount} failed, ${summary.errorCount} errors)\n`);
  for (const row of funnelResult.summary.passed) {
    const tag = row.recommendation === "facebook_only" ? " [FB]" : "";
    console.log(
      `PASS #${row.rank} score=${row.score} ${row.screenGate}/${row.activityGate}${tag} ${row.url}`
    );
  }
  for (const r of funnelResult.failed) {
    console.log(`FAIL score=${r.score ?? "—"} ${r.url}`);
  }
  for (const r of funnelResult.blocked) {
    console.log(`BLOCKED ${r.matchedSlug} ${r.url}`);
  }
  for (const r of funnelResult.errors) {
    console.log(`ERROR ${r.error} ${r.url}`);
  }
}

export function writeFunnelOutputs(funnelResult, mockupsRoot = root) {
  const dataDir = path.join(mockupsRoot, "data");
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(path.join(dataDir, "funnel-summary.json"), JSON.stringify(funnelResult.summary, null, 2), "utf8");
  fs.writeFileSync(path.join(dataDir, "funnel-detail.json"), JSON.stringify(funnelResult.detail, null, 2), "utf8");
}
