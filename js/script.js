// Function to toggle the mobile menu
function toggleMobileMenu() {
  document.querySelector(".mobile-menu").classList.toggle("mobile-menu-active");
}
document.querySelector(".hamburger").addEventListener("click", function () {
  if (window.innerWidth <= 850) {
    toggleMobileMenu();
  }
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 850) {
    document
      .querySelector(".mobile-menu")
      .classList.remove("mobile-menu-active");
  }
});
