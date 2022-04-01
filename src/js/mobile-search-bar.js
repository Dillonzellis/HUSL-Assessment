const mobileSearchBarDisplay = () => {
  const mobileSearch = document.querySelector(".mobile-search");
  const searchBar = document.querySelector(".search-bar");
  const navLinks = document.querySelector(".nav-links");

  mobileSearch.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-active")) {
      // navLinks.classList.toggle("nav-active");
      // navLinks.classList.toggle("nav-remove");

    }

    searchBar.classList.toggle("show-flex");
    // navLinks.classList.toggle("hide");
  });
};

mobileSearchBarDisplay();
