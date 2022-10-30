// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если ипнут пустой, в спане должна отображаться строка "Anonymous".



const displayText = document.querySelector("#name-output");
const inputText = document.querySelector("#name-input");

inputText.addEventListener("input", event => {
    if(event.currentTarget.value.length > 0){
        displayText.textContent = "";
        displayText.textContent += event.currentTarget.value;
    }else{
        displayText.textContent = "Anonymous";
    }
  });