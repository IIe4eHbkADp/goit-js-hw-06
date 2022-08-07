const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const elemValue = document.querySelector('#value');

const counterValue = {
  value: 0,

  decrementFunction() {
    this.value -= 1;
  },

  incrementFunction() {
    this.value += 1;
  },
};

const addIncrease = function () {
  counterValue.incrementFunction();
  elemValue.textContent = counterValue.value;
};
const addDecrease = function () {
  counterValue.decrementFunction();
  elemValue.textContent = counterValue.value;
};

decrement.addEventListener('click', addDecrease);
increment.addEventListener('click', addIncrease);
