function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const widget = document.querySelector('.widget');
const color = document.querySelector('.color');
const btn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}

btn.addEventListener('click', changeColor);
