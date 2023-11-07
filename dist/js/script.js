// navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  const toTop = document.querySelector("#toTop");

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// untuk bagian hamburger
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbarMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navbarMenu) {
    hamburger.classList.remove("hamburger-active");
    navbarMenu.classList.add("hidden");
  }
});

// dark Mode Toggle
const darkToggle = document.querySelector("#darkToggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
