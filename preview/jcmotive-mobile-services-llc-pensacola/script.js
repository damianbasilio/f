// Smooth scroll for anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Simple Form Validation
        const serviceForm = document.getElementById('serviceForm');
        const formSuccess = document.getElementById('formSuccess');

        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            const inputs = serviceForm.querySelectorAll('input[required], textarea[required]');
            inputs.forEach(input => {
                const errorMsg = input.nextElementSibling;
                if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
                    input.classList.add('border-error');
                    if (errorMsg) errorMsg.classList.remove('hidden');
                    isValid = false;
                } else {
                    input.classList.remove('border-error');
                    if (errorMsg) errorMsg.classList.add('hidden');
                }
            });

            if (isValid) {
                formSuccess.classList.remove('hidden');
                serviceForm.reset();
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
            }
        });

        // Hover interactions for the service protocol text
        const serviceItems = document.querySelectorAll('.accordion-item');
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const techText = document.querySelector('.service-protocol-text');
                if (techText) {
                    const protocolId = Math.random().toString(36).substring(7).toUpperCase();
                    techText.innerText = `SERVICE_PROTOCOL_${protocolId}`;
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
