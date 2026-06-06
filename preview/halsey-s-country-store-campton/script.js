// Subtle Parallax Effect for Heroes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hwHero = document.querySelector('#hardware-hero img');
            const deliHero = document.querySelector('#deli-hero img');
            
            if (hwHero) hwHero.style.transform = `translateY(${scrolled * 0.05}px) scale(1.1)`;
            if (deliHero) deliHero.style.transform = `translateY(${scrolled * 0.05}px) scale(1.1)`;
        });

        // Hover Sound Interaction Placeholder (Logic only)
        const buttons = document.querySelectorAll('button, a');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                // Potential for subtle UI click sound here
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
  let closed = false;

  function closeNotice() {
    if (closed) return;
    closed = true;
    dialog.classList.add("is-closing");
    document.body.classList.remove("mockup-notice-open");
    window.setTimeout(() => dialog.remove(), 280);
  }

  document.body.classList.add("mockup-notice-open");
  ack?.addEventListener("click", closeNotice);
  ack?.focus();
  window.setTimeout(closeNotice, 3000);
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
