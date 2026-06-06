/**
 * Commit preview/{slug} + hub index.html and push to GitHub Pages (main).
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { loadEnv, root } from "./load-env.mjs";
import { MOCKUP_BASE, MOCKUPS_DIR } from "./constants.mjs";
import { checkLiveMockup } from "./outreach-send.mjs";
import { listLiveSlugs } from "./slugs.mjs";
import { applyQaAutofix } from "./qa-autofix.mjs";

const scriptsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "scripts");

function git(args, { allowFail = false } = {}) {
  const res = spawnSync("git", args, { cwd: root, encoding: "utf8", env: process.env });
  if (res.status !== 0 && !allowFail) {
    const detail = (res.stderr || res.stdout || "").trim();
    throw new Error(`git ${args.join(" ")} failed${detail ? `: ${detail}` : ""}`);
  }
  return (res.stdout || "").trim();
}

function hasGitRepo() {
  return fs.existsSync(path.join(root, ".git"));
}

function hasRemote(name = "origin") {
  const url = git(["remote", "get-url", name], { allowFail: true });
  return Boolean(url);
}

export function isGitDeployEnabled() {
  loadEnv();
  const flag = (process.env.GITHUB_DEPLOY || "1").trim().toLowerCase();
  return !["0", "false", "no", "off"].includes(flag);
}

function pushUrl() {
  const remote = process.env.GIT_REMOTE?.trim() || "origin";
  const branch = process.env.GIT_BRANCH?.trim() || "main";
  const token = process.env.GITHUB_TOKEN?.trim();
  let url = git(["remote", "get-url", remote], { allowFail: true });
  if (!url) return { remote, branch, pushTarget: null };

  if (token && url.startsWith("https://") && !url.includes("@")) {
    url = url.replace("https://", `https://x-access-token:${token}@`);
  }
  return { remote, branch, pushTarget: url };
}

function commitArgs(message) {
  const args = ["commit", "-m", message];
  const name = process.env.GIT_USER_NAME?.trim();
  const email = process.env.GIT_USER_EMAIL?.trim();
  if (name) args.unshift("-c", `user.name=${name}`);
  if (email) args.unshift("-c", `user.email=${email}`);
  return args;
}

function runHubSync() {
  const hubScript = path.join(scriptsDir, "hub-sync.mjs");
  const res = spawnSync(process.execPath, [hubScript], { cwd: root, encoding: "utf8" });
  if (res.status !== 0) {
    throw new Error(`hub-sync failed: ${(res.stderr || res.stdout || "").trim()}`);
  }
}

function stageDeployPaths(slug) {
  const paths = [
    path.join(MOCKUPS_DIR, slug),
    path.join(root, "index.html"),
    path.join(root, ".github", "workflows", "pages.yml"),
  ].filter((p) => fs.existsSync(p));

  if (paths.length === 0) throw new Error(`Nothing to deploy for ${slug}`);

  for (const p of paths) {
    git(["add", "-A", path.relative(root, p).replace(/\\/g, "/")]);
  }
  return paths.map((p) => path.relative(root, p).replace(/\\/g, "/"));
}

export async function waitForLiveMockup(slug, { timeoutMs, pollMs } = {}) {
  const url = `${MOCKUP_BASE}/${slug}/`;
  const maxMs = Number(timeoutMs ?? process.env.GITHUB_PAGES_WAIT_MS ?? 180000);
  const interval = Number(pollMs ?? process.env.GITHUB_PAGES_POLL_MS ?? 10000);
  const started = Date.now();

  while (Date.now() - started < maxMs) {
    const live = await checkLiveMockup(url);
    if (live.ok) return { ok: true, url, status: live.status, waitedMs: Date.now() - started };
    await new Promise((r) => setTimeout(r, interval));
  }

  return { ok: false, url, waitedMs: Date.now() - started };
}

/**
 * @returns {{ deployed: boolean, skipped?: string, commit?: string, live?: object }}
 */
export async function deployPreviewSlug(slug) {
  loadEnv();

  if (!isGitDeployEnabled()) {
    return { deployed: false, skipped: "GITHUB_DEPLOY disabled" };
  }
  if (!hasGitRepo()) {
    return { deployed: false, skipped: "no git repository — run git init && git remote add origin …" };
  }
  if (!hasRemote()) {
    return { deployed: false, skipped: "no git remote — add origin pointing at GitHub repo" };
  }

  const previewDir = path.join(root, MOCKUPS_DIR, slug);
  if (!fs.existsSync(path.join(previewDir, "index.html"))) {
    return { deployed: false, skipped: `missing ${MOCKUPS_DIR}/${slug}/index.html` };
  }

  runHubSync();
  const staged = stageDeployPaths(slug);
  const msg = `deploy: ${slug} mockup`;

  const dirty = git(["status", "--porcelain"], { allowFail: true });
  if (!dirty) {
    console.log(`  ○ git: no new changes for ${slug}`);
  } else {
    git(commitArgs(msg));
    console.log(`  ✓ git commit — ${staged.join(", ")}`);
  }

  const { branch, pushTarget } = pushUrl();
  if (pushTarget) {
    git(["push", pushTarget, branch]);
  } else {
    git(["push", process.env.GIT_REMOTE?.trim() || "origin", branch]);
  }
  console.log(`  ✓ git push → ${branch}`);

  console.log(`  … waiting for GitHub Pages (${MOCKUP_BASE}/${slug}/)…`);
  const live = await waitForLiveMockup(slug);
  if (live.ok) {
    console.log(`  ✓ live mockup (${Math.round(live.waitedMs / 1000)}s)`);
  } else {
    console.warn(`  ⚠ mockup not live yet after ${Math.round(live.waitedMs / 1000)}s — send may fail until Pages finishes`);
  }

  return { deployed: true, commit: msg, live };
}

function defaultRemoteUrl() {
  const fromEnv = process.env.GITHUB_REPO?.trim();
  if (fromEnv) return fromEnv.endsWith(".git") ? fromEnv : `${fromEnv}.git`;
  return "https://github.com/damianbasilio/f.git";
}

function ensureRemote() {
  const remote = process.env.GIT_REMOTE?.trim() || "origin";
  if (hasRemote(remote)) return remote;
  const url = defaultRemoteUrl();
  git(["remote", "add", remote, url]);
  console.log(`  ✓ git remote add ${remote} ${url}`);
  return remote;
}

function ensureMainBranch() {
  const branch = process.env.GIT_BRANCH?.trim() || "main";
  git(["branch", "-M", branch], { allowFail: true });
  return branch;
}

function autofixLiveMockups() {
  for (const slug of listLiveSlugs()) {
    const fix = applyQaAutofix(slug);
    if (fix.fixed) console.log(`  ✓ qa-autofix ${slug}: ${fix.change}`);
  }
}

/**
 * Commit the full repository and push to GitHub Pages (initial or bulk deploy).
 * @returns {{ deployed: boolean, skipped?: string, files?: number, live?: array }}
 */
export async function deployFullRepository({ message } = {}) {
  loadEnv();

  if (!isGitDeployEnabled()) {
    return { deployed: false, skipped: "GITHUB_DEPLOY disabled" };
  }

  if (!hasGitRepo()) {
    git(["init"]);
    console.log("  ✓ git init");
  }

  ensureRemote();
  const branch = ensureMainBranch();

  autofixLiveMockups();
  runHubSync();

  git(["add", "-A"]);
  const dirty = git(["status", "--porcelain"], { allowFail: true });
  const fileCount = dirty ? dirty.split("\n").filter(Boolean).length : 0;

  const msg = message || "Initial commit: Facebook Leads pipeline and mockups";
  if (dirty) {
    git(commitArgs(msg));
    console.log(`  ✓ git commit (${fileCount} paths)`);
  } else {
    const log = git(["log", "-1", "--oneline"], { allowFail: true });
    if (!log) {
      throw new Error("Nothing to commit — working tree clean and no prior commits");
    }
    console.log(`  ○ git: no new changes (${log})`);
  }

  const { pushTarget } = pushUrl();
  if (pushTarget) {
    git(["push", "-u", pushTarget, branch]);
  } else {
    git(["push", "-u", process.env.GIT_REMOTE?.trim() || "origin", branch]);
  }
  console.log(`  ✓ git push → ${branch}`);

  const slugs = listLiveSlugs();
  console.log(`  … waiting for ${slugs.length} mockup(s) on GitHub Pages…`);
  const live = [];
  for (const slug of slugs) {
    const row = await waitForLiveMockup(slug, { timeoutMs: 120000 });
    live.push({ slug, ...row });
    console.log(`  ${row.ok ? "✓" : "⚠"} ${slug}${row.ok ? "" : " (not live yet)"}`);
  }

  return { deployed: true, files: fileCount, live };
}
