// Function to add a class that triggers the animation
function animateText() {
  const textElement = document.getElementById("animatedText");
  textElement.style.opacity = 1;
  textElement.style.transform = "translateY(0)";
}

// Wait for the page to fully load before triggering the animation
window.addEventListener("load", animateText);
