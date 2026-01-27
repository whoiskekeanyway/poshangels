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
    start: "top 60%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    
  },
});


const testimonialContainer = document.querySelector(".testimonial-container");
const testimonials = Array.from(testimonialContainer.children);

// ...existing code...
function smoothScroll() {
  let animationSpeed = 40; // Adjusted for smoother scrolling
  let scrollStep = 2; // Adjusted for larger scroll step

  // Check for smaller screens using a media query
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function handleResponsiveChange(e) {
    if (e.matches) {
      // Smaller screen
      animationSpeed = 50; // Slower animation on mobile
      scrollStep = 3; // Larger scroll step on mobile
      testimonialContainer.style.width = "90%"; // Adjust container width for mobile
    } else {
      // Larger screen
      animationSpeed = 40; // Default animation speed
      scrollStep = 2; // Default scroll step
      testimonialContainer.style.width = "100%"; // Default container width
    }
  }

  // Initially, call the responsive handler to set the initial values
  handleResponsiveChange(mediaQuery);

  // Add a listener to respond to changes in screen size
  mediaQuery.addEventListener("change", handleResponsiveChange);

  const shuffledTestimonials = shuffleArray(testimonials);
  testimonialContainer.innerHTML = "";

  shuffledTestimonials.forEach((testimonial) => {
    testimonialContainer.appendChild(testimonial);
  });

  let scrollingForward = true;

  function scroll() {
    if (scrollingForward) {
      testimonialContainer.scrollLeft += scrollStep;

      if (
        testimonialContainer.scrollLeft >=
        testimonialContainer.scrollWidth - testimonialContainer.offsetWidth
      ) {
        scrollingForward = false;
      }
    } else {
      testimonialContainer.scrollLeft -= scrollStep;

      if (testimonialContainer.scrollLeft <= 0) {
        scrollingForward = true;
      }
    }
  }

  setInterval(scroll, animationSpeed);
}

// Ensure GSAP animation triggers correctly on load
window.addEventListener('load', () => {
  gsap.from(".testimonial", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".testimonial-container",
      start: "top 60%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
  });
});
// ...existing code...

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

smoothScroll();


