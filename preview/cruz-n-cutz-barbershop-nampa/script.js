function handleFormSubmit() {
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            btn.disabled = true;
            btn.innerHTML = 'Preview only';
            
            setTimeout(() => {
                btn.innerHTML = 'Preview only';
                btn.classList.remove('bg-secondary');
                btn.classList.add('bg-green-600', 'text-white');
                
                status.innerHTML = 'We will get back to you shortly.';
                status.classList.remove('opacity-0');
                status.classList.add('text-secondary');
                
                document.getElementById('contactForm').reset();
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = 'SEND MESSAGE';
                    btn.classList.add('bg-secondary');
                    btn.classList.remove('bg-green-600', 'text-white');
                    status.classList.add('opacity-0');
                }, 5000);
            }, 1500);
        }

        // Reveal animations on scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-8');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'translate-y-8', 'opacity-0');
            observer.observe(section);
        });

        // Initialize first section
        const firstSection = document.querySelector('section');
        if(firstSection) {
            firstSection.classList.remove('opacity-0', 'translate-y-8');
        }

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
