const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.getElementById("nav-links");

  burger.addEventListener("click", () => {
    nav.classList.add(".nav-active");
  });
};

navSlide();
