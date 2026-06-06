import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";
import { slugDir } from "./paths.mjs";

/** Manifest has at least one filled image slot. */
export function imagesManifestFilled(slugDir) {
  const manifestPath = path.join(slugDir, "assets", "manifest.json");
  if (!fs.existsSync(manifestPath)) return false;
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (manifest.noPhotos) return true;
    const images = manifest.images || manifest;
    const slots = Object.keys(images).filter((k) => !["source", "notes", "order"].includes(k));
    return slots.some((k) => {
      const slot = images[k];
      return typeof slot === "object" ? Boolean(slot?.url) : Boolean(slot);
    });
  } catch {
    return false;
  }
}

/** Known Stitch export patterns — warnings only, not outreach blockers. */
export const STITCH_EXPORT_WARNINGS = [
  { id: "tailwind_cdn", re: /cdn\.tailwindcss\.com/i, message: "Tailwind CDN (Stitch export limitation)" },
  { id: "material_symbols", re: /Material\+Symbols/i, message: "Material Symbols icon font (Stitch export limitation)" },
];

export function collectDesignQaBlockers(findings) {
  return Object.entries(findings).flatMap(([skill, items]) =>
    items.filter((f) => f.startsWith("FAIL:")).map((f) => ({ skill, message: f.replace(/^FAIL:\s*/, "") }))
  );
}

export function writePipelineSummary(slug, summary) {
  const outPath = slugDir(slug, "pipeline-summary.json");
  fs.writeFileSync(outPath, JSON.stringify({ slug, updatedAt: new Date().toISOString(), ...summary }, null, 2) + "\n", "utf8");
  return outPath;
}

export function readBlockersFromReport(slug) {
  const blockers = [];
  const reportPath = slugDir(slug, "design-qa", "report.md");
  const evalPath = slugDir(slug, "design-qa", "site-eval.md");

  if (fs.existsSync(reportPath)) {
    const report = fs.readFileSync(reportPath, "utf8");
    if (!/\*\*Result:\*\*\s*PASS/i.test(report)) {
      for (const line of report.split("\n")) {
        if (line.startsWith("- FAIL:")) blockers.push({ file: reportPath, message: line.slice(2).trim() });
      }
    }
  }
  if (fs.existsSync(evalPath)) {
    const ev = fs.readFileSync(evalPath, "utf8");
    if (!/\*\*Result:\*\*\s*PASS/i.test(ev)) {
      for (const line of ev.split("\n")) {
        if (line.startsWith("- ") && !line.includes("WARN")) {
          const msg = line.slice(2).trim();
          if (msg && !msg.startsWith("**")) blockers.push({ file: evalPath, message: msg });
        }
      }
    }
  }
  return blockers;
}

export function writeBatchSummary(results) {
  const lines = [
    "# Pipeline batch summary",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "| Slug | Build | Design QA | Site eval | QA check | Outreach draft | Blockers |",
    "| ---- | ----- | --------- | --------- | -------- | -------------- | -------- |",
  ];

  for (const r of results) {
    const blockers =
      r.blockers?.length > 0
        ? r.blockers.map((b) => `${b.message}`).join("; ")
        : r.status === "skip"
          ? r.skipReason || "skipped"
          : "—";
    lines.push(
      `| ${r.slug} | ${cell(r.stitch)} | ${cell(r.designQa)} | ${cell(r.siteEval)} | ${cell(r.qaCheck)} | ${cell(r.outreachDraft)} | ${blockers.slice(0, 120)} |`
    );
  }

  lines.push("", "## Agent instructions", "", "- If all blockers are `—`, batch is ready for Damian review.", "- If any FIX rows, read only the listed file paths — not index.html or stitch JSON.", "- Do not use browser MCP unless a row says VISUAL_CHECK.", "");

  const outPath = path.join(root, "pipeline-batch-summary.md");
  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  return outPath;
}

function cell(v) {
  if (v === "pass") return "pass";
  if (v === "fail") return "FIX";
  if (v === "skip") return "skip";
  if (v === "warn") return "warn";
  return v || "—";
}
