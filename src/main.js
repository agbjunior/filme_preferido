document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll("nav a")

    
  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        const scrollOptions = {
          top: offsetTop,
          behavior: "smooth", // Scroll suave
          duration: 500
        };
        window.scrollTo(scrollOptions);
      }
    });
  });
});


  function toggleMenu(){
  const menuToggle = document.querySelector(".navbar");
  navbar.classList.toggle("active");
  };

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      const navbar = document.querySelector(".nav__first nav__second");
      navbar.classList.remove("active");
    });
  });




