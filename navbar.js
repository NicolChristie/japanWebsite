// Loads the shared navbar into any page that includes this script
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
      setActiveLink(); // call after navbar is inserted
    })
    .catch(error => console.error("Error loading navbar:", error));
});

// Mobile menu toggle logic
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Automatically highlight the active page link
function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop(); // e.g. "tokyo.html"
  const links = document.querySelectorAll("#myTopnav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage && currentPage && linkPage.includes(currentPage)) {
      link.classList.add("active");

      // Also highlight parent dropdown button
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
