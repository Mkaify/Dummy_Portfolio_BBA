document.addEventListener("DOMContentLoaded", function () {
    const themeToggleDesktop = document.getElementById("theme-toggle");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    const html = document.documentElement;
    const body = document.body;

    // Function to toggle theme
    function toggleTheme() {
        const isDark = html.classList.toggle("dark");
        body.classList.toggle("dark");
        console.log("Dark mode toggled:", isDark); // Debug log
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateIcons(isDark);
    }

    // Function to update icons
    function updateIcons(isDark) {
        const moonIcons = document.querySelectorAll(".fa-moon");
        const sunIcons = document.querySelectorAll(".fa-sun");

        moonIcons.forEach(icon => icon.classList.toggle("hidden", isDark));
        sunIcons.forEach(icon => icon.classList.toggle("hidden", !isDark));
    }

    // Initialize theme based on saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    if (isDark) {
        html.classList.add("dark");
        body.classList.add("dark");
        updateIcons(true);
    }

    // Attach event listeners to toggle buttons
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener("click", toggleTheme);
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener("click", toggleTheme);
    }
});
