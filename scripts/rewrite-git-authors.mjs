/**
 * Rewrite commits to damianbasilio <damian.basilio@icloud.com>.
 *
 * Usage: node scripts/rewrite-git-authors.mjs [--push]
 */
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { CANONICAL_GIT_EMAIL, CANONICAL_GIT_NAME } from "../lib/git-author.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shouldPush = process.argv.includes("--push");

const envFilter = `
if [ "$GIT_AUTHOR_EMAIL" != "${CANONICAL_GIT_EMAIL}" ] || [ "$GIT_AUTHOR_NAME" != "${CANONICAL_GIT_NAME}" ]; then
  export GIT_AUTHOR_NAME="${CANONICAL_GIT_NAME}"
  export GIT_AUTHOR_EMAIL="${CANONICAL_GIT_EMAIL}"
fi
if [ "$GIT_COMMITTER_EMAIL" != "${CANONICAL_GIT_EMAIL}" ] || [ "$GIT_COMMITTER_NAME" != "${CANONICAL_GIT_NAME}" ]; then
  export GIT_COMMITTER_NAME="${CANONICAL_GIT_NAME}"
  export GIT_COMMITTER_EMAIL="${CANONICAL_GIT_EMAIL}"
fi
`.trim();

function run(cmd, args) {
  const res = spawnSync(cmd, args, { cwd: root, encoding: "utf8" });
  if (res.status !== 0) {
    console.error((res.stderr || res.stdout || "").trim());
    process.exit(res.status || 1);
  }
  return (res.stdout || "").trim();
}

console.log("Rewriting commit authors →", `${CANONICAL_GIT_NAME} <${CANONICAL_GIT_EMAIL}>`);

run("git", ["filter-branch", "-f", "--env-filter", envFilter, "--", "--all"]);

console.log("\nNew authors:");
console.log(run("git", ["log", "--format=%h %an <%ae>", "-15"]));

if (shouldPush) {
  console.log("\nForce-pushing main…");
  run("git", ["push", "--force", "origin", "main"]);
  console.log("Done.");
} else {
  console.log("\nRun with --push to force-push: node scripts/rewrite-git-authors.mjs --push");
}
