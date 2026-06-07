// Simple micro-interaction for map slot
        const mapSlot = document.querySelector('[data-map-slot]');
        if (mapSlot) {
            mapSlot.addEventListener('mouseenter', () => {
                mapSlot.style.cursor = 'crosshair';
            });
        }

        // Handle active nav state on scroll
        window.addEventListener('scroll', () => {
            const sections = ['philosophy', 'treatments', 'about', 'visit'];
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const sectionTop = element.offsetTop;
                    if (pageYOffset >= sectionTop - 150) {
                        current = section;
                    }
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'font-bold', 'after:content-[\'\']', 'after:absolute', 'after:-bottom-1', 'after:left-1/2', 'after:-translate-x-1/2', 'after:w-1', 'after:h-1', 'after:bg-primary', 'after:rounded-full');
                link.classList.add('text-on-surface-variant');
                
                if (link.getAttribute('href').includes(current)) {
                    link.classList.remove('text-on-surface-variant');
                    link.classList.add('text-primary', 'font-bold', 'relative', 'after:content-[\'\']', 'after:absolute', 'after:-bottom-1', 'after:left-1/2', 'after:-translate-x-1/2', 'after:w-1', 'after:h-1', 'after:bg-primary', 'after:rounded-full');
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
