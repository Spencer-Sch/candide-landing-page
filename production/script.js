const popup = document.getElementById('pop-up');
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const formButton = document.getElementById('form-button');
const formButtonText = document.getElementById('form-button-text');
const formError = document.getElementById('form-error');
const loadingSpinner = document.getElementById('loading-spinner');

const validateEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;

  if (email.length === 0) {
    return true;
  }

  if (email.length > 0) {
    return regex.test(email);
  }
};

// On email input change
emailInput.addEventListener('input', () => {
  const trimmedEmail = emailInput.value.trim();
  const result = validateEmail(trimmedEmail);

  // Show error message on invalid entries
  if (formError.classList.contains('show-errorMsg')) {
    formError.classList.remove('show-errorMsg');
    formError.classList.add('hide-errorMsg');
  }

  // Change style of input and button to reflect email validity
  if (
    result &&
    emailInput.classList.contains('footer__input-container__input--valid')
  ) {
    return;
  }

  if (
    result &&
    emailInput.classList.contains('footer__input-container__input--invalid')
  ) {
    emailInput.classList.replace(
      'footer__input-container__input--invalid',
      'footer__input-container__input--valid'
    );
    formButton.classList.remove('footer__input-container__button--disabled');
    return;
  }

  if (
    !result &&
    emailInput.classList.contains('footer__input-container__input--invalid')
  ) {
    return;
  }

  if (
    !result &&
    emailInput.classList.contains('footer__input-container__input--valid')
  ) {
    emailInput.classList.replace(
      'footer__input-container__input--valid',
      'footer__input-container__input--invalid'
    );
    formButton.classList.add('footer__input-container__button--disabled');
    return;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    emailInput.value === '' ||
    formButton.classList.contains('footer__input-container__button--disabled')
  ) {
    formError.classList.remove('hide-errorMsg');
    formError.classList.add('show-errorMsg');
    return;
  }

  emailInput.value = '';

  // DURRING SEND
  loadingSpinner.classList.add('fa-solid');
  loadingSpinner.classList.add('fa-spinner');
  loadingSpinner.classList.add('footer__input-container__button--spinner');
  loadingSpinner.classList.remove('hide');

  formButtonText.classList.toggle('hide');
  formButton.classList.toggle('footer__input-container__button--loading');

  setTimeout(() => {
    // AFTER SEND SUCCESSFUL
    loadingSpinner.classList.add('hide');
    loadingSpinner.classList.remove('fa-solid');
    loadingSpinner.classList.remove('fa-spinner');
    loadingSpinner.classList.remove('footer__input-container__button--spinner');
    formButtonText.classList.toggle('hide');
    formButton.classList.toggle('footer__input-container__button--loading');
    // SHOW POPUP CONFIRMATION
    popup.classList.toggle('pop-up--show');
    setTimeout(() => {
      // HIDE POPUP CONFIRMATION
      popup.classList.toggle('pop-up--show');
    }, 3000);
  }, 1000);
});
