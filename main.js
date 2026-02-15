/* =======================
   PARALLAX BACKGROUND
   ======================= */
   window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const parallaxSpeed = -0.1;
    document.body.style.backgroundPosition = `center ${scrollTop * parallaxSpeed}px`;
  });
  
  /* =======================
     LIGHTBOX
     ======================= */
  document.addEventListener("DOMContentLoaded", function() {
  
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    const images = document.querySelectorAll("img:not(#lightbox-img)");
  
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });
  
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
  });