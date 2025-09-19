const scrollBtn = document.querySelector(".scrollBtn");

// Show/Hide button on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Scroll to top on click
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Navbar Script
const navbarScroll = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 22) {
    navbarScroll.classList.add("sticky");
  } else {
    navbarScroll.classList.remove("sticky");
  }
});

let sideNavbar = document.querySelector(".sideNavbar");
let showToggle = document.querySelector(".showNavbar");
let showCloseBtn = document.querySelector(".closeNavbar");

document.querySelector(".togglebtn").addEventListener("click", function () {
  sideNavbar.style.left = "0";
  showToggle.style.display = "none";
  showCloseBtn.style.display = "flex";
});

document.querySelector(".xMark").addEventListener("click", function () {
  sideNavbar.style.left = "-70%";
  showToggle.style.display = "flex";
  showCloseBtn.style.display = "none";
});

// Close the menu when a link is clicked

document.addEventListener("DOMContentLoaded", function () {
  const listcontents = document.querySelectorAll(".sideNavbar a");

  listcontents.forEach(function (listcontent) {
    listcontent.addEventListener("click", function () {
      sideNavbar.style.left = "-70%";
      showToggle.style.display = "flex";
      showCloseBtn.style.display = "none";
    });
  });
});

// animation Script for display
const animationScript = ["Front-End Developer", "React Developer"];

// Typing animation script start
new Typed(".typing", {
  strings: animationScript,
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

new Typed(".typing2", {
  strings: animationScript,
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

// Typing animation for Cyber Security
new Typed(".msc", {
  strings: ["Cyber Security"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

// Typing animation for Computer Science
new Typed(".bsc", {
  strings: ["Computer Science"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById("year").textContent = currentYear;
