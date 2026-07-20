/* ===========================================================
   MOBILE NAV TOGGLE
   Fully isolated from GSAP / ScrollTrigger / Three.js.
   Only touches .nav-toggle and .nav-links.
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!toggle || !navLinks) return;

    const icon = toggle.querySelector("i");

    const openMenu = () => {
        navLinks.classList.add("active");
        toggle.setAttribute("aria-expanded", "true");
        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }
    };

    const closeMenu = () => {
        navLinks.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    };

    const isOpen = () => navLinks.classList.contains("active");

    // Toggle on hamburger click
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        isOpen() ? closeMenu() : openMenu();
    });

    // Close when a nav link is tapped
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close when tapping outside the menu
    document.addEventListener("click", (e) => {
        if (isOpen() && !navLinks.contains(e.target) && !toggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Close on resize back to desktop (avoids a stuck-open menu)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024 && isOpen()) {
            closeMenu();
        }
    });
});