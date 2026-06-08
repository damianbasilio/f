// Mobile Menu Logic
        const menu = document.getElementById('mobile-menu');
        const openBtn = document.getElementById('open-menu');
        const closeBtn = document.getElementById('close-menu');
        const menuLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        }

        openBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // Navigation visual update on scroll
        window.onscroll = function() {
            const nav = document.getElementById('top-nav');
            if (window.pageYOffset > 50) {
                nav.classList.add('py-2', 'shadow-2xl', 'bg-surface/95');
                nav.classList.remove('py-4', 'bg-surface/90');
            } else {
                nav.classList.remove('py-2', 'shadow-2xl', 'bg-surface/95');
                nav.classList.add('py-4', 'bg-surface/90');
            }
        };

        // Form handling with industrial UI feedback
        const form = document.getElementById('contact-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const btnText = document.getElementById('btn-text');
            
            btn.disabled = true;
            btnText.textContent = 'ESTABLISHING CONNECTION...';
            
            setTimeout(() => {
                form.reset();
                btnText.textContent = 'SEND MESSAGE';
                btn.disabled = false;
                successMsg.classList.remove('hidden');
                setTimeout(() => successMsg.classList.add('hidden'), 6000);
            }, 2000);
        });

        // Smooth Scroll check for active states (Optional enhancement)
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Subtle Parallax on Hero
        window.addEventListener('scroll', () => {
            const heroImg = document.getElementById('hero-img');
            const scroll = window.pageYOffset;
            if (scroll < window.innerHeight) {
                heroImg.style.transform = `scale(1.05) translateY(${scroll * 0.2}px)`;
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
