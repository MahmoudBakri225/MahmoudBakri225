(function () {
  const themeToggle = document.getElementById("themeToggle");

  if (!themeToggle) return;

  const themeStylesheet = document.getElementById("themeStylesheet");

  const savedTheme = localStorage.getItem("theme");

  function setTheme(theme) {
    if (theme === "dark") {
      themeStylesheet.href = "styles/dark.css";
      themeToggle.classList.add("dark");
    } else {
      themeStylesheet.href = "styles/style.css";
      themeToggle.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }

  setTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", function () {
    const isDark = themeToggle.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
})();