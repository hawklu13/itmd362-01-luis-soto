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

// Intro text toggle
const introButton = document.getElementById("intro-button");
const introText = document.getElementById("intro-text");

introButton.addEventListener("click", () => {
  const isHidden = introText.hasAttribute("hidden");
  if (isHidden) {
    introText.removeAttribute("hidden");
    introButton.textContent = "Hide intro";
  } else {
    introText.setAttribute("hidden", "");
    introButton.textContent = "Show quick intro";
  }
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

// Project modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

const projectDescriptions = {
  1: "This project is a simple landing page that focuses on clean layout, readable text, and a strong hero section.",
  2: "This project is a mini dashboard layout that uses cards to organize information in a clear way.",
  3: "This project is an image gallery that highlights spacing, grid layout, and simple hover effects."
};

document.querySelectorAll(".more-info-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.project;
    modalTitle.textContent = button.parentElement.querySelector("h3").textContent;
    modalBody.textContent = projectDescriptions[id];
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

// Close modal on outside click
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});
