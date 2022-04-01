const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const mobileSearch = document.querySelector(".mobile-search");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate nav links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });

  // search bar burger logic
  mobileSearch.addEventListener("click", () => {
    if (nav.classList.contains("nav-active")) {
      navLinks.forEach((link, index) => {
        link.style.animation = "";
      });
      nav.classList.remove("nav-active");
      burger.classList.toggle("toggle");
    }
  });
};

navSlide();
