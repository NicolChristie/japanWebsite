document.addEventListener("DOMContentLoaded", () => {
  const navbarPath = "/japanWebsite/navbar/navbar.html";

  // Check if container exists before fetch
  const container = document.getElementById("navbar-container");
  if (!container) {
    
    return;
  } else {
  }

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then(data => {

      container.innerHTML = data;

      // Double-check navbar loaded
      const topnav = document.getElementById("myTopnav");
      console.log("⚙️ Running setup functions...");
      setActiveLink();
      setupMobileDropdowns();
    })
});

function myFunction() {
  const x = document.getElementById("myTopnav")
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

  if (dropdowns.length === 0) {
    return;
  }

  dropdowns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const parentDropdown = btn.parentElement;
      parentDropdown.classList.toggle("active");
    });
  });
}
