const searchBarDisplay = () => {
  const searchIcon = document.querySelector(".search");
  const searchBar = document.querySelector(".search-bar");
  const subMenu = document.querySelector(".submenu");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("show-flex");
    subMenu.classList.remove("show-block");
    console.log("searchbar");
  });
};

searchBarDisplay();
