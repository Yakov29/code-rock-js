const listRef = document.querySelector(".max__list");
const textEl = document.querySelector("[data-max-text]");
listRef.addEventListener("input", (e) => {
  const arrayOfElems = [...document.querySelectorAll(".max__input")];
  const arrayofValues = arrayOfElems.map((elem) => Number(elem.value));
  let max = arrayofValues[0];
  arrayofValues.forEach((value) => {
    if (max < value) {
      max = value;
      textEl.textContent = max;
    } else {
      textEl.textContent = max;
    }
  });
});
