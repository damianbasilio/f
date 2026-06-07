// Mobile Menu Logic
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('mobile-menu-inactive');
                mobileMenu.classList.add('mobile-menu-active');
                menuToggle.querySelector('span').innerText = 'close';
            } else {
                mobileMenu.classList.add('mobile-menu-inactive');
                mobileMenu.classList.remove('mobile-menu-active');
                menuToggle.querySelector('span').innerText = 'menu';
            }
        });

        // Form Validation & Feedback
        const contactForm = document.getElementById('contact-form');
        const formFeedback = document.getElementById('form-feedback');
        const submitBtn = document.getElementById('submit-btn');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // UI Feedback State
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin" data-icon="sync">sync</span> Processing...';
            
            // Mock Success Timeout
            setTimeout(() => {
                formFeedback.classList.remove('hidden', 'text-error');
                formFeedback.classList.add('text-primary');
                formFeedback.innerText = 'Thank you for your inquiry. Our studio will contact you shortly.';
                
                submitBtn.innerHTML = 'Preview only';
                submitBtn.classList.add('bg-secondary');
                
                contactForm.reset();
            }, 1500);
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('mobile-menu-inactive');
                mobileMenu.classList.remove('mobile-menu-active');
                menuToggle.querySelector('span').innerText = 'menu';
                isMenuOpen = false;
            });
        });

        // Scroll shadow for navbar
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('py-3', 'shadow-lg');
                nav.classList.remove('py-4', 'shadow-[0_20px_40px_rgba(62,16,63,0.05)]');
            } else {
                nav.classList.add('py-4', 'shadow-[0_20px_40px_rgba(62,16,63,0.05)]');
                nav.classList.remove('py-3', 'shadow-lg');
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
