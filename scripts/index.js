(function () {

  // =========================
  // Theme Toggle
  // =========================

  const themeToggle = document.getElementById("themeToggle");
  const themeStylesheet = document.getElementById("themeStylesheet");

  if (themeToggle && themeStylesheet) {

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

    // Load saved theme
    setTheme(savedTheme === "dark" ? "dark" : "light");

    // Toggle theme
    themeToggle.addEventListener("click", function () {

      const isDark = themeToggle.classList.contains("dark");

      setTheme(isDark ? "light" : "dark");

    });
  }


  // =========================
  // Mobile Menu Toggle
  // =========================

  const menuToggle = document.getElementById("menuToggle");
  const navlinks = document.getElementById("navlinks");

  if (menuToggle && navlinks) {

    menuToggle.addEventListener("click", function (e) {

      e.stopPropagation();

      const isOpen = navlinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    // Close menu when a link is clicked
    navlinks.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        navlinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });


    // Close menu when clicking outside
    document.addEventListener("click", function (e) {

      if (
        navlinks.classList.contains("open") &&
        !navlinks.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {

        navlinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });

  }

})();