// Smooth scroll implementation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Simple form visual feedback
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'TRANSMITTING...';
                btn.classList.add('opacity-50');
                
                setTimeout(() => {
                    btn.innerText = 'REQUEST RECEIVED';
                    btn.classList.remove('bg-primary');
                    btn.classList.add('bg-green-600', 'text-white');
                    form.reset();
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.classList.remove('bg-green-600', 'text-white', 'opacity-50');
                        btn.classList.add('bg-primary');
                    }, 3000);
                }, 1500);
            });
        }

        // Active nav state logic
        window.addEventListener('scroll', () => {
            let current = "";
            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll("nav a");

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 120) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("text-primary", "font-bold", "border-b-2", "border-primary", "pb-1");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("text-primary", "font-bold", "border-b-2", "border-primary", "pb-1");
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
