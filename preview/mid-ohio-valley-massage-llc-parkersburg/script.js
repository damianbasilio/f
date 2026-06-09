// Form Validation Logic
        const bookingForm = document.getElementById('booking-form');
        const formSuccess = document.getElementById('form-success');

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple visual validation feedback
            let isValid = true;
            const inputs = bookingForm.querySelectorAll('input[required], select[required]');
            
            inputs.forEach(input => {
                const errorMsg = input.parentElement.querySelector('.error-msg');
                if (!input.value) {
                    isValid = false;
                    if (errorMsg) errorMsg.classList.remove('hidden');
                    input.classList.add('border-error');
                } else {
                    if (errorMsg) errorMsg.classList.add('hidden');
                    input.classList.remove('border-error');
                }
            });

            if (isValid) {
                // Simulate submission
                bookingForm.style.opacity = '0.5';
                bookingForm.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    bookingForm.classList.add('hidden');
                    formSuccess.classList.remove('hidden');
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1000);
            }
        });

        // Mobile Menu Toggle
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        mobileToggle.addEventListener('click', () => {
            alert('Navigation Menu would expand here on a real production site with a drawer or overlay.');
        });

        // Intersection Observer for Reveal effects
        const observerOptions = {
            threshold: 0.1
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
            revealObserver.observe(section);
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
