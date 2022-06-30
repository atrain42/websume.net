import { HamburgerClass } from "./hamburgerAnimation.js";

// Render a loading page that disappears once all elements of the page are loaded in
const loader = document.querySelector(".article__loader-outer");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1500);
});
