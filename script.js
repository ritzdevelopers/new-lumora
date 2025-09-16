
  document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector(".slides");
    const slideCards = document.querySelectorAll(".sliderCard");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    let currentIndex = 0;
    const totalSlides = slideCards.length;

    slidesContainer.style.transition = "transform 0.6s ease-in-out";

    function updateSlide() {
      const cardWidth = slideCards[0].offsetWidth + 16; // width + gap
      slidesContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function nextSlide() {
      const cardWidth = slideCards[0].offsetWidth + 16;
      const visibleCards = Math.floor(document.querySelector(".slider").offsetWidth / cardWidth);

      // if last card is about to fully show
      if (currentIndex >= totalSlides - visibleCards) {
        currentIndex = 0; // reset to first card
      } else {
        currentIndex++;
      }
      updateSlide();
    }

    function prevSlide() {
      if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
      } else {
        currentIndex--;
      }
      updateSlide();
    }

    rightBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    leftBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    // Auto slide every 2s
    let autoSlide = setInterval(nextSlide, 2000);

    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 2000);
    }

    window.addEventListener("resize", updateSlide);

    updateSlide();
  });


function sliderHover() {
  document.querySelectorAll(".sliderCard").forEach((card) => {
    const hvDiv = card.querySelector(".hvDiv");

    card.addEventListener("mouseenter", () => {
      gsap.to(hvDiv, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(hvDiv, {
        y: "100%",
        duration: 0.4,
        ease: "power2.in",
      });
    });
  });
}
sliderHover();

window.addEventListener("DOMContentLoaded", () => {
  // Timeline for smooth sequence
  let tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animate content box
  tl.from(".s1Content", {
    y: -100,
    opacity: 0,
    duration: 1,
  });

  // Animate heading
  tl.from(
    ".s1Content h1",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.6" // start before content box finishes
  );

  // Animate paragraph
  tl.from(
    ".s1Content p",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.4"
  );
});



// Section 3 Animations Is Starting From Here
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Timeline for section
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s3",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    defaults: { ease: "power3.out" },
  });

  // Golden strip grow
  tl.from(".s3left", {
    height: 0,
    duration: 1,
  });

  // Map fade + zoom
  tl.from(
    ".mapImg",
    {
      scale: 0.8,
      opacity: 0,
      duration: 1,
    },
    "-=0.6"
  );

  // List items stagger
  tl.from(
    ".s3list li",
    {
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    },
    "-=0.4"
  );

  // Button
  tl.from(
    ".btn button",
    {
      y: 30,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
    },
    "-=0.3"
  );

  // Hover animation for list items
  document.querySelectorAll(".s3list li").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.05,
        x: 10,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Timeline for section s5
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s5",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    defaults: { ease: "power3.out" },
  });

  // Content D1 (heading, para, button)
 

  // Overlay image parallax
  gsap.from(".s5 img[alt='lumora']", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".s5",
      start: "top 90%",
      scrub: true, // smooth parallax effect
    },
  });


  // Button subtle pulse on hover
  const btn = document.querySelector(".s5ContentD1 button");
  if (btn) {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.2 });
    });
  }
});

// Modal elements
const modal = document.getElementById("imageModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// Open modal with GSAP animation
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  gsap.from("#imageModal img", {
    duration: 0.8,
    opacity: 0,
    scale: 0.7,
    ease: "power3.out",
  });

  gsap.from("#closeModalBtn", {
    duration: 0.6,
    opacity: 0,
    y: -20,
    ease: "back.out(1.7)",
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  gsap.to("#imageModal img", {
    duration: 0.5,
    opacity: 0,
    scale: 0.8,
    ease: "power2.in",
    onComplete: () => {
      modal.classList.add("hidden");
      gsap.set("#imageModal img", { opacity: 1, scale: 1 }); // reset state
    },
  });
});
// Second Modal Button
const modal2 = document.getElementById("imageModal2");
const openBtn2 = document.getElementById("openModalBtn2");
const closeBtn2 = document.getElementById("closeModalBtn2");

// Open modal with GSAP animation
openBtn2.addEventListener("click", () => {
  modal2.classList.remove("hidden");
  gsap.from("#imageModal2 img", {
    duration: 0.8,
    opacity: 0,
    scale: 0.7,
    ease: "power3.out",
  });

  gsap.from("#closeModalBtn2", {
    duration: 0.6,
    opacity: 0,
    y: -20,
    ease: "back.out(1.7)",
  });
});

// Close modal
closeBtn2.addEventListener("click", () => {
  gsap.to("#imageModal2 img", {
    duration: 0.5,
    opacity: 0,
    scale: 0.8,
    ease: "power2.in",
    onComplete: () => {
      modal2.classList.add("hidden");
      gsap.set("#imageModal2 img", { opacity: 1, scale: 1 }); // reset state
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header");
  let lastScrollTop = 0;
  let isAnimating = false;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop <= window.innerHeight * 0.5) {
      return;
    }

    if (scrollTop > lastScrollTop) {
      if (!isAnimating) {
        isAnimating = true;
        gsap.to(navbar, {
          y: "-100%",
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => (isAnimating = false),
        });
      }
    } else {
      if (!isAnimating) {
        isAnimating = true;
        gsap.to(navbar, {
          y: "0%",
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => (isAnimating = false),
        });
      }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative
  });
});

const openBtn3 = document.getElementById("openMenu");
const mobileMenu = document.getElementById("mobileMenu");

// Open Menu
openBtn3.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    x: "0%",
    duration: 0.8,
    ease: "power4.out",
  });
  gsap.fromTo(
    "#mobileMenu ul li",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, stagger: 0.15, delay: 0.3, duration: 0.6 }
  );
});

const closeBtn3 = document.getElementById("closeBtn3");
// Close Menu
closeBtn3.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    x: "100%",
    duration: 0.8,
    ease: "power4.in",
  });
});
