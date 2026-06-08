/**
 * Remove a lead and all local references (preview folder, registry, batch files).
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";
import { unregisterFbLeadBySlug } from "./fb-lead-registry.mjs";
import { loadQueues, saveQueues } from "./outreach-queues.mjs";
import { syncHubIndex } from "./hub-sync.mjs";

const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;

export function assertValidSlug(slug) {
  if (!slug || !SLUG_RE.test(slug)) throw new Error("Invalid slug");
}

function removeSlugFromLineFile(filePath, slug) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  if (!lines.some((l) => l.trim() === slug)) return;
  const next = lines.filter((line) => line.trim() !== slug);
  fs.writeFileSync(filePath, next.length && next.some((l) => l.trim()) ? `${next.filter((l) => l.trim()).join("\n")}\n` : "", "utf8");
}

function removeFromBatch(batchNum, slug) {
  const dir = path.join(root, "data", "batches", `batch-${batchNum}`);
  if (!fs.existsSync(dir)) return;

  removeSlugFromLineFile(path.join(dir, "slugs.txt"), slug);
  removeSlugFromLineFile(path.join(dir, "approved.txt"), slug);

  const metaPath = path.join(dir, "meta.json");
  if (fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
      if (Array.isArray(meta.slugs)) {
        meta.slugs = meta.slugs.filter((s) => s !== slug);
        meta.count = meta.slugs.length;
        fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n", "utf8");
      }
    } catch {
      /* ignore */
    }
  }

  const statusPath = path.join(dir, "status.json");
  if (fs.existsSync(statusPath)) {
    try {
      const status = JSON.parse(fs.readFileSync(statusPath, "utf8"));
      let touched = false;
      for (const key of ["passed", "failed", "skipped"]) {
        if (Array.isArray(status[key]) && status[key].includes(slug)) {
          status[key] = status[key].filter((s) => s !== slug);
          touched = true;
        }
      }
      if (status.slugs?.[slug]) {
        delete status.slugs[slug];
        touched = true;
      }
      if (touched) fs.writeFileSync(statusPath, JSON.stringify(status, null, 2) + "\n", "utf8");
    } catch {
      /* ignore */
    }
  }

  const data = loadQueues(batchNum);
  let queueTouched = false;
  for (const key of ["review", "send", "groqQueue", "sendQueue"]) {
    const arr = data[key];
    if (!Array.isArray(arr)) continue;
    const next = arr.filter((item) => (typeof item === "string" ? item !== slug : item?.slug !== slug));
    if (next.length !== arr.length) {
      data[key] = next;
      queueTouched = true;
    }
  }
  if (queueTouched) saveQueues(batchNum, data);
}

function removeFromAllBatches(slug) {
  const batchesDir = path.join(root, "data", "batches");
  if (!fs.existsSync(batchesDir)) return;
  for (const d of fs.readdirSync(batchesDir).filter((x) => x.startsWith("batch-"))) {
    removeFromBatch(d.replace(/^batch-/, ""), slug);
  }
}

/**
 * @param {string} slug
 * @returns {{ ok: true, slug: string, name: string, hub: ReturnType<typeof syncHubIndex> }}
 */
export function deleteLead(slug) {
  assertValidSlug(slug);

  const dir = slugDir(slug);
  if (!fs.existsSync(dir)) throw new Error("Lead not found");

  let name = slug;
  const leadPath = path.join(dir, "lead.json");
  if (fs.existsSync(leadPath)) {
    try {
      const lead = JSON.parse(fs.readFileSync(leadPath, "utf8"));
      name = lead.name || slug;
    } catch {
      /* ignore */
    }
  }

  removeFromAllBatches(slug);
  unregisterFbLeadBySlug(slug);
  fs.rmSync(dir, { recursive: true, force: true });

  const hub = syncHubIndex();
  return { ok: true, slug, name, hub };
}

/**
 * @param {string} slug
 * @returns {boolean}
 */
export function leadExists(slug) {
  assertValidSlug(slug);
  return fs.existsSync(slugDir(slug));
}
