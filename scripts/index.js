
(function () {

  "use strict";


  // ==========================================
  // THEME TOGGLE
  // ==========================================

  const themeToggle = document.getElementById("themeToggle");
  const themeStylesheet = document.getElementById("themeStylesheet");

  if (themeToggle && themeStylesheet) {

    const savedTheme = localStorage.getItem("theme");

    function setTheme(theme) {

      const isDark = theme === "dark";

      themeStylesheet.href = isDark
        ? "styles/dark.css"
        : "styles/style.css";

      themeToggle.classList.toggle("dark", isDark);

      themeToggle.setAttribute(
        "aria-label",
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      );

      themeToggle.setAttribute(
        "aria-pressed",
        isDark ? "true" : "false"
      );

      localStorage.setItem("theme", theme);
    }


    // Load saved theme
    setTheme(
      savedTheme === "dark"
        ? "dark"
        : "light"
    );


    // Toggle theme
    themeToggle.addEventListener("click", function () {

      const isDark =
        themeToggle.classList.contains("dark");

      setTheme(
        isDark
          ? "light"
          : "dark"
      );

    });

  }



  // ==========================================
  // MOBILE MENU
  // ==========================================

  const menuToggle =
    document.getElementById("menuToggle");

  const navlinks =
    document.getElementById("navlinks");


  if (menuToggle && navlinks) {


    // ------------------------------------------
    // Open / Close Menu
    // ------------------------------------------

    function closeMenu() {

      navlinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }


    function openMenu() {

      navlinks.classList.add("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "true"
      );

    }


    menuToggle.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        const isOpen =
          navlinks.classList.contains("open");

        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }

      }
    );


    // ------------------------------------------
    // Close Menu When Clicking a Link
    // ------------------------------------------

    const links =
      navlinks.querySelectorAll("a");

    links.forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          closeMenu();

        }
      );

    });


    // ------------------------------------------
    // Close Menu When Clicking Outside
    // ------------------------------------------

    document.addEventListener(
      "click",
      function (event) {

        if (
          navlinks.classList.contains("open") &&
          !navlinks.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {

          closeMenu();

        }

      }
    );


    // ------------------------------------------
    // Close Menu With ESC
    // ------------------------------------------

    document.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Escape") {

          closeMenu();

          menuToggle.focus();

        }

      }
    );


    // ------------------------------------------
    // Close Menu When Resizing To Desktop
    // ------------------------------------------

    window.addEventListener(
      "resize",
      function () {

        if (window.innerWidth > 900) {

          closeMenu();

        }

      }
    );

  }



  // ==========================================
  // SMOOTH SCROLL
  // ==========================================

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });


        // Update URL without jumping
        if (history.pushState) {

          history.pushState(
            null,
            "",
            targetId
          );

        }

      }
    );

  });



  // ==========================================
  // REVEAL ANIMATION
  // ==========================================

  const revealItems =
    document.querySelectorAll(".reveal");


  if (
    revealItems.length &&
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        function (entries, observerInstance) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add("in");

              observerInstance.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealItems.forEach(function (element) {

      observer.observe(element);

    });

  } else {

    revealItems.forEach(function (element) {

      element.classList.add("in");

    });

  }



  // ==========================================
  // CURRENT YEAR
  // ==========================================

  const yearElements =
    document.querySelectorAll("[data-current-year]");

  if (yearElements.length) {

    const currentYear =
      new Date().getFullYear();

    yearElements.forEach(function (element) {

      element.textContent = currentYear;

    });

  }

})();