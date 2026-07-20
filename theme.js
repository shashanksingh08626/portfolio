/* ==========================================
            THEME TOGGLE SYSTEM
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeBtn = document.querySelector(".theme-btn");
    const body = document.body;

    /* ===============================
            Load Saved Theme
    =============================== */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {

        body.classList.toggle("light-mode", savedTheme === "light");

    } else {

        /* System Preference */

        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

        if (prefersLight) {
            body.classList.add("light-mode");
        }

    }

    updateThemeIcon();

    /* ===============================
            Toggle Theme
    =============================== */

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            body.classList.toggle("light-mode");

            const currentTheme = body.classList.contains("light-mode")
                ? "light"
                : "dark";

            localStorage.setItem("theme", currentTheme);

            updateThemeIcon();

        });

    }

    /* ===============================
            Change Icon
    =============================== */

    function updateThemeIcon() {

        const icon = themeBtn.querySelector("i");

        if (!icon) return;

        if (body.classList.contains("light-mode")) {

            icon.className = "fa-solid fa-moon";

        } else {

            icon.className = "fa-solid fa-sun";

        }

    }

});