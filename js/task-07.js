// Напиши скрипт, который реагирует на изменение 
// значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя 
// свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.

const fontSizeController = document.querySelector("#font-size-control");
const currentText = document.querySelector("#text");

fontSizeController.addEventListener("input", event =>{
    const inputValue = event.currentTarget.value;
    
    currentText.style.fontSize = inputValue + "px";
});