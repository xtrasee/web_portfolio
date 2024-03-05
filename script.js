// contact form
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = header.offsetHeight
// light & dark mode
const switchInput = document.querySelector('.ui-switch input');


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
          text: "If you could see my face right now. You would see gratitude.",
          icon: "success"
        });
      }
    }
  );
}

// Function to toggle dark mode
function toggleDarkMode(isDarkMode) {
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('dark-mode', isDarkMode);
}

// Add event listener to the switch input
switchInput.addEventListener('change', function() {
  const isDarkMode = this.checked;
  toggleDarkMode(isDarkMode);
  // Update local storage with the checked state
  localStorage.setItem('switch-checked', isDarkMode);
});

// Check local storage for switch checked state on page load
const switchChecked = localStorage.getItem('switch-checked') === 'true';
switchInput.checked = switchChecked;
toggleDarkMode(switchChecked);

function zoomImage() {
  const image = document.getElementById('mainImg');
  image.classList.toggle('zoomed');
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  form.reset();
});