// Simple scroll interaction for header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('py-3', 'bg-surface/95');
                header.classList.remove('py-4', 'bg-surface/80');
            } else {
                header.classList.add('py-4', 'bg-surface/80');
                header.classList.remove('py-3', 'bg-surface/95');
            }
        });

        // Form submission micro-interaction
        const form = document.querySelector('form');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'TRANSMITTING...';
            btn.classList.add('opacity-70');
            
            setTimeout(() => {
                btn.innerText = 'SUCCESS';
                btn.style.backgroundColor = '#4caf50';
                form.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.classList.remove('opacity-70');
                }, 2000);
            }, 1500);
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
