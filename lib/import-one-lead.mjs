/**
 * Import one lead into preview/ and append to an open batch.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { deriveSlug, validateLead } from "./lead-import.mjs";
import { slugDir } from "./paths.mjs";
import { lookupFbLead, registerFbLead } from "./fb-lead-registry.mjs";

/**
 * @param {string|number} batchNum
 */
export function createBatchImportState(batchNum) {
  const batchDir = path.join(root, "data", "batches", `batch-${batchNum}`);
  fs.mkdirSync(batchDir, { recursive: true });
  fs.mkdirSync(path.join(root, "data", "imports"), { recursive: true });

  const usedSlugs = new Set();
  const slugs = [];
  const duplicates = [];

  return {
    batchNum,
    batchDir,
    slugs,
    /**
     * @param {object} lead
     * @returns {{ slug: string, duplicate?: boolean }}
     */
    importOne(lead) {
      validateLead(lead);
      const fbUrl = lead.facebook || lead.url;
      const existing = lookupFbLead(fbUrl);
      if (existing) {
        duplicates.push({
          name: lead.name,
          facebookUrl: fbUrl,
          existingSlug: existing.slug,
          existingBatch: existing.batchId,
        });
        return { slug: existing.slug, duplicate: true };
      }

      let slug = deriveSlug(lead.name, lead.city);
      let n = 2;
      while (usedSlugs.has(slug)) {
        slug = `${deriveSlug(lead.name, lead.city)}-${n++}`;
      }
      usedSlugs.add(slug);
      slugs.push(slug);

      registerFbLead(fbUrl, { slug, batchId: batchNum });

      const dir = slugDir(slug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "lead.json"), JSON.stringify(lead, null, 2) + "\n", "utf8");

      fs.writeFileSync(path.join(batchDir, "slugs.txt"), slugs.join("\n") + "\n", "utf8");
      fs.writeFileSync(
        path.join(batchDir, "meta.json"),
        JSON.stringify(
          {
            batchId: batchNum,
            importedAt: new Date().toISOString(),
            count: slugs.length,
            skippedDuplicates: duplicates.length,
            slugs,
            duplicates,
            streaming: true,
          },
          null,
          2
        ) + "\n",
        "utf8"
      );

      return { slug, duplicate: false };
    },
    finalize(importPath) {
      if (importPath && fs.existsSync(importPath)) {
        fs.copyFileSync(importPath, path.join(root, "data", "imports", `import-${batchNum}.json`));
      }
    },
  };
}
