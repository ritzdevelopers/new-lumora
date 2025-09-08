
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