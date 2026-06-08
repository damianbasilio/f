/**
 * Persistent dedup registry keyed by canonical Facebook page URL.
 * Leads are registered at import; duplicates in later batches are skipped.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { facebookPageSiteKey } from "./facebook-detect.mjs";
import { mockupsRoot } from "./paths.mjs";

const REGISTRY_PATH = path.join(root, "data", "fb-lead-registry.json");

/**
 * @param {string} url
 * @returns {{ key: string, facebookUrl: string } | null}
 */
export function parseFacebookLink(url) {
  if (!url || typeof url !== "string") return null;
  const facebookUrl = url.trim();
  const key = facebookPageSiteKey(facebookUrl);
  if (!key) return null;
  return { key, facebookUrl };
}

/**
 * @typedef {{ key: string, facebookUrl: string, slug: string, batchId: number|string, registeredAt: string }} FbLeadEntry
 * @typedef {{ version: number, updatedAt: string, entries: Record<string, FbLeadEntry> }} FbLeadRegistry
 */

function emptyRegistry() {
  return { version: 1, updatedAt: new Date().toISOString(), entries: {} };
}

/**
 * @returns {FbLeadRegistry}
 */
export function loadFbLeadRegistry() {
  if (!fs.existsSync(REGISTRY_PATH)) return emptyRegistry();
  try {
    const data = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"));
    if (!data.entries || typeof data.entries !== "object") return emptyRegistry();
    return data;
  } catch {
    return emptyRegistry();
  }
}

/**
 * @param {FbLeadRegistry} registry
 */
export function saveFbLeadRegistry(registry) {
  fs.mkdirSync(path.dirname(REGISTRY_PATH), { recursive: true });
  registry.updatedAt = new Date().toISOString();
  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2) + "\n", "utf8");
}

/** @type {FbLeadRegistry | null} */
let cachedRegistry = null;

/**
 * Load registry and backfill from existing preview lead.json folders.
 * @returns {FbLeadRegistry}
 */
export function ensureFbLeadRegistry() {
  if (cachedRegistry) return cachedRegistry;

  const registry = loadFbLeadRegistry();
  bootstrapFromExistingLeads(registry);
  cachedRegistry = registry;
  return registry;
}

/**
 * @param {string} url
 * @returns {FbLeadEntry | null}
 */
export function lookupFbLead(url) {
  const parsed = parseFacebookLink(url);
  if (!parsed) return null;
  const registry = ensureFbLeadRegistry();
  return registry.entries[parsed.key] || null;
}

/**
 * @param {string} url
 * @param {{ slug: string, batchId: number|string }} meta
 * @returns {{ registered: boolean, entry: FbLeadEntry, duplicate?: FbLeadEntry }}
 */
export function registerFbLead(url, { slug, batchId }) {
  const parsed = parseFacebookLink(url);
  if (!parsed) {
    throw new Error(`Not a valid Facebook page URL: ${url}`);
  }

  const registry = ensureFbLeadRegistry();
  const existing = registry.entries[parsed.key];
  if (existing) {
    return { registered: false, entry: existing, duplicate: existing };
  }

  const entry = {
    key: parsed.key,
    facebookUrl: parsed.facebookUrl,
    slug,
    batchId,
    registeredAt: new Date().toISOString(),
  };
  registry.entries[parsed.key] = entry;
  saveFbLeadRegistry(registry);
  return { registered: true, entry };
}

/**
 * True when this Facebook page is already registered under a different slug.
 * @param {string} url
 * @param {string} slug
 */
export function isDuplicateFbLead(url, slug) {
  const existing = lookupFbLead(url);
  return Boolean(existing && existing.slug !== slug);
}

/**
 * Remove registry entry for a slug (e.g. after manual delete).
 * @param {string} slug
 * @returns {boolean}
 */
export function unregisterFbLeadBySlug(slug) {
  const registry = ensureFbLeadRegistry();
  let removed = false;
  for (const [key, entry] of Object.entries(registry.entries)) {
    if (entry.slug === slug) {
      delete registry.entries[key];
      removed = true;
    }
  }
  if (removed) saveFbLeadRegistry(registry);
  return removed;
}

/**
 * @param {FbLeadRegistry} registry
 */
function bootstrapFromExistingLeads(registry) {
  const previewRoot = mockupsRoot();
  if (!fs.existsSync(previewRoot)) return;

  let added = 0;
  for (const dirent of fs.readdirSync(previewRoot, { withFileTypes: true })) {
    if (!dirent.isDirectory() || dirent.name.startsWith(".")) continue;

    const leadPath = path.join(previewRoot, dirent.name, "lead.json");
    if (!fs.existsSync(leadPath)) continue;

    let lead;
    try {
      lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
    } catch {
      continue;
    }

    const fbUrl = lead.facebook || lead.url;
    const parsed = parseFacebookLink(fbUrl);
    if (!parsed || registry.entries[parsed.key]) continue;

    registry.entries[parsed.key] = {
      key: parsed.key,
      facebookUrl: parsed.facebookUrl,
      slug: dirent.name,
      batchId: "bootstrap",
      registeredAt: new Date().toISOString(),
    };
    added++;
  }

  if (added > 0) {
    saveFbLeadRegistry(registry);
    console.log(`  fb-lead-registry: bootstrapped ${added} existing lead(s) from preview/`);
  }
}
