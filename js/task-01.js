const categories = document.querySelectorAll('li.item');
const numberOfCategories = categories.length;
console.log('Number of categories:', numberOfCategories);

categories.forEach(elem => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}, 
    Elements: ${elem.lastElementChild.children.length}`,
  );
});
