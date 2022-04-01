const mobileDropdown = () => {
  const accent = document.querySelector(".accent");
  const dropDown = document.querySelector(".submenu");
  const searchBar = document.querySelector(".search-bar");

  accent.addEventListener("click", () => {
    dropDown.classList.toggle("show-block");
    searchBar.classList.remove("show-flex");
  });
};

mobileDropdown();
