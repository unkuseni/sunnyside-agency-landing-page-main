const hamburgerButton = document.getElementById("hamburger-menu");
const navBar = document.getElementById("navBar");
let isVisible = false;
const width = window.innerWidth;

function renderNav() {
  const isMobile = width < 768;
  if (navBar.style.display === "none" && !isMobile) {
    navBar.style.display = "block";
  } else if (navBar.style.display === "block" && isMobile) {
    navBar.style.display = "none";
  }

if (hamburgerButton.style.display === "none" && !isLaptop) {
  hamburgerButton.style.display = "block";
} else if (hamburgerButton.style.display === "block" && isLaptop) {
  hamburgerButton.style.display = "none";
}
}

hamburgerButton.addEventListener("click", () => {
  isVisible = !isVisible;
  navBar.style.display = isVisible ? "block" : "none";
});

window.addEventListener("resize", renderNav);

// Initial rendering
renderNav();