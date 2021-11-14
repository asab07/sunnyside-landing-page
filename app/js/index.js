const toggleButton = document.querySelector(".header__toggle");
const navbarLinks = document.querySelector(".header__links");
const headerTitle = document.querySelector(".header__title");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
  headerTitle.classList.toggle("hide");
});
