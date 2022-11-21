// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputFild = document.querySelector("input");
const divBox = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  createBoxes(inputFild.value);
});

destroyBtn.addEventListener("click", () => {
  divBox.innerHTML = "";
  inputFild.value = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 1, size = 30; i <= amount; i++, size += 10) {
    const box = document.createElement("div");
    box.setAttribute("style",
      `
        display:inline-block;
        background-color: ${getRandomHexColor()};
        padding: ${size / 2}px;
      `
    );
    divBox.append(box);
  }
}
