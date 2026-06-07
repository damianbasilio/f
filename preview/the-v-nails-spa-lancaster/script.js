// Mobile Menu Logic
        const mobileMenu = document.getElementById('mobile-menu');
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const closeBtn = document.getElementById('mobile-menu-close');

        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        });

        const closeMenu = () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        };

        closeBtn.addEventListener('click', closeMenu);
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

        // Reveal Animation
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Form Validation UI micro-interaction
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'Preview only';
            
            setTimeout(() => {
                btn.textContent = 'Preview only';
                btn.classList.replace('bg-primary', 'bg-tertiary-container');
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.replace('bg-tertiary-container', 'bg-primary');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });

        // Sticky Header Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-unit');
            } else {
                header.classList.add('py-unit');
                header.classList.remove('py-2');
            }
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
