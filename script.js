// Nav toggle for mobile
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
});

// Contact form validation
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = "Please fill out all fields.";
    feedback.style.color = "#f97373";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "#f97373";
    return;
  }

  feedback.textContent = "Message sent. Thank you for reaching out.";
  feedback.style.color = "#4ade80";

  contactForm.reset();
});

// Modal for bigger project images
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");

document.querySelectorAll(".more-info-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const projectCard = button.closest(".project-card");
    const img = projectCard.querySelector(".project-image");

    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

// Close modal when clicking outside content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});
