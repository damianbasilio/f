// Form Preview Logic
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('opacity-0');
            setTimeout(() => {
                this.classList.add('hidden');
                document.getElementById('formSuccess').classList.remove('hidden');
            }, 300);
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });

        // Scroll highlight for nav
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-primary', 'pb-1');
                link.classList.add('text-on-surface');
                if (link.getAttribute('href').includes(current) && current !== "") {
                    link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-primary', 'pb-1');
                    link.classList.remove('text-on-surface');
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
