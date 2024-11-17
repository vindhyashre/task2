// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !email || !message) {
    feedback.textContent = "All fields are required!";
    feedback.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
  this.reset();
});

// Load tasks on page load
loadTasks();
