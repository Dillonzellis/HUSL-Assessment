const mobileSearchBarDisplay = () => {
  const mobileSearch = document.querySelector(".mobile-search");
  const searchBar = document.querySelector(".search-bar");
  

  mobileSearch.addEventListener("click", () => {
    searchBar.classList.toggle("show-mobile-search");
    // console.log(" mobile searchbar");
  });
};

mobileSearchBarDisplay();
