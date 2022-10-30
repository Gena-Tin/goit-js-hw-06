// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allElementsLi = []; 

for(let i = 0 ; i < ingredients.length ; i++){

    const elementLi = document.createElement("li");

    elementLi.textContent = ingredients[i];
    elementLi.classList.add("item");      
    allElementsLi.push(elementLi);  
}

const ingregientsUl = document.querySelector('#ingredients');

ingregientsUl.append(...allElementsLi); 
