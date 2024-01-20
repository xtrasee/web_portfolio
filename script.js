let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = header.offsetHeight

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { document.getElementById("navbar").classList.add('transparent'); }
  else { document.getElementById("navbar").classList.remove('transparent'); }

});

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value} <br> Message: ${message.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nguyenhctracy@gmail.com",
    Password : "4D8D8D807878A3DAE93C632C9F676888F4E8",
    To : 'nguyenhctracy@gmail.com',
    From : "nguyenhctracy@gmail.com",
    Subject : "Contact from Web Dev",
    Body : bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent succeessfully",
          icon: "success"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  form.reset();
});


// document.addEventListener('DOMContentLoaded', function () {
//   var contents = document.getElementById('contents');

//   // Function to check if the user has scrolled up
//   function checkScroll() {
//     var scrollPosition = window.scrollY;

//     // Adjust the value (e.g., 300) based on when you want the content to appear
//     if (scrollPosition > 250) {
//       contents.style.opacity = 1;
//     } else {
//       contents.style.opacity = 0;
//     }
//   }

//   // Attach the checkScroll function to the scroll event
//   window.addEventListener('scroll', checkScroll);

//   // Initial check to see if content should be visible on page load
//   checkScroll();
// });

// // page scroll function

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 40) {

//     document.getElementById("navbar").classList.add('transparent');
//   } else {
//     document.getElementById("navbar").classList.remove('transparent');
//   }
// }

// // light & dark mode
// const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// // Set initial mode based on local storage
// if (isDarkMode) {
//     document.body.classList.add('dark-mode');
// }

// function darkMode() {
//     const body = document.body;
//     // Toggle the 'dark-mode' class on the body
//     body.classList.toggle('dark-mode');

//     // Update local storage with current mode
//     const isDarkModeNow = body.classList.contains('dark-mode');
//     localStorage.setItem('darkMode', isDarkModeNow ? 'enabled' : 'disabled');

//     updateImageSource();
// }

// function updateImageSource() {
//   const image = document.getElementById('mainImg');
//   const isDarkMode = document.body.classList.contains('dark-mode');

//   // Update image source based on dark mode
//   image.src = isDarkMode ? 'img/nightPic.jpg' : 'img/gradPic.jpg';

//   localStorage.setItem('imageSource', image.src);
// }

//   // Retrieve image source from local storage
// const storedImageSource = localStorage.getItem('imageSource');
// if (storedImageSource) {
//    document.getElementById('mainImg').src = storedImageSource;
// }

// function zoomImage() {
//   const image = document.getElementById('mainImg');
//   image.classList.toggle('zoomed');
// }