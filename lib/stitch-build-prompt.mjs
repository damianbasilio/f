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
export function buildFullSingleAttemptPrompt({ slug, businessName, contact }) {
  const fullPrompt = readPromptBody(slug);
  const htmlDirective = buildSiteGeneratePrompt({
    businessName,
    ...contact,
    designMd: "",
  });

  return `${fullPrompt}

---

## Output requirement (this request)

Deliver the **complete production-ready website** in this response — semantic HTML, CSS, and JS as specified above.

${htmlDirective}

Do NOT respond with only DESIGN.md or a design-system markdown summary. If you establish tokens first, you must still include the full htmlCode landing page in this same response.`;
}

export function loadBriefAndBrand(slug) {
  const briefPath = slugDir(slug, "brief.md");
  const brief = fs.readFileSync(briefPath, "utf8");
  const brand = loadBrandExtract(root, slug);
  return { brief, brand, briefPath };
}
