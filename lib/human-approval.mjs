/**
 * Returns true when brief has Human approval Gate: PASS.
 */
export function hasHumanApproval(brief) {
  const section = brief.match(/## Human approval[\s\S]*?(?=##|$)/i)?.[0] || "";
  return /\*\*Gate:\*\*\s*PASS/i.test(section);
}

export function requireHumanApproval(slug, briefPath, brief) {
  if (!brief.includes("## Human approval")) {
    throw new Error(
      `${slug}: missing ## Human approval section. Present prospect to Damian first (npm run prospect:present -- ${slug}).`
    );
  }
  if (!hasHumanApproval(brief)) {
    throw new Error(
      `${slug}: Human approval gate is not PASS. Wait for Damian to review the website before Stitch build.`
    );
  }
}
