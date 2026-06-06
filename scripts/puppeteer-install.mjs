/**
 * Install Puppeteer-managed Chrome into .puppeteer-cache/ (project-local).
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { root } from "../lib/load-env.mjs";

process.env.PUPPETEER_CACHE_DIR = path.join(root, ".puppeteer-cache");

const res = spawnSync("npx", ["puppeteer", "browsers", "install", "chrome"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: process.env,
});

process.exit(res.status ?? 1);
