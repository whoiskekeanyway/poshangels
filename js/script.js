// Import ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate each image with a stagger effect on scroll
const images = document.querySelectorAll(".image");

gsap.from(images, {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.5, // Time delay between each image animation
  scrollTrigger: {
    trigger: ".image",
    start: "top 30%",
    end: "top 20%",
    toggleActions: "play complete reverse reset",
  },
});


