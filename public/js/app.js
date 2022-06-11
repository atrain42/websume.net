import { HamburgerClass } from "./hamburgerAnimation.js";
// const inLeft = document.querySelectorAll(".in-left");
// const inRight = document.querySelectorAll(".in-right");

// const headerObserver = new IntersectionObserver(
//   function (entries, headerObserver) {
//     entries.forEach((entry) => {
//       if (!entry.isIntersecting) return;
//       if (entry.isIntersecting) {
//         if (folder) {
//           entry.target.classList.add("unfold");
//         }

//         entry.target.classList.add("merge");
//         headerObserver.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.8,
//   }
// );

// inRight.forEach((word) => {
//   headerObserver.observe(word);
// });
// inLeft.forEach((word) => {
//   headerObserver.observe(word);
// });

// Intersection observer on entire elements

const hiddenElement = document.querySelectorAll(".hide-element");
const scaledElement = document.querySelectorAll(".small");
const scaler = document.querySelectorAll('[data-id="scaler"]');

const elementObserver = new IntersectionObserver(
  function (entries, elementObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.isIntersecting) {
        if (scaler) {
          entry.target.classList.add("scale");
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
