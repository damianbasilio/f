// Simple Marquee Animation logic if needed
        const marquee = document.querySelector('.animate-marquee');
        if (marquee) {
            const clone = marquee.innerHTML;
            marquee.innerHTML += clone;
        }

        // Form Validation Feedback
        document.getElementById('dispatchForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button div');
            const originalText = btn.innerText;
            
            btn.innerText = 'TRANSMITTING...';
            btn.classList.add('opacity-50');
            
            setTimeout(() => {
                btn.innerText = 'DISPATCH RECEIVED';
                btn.style.backgroundColor = '#41d8f2';
                btn.style.color = '#001f25';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.classList.remove('opacity-50');
                    this.reset();
                }, 3000);
            }, 1500);
        });

        // Navigation Highlight On Scroll
        window.addEventListener('scroll', () => {
            const sections = ['services', 'about', 'visit'];
            const navLinks = document.querySelectorAll('header nav a');
            
            let current = '';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (window.scrollY >= (element.offsetTop - 150)) {
                    current = section;
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active-nav-border', 'text-primary');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active-nav-border', 'text-primary');
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
