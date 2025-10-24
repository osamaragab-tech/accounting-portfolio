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

    // Active navbar link on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    const activateLink = () => {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    };

    window.addEventListener("scroll", activateLink);
});
