const refs = {
  inputEl: document.querySelector("[data-time-input]"),
  btnEl: document.querySelector("[data-time-btn]"),
  textEl: document.querySelector(".time__text"),
};

const { inputEl, btnEl, textEl } = refs;

btnEl.addEventListener("click", (e) => {
  if (Number(inputEl.value) !== 0) {
    let days = 0;
    let hours = 0;
    let mins = 0;
    let seconds = "00";
    days = Math.floor(inputEl.value / 1440);
    hours = Math.floor((inputEl.value % 1440) / 60);
    mins = inputEl.value % 60;
    textEl.innerHTML = `${days} дн. ${(hours < 10 ? "0" : "") + hours}:${
      (mins < 10 ? "0" : "") + mins
    }:${seconds}`;
  }
});
