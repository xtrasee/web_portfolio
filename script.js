// contact form
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = header.offsetHeight
// light & dark mode
const isDarkMode = localStorage.getItem('dark-mode') === 'true';

// Set initial mode based on local storage
if (isDarkMode) {
  document.body.classList.add('dark-mode');
}
// navbar scroll function
window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { document.getElementById("navbar").classList.add('transparent'); }
  else { document.getElementById("navbar").classList.remove('transparent'); }

});

// contact email function
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

function darkMode() {
  const body = document.body;
  // Toggle the 'dark-mode' class on the body
  body.classList.toggle('dark-mode');

  // Update local storage with current mode
  const newMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', newMode);

  document.getElementById('check-5').checked = newMode;
}

function zoomImage() {
  const image = document.getElementById('mainImg');
  image.classList.toggle('zoomed');
}
