const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navBar");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});


const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});