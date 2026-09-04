const form = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const message = document.getElementById('formMessage');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.textContent = isPassword ? 'Hide' : 'Show';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    message.classList.add('d-none');
    return;
  }

  form.classList.add('was-validated');
  message.classList.remove('d-none');
  message.textContent = 'Login successful! Welcome back to ShopEase.';
});
