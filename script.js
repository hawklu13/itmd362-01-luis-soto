// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });
}

// Contact form validation
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "Please fill out all fields.";
      feedback.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      feedback.textContent = "Please enter a valid email.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = "Message sent!";
    feedback.style.color = "lightgreen";
    contactForm.reset();
  });
}

// Modal functionality
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");

if (modal && modalClose && modalImage) {
  document.querySelectorAll(".more-info-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-card");
      const img = card.querySelector(".project-image");
      if (!img) return;

      modalImage.src = img.src;
      modalImage.alt = img.alt || "Project image";
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  });
}
