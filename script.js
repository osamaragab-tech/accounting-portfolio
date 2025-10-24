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
    revealOnScroll(); // Run once on load
});
