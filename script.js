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

document.addEventListener('DOMContentLoaded', function () {
  var contents = document.getElementById('contents');

  // Function to check if the user has scrolled up
  function checkScroll() {
    var scrollPosition = window.scrollY;

    // Adjust the value (e.g., 300) based on when you want the content to appear
    if (scrollPosition > 250) {
      contents.style.opacity = 1;
    } else {
      contents.style.opacity = 0;
    }
  }

  // Attach the checkScroll function to the scroll event
  window.addEventListener('scroll', checkScroll);

  // Initial check to see if content should be visible on page load
  checkScroll();
});

// page scroll function

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 40) {

    document.getElementById("navbar").classList.add('transparent');
  } else {
    document.getElementById("navbar").classList.remove('transparent');
  }
}

// light & dark mode
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Set initial mode based on local storage
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

function darkMode() {
    const body = document.body;
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Update local storage with current mode
    const isDarkModeNow = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeNow ? 'enabled' : 'disabled');

    updateImageSource();
}

function updateImageSource() {
  const image = document.getElementById('mainImg');
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Update image source based on dark mode
  image.src = isDarkMode ? 'img/nightPic.jpg' : 'img/gradPic.jpg';

  localStorage.setItem('imageSource', image.src);
}

  // Retrieve image source from local storage
const storedImageSource = localStorage.getItem('imageSource');
if (storedImageSource) {
   document.getElementById('mainImg').src = storedImageSource;
}

function zoomImage() {
  const image = document.getElementById('mainImg');
  image.classList.toggle('zoomed');
}