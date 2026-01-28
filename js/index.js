// Function to add a class that triggers the animation
function animateText() {
  const textElement = document.getElementById("animatedText");
  textElement.style.opacity = 1;
  textElement.style.transform = "translateY(0)";
}

// Wait for the page to fully load before triggering the animation
window.addEventListener("load", animateText);

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("hero");
  heroSection.style.opacity = "0";

  setTimeout(function () {
    heroSection.style.transition = "opacity 3s";
    heroSection.style.opacity = "1";
  }, 100);
});


// Calculate the scroll position to trigger the animation
const containerMiddle =
  container.getBoundingClientRect().top + container.clientHeight / 2;

let isScrollingDown = false; // Track scroll direction

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= containerMiddle && !isScrollingDown) {
    tl.play();
    isScrollingDown = true;
  } else if (scrollPosition < containerMiddle && isScrollingDown) {
    tl.reverse();
    isScrollingDown = false;
  }
});
