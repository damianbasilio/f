// Mobile Menu Logic
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = mobileMenu.querySelectorAll('a');

        function toggleMenu(show) {
            if (show) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }

        menuToggle.addEventListener('click', () => toggleMenu(true));
        closeMenu.addEventListener('click', () => toggleMenu(false));
        menuLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

        // Reveal on Scroll Effect
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
            observer.observe(section);
        });

        // Simple smooth scroll for the whole page
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
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
