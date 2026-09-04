const form = document.getElementById('signupForm');
const messageBox = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const terms = document.getElementById('terms').checked;

  if (!fullName || !email || !password || !confirmPassword) {
    messageBox.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messageBox.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
    return;
  }

  if (password.length < 8) {
    messageBox.innerHTML = '<div class="alert alert-danger">Password must be at least 8 characters long.</div>';
    return;
  }

  if (password !== confirmPassword) {
    messageBox.innerHTML = '<div class="alert alert-danger">Passwords do not match.</div>';
    return;
  }

  if (!terms) {
    messageBox.innerHTML = '<div class="alert alert-danger">Please accept the terms and privacy policy.</div>';
    return;
  }

  const firstName = fullName.split(' ')[0];
  messageBox.innerHTML = `<div class="alert alert-success">Welcome, ${firstName}! Your Velora account is ready.</div>`;
  form.reset();
});