const scrollUpButton = document.querySelector(".scroll-up-button");

scrollUpButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0, 
    behavior: "smooth" 
  });
});