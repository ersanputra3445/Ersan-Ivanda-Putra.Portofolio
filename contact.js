document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("MNm8PTwwKi8Pl2DZ6"); // Ganti dengan PUBLIC KEY kamu

  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('status-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    statusMsg.innerText = "Sending...";

    emailjs.sendForm('service_s2gsiea', 'template_s44qeqm', this)
      .then(() => {
        statusMsg.innerText = "Message sent successfully!";
        statusMsg.style.color = 'green';
        form.reset();
      }, (error) => {
        console.error('FAILED...', error);
        statusMsg.innerText = "Failed to send. Try again!";
        statusMsg.style.color = 'red';
      });
  });
});
