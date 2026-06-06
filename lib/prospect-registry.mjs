import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { normalizeSiteKey } from "./normalize-site-key.mjs";
import { pickLiveUrl, pickBriefField } from "./brief-url.mjs";

const SKIP_DIRS = new Set([
  "node_modules",
  "scripts",
  "lib",
  "templates",
  "reviews",
  "batches",
  "data",
  ".git",
  ".cursor",
]);

/**
 * @param {string} mockupsRoot
 * @returns {import('./prospect-registry.mjs').RegistryEntry[]}
 */
export function collectRegistryEntries(mockupsRoot = root) {
  /** @type {Map<string, import('./prospect-registry.mjs').RegistryEntry>} */
  const byKey = new Map();

  if (!fs.existsSync(mockupsRoot)) return [];

  for (const dirent of fs.readdirSync(mockupsRoot, { withFileTypes: true })) {
    if (!dirent.isDirectory() || dirent.name.startsWith(".") || SKIP_DIRS.has(dirent.name)) {
      continue;
    }
    const briefPath = path.join(mockupsRoot, dirent.name, "brief.md");
    if (!fs.existsSync(briefPath)) continue;

    const brief = fs.readFileSync(briefPath, "utf8");
    const liveUrl = pickLiveUrl(brief);
    if (!liveUrl) continue;

    const siteKey = normalizeSiteKey(liveUrl);
    if (!siteKey) continue;

    const entry = {
      slug: dirent.name,
      name: pickBriefField(brief, /\*\*Name:\*\*\s*(.+)/i, dirent.name),
      siteKey,
      liveUrl,
      source: "brief",
    };
    byKey.set(siteKey, entry);
  }

  const outreachPath = path.join(mockupsRoot, "..", "OUTREACH.md");
  if (fs.existsSync(outreachPath)) {
    const outreach = fs.readFileSync(outreachPath, "utf8");
    const urlRe = /https?:\/\/[^\s|)>"']+/gi;
    let um;
    while ((um = urlRe.exec(outreach)) !== null) {
      const raw = um[0].replace(/[.,;]+$/, "");
      if (/damianbasilio\.github\.io/i.test(raw)) continue;
      const siteKey = normalizeSiteKey(raw);
      if (!siteKey || byKey.has(siteKey)) continue;
      byKey.set(siteKey, {
        slug: `(outreach)`,
        name: siteKey,
        siteKey,
        liveUrl: raw,
        source: "outreach",
      });
    }
  }

  return [...byKey.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

/**
 * @param {string} [mockupsRoot]
 */
export function buildRegistry(mockupsRoot = root) {
  const entries = collectRegistryEntries(mockupsRoot);
  return {
    generatedAt: new Date().toISOString(),
    entryCount: entries.length,
    entries,
  };
}

/**
 * @param {string} url
 * @param {{ entries: import('./prospect-registry.mjs').RegistryEntry[] }} registry
 */
export function isBlocked(url, registry) {
  const siteKey = normalizeSiteKey(url);
  if (!siteKey) return { blocked: false, siteKey: null, matchedSlug: null, matchedName: null };

  for (const entry of registry.entries) {
    if (entry.siteKey === siteKey) {
      return {
        blocked: true,
        siteKey,
        matchedSlug: entry.slug,
        matchedName: entry.name,
      };
    }
  }

  return { blocked: false, siteKey, matchedSlug: null, matchedName: null };
}

/**
 * @typedef {{ slug: string, name: string, siteKey: string, liveUrl: string, source: 'brief'|'outreach' }} RegistryEntry
 */
