/**
 * Stitch generate prompts — full prompt.md + HTML directive for single attempt.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { loadBrandExtract } from "./stitch-prompt-fields.mjs";
import { buildSiteGeneratePrompt } from "./stitch-export.mjs";
import { slugDir } from "./paths.mjs";

export function readPromptBody(slug) {
  const promptPath = slugDir(slug, "stitch", "prompt.md");
  const promptFile = fs.readFileSync(promptPath, "utf8");
  const promptMatch = promptFile.match(/## Prompt \(paste into Stitch\)\s+([\s\S]*?)\n---/);
  return promptMatch ? promptMatch[1].trim() : promptFile;
}

/**
 * One generate: full brief-driven prompt + explicit HTML deliverable (Stitch often returns design-only; phase 2 follows).
 */
export function buildFullSingleAttemptPrompt({ slug, businessName, contact, rebuild = false }) {
  const fullPrompt = readPromptBody(slug);
  const htmlDirective = buildSiteGeneratePrompt({
    businessName,
    ...contact,
    designMd: "",
  });

  const rebuildNote = rebuild ? buildRebuildVariationNote() : "";

  return `${fullPrompt}${rebuildNote}

---

## Output requirement (this request)

Deliver the **complete production-ready website** in this response — semantic HTML, CSS, and JS as specified above.

${htmlDirective}

Do NOT respond with only DESIGN.md or a design-system markdown summary. If you establish tokens first, you must still include the full htmlCode landing page in this same response.`;
}

const REBUILD_ARCHETYPES = [
  "editorial magazine split — asymmetric hero, oversized serif headline overlapping photography",
  "bold single-column stack — full-bleed color bands, minimal top nav, strong vertical rhythm",
  "bento grid landing — modular service cards, compact logo lockup, dense mid-page",
  "classic centered hero — wide banner image, symmetrical sections, elegant whitespace",
  "industrial/utilitarian — strong borders, monospace accents, tabular info blocks",
  "warm boutique — rounded containers, soft gradients, photo-forward gallery strip",
];

/** Force Stitch away from repeating the prior layout on rebuild. */
export function buildRebuildVariationNote() {
  const archetype = REBUILD_ARCHETYPES[Math.floor(Math.random() * REBUILD_ARCHETYPES.length)];
  return `

---

## REBUILD — fresh creative direction (required)

This is a **complete redesign**, not a polish pass. Do **not** reuse the previous homepage layout, hero structure, section order, or navigation pattern.

**Layout archetype for this attempt:** ${archetype}

Pick a new typography pairing and color emphasis. Vary section order and visual density. Creative seed: ${Date.now()}`;
}

export function loadBriefAndBrand(slug) {
  const briefPath = slugDir(slug, "brief.md");
  const brief = fs.readFileSync(briefPath, "utf8");
  const brand = loadBrandExtract(root, slug);
  return { brief, brand, briefPath };
}
