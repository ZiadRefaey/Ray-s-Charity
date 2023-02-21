const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".fa-xmark");
const body = document.querySelector(".body");
const coll = document.querySelectorAll(".mobile__links--title");

document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.add("is-active");
  body.classList.add("mobile-nav__active");
});
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
  body.classList.remove("mobile-nav__active");
});

coll.forEach((coll) => {
  coll.addEventListener("click", function (e) {
    const clicked = e.target.closest(".mobile__links--collapsable");
    clicked
      .querySelector(".mobile__links--arrow")
      .classList.toggle("mobile__links--arrow--active");
    clicked
      .querySelector(".mobile__links--content")
      .classList.toggle("mobile__links--active");
    console.log(clicked.querySelector(".mobile__links--content"));
  });
});
