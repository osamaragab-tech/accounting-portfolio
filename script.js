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

            // Form handler
            const contactForm = document.getElementById("contactForm");
            const formMessage = document.getElementById("formMessage");

            if (contactForm) {
                contactForm.addEventListener("submit", function(e) {
                    e.preventDefault();
                    
                    // Simple validation
                    const name = contactForm.querySelector('input[name="name"]').value;
                    const email = contactForm.querySelector('input[name="email"]').value;
                    const message = contactForm.querySelector('textarea[name="message"]').value;
                    
                    if (!name || !email || !message) {
                        showMessage("Please fill in all fields", "error");
                        return;
                    }
                    
                    // Show sending message
                    showMessage("Sending your message...", "sending");
                    
                    // In a real implementation, you would send the form data to a server
                    // For demo purposes, we'll simulate a successful submission
                    setTimeout(() => {
                        showMessage("Message sent successfully! I'll get back to you soon.", "success");
                        contactForm.reset();
                    }, 1500);
                });
            }

            function showMessage(text, type) {
                formMessage.textContent = text;
                formMessage.style.display = "block";
                
                // Reset classes
                formMessage.className = "";
                
                // Add appropriate class based on type
                if (type === "success") {
                    formMessage.style.backgroundColor = "#2ecc71";
                } else if (type === "error") {
                    formMessage.style.backgroundColor = "#e74c3c";
                } else if (type === "sending") {
                    formMessage.style.backgroundColor = "#3498db";
                }
                
                // Hide message after 5 seconds for success/error
                if (type !== "sending") {
                    setTimeout(() => {
                        formMessage.style.display = "none";
                    }, 5000);
                }
            }
        });