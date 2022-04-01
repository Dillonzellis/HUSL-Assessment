const searchBarDisplay = () => {
  const searchIcon = document.querySelector(".search");
  const searchBar = document.querySelector(".search-bar");
  const subMenu = document.querySelector(".submenu");
  const hr = document.querySelector("hr");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("show-flex");
    subMenu.classList.remove("show-block");
    if (width >= 1050) {
      hr.classList.toggle("show-block");
    }
    // hr.classList.remove("show-block");
    console.log(window.innerWidth);
    console.log("searchbardisplay");
  });
};

searchBarDisplay();
