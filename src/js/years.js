const refs = {
  inputEl: document.querySelector("[data-years-input]"),
  btnEl: document.querySelector("[data-years-btn]"),
  messageEl: document.querySelector(".years__result"),
};
const { inputEl, btnEl, messageEl } = refs;

function checkYear() {
  messageEl.classList.remove("years--success");
  messageEl.classList.remove("years--lose");
  let errors = 0;
  if (inputEl.value === "") {
    errors++;
    messageEl.textContent = "Введіть свій рік народження!";
    messageEl.classList.add("years--lose");
    return;
  }
  if (inputEl.value < 1850) {
    errors++;
    messageEl.textContent = "Введіть свій справжній рік народження!";
    messageEl.classList.add("years--lose");
    return;
  }
  if (errors === 0) {
    if (inputEl.value % 4 === 0) {
      messageEl.textContent = "Ви народилися у високосний рік!";
      messageEl.classList.remove("years--lose");
      messageEl.classList.add("years--success");
    } else {
      messageEl.textContent = "Ви народилися не у високосний рік!";
      messageEl.classList.remove("years--success");
      messageEl.classList.add("years--lose");
    }
  }
}

btnEl.addEventListener("click", checkYear);
