const closeBar = document.getElementById("close-bar");
const announcementBar = document.getElementById("announcement-bar");

closeBar.addEventListener("click", () => {
  announcementBar.classList.add("hidden");
});

const menuBtn = document.getElementById("menu-btn"); // the ☰ button
const mobileMenu = document.getElementById("mobile-menu"); // the dropdown
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ---- PROPERTY CARDS SLIDER ----
const slider = document.getElementById("cards-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Tracks which slide we're on (0 = start)
let position = 0;

// How many cards are visible depends on screen width
function getVisibleCount() {
  if (window.innerWidth >= 1024) return 3; // desktop
  if (window.innerWidth >= 768) return 2; // tablet
  return 1; // mobile
}

// Width of one card + the gap (gap-6 = 24px)
function getSlideAmount() {
  const card = slider.querySelector(".card-item");
  return card.offsetWidth + 24;
}

const totalCards = slider.querySelectorAll(".card-item").length;

// → next button
nextBtn.addEventListener("click", function () {
  const maxPosition = totalCards - getVisibleCount();
  if (position < maxPosition) {
    position++;
    slider.style.transform = `translateX(-${position * getSlideAmount()}px)`;
  }
});

// ← prev button
prevBtn.addEventListener("click", function () {
  if (position > 0) {
    position--;
    slider.style.transform = `translateX(-${position * getSlideAmount()}px)`;
  }
});

// Reset slider position when window is resized
window.addEventListener("resize", function () {
  position = 0;
  slider.style.transform = "translateX(0)";
});
