const categories = document.querySelectorAll('.item');
const animals = categories[0].children[1].children.length;
const products = categories[1].children[1].children.length;
const technologies = categories[2].children[1].children.length;
const title = document.querySelectorAll('h2');


console.log(`Number of categories: ${categories.length}`);
console.log(`Category: ${title[0].innerText}`);
console.log(`Elements: ${animals}`);
console.log(`Category: ${title[1].innerText}`);
console.log(`Elements: ${products}`);
console.log(`Category: ${title[2].innerText}`);
console.log(`Elements: ${technologies}`);

