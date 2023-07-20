// navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// untuk bagian hamburger
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbarMenu.classList.toggle("hidden");
});
