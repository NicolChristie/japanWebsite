document.addEventListener("DOMContentLoaded", () => {
  console.log("🟢 DOMContentLoaded triggered");

  const navbarPath = "/japanWebsite/navbar/navbar.html";
  console.log("📁 Attempting to load navbar from:", navbarPath);

  // Check if container exists before fetch
  const container = document.getElementById("navbar-container");
  if (!container) {
    console.error("❌ ERROR: Navbar container (#navbar-container) not found in HTML!");
    return;
  } else {
    console.log("✅ Navbar container found");
  }

  fetch(navbarPath)
    .then(response => {
      console.log("🌐 Fetch response received:", response);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then(data => {
      console.log("🧩 Navbar HTML fetched successfully. Injecting into container...");
      container.innerHTML = data;

      // Double-check navbar loaded
      const topnav = document.getElementById("myTopnav");
      if (topnav) {
        console.log("✅ Navbar HTML successfully inserted (found #myTopnav)");
      } else {
        console.warn("⚠️ Navbar HTML inserted, but #myTopnav not found inside it.");
      }

      console.log("⚙️ Running setup functions...");
      setActiveLink();
      setupMobileDropdowns();
      console.log("✅ Navbar setup complete");
    })
    .catch(error => {
      console.error("❌ ERROR loading navbar:", error);
    });
});

function myFunction() {
  console.log("📱 myFunction() called — toggling responsive class");
  const x = document.getElementById("myTopnav");
  if (!x) {
    console.error("❌ ERROR: #myTopnav not found when toggling responsive menu!");
    return;
  }
  x.classList.toggle("responsive");
  console.log("✅ Responsive class toggled");
}

function setActiveLink() {
  console.log("🔗 Running setActiveLink()");
  const currentPage = window.location.pathname.split("/").pop();
  console.log("📄 Current page detected as:", currentPage);

  const links = document.querySelectorAll("#myTopnav a");
  if (links.length === 0) {
    console.warn("⚠️ No links found inside #myTopnav — maybe navbar not loaded yet?");
    return;
  }

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

  console.log("✅ Active link highlighting complete");
}

function setupMobileDropdowns() {
  console.log("📱 Setting up mobile dropdowns...");
  const dropdowns = document.querySelectorAll(".dropdown .dropbtn");

  if (dropdowns.length === 0) {
    console.warn("⚠️ No dropdown buttons found — maybe navbar not loaded yet?");
    return;
  }

  dropdowns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const parentDropdown = btn.parentElement;
      parentDropdown.classList.toggle("active");
      console.log(`🔁 Toggled dropdown for: ${btn.textContent.trim()}`);
    });
  });

  console.log("✅ Mobile dropdown setup complete");
}
