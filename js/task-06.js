let inputStart = document.querySelector('#validation-input');

let inputLength = inputStart.dataset.length;

function addClass(done, notRight) {
  inputStart.classList.add(done);
  inputStart.classList.remove(notRight);
}

inputStart.addEventListener('change', elem => {
  const currentValue = elem.target.value;

  if (currentValue.length === +inputLength) {
    addClass('valid', 'invalid');
  } else {
    addClass('invalid', 'valid');
  }
});
