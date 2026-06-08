function toggleSideNav() {
            const sideNav = document.getElementById('sideNav');
            sideNav.classList.toggle('translate-x-full');
            sideNav.classList.toggle('side-nav-open');
        }

        // Form Validation UI micro-interaction
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Preview only';
            btn.classList.add('opacity-70');
            
            setTimeout(() => {
                btn.innerText = 'MESSAGE RECEIVED';
                btn.classList.remove('bg-primary');
                btn.classList.add('bg-primary-container');
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-primary-container', 'opacity-70');
                    btn.classList.add('bg-primary');
                }, 3000);
            }, 1500);
        });

        // Atmospheric Scroll Effect
        window.addEventListener('scroll', () => {
            const frames = document.querySelectorAll('.floating-frame');
            frames.forEach(frame => {
                const speed = 0.05;
                const rect = frame.getBoundingClientRect();
                const scrollOffset = (window.innerHeight - rect.top) * speed;
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    frame.style.transform = `translateY(${-scrollOffset}px)`;
                }
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
