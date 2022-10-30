// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать 
// и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение 
// счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;

const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const displayNumb = document.querySelector("#value");

buttonIncr.addEventListener("click", valueInc => displayNumb.textContent = ++counterValue);
buttonDecr.addEventListener("click", valueDecr => displayNumb.textContent = --counterValue);