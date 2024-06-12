// Sélection des éléments HTML
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const icon = document.getElementById('icon');

// Ajout d'un événement de clic sur la boîte d'icône
togglePassword.addEventListener('click', function () {
  // Vérification du type actuel de l'input password
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';  // Change le type en 'text'
    icon.classList.remove('bx-hide');  // Change l'icône en 'bx-show'
    icon.classList.add('bx-show');
  } else {
    passwordInput.type = 'password';  // Change le type en 'password'
    icon.classList.remove('bx-show');  // Change l'icône en 'bx-hide'
    icon.classList.add('bx-hide');
  }
});
