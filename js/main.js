document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("hero");
  heroSection.style.opacity = "0";

  setTimeout(function () {
    heroSection.style.transition = "opacity 3s";
    heroSection.style.opacity = "1";
  }, 100);
});


// Function to dynamically change the date

const footerYear = document.querySelectorAll(".year");
footerYear.forEach((copyright) => {
  copyright.innerHTML = new Date().getFullYear();
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
