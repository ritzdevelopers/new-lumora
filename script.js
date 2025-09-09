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
  gsap.from(".s2Content > *", {
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
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Timeline for section s7
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s7",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  // Image reveal with mask
  tl.from(".s7img img", {
    clipPath: "inset(0 100% 0 0)", // right-to-left wipe
    duration: 1.2,
    ease: "power3.out"
  })
  .from(".s7img img", {
    scale: 1.2,
    duration: 1.2,
    ease: "power2.out"
  }, "-=1.2"); // run with wipe

  // Content cascade
  tl.from(".s7Content > p:first-of-type", {
    y: 40,
    opacity: 0,
    duration: 0.6,
  }, "-=0.6")
  .from(".s7Content h2", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.4")
  .from(".s7Content p:nth-of-type(2), .s7Content p:nth-of-type(3)", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  }, "-=0.4")
  .from(".s7Content button", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)"
  }, "-=0.3");

  // Button hover effect
  const btn = document.querySelector(".s7Content button");
  if (btn) {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(14,41,26,0.3)",
        duration: 0.3,
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        duration: 0.3,
      });
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".s8",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  // Title + Info box
  tl.from(".s8Top h1", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })
  .from(".s8Top div:last-child", {
    x: 100,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6");

  // Floor Plan Images
  tl.from(".s8Main .img", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
  }, "-=0.4");

  // Image Borders Animate (like blueprint drawing)
  document.querySelectorAll(".s8Main .img").forEach((el, i) => {
    gsap.from(el, {
      borderColor: "transparent",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    });
  });

  // Buttons (Floor Labels)
  tl.from(".s8Main button", {
    clipPath: "inset(0 100% 0 0)", // left-to-right wipe
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.5");

  // Hover effect for labels
  document.querySelectorAll(".s8Main button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        backgroundColor: "#C89A6B",
        color: "#fff",
        duration: 0.3
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        backgroundColor: "#fff",
        color: "#0E291A",
        duration: 0.3
      });
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Top banner parallax
  gsap.fromTo(".s9Top img", 
    { scale: 1.2, opacity: 0 },
    { 
      scale: 1, 
      opacity: 1, 
      duration: 1.5, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".s9Top",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true
      }
    }
  );

  // Bottom Left Text Reveal
  gsap.from(".s9Content p, .s9Content h2", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".s9Content",
      start: "top 80%"
    }
  });

  // Right Image Mask Reveal
  gsap.from(".s9Rght img", {
    x: 150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".s9Rght",
      start: "top 85%"
    }
  });

  // Hover Animations
  const img = document.querySelector(".s9Rght img");
  img.addEventListener("mouseenter", () => {
    gsap.to(img, {
      scale: 1.05,
      filter: "brightness(0.8)",
      duration: 0.4,
      ease: "power2.out"
    });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      scale: 1,
      filter: "brightness(1)",
      duration: 0.4,
      ease: "power2.out"
    });
  });

  // Heading glow on hover
  const heading = document.querySelector(".s9Content h2");
  heading.addEventListener("mouseenter", () => {
    gsap.to(heading, { color: "#FFFFFF", duration: 0.3 });
  });
  heading.addEventListener("mouseleave", () => {
    gsap.to(heading, { color: "#C89A6B", duration: 0.3 });
  });
});
