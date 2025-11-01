// script.js
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("header nav ul");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
