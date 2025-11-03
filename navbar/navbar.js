document.addEventListener("DOMContentLoaded", () => {
  // Determine the correct path to navbar.html
  const navbarPath = "/navbar/navbar.html";

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
      console.log("✅ Navbar loaded from:", navbarPath);
      setActiveLink();
      setupMobileDropdowns();
    })
    .catch(error => console.error("❌ Error loading navbar:", error));
});

function myFunction() {
  const x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}

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

function setupMobileDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown .dropbtn");

  dropdowns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const parentDropdown = btn.parentElement;
      parentDropdown.classList.toggle("active");
    });
  });
}
