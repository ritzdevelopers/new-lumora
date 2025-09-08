// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger);

const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Mobile Menu Open
menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  gsap.fromTo(
    mobileMenu,
    { y: "-100%" },
    { y: "0%", duration: 0.6, ease: "power3.out" }
  );
});

// Mobile Menu Close
closeMenu.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    y: "-100%",
    duration: 0.6,
    ease: "power3.in",
    onComplete: () => (mobileMenu.style.display = "none"),
  });
});

// Navbar Hide on Scroll Down & Show on Scroll Up
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scroll Down → Hide Navbar
    gsap.to(navbar, { y: "-100%", duration: 0.5, ease: "power3.inOut" });
  } else {
    // Scroll Up → Show Navbar
    gsap.to(navbar, { y: "0%", duration: 0.5, ease: "power3.inOut" });
  }
  lastScroll = currentScroll;
});

  const slides = document.querySelector(".slides");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll(".sliderCard").length;

  function slideTo(index, direction) {
    const offset = -index * (slides.children[0].offsetWidth + 16); // card + gap
    gsap.to(slides, {
      x: offset,
      duration: 0.8,
      ease: "power2.inOut",
      from: { x: direction === "left" ? offset + 300 : offset - 300 },
    });
  }

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    slideTo(currentIndex, "right");
  });

  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slideTo(currentIndex, "left");
  });