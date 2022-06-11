/* Show menu on hamburger button press */
const menuBtn = document.querySelector(".menu-btn");
const hamburgerMenu = document.querySelector(".hamburger__anchors");
const overlay = document.querySelector(".overlay");
const hamburgerLinks = document.querySelectorAll(".hamburger-link");

export class HamburgerClass {
  constructor() {
    menuBtn.addEventListener("click", this._toggleHidden);
    overlay.addEventListener("click", this._toggleHidden);
    hamburgerLinks.forEach((link) => {
      link.addEventListener("click", this._toggleHidden);
    });
  }

  _toggleHidden() {
    hamburgerMenu.classList.toggle("hidden-menu");
    menuBtn.classList.toggle("open");
    overlay.classList.toggle("hide-overlay");
  }
}
const app = new HamburgerClass();
// const showHidden = function () {
//   hamburgerMenu.classList.toggle("hidden-menu");
//   menuBtn.classList.toggle("open");
//   overlay.classList.toggle("hide-overlay");
// };

// menuBtn.addEventListener("click", function () {
//   showHidden();
// });

// overlay.addEventListener("click", function () {
//   showHidden();
// });

// hamburgerLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     showHidden();
//   });
// });
