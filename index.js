window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('fixed', window.scrollY > 0);
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
     
      var offsetTop = section.offsetTop;
  
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' 
      });
    }
  }
  