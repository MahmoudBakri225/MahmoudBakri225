(function () {

  // ==========================================
  // THEME TOGGLE
  // ==========================================

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
    setTheme(
      savedTheme === "dark"
        ? "dark"
        : "light"
    );


    // Change theme
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

    menuToggle.addEventListener(
      "click",
      function (e) {

        // Prevent outside-click handler
        e.stopPropagation();

        const isOpen =
          navlinks.classList.toggle("open");


        menuToggle.setAttribute(
          "aria-expanded",
          isOpen ? "true" : "false"
        );

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

          navlinks.classList.remove("open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });



    // ------------------------------------------
    // Close Menu When Clicking Outside
    // ------------------------------------------

    document.addEventListener(
      "click",
      function (e) {

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

      }
    );



    // ------------------------------------------
    // Close Menu When Pressing ESC
    // ------------------------------------------

    document.addEventListener(
      "keydown",
      function (e) {

        if (e.key === "Escape") {

          navlinks.classList.remove("open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      }
    );

  }

})();