/**
 * Dashboard UI — scroll-safe polling.
 */

const POLL_LIVE_MS = 1500;
const POLL_IDLE_MS = 4000;

const STAGE_LABELS = {
  building: "Creating design",
  review_ready: "Email ready",
  approved: "Approved",
  sent: "Sent",
  failed: "Failed",
};

let activeView = localStorage.getItem("fbLeadsActiveView") || "dashboard";
if (activeView === "import") activeView = "dashboard";
let currentBatch = localStorage.getItem("fbLeadsCurrentBatch") || null;
let reviewSelection = (() => {
  try {
    return JSON.parse(localStorage.getItem("fbLeadsReviewSelection") || "null");
  } catch {
    return null;
  }
})();
let reviewRebuilds = {};
let leadRetries = {};

const PAGE_META = {
  dashboard: { title: "Dashboard", sub: "Pipeline overview" },
  leads: { title: "Leads", sub: "All businesses in your pipeline" },
  review: { title: "Review", sub: "Email + mockup side by side — all pending emails in one queue" },
  search: { title: "New search", sub: "Discover leads and run the full pipeline automatically" },
};

const cache = {
  leadsKey: "",
  dashboardKey: "",
  reviewKey: "",
  inboxKey: "",
  queueKey: "",
  batchOptionsKey: "",
  progressKey: "",
  searchLogText: "",
  sidebarKey: "",
  batchesKey: "",
  jobs_dashRecentJobs: "",
  jobs_searchHistoryList: "",
  previewFrameKey: "",
};

let pollTimer = null;
let pollInterval = POLL_IDLE_MS;

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function $(id) {
  return document.getElementById(id);
}

function setText(el, text) {
  if (!el || el.textContent === text) return;
  el.textContent = text;
}

function appendLog(el, fullText, cacheKey) {
  if (!el) return;
  if (fullText === cache[cacheKey]) return;
  const wasAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
  el.textContent = fullText;
  cache[cacheKey] = fullText;
  if (wasAtBottom || el.scrollTop === 0) el.scrollTop = el.scrollHeight;
}

function schedulePoll(ms) {
  if (ms !== pollInterval) {
    pollInterval = ms;
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = setInterval(tick, pollInterval);
    }
  }
}

function switchView(view, opts = {}) {
  activeView = view;
  localStorage.setItem("fbLeadsActiveView", view);
  document.querySelectorAll(".nav button[data-view]").forEach((b) => {
    b.classList.toggle("active", b.dataset.view === view);
  });
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.toggle("active", p.id === `view-${view}`);
  });
  const meta = PAGE_META[view];
  if (meta) {
    setText($("pageTitle"), meta.title);
    setText($("pageSubtitle"), meta.sub);
  }
  if (opts.stage && $("leadStageFilter")) {
    $("leadStageFilter").value = opts.stage;
    cache.leadsKey = "";
  }
  if (view === "leads" && lastLeads.length) renderLeads(lastLeads);
}

document.getElementById("nav")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-view]");
  if (btn) switchView(btn.dataset.view);
});

document.body.addEventListener("click", async (e) => {
  const batchBtn = e.target.closest("[data-batch]");
  const goto = e.target.closest("[data-goto]");
  const deleteBtn = e.target.closest("[data-action=delete-lead]");
  if (deleteBtn) {
    e.preventDefault();
    await handleDeleteLead(deleteBtn.dataset.slug, deleteBtn.dataset.name);
    return;
  }
  const retryBtn = e.target.closest("[data-action=retry-lead]");
  if (retryBtn) {
    e.preventDefault();
    await handleRetryLead(retryBtn.dataset.slug, retryBtn.dataset.name, retryBtn.dataset.batch);
    return;
  }
  if (batchBtn) {
    if (batchBtn.dataset.slug) {
      saveReviewSelection({ batchNum: batchBtn.dataset.batch, slug: batchBtn.dataset.slug });
    } else {
      currentBatch = batchBtn.dataset.batch;
      localStorage.setItem("fbLeadsCurrentBatch", String(currentBatch));
    }
    cache.reviewKey = "";
    cache.inboxKey = "";
    cache.batchOptionsKey = "";
    if (goto?.dataset.goto) switchView(goto.dataset.goto, { stage: goto.dataset.stage || "" });
    else switchView("review");
    tick();
    return;
  }
  if (goto) switchView(goto.dataset.goto, { stage: goto.dataset.stage || "" });
});

async function handleRetryLead(slug, name, batchNum, { skipConfirm = false } = {}) {
  if (!slug) return;
  const label = name || slug;
  if (
    !skipConfirm &&
    !confirm(
      `Retry "${label}" through the full pipeline?\n\nThis clears previous QA/filter results, re-verifies Facebook, rebuilds the mockup, and re-queues the outreach email.`
    )
  ) {
    return;
  }
  try {
    const r = await fetch(`/api/leads/${encodeURIComponent(slug)}/retry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ batchNum: batchNum || undefined }),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error || "Retry failed to start");
    cache.leadsKey = "";
    cache.dashboardKey = "";
    await tick();
  } catch (err) {
    alert(err.message);
  }
}

async function handleDeleteLead(slug, name) {
  if (!slug) return;
  const label = name || slug;
  if (
    !confirm(
      `Delete "${label}"?\n\nThis removes the mockup folder, registry entry, and batch references. This cannot be undone.`
    )
  ) {
    return;
  }
  try {
    const r = await fetch(`/api/leads/${encodeURIComponent(slug)}`, { method: "DELETE" });
    const raw = await r.text();
    let data = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      if (r.status === 404) {
        throw new Error("Delete endpoint not found — restart the server (npm run server) and try again.");
      }
    }
    if (!r.ok) throw new Error(data.error || `Delete failed (${r.status})`);
    if (reviewSelection?.slug === slug) {
      saveReviewSelection(null);
      cache.reviewKey = "";
      cache.inboxKey = "";
      cache.previewFrameKey = "";
    }
    cache.leadsKey = "";
    cache.dashboardKey = "";
    cache.batchesKey = "";
    await tick();
  } catch (err) {
    alert(err.message);
  }
}

// ── Leads ──────────────────────────────────────────────────────────────────

let lastLeads = [];

function renderLeads(leads) {
  const filter = ($("leadFilter")?.value || "").toLowerCase();
  const stageFilter = $("leadStageFilter")?.value || "";
  const failedCount = leads.filter((l) => l.stage === "failed").length;
  const retryAllBtn = $("retryAllFailedBtn");
  if (retryAllBtn) {
    retryAllBtn.hidden = stageFilter !== "failed" || !failedCount;
    retryAllBtn.disabled = Object.values(leadRetries).some((r) => r?.running);
  }

  let filtered = leads;
  if (filter) {
    filtered = filtered.filter(
      (l) =>
        l.name?.toLowerCase().includes(filter) ||
        l.city?.toLowerCase().includes(filter) ||
        l.email?.toLowerCase().includes(filter) ||
        l.slug?.toLowerCase().includes(filter)
    );
  }
  if (stageFilter) filtered = filtered.filter((l) => l.stage === stageFilter);

  const key = JSON.stringify({
    filter,
    stageFilter,
    leads: filtered.map((l) => [l.slug, l.stage, leadRetries[l.slug]?.running]),
  });
  if (key === cache.leadsKey) return;
  cache.leadsKey = key;

  setText($("leadsCount"), filtered.length === leads.length ? `${leads.length} leads` : `${filtered.length} of ${leads.length}`);

  const wrap = $("leadsTableWrap");
  if (!filtered.length) {
    wrap.innerHTML = '<p class="empty">No leads match your filters.</p>';
    return;
  }

  wrap.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Business</th>
          <th>City</th>
          <th>Email</th>
          <th>Batch</th>
          <th>Stage</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        ${filtered
          .map((l) => {
            const retrying = Boolean(leadRetries[l.slug]?.running);
            const stage = retrying ? "building" : l.stage;
            const stageLabel = retrying ? "Retrying…" : l.stageLabel || STAGE_LABELS[l.stage] || l.stage;
            return `
        <tr>
          <td><strong>${escapeHtml(l.name)}</strong><span class="slug">${escapeHtml(l.slug)}</span></td>
          <td>${escapeHtml(l.city)}</td>
          <td>${escapeHtml(l.email)}</td>
          <td>${l.batchNum ? `<button type="button" class="linkish" data-batch="${escapeHtml(l.batchNum)}">${escapeHtml(l.batchNum)}</button>` : "—"}</td>
          <td><span class="badge ${escapeHtml(stage)}">${escapeHtml(stageLabel)}</span></td>
          <td class="link-cell">${[
            l.mockupUrl ? `<a href="${escapeHtml(l.mockupUrl)}" target="_blank" rel="noopener">Mockup</a>` : "",
            l.facebook ? `<a href="${escapeHtml(l.facebook)}" target="_blank" rel="noopener">Facebook</a>` : "",
            l.stage === "review_ready" && l.batchNum ? `<button type="button" class="linkish" data-batch="${escapeHtml(l.batchNum)}" data-slug="${escapeHtml(l.slug)}" data-goto="review">Review</button>` : "",
            l.stage === "failed" && !retrying
              ? `<button type="button" class="linkish" data-action="retry-lead" data-slug="${escapeHtml(l.slug)}" data-batch="${escapeHtml(l.batchNum || "")}" data-name="${escapeHtml(l.name)}">Retry</button>`
              : "",
            `<button type="button" class="linkish danger" data-action="delete-lead" data-slug="${escapeHtml(l.slug)}" data-name="${escapeHtml(l.name)}"${retrying ? " disabled" : ""}>Delete</button>`,
          ].filter(Boolean).join(" · ")}</td>
        </tr>`;
          })
          .join("")}
      </tbody>
    </table>`;
}

async function refreshLeads() {
  renderLeads(lastLeads);
}

$("leadFilter")?.addEventListener("input", () => renderLeads(lastLeads));
$("leadStageFilter")?.addEventListener("change", () => renderLeads(lastLeads));

$("retryAllFailedBtn")?.addEventListener("click", async () => {
  const failed = lastLeads.filter((l) => l.stage === "failed" && !leadRetries[l.slug]?.running);
  if (!failed.length) return;
  if (
    !confirm(
      `Retry all ${failed.length} failed lead(s) through the full pipeline?\n\nEach will be re-verified, rebuilt, and re-queued one at a time.`
    )
  ) {
    return;
  }
  for (const l of failed) {
    await handleRetryLead(l.slug, l.name, l.batchNum, { skipConfirm: true });
    while (leadRetries[l.slug]?.running) {
      await new Promise((r) => setTimeout(r, 1500));
      await tick();
    }
  }
});

// ── Dashboard ──────────────────────────────────────────────────────────────

function countByStage(leads) {
  const counts = {};
  for (const l of leads) counts[l.stage] = (counts[l.stage] || 0) + 1;
  return counts;
}

function totalReviewReady(batches) {
  return (batches || []).reduce((n, b) => n + (b.queues?.reviewReady || 0), 0);
}

function updateReviewBadges(reviewCount) {
  const badge = $("navReviewBadge");
  if (badge) {
    badge.textContent = String(reviewCount);
    badge.classList.toggle("hidden", !reviewCount);
  }
  const alert = $("reviewAlert");
  const alertText = $("reviewAlertText");
  if (alert && alertText) {
    if (reviewCount) {
      alertText.textContent =
        reviewCount === 1 ? "1 email ready for review." : `${reviewCount} emails ready for review.`;
      alert.classList.remove("hidden");
    } else {
      alert.classList.add("hidden");
    }
  }
  const cta = $("reviewCta");
  if (cta) cta.textContent = reviewCount ? `Review (${reviewCount})` : "Review emails";
}

function renderBatches(batches) {
  const el = $("dashBatches");
  if (!el) return;
  const key = JSON.stringify(
    (batches || []).slice(0, 5).map((b) => [b.batchNum, b.queues?.reviewReady, b.queues?.sendSent])
  );
  if (key === cache.batchesKey) return;
  cache.batchesKey = key;

  if (!batches?.length) {
    el.innerHTML = '<p class="muted-line">No batches yet. Start a search.</p>';
    return;
  }

  el.innerHTML = `<ul class="batch-list">${batches
    .slice(0, 5)
    .map((b) => {
      const q = b.queues || {};
      const ready = q.reviewReady || 0;
      const sent = q.sendSent || 0;
      const pending = q.reviewPending || 0;
      return `<li class="batch-row">
        <button type="button" class="batch-link" data-batch="${escapeHtml(b.batchNum)}">
          <span class="batch-id">Batch ${escapeHtml(b.batchNum)}</span>
          <span class="batch-meta">${ready ? `${ready} ready` : pending ? `${pending} drafting` : "—"} · ${sent} sent</span>
        </button>
      </li>`;
    })
    .join("")}</ul>`;
}

function renderJobList(jobs, containerId, limit = 5) {
  const el = $(containerId);
  if (!el) return;
  const slice = (jobs || []).slice(0, limit);
  const cacheKey = `jobs_${containerId}`;
  const key = JSON.stringify(slice.map((j) => [j.id, j.running, j.exitCode, j.currentStage]));
  if (key === cache[cacheKey]) return;
  cache[cacheKey] = key;

  if (!slice.length) {
    el.innerHTML = '<p class="muted-line">No jobs yet.</p>';
    return;
  }

  el.innerHTML = `<ul class="job-list">${slice
    .map((j) => {
      const status = j.running ? "Running" : j.exitCode === 0 ? "Complete" : "Failed";
      const cls = j.running ? "running" : j.exitCode === 0 ? "done" : "fail";
      const when = j.finishedAt || j.startedAt;
      const date = when
        ? new Date(when).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        : "";
      return `<li class="job-row ${cls}">
        <div class="job-main"><strong>${escapeHtml(j.label)}</strong>${j.batchNum ? ` <span class="slug">batch ${escapeHtml(j.batchNum)}</span>` : ""}</div>
        <div class="job-sub"><span class="pill pill-sm">${escapeHtml(status)}</span> ${escapeHtml(j.currentStage || "—")} · ${escapeHtml(date)}</div>
      </li>`;
    })
    .join("")}</ul>`;
}

function setLastUpdated(live = false) {
  const el = $("lastUpdated");
  if (!el) return;
  el.textContent = live
    ? `Live · ${new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", second: "2-digit" })}`
    : `Updated ${new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", second: "2-digit" })}`;
}

function renderDashboard(leads, statusData, job, jobs, inboxCounts) {
  const reviewReady = leads.filter((l) => l.stage === "review_ready").length;
  const queueReady = totalReviewReady(statusData?.batches);
  const reviewCount = inboxCounts?.ready ?? Math.max(reviewReady, queueReady);
  const stats = {
    total: leads.length,
    mockups: leads.length,
    review: reviewCount,
    sent: leads.filter((l) => l.stage === "sent").length,
    building: leads.filter((l) => l.stage === "building").length,
    failed: leads.filter((l) => l.stage === "failed").length,
    stages: countByStage(leads),
    job: job?.running ? job : null,
    pipelineRunning: statusData?.pipelineRunning,
    workers: statusData?.workers,
    batchesKey: (statusData?.batches || []).slice(0, 5).map((b) => b.batchNum),
    jobsKey: (jobs || []).slice(0, 5).map((j) => [j.id, j.running]),
  };

  const key = JSON.stringify(stats);
  if (key === cache.dashboardKey) return;
  cache.dashboardKey = key;

  setText($("statTotal"), String(stats.total));
  setText($("statMockups"), String(stats.mockups));
  setText($("statReview"), String(stats.review));
  setText($("statSent"), String(stats.sent));
  setText($("statBuilding"), String(stats.building));
  setText($("statFailed"), String(stats.failed));
  updateReviewBadges(stats.review);

  const reportEl = $("reportLink");
  if (reportEl) {
    if (statusData?.latestReport) {
      reportEl.href = `/${statusData.latestReport}`;
      reportEl.classList.remove("hidden");
    } else {
      reportEl.classList.add("hidden");
    }
  }

  renderBatches(statusData?.batches);
  renderJobList(jobs, "dashRecentJobs", 5);

  const pipeStatus = $("dashPipelineStatus");
  const pipeBody = $("dashPipelineBody");
  if (stats.job) {
    setText(pipeStatus, "Running");
    pipeBody.innerHTML = `
      <p class="muted-line" style="margin-bottom:0.5rem"><strong>${escapeHtml(stats.job.label || "Pipeline")}</strong></p>
      <p class="muted-line">Stage: ${escapeHtml(stats.job.currentStage || "—")}${stats.job.batchNum ? ` · batch ${stats.job.batchNum}` : ""}</p>
      <button type="button" class="btn btn-sm" data-goto="search" style="margin-top:0.75rem">View progress</button>`;
  } else if (stats.workers?.groqRunning || stats.workers?.sendRunning) {
    setText(pipeStatus, "Workers active");
    const parts = [];
    if (stats.workers.groqRunning) parts.push("Drafting emails");
    if (stats.workers.sendRunning) parts.push("Sending emails");
    if (stats.workers.groqCurrentSlug) parts.push(`· ${stats.workers.groqCurrentSlug}`);
    if (stats.workers.sendCurrentSlug) parts.push(`· ${stats.workers.sendCurrentSlug}`);
    pipeBody.innerHTML = `<p class="muted-line">${escapeHtml(parts.join(" "))}</p>
      <button type="button" class="btn btn-sm" data-goto="review" style="margin-top:0.75rem">Open review</button>`;
  } else {
    setText(pipeStatus, "Idle");
    pipeBody.innerHTML = `<p class="muted-line">No active job.</p>
      <button type="button" class="btn btn-sm primary" data-goto="search" style="margin-top:0.75rem">Start search</button>`;
  }

  const stageOrder = ["review_ready", "approved", "building", "sent", "failed"];
  const maxCount = Math.max(1, ...Object.values(stats.stages));
  $("stageBreakdown").innerHTML = stageOrder
    .filter((s) => stats.stages[s])
    .map(
      (s) => `
    <div class="stage-row">
      <span class="stage-name">${escapeHtml(STAGE_LABELS[s] || s)}</span>
      <div class="stage-bar"><div class="stage-bar-fill" style="width:${Math.round(((stats.stages[s] || 0) / maxCount) * 100)}%"></div></div>
      <span class="stage-count">${stats.stages[s]}</span>
    </div>`
    )
    .join("") || '<p class="muted-line">No leads yet.</p>';

  const recent = [...leads]
    .sort((a, b) => {
      const pri = { review_ready: 0, approved: 1, building: 2, sent: 3, failed: 4 };
      return (pri[a.stage] ?? 9) - (pri[b.stage] ?? 9) || a.name.localeCompare(b.name);
    })
    .slice(0, 8);

  const recentEl = $("dashRecentLeads");
  if (!recent.length) {
    recentEl.innerHTML = '<p class="empty">No leads yet. Start a search.</p>';
    return;
  }

  recentEl.innerHTML = `
    <table class="data-table">
      <thead><tr><th>Business</th><th>City</th><th>Stage</th><th></th></tr></thead>
      <tbody>
        ${recent
          .map(
            (l) => `
          <tr>
            <td><strong>${escapeHtml(l.name)}</strong></td>
            <td>${escapeHtml(l.city)}</td>
            <td><span class="badge ${escapeHtml(l.stage)}">${escapeHtml(l.stageLabel || STAGE_LABELS[l.stage] || l.stage)}</span></td>
            <td>${l.stage === "review_ready" && l.batchNum ? `<button type="button" class="linkish" data-batch="${escapeHtml(l.batchNum)}" data-slug="${escapeHtml(l.slug)}" data-goto="review">Review</button>` : l.mockupUrl ? `<a href="${escapeHtml(l.mockupUrl)}" target="_blank" rel="noopener">Open</a>` : ""}</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`;
}

async function applySnapshot(snap) {
  reviewRebuilds = snap.inbox?.rebuilds || {};
  leadRetries = snap.inbox?.retries || snap.status?.retries || {};
  lastLeads = snap.leads || [];

  const statusData = snap.status;
  const job = snap.pipeline?.job;
  const jobRunning = Boolean(snap.pipeline?.running);
  const workers = statusData?.workers || {};
  const workersActive = Boolean(workers.groqRunning || workers.sendRunning);
  const live = isSystemLive(snap);

  document.querySelector(".status-pip")?.classList.toggle("running", live);
  $("livePip")?.classList.toggle("active", live);

  if (live) {
    if (jobRunning) setText($("sidebarStatus"), "Pipeline running");
    else if (workersActive) setText($("sidebarStatus"), "Workers active");
    else setText($("sidebarStatus"), "Live");
  } else {
    setText($("sidebarStatus"), "Ready");
  }

  renderDashboard(lastLeads, statusData, job, snap.jobs || [], snap.inbox?.counts);
  renderLeads(lastLeads);

  updateSearchPanels(job, snap.jobs || [], snap.stages || []);
  if (snap.pipeline?.log && (jobRunning || activeView === "search")) {
    appendLog($("searchLog"), snap.pipeline.log, "searchLogText");
  }

  const searchBtn = $("searchBtn");
  if (searchBtn) searchBtn.disabled = jobRunning;

  await syncReviewFromSnapshot(snap, workers);
  setLastUpdated(live);
  schedulePoll(live ? POLL_LIVE_MS : POLL_IDLE_MS);
}

function isSystemLive(snap) {
  if (snap.pipeline?.running) return true;
  const w = snap.status?.workers;
  if (w?.groqRunning || w?.sendRunning || w?.qaRebuildRunning) return true;
  const rebuilds = snap.inbox?.rebuilds || {};
  if (Object.values(rebuilds).some((r) => r?.running)) return true;
  const retries = snap.inbox?.retries || snap.status?.retries || {};
  if (Object.values(retries).some((r) => r?.running)) return true;
  const c = snap.inbox?.counts;
  if (c?.ready || c?.drafting) return true;
  if ((snap.leads || []).some((l) => l.stage === "building")) return true;
  return false;
}

async function refreshLeadsAndDashboard(statusData, job, jobs, inboxCounts) {
  renderDashboard(lastLeads, statusData, job, jobs, inboxCounts);
  renderLeads(lastLeads);
}

// ── Review ─────────────────────────────────────────────────────────────────

function saveReviewSelection(sel) {
  reviewSelection = sel;
  if (sel) localStorage.setItem("fbLeadsReviewSelection", JSON.stringify(sel));
  else localStorage.removeItem("fbLeadsReviewSelection");
}

function pickReviewSelection(items) {
  if (!items.length) return null;
  if (reviewSelection && items.some((i) => i.batchNum === reviewSelection.batchNum && i.slug === reviewSelection.slug)) {
    return reviewSelection;
  }
  const ready = items.find((i) => i.status === "ready");
  return ready ? { batchNum: ready.batchNum, slug: ready.slug } : { batchNum: items[0].batchNum, slug: items[0].slug };
}

function formatInboxSummary(counts, workers, rebuilds) {
  const parts = [];
  if (counts?.ready) parts.push(`${counts.ready} ready`);
  if (counts?.failed) parts.push(`${counts.failed} failed`);
  if (counts?.drafting) parts.push(`${counts.drafting} drafting`);
  const rebuilding = Object.values(rebuilds || {}).filter((r) => r?.running).length;
  if (rebuilding) parts.push(`${rebuilding} rebuilding`);
  let text = parts.join(" · ") || "Queue empty";
  if (workers?.groqRunning) text += " · drafting";
  if (workers?.sendRunning) text += " · sending";
  return text;
}

function renderReviewQueue(items, rebuilds) {
  const sel = reviewSelection;
  const key = JSON.stringify(items.map((i) => [i.batchNum, i.slug, i.status]) + JSON.stringify(rebuilds));
  if (key === cache.inboxKey) return;
  cache.inboxKey = key;

  const list = $("reviewQueueList");
  if (!list) return;

  if (!items.length) {
    list.innerHTML = '<li class="empty list-none" style="padding:1rem">No emails waiting for review.</li>';
    return;
  }

  list.innerHTML = items
    .map((item) => {
      const active = sel && sel.batchNum === item.batchNum && sel.slug === item.slug;
      const pending = ["awaiting_draft", "drafting", "regenerating"].includes(item.status);
      const rebuilding = rebuilds[item.slug]?.running;
      const statusLabel = rebuilding ? "rebuilding" : item.status.replace(/_/g, " ");
      return `<li>
        <button type="button" class="review-queue-item${active ? " active" : ""}${item.status === "ready" ? " is-ready" : ""}${pending ? " is-pending" : ""}"
          data-batch="${escapeHtml(item.batchNum)}" data-slug="${escapeHtml(item.slug)}"${pending ? " disabled" : ""}>
          <span class="review-queue-name">${escapeHtml(item.businessName)}</span>
          <span class="review-queue-meta">
            <span>${escapeHtml(item.city || item.slug)}</span>
            <span class="review-queue-status">${escapeHtml(statusLabel)}</span>
          </span>
        </button>
      </li>`;
    })
    .join("");
}

function renderReviewWorkspace(detail) {
  const fingerprint = detail
    ? `${detail.batchNum}:${detail.slug}:${detail.status}:${detail.parseError || ""}:${detail.sendBlockReason || ""}:${detail.sendStatus || ""}:${detail.sendError || ""}:${detail.canApprove}:${detail.canRetrySend}:${detail.email?.subject || ""}:${detail.rebuilding}:${detail.rebuildError || ""}:${detail.mockupMtime || ""}`
    : "empty";
  if (fingerprint === cache.reviewKey) return;
  cache.reviewKey = fingerprint;

  const workspace = $("reviewWorkspace");
  if (!workspace) return;

  if (!detail) {
    workspace.innerHTML = '<p class="empty review-empty">Select an email from the queue to review.</p>';
    return;
  }

  currentBatch = detail.batchNum;

  if (detail.parseError || (detail.status === "ready" && !detail.email)) {
    workspace.innerHTML = `
      <div class="review-split">
        <div class="review-email">
          <div class="review-email-head">
            <h3>${escapeHtml(detail.businessName)}</h3>
            <p>${escapeHtml(detail.city || detail.slug)}</p>
          </div>
          <p class="review-error">${escapeHtml(detail.parseError || "Email not ready yet.")}</p>
          <div class="review-actions">
            ${detail.canRegenerate ? `<button type="button" class="btn" data-action="regen" data-batch="${escapeHtml(detail.batchNum)}" data-slug="${escapeHtml(detail.slug)}">Regenerate email</button>` : ""}
            ${detail.canRebuild ? `<button type="button" class="btn" data-action="rebuild" data-batch="${escapeHtml(detail.batchNum)}" data-slug="${escapeHtml(detail.slug)}"${detail.rebuilding ? " disabled" : ""}>Rebuild mockup</button>` : ""}
          </div>
        </div>
        ${renderPreviewPanel(detail)}
      </div>`;
    return;
  }

  if (!detail.email) {
    workspace.innerHTML = `<p class="empty review-empty">${detail.rebuilding ? "Rebuilding mockup and re-drafting email…" : "Drafting email…"}</p>`;
    return;
  }

  const email = detail.email;
  workspace.innerHTML = `
    <div class="review-split">
      <div class="review-email">
        <div class="review-email-head">
          <h3>${escapeHtml(email.businessName || detail.businessName)}</h3>
          <p>${escapeHtml(detail.city || detail.slug)}</p>
        </div>
        <div class="email-meta">
          <div><strong>To:</strong> ${escapeHtml(email.to)}</div>
          <div><strong>Subject:</strong> ${escapeHtml(email.subject)}</div>
        </div>
        <div class="email-body">${escapeHtml(email.text)}</div>
        ${detail.sendBlockReason ? `<p class="review-error">Send blocked: ${escapeHtml(detail.sendBlockReason)}</p>` : ""}
        ${detail.sendError ? `<p class="review-error">Send failed: ${escapeHtml(detail.sendError)}</p>` : ""}
        ${detail.sendStatus === "sending" ? `<p class="review-note">Sending email…</p>` : ""}
        ${detail.sendStatus === "queued" && detail.status === "approved" ? `<p class="review-note">Queued to send…</p>` : ""}
        <div class="review-actions">
          ${detail.canApprove ? `<button type="button" class="btn primary" data-action="approve" data-batch="${escapeHtml(detail.batchNum)}" data-slug="${escapeHtml(detail.slug)}">Approve and send</button>` : ""}
          ${detail.canRetrySend ? `<button type="button" class="btn primary" data-action="retry-send" data-batch="${escapeHtml(detail.batchNum)}" data-slug="${escapeHtml(detail.slug)}">Retry send</button>` : ""}
          ${detail.canRegenerate ? `<button type="button" class="btn" data-action="regen" data-batch="${escapeHtml(detail.batchNum)}" data-slug="${escapeHtml(detail.slug)}"${detail.rebuilding ? " disabled" : ""}>Regenerate email</button>` : ""}
          ${detail.canRebuild ? `<button type="button" class="btn" data-action="rebuild" data-batch="${escapeHtml(detail.batchNum)}" data-slug="${escapeHtml(detail.slug)}"${detail.rebuilding ? " disabled" : ""}>Rebuild mockup</button>` : ""}
        </div>
      </div>
      ${renderPreviewPanel(detail)}
    </div>`;
}

function renderPreviewPanel(detail) {
  const live = detail.mockupUrl || detail.email?.mockupUrl;
  const rebuilding = detail.rebuilding;
  const local = detail.localPreviewUrl
    ? `${detail.localPreviewUrl}?v=${encodeURIComponent(detail.previewVersion || detail.readyAt || Date.now())}`
    : null;
  const frameKey = `${detail.slug}:${rebuilding}:${local || ""}`;
  const reloadFrame = frameKey !== cache.previewFrameKey;
  cache.previewFrameKey = frameKey;

  return `
    <div class="review-preview">
      <div class="preview-chrome">
        <span>Mockup preview</span>
        ${live ? `<a href="${escapeHtml(live)}" target="_blank" rel="noopener">Open live site ↗</a>` : ""}
      </div>
      <div class="preview-frame-wrap">
        ${rebuilding ? '<div class="preview-rebuilding">Rebuilding mockup…</div>' : ""}
        ${local && !rebuilding ? `<iframe src="${escapeHtml(local)}" title="Mockup preview for ${escapeHtml(detail.businessName)}"${reloadFrame ? "" : ""}></iframe>` : ""}
        ${!local && !rebuilding ? '<div class="preview-placeholder">No mockup built yet.</div>' : ""}
      </div>
    </div>`;
}

async function loadReviewDetail(batchNum, slug) {
  const r = await fetch(`/api/review/${encodeURIComponent(batchNum)}/${encodeURIComponent(slug)}`);
  if (!r.ok) return null;
  return r.json();
}

async function syncReviewFromSnapshot(snap, workers) {
  const items = snap.inbox?.items || [];
  const counts = snap.inbox?.counts || {};

  updateReviewBadges(counts.ready || 0);
  setText($("queueSummary"), formatInboxSummary(counts, workers, reviewRebuilds));

  if (activeView !== "review") return;

  const prevSelection = reviewSelection ? `${reviewSelection.batchNum}:${reviewSelection.slug}` : "";
  reviewSelection = pickReviewSelection(items);
  if (reviewSelection) saveReviewSelection(reviewSelection);
  else saveReviewSelection(null);

  renderReviewQueue(items, reviewRebuilds);

  if (!reviewSelection) {
    renderReviewWorkspace(null);
    return;
  }

  const selKey = `${reviewSelection.batchNum}:${reviewSelection.slug}`;
  if (selKey !== prevSelection) cache.reviewKey = "";

  const detail = await loadReviewDetail(reviewSelection.batchNum, reviewSelection.slug);
  if (detail) {
    detail.rebuilding = detail.rebuilding || Boolean(reviewRebuilds[detail.slug]?.running);
    detail.rebuildError = detail.rebuildError || reviewRebuilds[detail.slug]?.error || null;
    detail.previewVersion = `${detail.mockupMtime || detail.rebuildFinishedAt || ""}:${detail.readyAt || ""}:${detail.email?.subject || ""}:${detail.rebuilding ? "1" : "0"}:${detail.status}`;
  }
  renderReviewWorkspace(detail);
  refreshMockupFrame(detail);
}

function refreshMockupFrame(detail) {
  if (!detail?.localPreviewUrl || detail.rebuilding) return;
  const iframe = $("reviewWorkspace")?.querySelector("iframe");
  if (!iframe) return;
  const v = encodeURIComponent(detail.previewVersion || detail.mockupMtime || Date.now());
  const next = `${detail.localPreviewUrl}?v=${v}`;
  try {
    const url = new URL(next, window.location.origin);
    if (iframe.src !== url.href) iframe.src = url.href;
  } catch {
    iframe.src = next;
  }
}

async function refreshReview(workers) {
  const inboxR = await fetch("/api/review/inbox", { cache: "no-store" });
  if (!inboxR.ok) return;
  const inbox = await inboxR.json();
  await syncReviewFromSnapshot(
    { inbox, serverTime: Date.now(), status: { workers }, leads: lastLeads, pipeline: {}, jobs: [] },
    workers
  );
}

$("reviewQueueList")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".review-queue-item");
  if (!btn || btn.disabled) return;
  saveReviewSelection({ batchNum: btn.dataset.batch, slug: btn.dataset.slug });
  cache.reviewKey = "";
  refreshReview();
});

$("reviewWorkspace")?.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const { batch, slug, action } = btn.dataset;
  if (!batch || !slug) return;

  if (action === "approve") {
    if (!confirm(`Approve and send email for ${slug}?`)) return;
    const r = await fetch(`/api/batch/${batch}/review/approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (!r.ok) {
      alert((await r.json()).error || "Approve failed");
      return;
    }
    cache.reviewKey = "";
    cache.inboxKey = "";
    await tick();
  }

  if (action === "retry-send") {
    const r = await fetch(`/api/batch/${batch}/review/retry-send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (!r.ok) {
      alert((await r.json()).error || "Retry send failed");
      return;
    }
    cache.reviewKey = "";
    cache.inboxKey = "";
    await tick();
  }

  if (action === "regen") {
    const r = await fetch(`/api/batch/${batch}/review/regenerate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (!r.ok) {
      alert((await r.json()).error || "Regenerate failed");
      return;
    }
    cache.reviewKey = "";
    cache.inboxKey = "";
    await tick();
  }

  if (action === "rebuild") {
    if (!confirm("Rebuild mockup from Stitch? This creates a new design and re-drafts the email.")) return;
    btn.disabled = true;
    const r = await fetch(`/api/review/${encodeURIComponent(batch)}/${encodeURIComponent(slug)}/rebuild-mockup`, {
      method: "POST",
    });
    const data = await r.json();
    if (!r.ok) {
      alert(data.error || "Rebuild failed to start");
      btn.disabled = false;
      return;
    }
    cache.reviewKey = "";
    cache.inboxKey = "";
    await tick();
  }
});

// ── Search ─────────────────────────────────────────────────────────────────

function updateSearchPanels(job, jobs, stages) {
  const running = Boolean(job?.running);
  const showProgress = running || (job && activeView === "search");

  if (showProgress && job) renderProgress(job, stages);

  const progressEl = $("searchProgress");
  const idleEl = $("searchIdle");
  const historyEl = $("searchHistory");
  if (progressEl) progressEl.hidden = !showProgress;
  if (idleEl) idleEl.hidden = showProgress || Boolean(jobs?.length);
  if (historyEl) {
    const showHistory = !running && !showProgress && Boolean(jobs?.length);
    historyEl.hidden = !showHistory;
    if (showHistory) renderJobList(jobs, "searchHistoryList", 8);
  }
}

function renderProgress(job, stages) {
  if (!job) return;
  const key = JSON.stringify({ id: job.id, stages: job.stages, running: job.running });
  if (key === cache.progressKey) return;
  cache.progressKey = key;

  setText(
    $("searchJobLabel"),
    `${job.label}${job.batchNum ? ` · batch ${job.batchNum}` : ""}${job.running ? "" : job.exitCode === 0 ? " · complete" : " · failed"}`
  );

  const doneCount = (stages || []).filter((s) => job.stages[s.id] === "done").length;
  const total = stages?.length || 7;
  const pct = Math.round((doneCount / total) * 100);
  const bar = $("progressBar");
  if (bar) bar.style.width = `${pct}%`;

  $("progressSteps").innerHTML = (stages || [])
    .map(({ id, label }) => {
      const state = job.stages[id] || "pending";
      const cls = state === "done" ? "done" : state === "active" ? "active" : state === "skipped" ? "skipped" : "";
      const icon = state === "done" ? "✓" : state === "active" ? "●" : "";
      const sub =
        state === "skipped" ? "Skipped" : state === "done" ? "Complete" : state === "active" ? "In progress" : "Waiting";
      return `
        <li class="${cls}">
          <span class="step-mark">${icon}</span>
          <div>
            <div class="step-title">${escapeHtml(label)}</div>
            <div class="step-sub">${escapeHtml(sub)}</div>
          </div>
        </li>`;
    })
    .join("");
}

$("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = $("searchBtn");
  btn.disabled = true;
  try {
    const body = { maxSearches: Number($("maxSearches").value) || 5 };
    const budget = $("serpBudget").value;
    if (budget) body.serpBudget = Number(budget);
    const r = await fetch("/api/search/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error || "Failed to start");
    cache.searchLogText = "";
    cache.progressKey = "";
    switchView("search");
    await tick();
  } catch (err) {
    alert(err.message);
  } finally {
    btn.disabled = false;
  }
});

// ── Poll ───────────────────────────────────────────────────────────────────

async function tick() {
  try {
    const r = await fetch("/api/snapshot", { cache: "no-store" });
    if (!r.ok) throw new Error(String(r.status));
    await applySnapshot(await r.json());
  } catch {
    setText($("sidebarStatus"), "Offline");
    document.querySelector(".status-pip")?.classList.remove("running");
    $("livePip")?.classList.remove("active");
    setLastUpdated(false);
    schedulePoll(POLL_IDLE_MS);
  }
}

function startPolling() {
  if (pollTimer) clearInterval(pollTimer);
  pollInterval = POLL_IDLE_MS;
  switchView(activeView);
  tick();
  pollTimer = setInterval(tick, pollInterval);
}

startPolling();
