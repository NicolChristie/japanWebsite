// Loads the shared navbar into any page that includes this script
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
      setActiveLink(); // call after navbar is inserted
      setupMobileDropdowns(); // mobile click support
    })
    .catch(error => console.error("Error loading navbar:", error));
});

// Mobile menu toggle logic
function myFunction() {
  const x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}

// Highlight the active page link
function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll("#myTopnav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage && currentPage && linkPage.includes(currentPage)) {
      link.classList.add("active");

      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        const button = parentDropdown.querySelector(".dropbtn");
        if (button) button.classList.add("active");
      }
    } else {
      link.classList.remove("active");
    }
  });
}

// Mobile dropdown click toggle
function setupMobileDropdowns() {
  const dropdowns = document.querySelectorAll(".topnav.responsive .dropdown .dropbtn");

  dropdowns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const parentDropdown = btn.parentElement;
      parentDropdown.classList.toggle("active"); // show/hide dropdown content via CSS
    });
  });
}
