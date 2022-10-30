// Напиши скрипт который:

// ---Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// ---Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
//      - текст заголовка элемента (тега <h2>) и 
//      - количество элементов в категории (всех вложенных в него <li>).

// В результате, в консоли будут выведены такие сообщения.


// Number of categories: 3
const numberOfCat = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCat.length}\n\n`);

for(let i = 0 ; i < numberOfCat.length ; i++){
    console.log(`Category: ${numberOfCat[i].firstElementChild.textContent}`);
    console.log(`Elements: ${numberOfCat[i].querySelectorAll("li").length}\n\n`);   
}


// ********************************************************************************
// // Category: Animals
// // Elements: 4
// console.log(`Category: ${numberOfCat[0].firstElementChild.textContent}`);
// console.log(`Elements: ${numberOfCat[0].querySelectorAll("li").length}\n\n`);

// // Category: Products
// // Elements: 3
// console.log(`Category: ${numberOfCat[1].firstElementChild.textContent}`);
// console.log(`Elements: ${numberOfCat[1].querySelectorAll("li").length}\n\n`);

// // Category: Technologies
// // Elements: 5
// console.log(`Category: ${numberOfCat[2].firstElementChild.textContent}`);
// console.log(`Elements: ${numberOfCat[2].querySelectorAll("li").length}`);


