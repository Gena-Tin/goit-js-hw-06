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


const allElementsLi = [];                   // пустой массив элементов <li>

for(let i = 0 ; i < ingredients.length ; i++){

    const elementLi = document.createElement("li");

    elementLi.textContent = ingredients[i]; // +название как текст
    elementLi.classList.add("item");        // +класс итем
    allElementsLi.push(elementLi);          // го все в массив <li>
}

const ingregientsUl = document.querySelector('#ingredients');

ingregientsUl.append(...allElementsLi);     // массив <li> высыпали в список <ul>
