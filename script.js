// Nav toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Contact form validation
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

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

  feedback.textContent = "Message sent!";
  feedback.style.color = "lightgreen";
  contactForm.reset();
});

// Modal functionality
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");

document.querySelectorAll(".more-info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    const img = card.querySelector(".project-image");
    modalImage.src = img.src;
    modal.classList.add("active");
  });
});

modalClose.addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});
