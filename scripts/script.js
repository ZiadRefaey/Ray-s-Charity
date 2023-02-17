const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".fa-xmark");

document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.add("is-active");
  body.classList.add("scroll-hidden");
});
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
  body.classList.remove("scroll-hidden");
});
