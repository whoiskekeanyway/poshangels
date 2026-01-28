// Function to dynamically change the date

const footerYear = document.querySelectorAll(".year");
footerYear.forEach((copyright) => {
  copyright.innerHTML = new Date().getFullYear();
});

const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");

// Add ARIA attributes for accessibility
toggleBtn.setAttribute("aria-expanded", "false");
toggleBtn.setAttribute("aria-controls", "nav-list");

toggleBtn.addEventListener("click", () => {
  const isActive = nav.classList.toggle("active");
  burger.classList.toggle("toggle");

  // Update ARIA attributes
  toggleBtn.setAttribute("aria-expanded", isActive);
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

// Add keyboard navigation support
nav.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    nav.classList.remove("active");
    burger.classList.remove("toggle");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
});

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
