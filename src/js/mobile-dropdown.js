const mobileDropdown = () => {
  const accent = document.querySelector(".accent");
  const dropDown = document.querySelector(".submenu");

  accent.addEventListener("click", () => {
    dropDown.classList.toggle("show-block");
    console.log("mobile dropdown");
  });
};

mobileDropdown();
