/**
 * Canonical git identity for all pipeline commits.
 * damianbasilio + damian.basilio@icloud.com is the correct GitHub session.
 */
import fs from "node:fs";
import path from "node:path";
import { root } from "./load-env.mjs";

export const CANONICAL_GIT_NAME = "damianbasilio";
export const CANONICAL_GIT_EMAIL = "damian.basilio@icloud.com";

const BANNED_NAMES = new Set(["dambasilio", "damian", "damian basilio"]);

/** Read GIT_USER_* from .env directly — never trust inherited process.env. */
function readGitIdentityFromDotEnv() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) {
    return { name: CANONICAL_GIT_NAME, email: CANONICAL_GIT_EMAIL };
  }

  let name = CANONICAL_GIT_NAME;
  let email = CANONICAL_GIT_EMAIL;

  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const m = trimmed.match(/^(GIT_USER_NAME|GIT_USER_EMAIL)=(.*)$/);
    if (!m) continue;
    let val = m[2].trim().replace(/^["']|["']$/g, "");
    val = val.replace(/\s+#.*$/, "").trim();
    if (m[1] === "GIT_USER_NAME" && val) name = val;
    if (m[1] === "GIT_USER_EMAIL" && val) email = val;
  }

  return { name, email };
}

/** @returns {{ name: string, email: string }} */
export function resolveGitAuthor() {
  const { name, email } = readGitIdentityFromDotEnv();
  assertGitAuthorAllowed(name, email);
  return { name, email };
}

export function assertGitAuthorAllowed(name, email) {
  const n = name.trim();
  const e = email.trim().toLowerCase();

  if (BANNED_NAMES.has(n.toLowerCase())) {
    throw new Error(
      `Blocked git author name "${name}" — use "${CANONICAL_GIT_NAME}" exactly. ` +
        '"dambasilio" is a different GitHub contributor.'
    );
  }

  if (e === "dam.basilio@gmail.com") {
    throw new Error(
      "Blocked git email dam.basilio@gmail.com — use damian.basilio@icloud.com for commits. " +
        "Gmail address is for GMAIL_USER only."
    );
  }

  if (e !== CANONICAL_GIT_EMAIL.toLowerCase()) {
    throw new Error(`GIT_USER_EMAIL must be ${CANONICAL_GIT_EMAIL} (got ${email}).`);
  }

  if (n !== CANONICAL_GIT_NAME) {
    throw new Error(`GIT_USER_NAME must be "${CANONICAL_GIT_NAME}" exactly (got ${name}).`);
  }
}

/** git commit args with enforced author (does not touch global git config). */
export function gitCommitArgs(message) {
  const { name, email } = resolveGitAuthor();
  return [
    "-c",
    `user.name=${name}`,
    "-c",
    `user.email=${email}`,
    "commit",
    "-m",
    message,
  ];
}
