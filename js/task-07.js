const fontElement = document.querySelector('#font-size-control');
const fontText = document.querySelector('#text');

function onInputRange(event) {
  fontText.style.fontSize = event.currentTarget.value + 'px';
}

fontElement.addEventListener('input', onInputRange);
