const closeBar = document.getElementById("close-bar");
const announcementBar = document.getElementById("announcement-bar");

closeBar.addEventListener("click", function () {
  announcementBar.classList.add("hidden");
});
