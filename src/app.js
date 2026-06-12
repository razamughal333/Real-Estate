const closeBar = document.getElementById("close-bar");
const announcementBar = document.getElementById("announcement-bar");

closeBar.addEventListener("click", () => {
  announcementBar.classList.add("hidden");
});

// mobile menu
const menuBtn = document.getElementById("menu-btn"); // the ☰ button
const mobileMenu = document.getElementById("mobile-menu"); // the dropdown

// Toggle the menu open/closed when the hamburger is clicked
menuBtn.addEventListener("click", () => {
  // classList.toggle adds 'hidden' if missing, removes it if present
  mobileMenu.classList.toggle("hidden");
});

// Close the menu automatically when any link inside it is clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
