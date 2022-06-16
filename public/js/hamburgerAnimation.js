/* Show menu on hamburger button press */
const menuBtn = document.querySelector(".fancy-burger");
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
    menuBtn
      .querySelectorAll("span")
      .forEach((span) => span.classList.toggle("open"));
    hamburgerMenu.style.display = "inline";
    hamburgerMenu.classList.toggle("unhide-menu");
    overlay.classList.toggle("hide-overlay");
  }
}
const app = new HamburgerClass();
