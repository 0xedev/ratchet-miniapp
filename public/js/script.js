// Preloader
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hidden");
});

// Copy to Clipboard Functionality
const copyBtn = document.querySelector(".copy-btn");
const contractAddress = "0x1D35741C51fB615cA70e28d3321f6F01e8D8A12D";

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(contractAddress)
    .then(() => {
      copyBtn.innerHTML = '<i class="fas fa-check"></i>'; // Show checkmark
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>'; // Revert to copy icon
      }, 2000); // Revert after 2 seconds
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

// Custom Cursor
const cursor = document.querySelector(".custom-cursor");
const follower = document.querySelector(".custom-cursor-follower");
let mouseX = 0,
  mouseY = 0;
let followerX = 0,
  followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.left = followerX + "px";
  follower.style.top = followerY + "px";
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
    cursor.style.backgroundColor = "rgba(255, 193, 7, 0.2)"; // Updated to yellow
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.backgroundColor = "transparent";
  });
});

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// AOS Initialization
AOS.init({
  duration: 1000,
  once: true,
});

// Parallax Effect
window.addEventListener("scroll", () => {
  const heroBg = document.querySelector(".hero-background");
  const scrollPosition = window.scrollY;
  heroBg.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
