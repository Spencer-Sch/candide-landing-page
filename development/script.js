const popup = document.getElementById('pop-up');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  popup.classList.toggle('pop-up--show');
  setTimeout(() => {
    popup.classList.toggle('pop-up--show');
  }, 3000);
});
