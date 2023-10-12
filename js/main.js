
// Function to dynamically change the date

const footerYear = document.querySelectorAll(".year");
footerYear.forEach((copyright) => {
  copyright.innerHTML = new Date().getFullYear();
});

const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  //burger animation
  burger.classList.toggle("toggle");
});

function showOnHover(trigger, element) {
  trigger.onmouseover = function () {
    element.style.display = "block";
    trigger.style.display = "none";
  };
  element.onmouseout = function () {
    element.style.display = "none";
    trigger.style.display = "block";
  };
}

let trigger = document.getElementById("trigger");
let element = document.getElementById("element-to-show");
showOnHover(trigger, element);



//Get the button
var backToTopBtn = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("hero");
  heroSection.style.opacity = "0";

  setTimeout(function () {
    heroSection.style.transition = "opacity 3s";
    heroSection.style.opacity = "1";
  }, 100);
});



// Function to add a class that triggers the animation
function animateText() {
  const textElement = document.getElementById("animatedText");
  textElement.style.opacity = 1;
  textElement.style.transform = "translateY(0)";
}

// Wait for the page to fully load before triggering the animation
window.addEventListener("load", animateText);



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

function smoothScroll() {
  let animationSpeed = 50;
  let scrollStep = 1;

  // Check for smaller screens using a media query
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function handleResponsiveChange(e) {
    if (e.matches) {
      // Smaller screen
      animationSpeed = 100; // Slower animation on mobile
      scrollStep = 2; // Larger scroll step on mobile
      testimonialContainer.style.width = "80%"; // Adjust container width for mobile
    } else {
      // Larger screen
      animationSpeed = 50; // Default animation speed
      scrollStep = 1; // Default scroll step
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

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

smoothScroll();




