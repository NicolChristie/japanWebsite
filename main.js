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
    
          const scrollPosition = window.scrollY;
    
          lightbox.style.display = "block";
          lightboxImg.src = img.src;
    
          // Prevent background scroll
          document.body.style.overflow = "hidden";
    
          // Maintain visual scroll position
          lightbox.scrollTop = scrollPosition;
        });
      });
    
      lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
      });
    
    });