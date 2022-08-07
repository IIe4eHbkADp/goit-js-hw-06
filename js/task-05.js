const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  if (event) {
    spanName.textContent = event.currentTarget.value;
  }
  if (event.currentTarget.value === '') {
    spanName.textContent = 'Anonymous';
  }
});
