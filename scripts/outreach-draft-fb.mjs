/**
 * Draft FB outreach emails.
 * Usage: node scripts/outreach-draft-fb.mjs <slug...|--file batch.txt>
 */
import { parseSlugs } from "../lib/slugs.mjs";
import { resetBatchDedup, buildFbOutreachCopy, writeOutreachMd } from "../lib/outreach-email-fb.mjs";
import { getGroqConfig } from "../lib/groq-client.mjs";

const slugs = (() => {
  const fileIdx = process.argv.indexOf("--file");
  if (fileIdx !== -1 && process.argv[fileIdx + 1]) {
    return parseSlugs(["", "", process.argv[fileIdx + 1]], 2);
  }
  return parseSlugs(process.argv.filter((a) => a !== "--file"), 2);
})();
if (slugs.length === 0) {
  console.error("Usage: node scripts/outreach-draft-fb.mjs <slug...|--file batch.txt>");
  process.exit(1);
}

resetBatchDedup();
const groq = getGroqConfig();
if (groq.enabled) {
  console.log(
    `Groq outreach: ${groq.model} (~${groq.limits.estTokens} tokens/req, ${Math.round(groq.cooldownMs / 1000)}s spacing, ${groq.limits.tpm} TPM / ${(groq.limits.tpd / 1000).toFixed(0)}K TPD)\n`
  );
}

for (let i = 0; i < slugs.length; i++) {
  const slug = slugs[i];
  try {
    const copy = await buildFbOutreachCopy(slug, i);
    writeOutreachMd(slug, copy);
    console.log(`Wrote ${slug}/outreach.md (${copy.source || "groq"})`);
  } catch (err) {
    console.error(`✗ ${slug}: ${err.message}`);
  }
}
