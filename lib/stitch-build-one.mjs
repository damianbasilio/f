import fs from "node:fs";
import path from "node:path";
import { adaptStitchExport, writeSite } from "./stitch-adapt.mjs";
import { resolveMapQuery } from "./brief-fields.mjs";
import { writeBriefCompact } from "./brief-compact.mjs";
import { runDesignQa } from "./design-qa.mjs";
import { runSiteEval } from "./site-eval.mjs";
import { requireHumanApproval } from "./human-approval.mjs";
import { extractBrandFromUrl, mergeBrandIntoBrief } from "./extract-brand.mjs";
import { root } from "./load-env.mjs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { slugDir } from "./paths.mjs";
import {
  buildSiteGeneratePrompt,
  isHtmlDocument,
  pickDesignSystemText,
  pickScreenFromGenerate,
  pullScreenExport,
  saveDesignSystem,
  screenHasHtml,
  waitForScreenHtml,
} from "./stitch-export.mjs";
import { generateWithTimeout, maxPhase2Retries } from "./stitch-generate-guard.mjs";
import { buildFullSingleAttemptPrompt, loadBriefAndBrand, readPromptBody } from "./stitch-build-prompt.mjs";
import { Stitch } from "@google/stitch-sdk";
import { isStitchCreditError, findNextKeyIndex, logCreditFailover } from "./stitch-credit-error.mjs";
import { createStitchWorker } from "./stitch-pool.mjs";

function requireBriefGates(slug) {
  const briefPath = slugDir(slug, "brief.md");
  if (!fs.existsSync(briefPath)) {
    throw new Error(`Missing ${briefPath}. Create brief.md with email, activity, and site quality gates PASS first.`);
  }
  const brief = fs.readFileSync(briefPath, "utf8");
  const emailSection = brief.match(/## Email verification[\s\S]*?(?=##|$)/i)?.[0] || "";
  const activitySection = brief.match(/## Activity verification[\s\S]*?(?=##|$)/i)?.[0] || "";
  if (!/\*\*Gate:\*\*\s*PASS/i.test(emailSection)) {
    throw new Error(`${slug}: email verification gate must be PASS before Stitch build`);
  }
  if (!brief.includes("## Activity verification")) {
    throw new Error(`${slug}: brief.md missing Activity verification section`);
  }
  if (!/\*\*Gate:\*\*\s*PASS/i.test(activitySection)) {
    throw new Error(`${slug}: activity verification gate must be PASS before Stitch build`);
  }
  if (!brief.includes("## Site quality gate")) {
    throw new Error(`${slug}: brief.md missing Site quality gate section`);
  }
  if (!brief.includes("## Core functionalities")) {
    throw new Error(`${slug}: brief.md missing ## Core functionalities (required for Stitch prompt)`);
  }
  requireHumanApproval(slug, briefPath, brief);
}

async function ensureBrandExtract(slug, brief) {
  const brandPath = slugDir(slug, "stitch", "brand-extract.json");
  const urlMatch = brief.match(/\*\*Live URL:\*\*\s*(https?:\/\/[^\s]+)/i);
  const siteUrl = urlMatch?.[1]?.trim();
  if (!siteUrl) {
    console.warn("No Live URL in brief — skipping brand extract");
    return;
  }
  if (fs.existsSync(brandPath)) {
    const existing = JSON.parse(fs.readFileSync(brandPath, "utf8"));
    if (existing.sourceUrl === siteUrl) {
      console.log("Brand extract up to date.");
      return;
    }
  }
  console.log("Extracting brand from live website…");
  const brand = await extractBrandFromUrl(siteUrl);
  fs.mkdirSync(path.dirname(brandPath), { recursive: true });
  fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n", "utf8");
  fs.writeFileSync(slugDir(slug, "brief.md"), mergeBrandIntoBrief(brief, brand), "utf8");
  console.log(`Brand colors: ${brand.colors.slice(0, 6).join(", ") || "none"}`);
}

function refreshStitchPrompt(slug) {
  const script = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "scripts", "stitch-prompt-fb.mjs");
  const res = spawnSync(process.execPath, [script, slug], { cwd: root, stdio: "inherit" });
  if (res.status !== 0) throw new Error(`stitch:prompt failed for ${slug}`);
}

function readBriefContact(brief) {
  return {
    phone: brief.match(/\*\*Phone:\*\*\s*(.+)/i)?.[1]?.trim() || "",
    email: brief.match(/\*\*Email:\*\*\s*(.+)/i)?.[1]?.trim() || "",
    address: resolveMapQuery(brief) || "",
  };
}

function resolveScreenId(screen) {
  if (!screen) return null;
  if (screen.id) return screen.id;
  if (screen.name?.includes("/screens/")) return screen.name.split("/screens/")[1];
  return null;
}

async function resolveHtmlPath(callTool, projectId, screenId, exportDir) {
  const pollAttempts = Number(process.env.STITCH_POLL_ATTEMPTS || 24);
  const pollDelayMs = Number(process.env.STITCH_POLL_DELAY_MS || 5000);
  const raw = await waitForScreenHtml(callTool, projectId, screenId, {
    attempts: pollAttempts,
    delayMs: pollDelayMs,
  });
  console.log("\nPulling full Stitch export (HTML, CSS, screenshots, tokens, …)…");
  const pulled = await pullScreenExport(raw, exportDir);

  if (!pulled.htmlPath) {
    throw new Error(
      `${screenId}: Stitch export has no htmlCode file. Check stitch/export/screen-response.json — may still be design-system only.`
    );
  }

  const html = fs.readFileSync(pulled.htmlPath, "utf8");
  if (!isHtmlDocument(html)) {
    throw new Error(
      `Stitch htmlCode is not HTML (got ${html.slice(0, 120).replace(/\s+/g, " ")}…). See stitch/export/.`
    );
  }

  return { raw, htmlPath: pulled.htmlPath, html };
}

async function guardedGenerate(callTool, projectId, prompt, { slug, phase, deviceType = "DESKTOP" }) {
  const logPath = slugDir(slug, "stitch", "generate-log.jsonl");
  console.log(`  → generate_screen_from_text (${phase})…`);
  return generateWithTimeout(callTool, "generate_screen_from_text", { projectId, prompt, deviceType }, {
    slug,
    phase,
    logPath,
  });
}

function saveAttemptResponse(stitchDir, result) {
  fs.writeFileSync(path.join(stitchDir, "phase1-response.json"), JSON.stringify(result, null, 2) + "\n", "utf8");
}

/**
 * Full prompt.md single attempt → phase 2 when Stitch returns design-only (usual).
 * @param {string} slug
 * @param {{ stitch?, callTool?, ownsClient?, close? }} [provided] — from stitch pool worker
 */
export async function buildSlug(slug, provided = {}) {
  requireBriefGates(slug);

  if (provided?.stitch && provided?.callTool) {
    return runBuildSlug(slug, {
      stitch: provided.stitch,
      callTool: provided.callTool,
      ownsClient: false,
      close: provided.close,
    });
  }

  const { getStitchApiKeys } = await import("./load-env.mjs");
  const keys = getStitchApiKeys();
  const exhausted = new Set();
  let lastError;
  let preferStart = 0;

  while (true) {
    const keyIndex = findNextKeyIndex(exhausted, keys.length, preferStart);
    if (keyIndex === null) break;

    const bundle = createStitchWorker(keys[keyIndex]);
    try {
      return await runBuildSlug(slug, {
        stitch: bundle.stitch,
        callTool: bundle.callTool,
        ownsClient: true,
        close: bundle.close,
      });
    } catch (err) {
      lastError = err;
      if (isStitchCreditError(err) && keys.length > 1) {
        exhausted.add(keyIndex);
        logCreditFailover(keyIndex, keys.length, slug);
        preferStart = keyIndex + 1;
        continue;
      }
      throw err;
    } finally {
      await bundle.close();
    }
  }

  throw lastError || new Error("All Stitch API keys are out of credits");
}

async function runBuildSlug(slug, { stitch, callTool, ownsClient, close }) {
  try {
    let { brief } = loadBriefAndBrand(slug);
    await ensureBrandExtract(slug, brief);
    refreshStitchPrompt(slug);

    brief = fs.readFileSync(slugDir(slug, "brief.md"), "utf8");
    writeBriefCompact(slug);

    const businessName = brief.match(/\*\*Name:\*\*\s*(.+)/i)?.[1]?.trim() || slug;
    const businessAddress = resolveMapQuery(brief);
    const contact = readBriefContact(brief);

    const stitchDir = slugDir(slug, "stitch");
    const exportDir = path.join(stitchDir, "export");
    fs.mkdirSync(stitchDir, { recursive: true });

    console.log(`\n── ${slug} ──`);
    console.log(`Stitch project: Outreach — ${slug}`);

    const project = await stitch.createProject(`Outreach — ${slug}`);
    const projectId = project.id ?? project.projectId ?? String(project);
    fs.writeFileSync(path.join(stitchDir, "project-id.txt"), projectId, "utf8");

    let designMd = "";
    let screen = null;
    let screenId = null;

    console.log("\nAttempt A: full prompt.md + HTML directive (single try)…");
    const attemptPrompt = buildFullSingleAttemptPrompt({ slug, businessName, contact });
    fs.writeFileSync(path.join(stitchDir, "single-attempt-prompt.md"), attemptPrompt + "\n", "utf8");

    const attemptA = await guardedGenerate(callTool, projectId, attemptPrompt, { slug, phase: "single-attempt-full" });
    if (attemptA.ok) {
      saveAttemptResponse(stitchDir, attemptA.result);
      designMd = pickDesignSystemText(attemptA.result);
      saveDesignSystem(stitchDir, designMd, attemptA.result);
      screen = pickScreenFromGenerate(attemptA.result);
      screenId = resolveScreenId(screen);
    } else {
      console.log("Attempt A timed out or failed — phase 2 will run without design context.");
    }

    if (!screenHasHtml(screen)) {
      if (!designMd?.trim()) {
        console.log("\nRecovery: full prompt.md (no design context from attempt A)…");
        const recoveryPrompt = readPromptBody(slug);
        fs.writeFileSync(path.join(stitchDir, "recovery-prompt.md"), recoveryPrompt + "\n", "utf8");
        const recovery = await guardedGenerate(callTool, projectId, recoveryPrompt, { slug, phase: "recovery-full" });
        if (recovery.ok) {
          saveAttemptResponse(stitchDir, recovery.result);
          designMd = pickDesignSystemText(recovery.result);
          saveDesignSystem(stitchDir, designMd, recovery.result);
          screen = pickScreenFromGenerate(recovery.result);
          screenId = resolveScreenId(screen);
        }
      } else {
        console.log("Attempt A returned design system — proceeding to phase 2.");
      }

      if (!screenHasHtml(screen)) {
        console.log("\nPhase 2: build website HTML…");
        const sitePrompt = buildSiteGeneratePrompt({
          businessName,
          ...contact,
          designMd,
        });
        fs.writeFileSync(path.join(stitchDir, "site-prompt.md"), sitePrompt + "\n", "utf8");

        let phase2 = null;
        const retries = maxPhase2Retries();
        for (let attempt = 0; attempt <= retries; attempt++) {
          const label = attempt === 0 ? "phase2" : `phase2-retry-${attempt}`;
          const gen = await guardedGenerate(callTool, projectId, sitePrompt, { slug, phase: label });
          if (gen.ok) {
            phase2 = gen.result;
            break;
          }
          if (attempt === retries) {
            throw gen.error || new Error("Phase 2 generate failed after retries");
          }
        }

        fs.writeFileSync(path.join(stitchDir, "phase2-response.json"), JSON.stringify(phase2, null, 2) + "\n", "utf8");
        screen = pickScreenFromGenerate(phase2);
        screenId = resolveScreenId(screen);
        if (!screenId) {
          throw new Error("Phase 2 generate did not return a screen. See stitch/phase2-response.json");
        }
      }
    } else {
      console.log("Attempt A included htmlCode — skipping phase 2.");
    }

    if (!screenId) {
      throw new Error("No screen ID from Stitch. See stitch/phase1-response.json");
    }
    fs.writeFileSync(path.join(stitchDir, "screen-id.txt"), screenId, "utf8");

    const { htmlPath, html } = await resolveHtmlPath(callTool, projectId, screenId, exportDir);

    const designPath = path.join(stitchDir, "design.html");
    fs.copyFileSync(htmlPath, designPath);
    console.log(`Primary HTML: ${designPath}`);

    const files = adaptStitchExport(html, { businessName, slug, businessAddress });
    const siteDir = writeSite(root, slug, files, { businessName });

    ensureStatus(slug);

    console.log(`\nSite ready: ${siteDir}/index.html`);
    console.log(`Raw export: ${exportDir}/ (${fs.readdirSync(exportDir).length} files)`);
    if (businessAddress) {
      console.log(`Google Map embed added for: ${businessAddress}`);
    }

    console.log("\nRunning design skills (emil → taste → audit → harden → polish)…");
    const design = runDesignQa(slug);
    for (const fix of design.fixes) console.log(`  ✓ ${fix}`);
    if (!design.ok) {
      console.warn(`Design QA report: ${slug}/design-qa/report.md (review blockers)`);
    } else {
      console.log("Design QA passed.");
    }

    console.log("\nRunning site evaluation (broken links, images, structure)…");
    const evalResult = await runSiteEval(slug);
    for (const e of evalResult.errors) console.log(`  ✗ ${e}`);
    for (const w of evalResult.warnings) console.log(`  ⚠ ${w}`);
    if (!evalResult.ok) {
      console.warn(`Site eval report: ${slug}/design-qa/site-eval.md`);
    } else {
      console.log("Site evaluation passed.");
    }

    return siteDir;
  } finally {
    if (ownsClient && close) await close();
  }
}

function ensureStatus(slug) {
  const statusPath = slugDir(slug, "status.md");
  if (fs.existsSync(statusPath)) return;
  fs.writeFileSync(
    statusPath,
    `# ${slug} — status

| Stage | Status |
| ----- | ------ |
| human-approval | pending |
| brand-extract | pending |
| stitch | pending |
| images | pending |
| copy | pending |
| design-qa/craft | pending |
| design-qa/emil | pending |
| design-qa/taste | pending |
| design-qa/audit | pending |
| design-qa/harden | pending |
| design-qa/polish | pending |
| site-eval | pending |
| outreach | pending |
| outreach-sent | pending |
`,
    "utf8"
  );
}
