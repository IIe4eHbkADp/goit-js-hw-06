const categories = document.querySelectorAll('li.item');
const numberOfCategories = categories.length;
console.log('Number of categories:', numberOfCategories);

const element = document.querySelectorAll('#categories>li');
element.forEach(elem => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}, 
    Elements: ${elem.lastElementChild.children.length}`,
  );
});
