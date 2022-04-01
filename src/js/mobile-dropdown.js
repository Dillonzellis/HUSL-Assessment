const mobileDropdown = () => {
  const accent = document.querySelector(".accent");
  const dropDown = document.querySelector(".submenu");
  const searchBar = document.querySelector(".search-bar");
  const hr = document.querySelector("hr");

  accent.addEventListener("click", () => {
    dropDown.classList.toggle("show-block");
    searchBar.classList.remove("show-flex");
    hr.classList.toggle("show-block");
  });
};

mobileDropdown();
