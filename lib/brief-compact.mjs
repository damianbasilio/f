import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { mockupUrl } from "./paths.mjs";
import { readBriefField } from "./slugs.mjs";
import { slugDir } from "./paths.mjs";

/**
 * Write a slim agent-facing brief (~25 lines) from full brief.md.
 */
export function writeBriefCompact(slug) {
  const briefPath = slugDir(slug, "brief.md");
  if (!fs.existsSync(briefPath)) return null;

  const brief = fs.readFileSync(briefPath, "utf8");
  const pick = (re, fb = "") => readBriefField(brief, re, fb);

  const issues = [...brief.matchAll(/^\d+\.\s*(.+)$/gm)]
    .map((m) => m[1].trim())
    .slice(0, 3);

  const issueSection = brief.match(/## Three verifiable issues[\s\S]*?(?=##|$)/i)?.[0] || "";
  const listedIssues = [...issueSection.matchAll(/^\d+\.\s*(.+)$/gm)].map((m) => m[1].trim());

  const lines = [
    `# ${pick(/\*\*Name:\*\*\s*(.+)/i, slug)} — compact brief`,
    "",
    "Agent-facing summary. Full gates and Stitch fields remain in `brief.md`.",
    "",
    "## Gates",
    "",
    `- **Email:** ${pick(/\*\*Email:\*\*\s*(.+)/i)} (${pick(/## Email verification[\s\S]*?\*\*Gate:\*\*\s*(\w+)/i, "PENDING")})`,
    `- **Activity:** ${pick(/## Activity verification[\s\S]*?\*\*Gate:\*\*\s*(\w+)/i, "PENDING")} — ${pick(/## Activity verification[\s\S]*?\*\*Evidence:\*\*\s*(.+)/i, "see brief")}`,
    `- **Human approval:** ${pick(/## Human approval[\s\S]*?\*\*Gate:\*\*\s*(\w+)/i, "PENDING")}`,
    "",
    "## Business",
    "",
    `- **Name:** ${pick(/\*\*Name:\*\*\s*(.+)/i)}`,
    `- **Location:** ${pick(/\*\*Location:\*\*\s*(.+)/i)}`,
    `- **Live URL:** ${pick(/\*\*Live URL:\*\*\s*(https?:\/\/[^\s]+)/i, pick(/\*\*Source:\*\*\s*(https?:\/\/[^\s]+)/i))}`,
    `- **Email:** ${pick(/\*\*Email:\*\*\s*(.+)/i)}`,
    `- **Phone:** ${pick(/\*\*Phone:\*\*\s*(.+)/i, "not published")}`,
    `- **Tagline:** ${pick(/\*\*Tagline:\*\*\s*(.+)/i)}`,
    "",
    "## Mockup angle",
    "",
    `- **H1:** ${pick(/\*\*H1:\*\*\s*(.+)/i)}`,
    `- **Primary CTA:** ${pick(/\*\*Primary CTA:\*\*\s*(.+)/i)}`,
    `- **Why site hurts sales:** ${pick(/\*\*Why this site hurts sales:\*\*\s*(.+)/i, "see brief")}`,
    "",
    "## Three verifiable issues",
    "",
    ...(listedIssues.length ? listedIssues.map((i, n) => `${n + 1}. ${i}`) : issues.map((i, n) => `${n + 1}. ${i}`)),
    "",
    "## Mockup URL",
    "",
    mockupUrl(slug),
    "",
  ];

  const outPath = slugDir(slug, "brief.compact.md");
  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  return outPath;
}
