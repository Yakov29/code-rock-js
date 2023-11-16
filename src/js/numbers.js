const refs = {
  inputRef: document.querySelector("[data-numbers-input]"),
  btnRef: document.querySelector("[data-numbers-btn]"),
  textRef: document.querySelector(".numbers__text"),
  numberRef: document.querySelector("[data-numbers-result]"),
};
const { inputRef, btnRef, textRef, numberRef } = refs;

function validateInput(input, textElem) {
  let errors = 0;
  textElem.classList.add("numbers--success");
  textElem.classList.remove("numbers--lose");
  if (input.value === "") {
    errors++;
    textElem.classList.remove("numbers--success");
    textElem.classList.add("numbers--lose");
    textElem.textContent = "Введіть дані";
    return;
  }
  if (Number(input.value) < 0 || Number(input.value) > 20) {
    errors++;
    textElem.classList.remove("numbers--success");
    textElem.classList.add("numbers--lose");
    textElem.textContent = "Напишіть число від 0 до 20";
    return;
  }
  if (errors === 0) {
    return true;
  }
}
btnRef.addEventListener("click", (e) => {
  if (validateInput(inputRef, textRef)) {
    const computerAnswer = Math.round(Math.random() * 20 - 0 + 0);
    const yourAnswer = Number(inputRef.value);
    if (computerAnswer === yourAnswer) {
      textRef.classList.add("numbers--success");
      textRef.classList.remove("numbers--lose");
      textRef.textContent = `Вітаю, ви вгадали число! ${yourAnswer} `;
    } else {
      textRef.classList.remove("numbers--success");
      textRef.classList.add("numbers--lose");
      textRef.textContent = `Ви програли, комп’ютер загадав ${computerAnswer} `;
    }
  }
});
