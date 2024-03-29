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
          behavior: "smooth", 
          duration: 500
        };
        window.scrollTo(scrollOptions);
      }
    });
  });
});




