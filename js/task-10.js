function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create');
const destroyBtn = document.querySelector('button[data-destroy]');
const parentBox = document.querySelector('#boxes');

function boxesChanges(event) {
  control.setAttribute('count', Number(event.currentTarget.value));
  console.log(Number(event.currentTarget.value));
}
control.addEventListener('input', boxesChanges);

let baseBoxSize = 30;

function createBoxes(amount) {
  let countBoxes = Number(control.getAttribute('count'));

  for (let i = 0; i < countBoxes; i += 1) {
    baseBoxSize += 10;

    const newBoxes = document.createElement('div');
    newBoxes.style.background = getRandomHexColor();
    newBoxes.style.height = baseBoxSize + 'px';
    newBoxes.style.width = baseBoxSize + 'px';
    newBoxes.style.margin = '10px';
    newBoxes.classList.add('new-boxes');
    parentBox.append(newBoxes);
  }
}
createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  while (parentBox.firstElementChild) {
    parentBox.removeChild(parentBox.lastElementChild);
  }
  control.value = '';
}
