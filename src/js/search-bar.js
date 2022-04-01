const searchBarDisplay = () => {
  const searchIcon = document.querySelector(".search");
  const searchBar = document.querySelector(".search-bar");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("show-flex");
    console.log("searchbar");
  });
};

searchBarDisplay();
