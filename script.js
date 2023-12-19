document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function (event) {
        // Remove 'active' class from all links
        navLinks.forEach(function (link) {
          link.classList.remove('active');
        });
  
        // Add 'active' class to the clicked link
        this.classList.add('active');
  
        // Get the href attribute of the clicked link
        var href = this.getAttribute('href');
  
        // Delay the page navigation by a short timeout to allow the 'active' class to be applied
        setTimeout(function () {
          // Navigate to the new page
          window.location.href = href;
        }, 100);
      });
    });
  
    // Add 'active' class based on the current page
    var path = window.location.pathname;
    var page = path.split('/').pop();
  
    navLinks.forEach(function (link) {
      var linkPage = link.getAttribute('href').split('/').pop();
  
      if (linkPage === page) {
        link.classList.add('active');
      }
    });
  });


  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
  
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName("navbar").style.top = "0";
    } else {
      document.getElementsByClassName("navbar").style.top = "-80px"; // Adjust the value based on your navbar height
    }
  
    prevScrollpos = currentScrollPos;
  };
  