const dropdownButton = document.querySelectorAll(".icon-button a");

dropdownButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    const subMenu = event.target.parentElement.querySelector(".sub-menu-content");
    subMenu.classList.toggle("open");
  })
);