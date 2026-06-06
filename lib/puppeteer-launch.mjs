/**
 * Launch Puppeteer with cached Chrome, system Chrome, or PUPPETEER_EXECUTABLE_PATH.
 */
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";
import { loadEnv, root } from "./load-env.mjs";

const DEFAULT_ARGS = ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"];

function ensureProjectCacheDir() {
  if (!process.env.PUPPETEER_CACHE_DIR) {
    process.env.PUPPETEER_CACHE_DIR = path.join(root, ".puppeteer-cache");
  }
}

function findSystemChrome() {
  if (process.platform === "win32") {
    const candidates = [
      process.env.LOCALAPPDATA && `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    ].filter(Boolean);
    return candidates.find((p) => pathExists(p)) || null;
  }
  if (process.platform === "darwin") {
    const p = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    return pathExists(p) ? p : null;
  }
  for (const p of ["/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium"]) {
    if (pathExists(p)) return p;
  }
  return null;
}

function pathExists(p) {
  return typeof p === "string" && p.length > 0 && fs.existsSync(p);
}

function resolveExecutablePath() {
  ensureProjectCacheDir();
  loadEnv();
  const fromEnv = process.env.PUPPETEER_EXECUTABLE_PATH?.trim();
  if (pathExists(fromEnv)) return fromEnv;

  try {
    const cached = puppeteer.executablePath();
    if (pathExists(cached)) return cached;
  } catch {
    /* puppeteer cache empty */
  }

  return findSystemChrome();
}

/**
 * @param {import('puppeteer').LaunchOptions} [options]
 */
export async function launchBrowser(options = {}) {
  const launchOpts = {
    headless: true,
    args: DEFAULT_ARGS,
    ...options,
  };

  const executablePath = resolveExecutablePath();
  if (executablePath) launchOpts.executablePath = executablePath;

  try {
    return await puppeteer.launch(launchOpts);
  } catch (err) {
    if (/Could not find Chrome/i.test(err.message)) {
      throw new Error(
        `${err.message}\n\nFix: run \`npm run puppeteer:install\` once, or install Google Chrome and set PUPPETEER_EXECUTABLE_PATH in .env`
      );
    }
    throw err;
  }
}
