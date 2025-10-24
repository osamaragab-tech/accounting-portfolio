// Reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const revealOnScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// Form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const formMessage = document.getElementById("formMessage");

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.display = "block";
      form.reset();
      setTimeout(() => formMessage.style.display = "none", 4000);
    } else {
      formMessage.textContent = "Oops! Something went wrong.";
      formMessage.style.backgroundColor = "#e74c3c";
      formMessage.style.display = "block";
      setTimeout(() => formMessage.style.display = "none", 4000);
    }
  });
});
// Reveal elements on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    const revealOnScroll = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
