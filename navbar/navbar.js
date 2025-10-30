
// Loads the shared navbar into any page that includes this script
document.addEventListener("DOMContentLoaded", () => {
  fetch("/navbar/navbar.html") // absolute path from root
    .then(response => {
      if (!response.ok) throw new Error("Navbar not found");
      return response.text();
    })
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
  document.addEventListener("click", (e) => {
    const topnav = document.getElementById("myTopnav");

    // Only handle clicks when in responsive (mobile) mode
    if (topnav.classList.contains("responsive")) {
      const isDropBtn = e.target.matches(".dropbtn");

      if (!isDropBtn && e.target.closest(".dropdown") == null) {
        document.querySelectorAll(".dropdown-content").forEach(d => d.style.display = "none");
      }

      if (isDropBtn) {
        e.preventDefault();
        const dropdownContent = e.target.nextElementSibling;
        dropdownContent.style.display =
          dropdownContent.style.display === "block" ? "none" : "block";
      }
    }
  });
}