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
    x: -100,
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

// Section 2 Animations Is Starting From Here 
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Image animation
  gsap.from(".s2img", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".s2",
      start: "top 80%", // jab section 80% viewport me aayega
      toggleActions: "play none none reverse"
    }
  });

  // Content animation
  gsap.from(".s2Content", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".s2",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Staggered inner elements (p, h2, paragraph, button)
  gsap.from(".s2Content > p, h2", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".s2",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
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
    defaults: { ease: "power3.out" }
  });

  // Golden strip grow
  tl.from(".s3left", {
    height: 0,
    duration: 1,
  });

  // Map fade + zoom
  tl.from(".mapImg", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
  }, "-=0.6");

  // List items stagger
  tl.from(".s3list li", {
    x: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  }, "-=0.4");

  // Button
  tl.from(".btn button", {
    y: 30,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
  }, "-=0.3");


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
    defaults: { ease: "power3.out" }
  });

  // Content D1 (heading, para, button)
  tl.from(".s5ContentD1 h2", {
    y: 50,
    opacity: 0,
    duration: 0.8,
  })
    .from(".s5ContentD1 p", {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, "-=0.5")
    .from(".s5ContentD1 button", {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
    }, "-=0.4");

  // Grid features stagger
  tl.from(".s5ContentD2 > div", {
    scale: 0.7,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  }, "-=0.2");

  // Overlay image parallax
  gsap.from(".s5 img[alt='lumora']", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".s5",
      start: "top 90%",
      scrub: true, // smooth parallax effect
    }
  });

  // Hover animations for grid items
  document.querySelectorAll(".s5ContentD2 > div").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.08,
        duration: 0.3,
        boxShadow: "0px 8px 20px rgba(200,154,107,0.4)",
        borderColor: "#ffffff88",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.3,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        borderColor: "rgba(242,242,242,0.2)",
      });
    });
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
    ease: "power3.out"
  });

  gsap.from("#closeModalBtn", {
    duration: 0.6,
    opacity: 0,
    y: -20,
    ease: "back.out(1.7)"
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
    }
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
    ease: "power3.out"
  });

  gsap.from("#closeModalBtn2", {
    duration: 0.6,
    opacity: 0,
    y: -20,
    ease: "back.out(1.7)"
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
    }
  });
});
