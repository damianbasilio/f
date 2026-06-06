/**
 * Usage: node scripts/stitch-prompt-fb.mjs <slug>
 */
import { writeFbStitchPrompt } from "../lib/stitch-prompt-fb.mjs";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/stitch-prompt-fb.mjs <slug>");
  process.exit(1);
}

try {
  const outPath = writeFbStitchPrompt(slug);
  console.log(`Wrote ${outPath}`);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
