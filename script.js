document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
});

let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let whatsappMessage = `Name: ${encodeURIComponent(
    name
  )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(
    message
  )}`;
  let whatsappNumber = "628117526670";

  let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
  window.open(whatsappURL, "_blank");
});
