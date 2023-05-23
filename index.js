"use strict";

const nav = document.querySelector("#nav-bar");
const paragraph = document.querySelector("#top-container");
const bottomPara = document.querySelector("#bottom-container");
const stickyNav = function (entries, options) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("active");
  else nav.classList.remove("active");
};
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
};
const observer = new IntersectionObserver(stickyNav, options);
observer.observe(paragraph);
