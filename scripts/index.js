document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeStylesheet = document.getElementById("themeStylesheet");

    if (!themeToggle || !themeStylesheet) {
        console.error("Theme toggle or stylesheet not found.");
        return;
    }

    themeToggle.addEventListener("click", () => {
        const isDark = themeToggle.classList.toggle("dark");

        if (isDark) {
            themeStylesheet.href = "styles/dark.css";
        } else {
            themeStylesheet.href = "styles/style.css";
        }
    });
});