/**
 * Slim JSON for agents (token-efficient); full payloads for funnel-detail only.
 */

export function slimSiteScreen(screen) {
  if (!screen) return null;
  return {
    agentGate: screen.agentGate,
    recommendation: screen.recommendation,
    summary: screen.summary,
    totalScore: screen.totalScore,
    finalVerdict: screen.finalVerdict,
  };
}

export function slimActivity(activity) {
  if (!activity) return null;
  return {
    agentGate: activity.agentGate,
    recommendation: activity.recommendation,
    summary: activity.summary,
  };
}
