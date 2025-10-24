// Reveal elements on scroll + Navbar active link
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    const navLinks = document.querySelectorAll(".navbar a");

    const revealOnScroll = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };

    const setActiveLink = () => {
        let fromTop = window.scrollY + 150;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", () => {
        revealOnScroll();
        setActiveLink();
    });

    revealOnScroll(); // Run once on load
    setActiveLink();  // Run once on load
});
