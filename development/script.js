const popup = document.getElementById('pop-up');
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  emailInput.value = '';

  popup.classList.toggle('pop-up--show');
  setTimeout(() => {
    popup.classList.toggle('pop-up--show');
  }, 3000);
});
