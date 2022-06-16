import { HamburgerClass } from "./hamburgerAnimation.js";

const hiddenElement = document.querySelectorAll(".hide-element");
const scaledElement = document.querySelectorAll(".small");
const scaler = document.querySelectorAll('[data-id="scaler"]');

const inRight = document.querySelectorAll("#in-right");
const inLeft = document.querySelectorAll("#in-left");
const slider = document.querySelectorAll('[data-id="slider"]');

const elementObserver = new IntersectionObserver(
  function (entries, elementObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.isIntersecting) {
        if (scaler) {
          entry.target.classList.add("scale");
        }
        if (slider) {
          entry.target.id = "";
          entry.target.classList.add("merge");
        }
        entry.target.classList.add("appear");
        elementObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

hiddenElement.forEach((element) => {
  elementObserver.observe(element);
});

scaledElement.forEach((element) => {
  elementObserver.observe(element);
});

inRight.forEach((element) => {
  elementObserver.observe(element);
});

inLeft.forEach((element) => {
  elementObserver.observe(element);
});

//Lazy loading images
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) return;

  img.src = src;
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

// Display loading screen when link is pressed
const examples = document.querySelectorAll(".example-site");
const loader = document.querySelector(".loading__container");

examples.forEach((example) => {
  example.addEventListener("click", function () {
    loader.classList.remove("hide-load");
  });
});

window.addEventListener("pageshow", function () {
  loader.classList.add("hide-load");
});
