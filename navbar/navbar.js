document.addEventListener("DOMContentLoaded", () => {
  const navbarPath = "/japanWebsite/navbar/navbar.html";
  const container = document.getElementById("navbar-container");

  if (!container) return;

  fetch(navbarPath)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then(data => {
      container.innerHTML = data;
      setActiveLink();
      setupMobileDropdowns();
    });
});

function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll("#myTopnav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage && linkPage.includes(currentPage)) {
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
  const dropdownButtons = document.querySelectorAll(".dropdown .dropbtn");

  dropdownButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      // only toggle if we're on mobile
      if (window.innerWidth <= 1000) {
        e.preventDefault();
        const parent = btn.parentElement;
        parent.classList.toggle("active");
      }
    });
  });
}
