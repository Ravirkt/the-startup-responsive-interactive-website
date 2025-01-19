const scrollUpButton = document.querySelector(".scroll-up-button");

scrollUpButton.addEventListener("click", scrollUp)

function scrollUp () {

  window.scrollTo({
    top: 0, 
    behavior: "smooth" 
  });
}








// navbar

const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;


window.addEventListener("scroll", scrollUpDown);

function scrollUpDown() {
  
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }


  if (window.scrollY > 1) {
    nav.classList.add("nav--scrolled");
  } else {
    nav.classList.remove("nav--scrolled");
  }

  lastScrollY = window.scrollY;
}
