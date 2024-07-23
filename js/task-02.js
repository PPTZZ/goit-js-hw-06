const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientList = document.getElementById('ingredients');

ingredients.forEach( e =>{
 let li = document.createElement('li');
 li.innerText = e;
 ingridientList.append(li);
});
