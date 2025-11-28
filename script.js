// this handles switching between dark mode and light mode
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });
}

// this checks the contact form when i try to send a message
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // make sure all fields are filled out
    if (!name || !email || !message) {
      feedback.textContent = "please fill out all fields.";
      feedback.style.color = "red";
      return;
    }

    // basic email check so it at least looks valid
    if (!email.includes("@") || !email.includes(".")) {
      feedback.textContent = "please enter a valid email.";
      feedback.style.color = "red";
      return;
    }

    // show a simple success message and clear the form
    feedback.textContent = "message sent, thanks for reaching out.";
    feedback.style.color = "lightgreen";
    contactForm.reset();
  });
}

// this controls the modal that shows bigger project images
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");

if (modal && modalClose && modalImage) {
  // open the modal when a more info button is clicked
  document.querySelectorAll(".more-info-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-card");
      const img = card.querySelector(".project-image");
      if (!img) return;

      modalImage.src = img.src;
      modalImage.alt = img.alt || "project image";
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  // close the modal when the x button is clicked
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  });

  // also close the modal if i click on the dark background
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  });
}
