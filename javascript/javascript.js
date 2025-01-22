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
  console.log(lastScrollY)

  //   Dit is voor het verbergen en verschijnen van navabr

  if (lastScrollY < window.scrollY) {
    nav.classList.add("hide-nav");
  } else {
    nav.classList.remove("hide-nav");
  }

// Dit is voor de background color van de navbar

  if (window.scrollY > 1) {
    nav.classList.add("color-nav");
  } else {
    nav.classList.remove("color-nav");
  }

  lastScrollY = window.scrollY;
}
