//Loading Screen Script

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 700);
});

// Scroll to Top Button

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Navbar Script

const navbarScroll = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 28) {
    navbarScroll.classList.add("scrolled");
  } else {
    navbarScroll.classList.remove("scrolled");
  }
});

let mobileViewNavbar = document.querySelector(".mobile-view-navbar");
let showToggle = document.querySelector(".showNavbar");
let showCloseBtn = document.querySelector(".closeNavbar");

document.querySelector(".togglebtn").addEventListener("click", () => {
  mobileViewNavbar.style.left = "0";
  showToggle.style.display = "none";
  showCloseBtn.style.display = "flex";
  navbarScroll.classList.add("scrolled");
});

document.querySelector(".xMark").addEventListener("click", () => {
  mobileViewNavbar.style.left = "-70%";
  showToggle.style.display = "flex";
  showCloseBtn.style.display = "none";
});

// Close the menu when a link is clicked

document.addEventListener("DOMContentLoaded", () => {
  const listcontents = document.querySelectorAll(
    ".mobile-view-navbar-menu-list a"
  );

  listcontents.forEach(function (listcontent) {
    listcontent.addEventListener("click", () => {
      mobileViewNavbar.style.left = "-70%";
      showToggle.style.display = "flex";
      showCloseBtn.style.display = "none";
    });
  });
});

// animation Script for display
const animationScript = ["Front-End Developer", "React Developer"];

// Typing animation script start
new Typed(".role", {
  strings: animationScript,
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById("year").textContent = currentYear;
