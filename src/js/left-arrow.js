const leftArrow = () => {
  const accent = document.querySelector(".accent");
  const dropDown = document.querySelector(".submenu");
  const searchBar = document.querySelector(".search-bar");
  const hr = document.querySelector("hr");
  const navLinks = document.querySelectorAll(".nav-link");

  const subMenu = document.querySelector(".submenu");

  const first = document.querySelector(
    "#navbar > ul > li:nth-child(1) > div > a"
  );
  const second = document.querySelector("#navbar > ul > li:nth-child(2)");
  const third = document.querySelector("#navbar > ul > li:nth-child(3)");
  const fourth = document.querySelector("#navbar > ul > li:nth-child(4)");
  const fifth = document.querySelector("#navbar > ul > li:nth-child(5)");

  const rightArrow = document.querySelector(
    "#navbar > ul > li:nth-child(1) > div > div.mobile-arrow > img"
  );
  const desktopArrow = document.querySelector(
    ".desktop-arrow-wrapper > div.desktop-arrow > img"
  );

  const leftArrow = document.querySelector(
    "#navbar > ul > li:nth-child(1) > div > div.left-arrow"
  );

  const width = window.innerWidth;

  leftArrow.addEventListener("click", () => {
    if (width <= 1050) {
      console.log("smaller");
      first.classList.toggle("hide");
      second.classList.toggle("hide");
      third.classList.toggle("hide");
      fourth.classList.toggle("hide");
      fifth.classList.toggle("hide");
      rightArrow.classList.toggle("hide");
      desktopArrow.classList.toggle("hide");
      leftArrow.classList.toggle("hide");
      subMenu.classList.toggle("show-block");

      // navLinks.forEach((link) => link.classList.toggle("hide"));
      // navLinks.classList.toggle("hide");
    }
  });
};

leftArrow();
