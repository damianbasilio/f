// Micro-interactions & Validation
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="font-utility-label text-utility-label uppercase tracking-widest">Transmitting...</span>';
            btn.classList.add('opacity-50', 'pointer-events-none');

            setTimeout(() => {
                btn.innerHTML = '<span class="font-utility-label text-utility-label uppercase tracking-widest">Received.</span>';
                btn.classList.remove('bg-on-background');
                btn.classList.add('bg-primary');
                
                setTimeout(() => {
                    e.target.reset();
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-primary', 'opacity-50', 'pointer-events-none');
                    btn.classList.add('bg-on-background');
                }, 3000);
            }, 1500);
        });

        // Hover effect for service rows to reveal pricing details
        const serviceRows = document.querySelectorAll('.grid-cols-12.border-technical-b');
        serviceRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.querySelector('.text-primary-container').classList.replace('text-primary-container', 'text-primary');
            });
            row.addEventListener('mouseleave', () => {
                row.querySelector('.text-primary').classList.replace('text-primary', 'text-primary-container');
            });
        });

(() => {
  function initMockupNotice() {
  const dialog = document.getElementById("mockup-notice");
  if (!dialog) return;

  const nameEl = dialog.querySelector("[data-business-name]");
  const title = document.querySelector("meta[name='x-business-name']");
  if (nameEl && title) nameEl.textContent = title.content;

  const ack = dialog.querySelector(".mockup-notice__ack");
  const ackWrap = dialog.querySelector(".mockup-notice__ack-wrap");
  const ackRing = dialog.querySelector(".mockup-notice__ack-ring");
  let closed = false;

  function closeNotice() {
    if (closed) return;
    closed = true;
    ackWrap?.classList.remove("is-timing");
    dialog.classList.add("is-closing");
    document.body.classList.remove("mockup-notice-open");
    window.setTimeout(() => dialog.remove(), 280);
  }

  document.body.classList.add("mockup-notice-open");
  ack?.addEventListener("click", closeNotice);
  ack?.focus();
  ackWrap?.classList.add("is-timing");
  ackRing?.addEventListener("animationend", closeNotice, { once: true });
  window.setTimeout(closeNotice, 3100);
}

initMockupNotice();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");
  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const open = navPanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const notice = document.getElementById("form-notice");
      if (notice) {
        notice.textContent = "Preview only. This form does not send messages.";
        notice.hidden = false;
      }
    });
  });
})();
