const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const addElement = document.createElement('li');

  addElement.textContent = ingredient;
  addElement.classList.add('item');
  return addElement;
});
console.log(ingredientsList);
list.append(...ingredientsList);
