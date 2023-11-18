const refs = {
  itemsListEl: document.querySelector(".rps__list"),
  botScoreTextEl: document.querySelector("[data-rps-scorecomp]"),
  yourScoreTextEl: document.querySelector("[data-rps-urscore]"),
  messageTextEl: document.querySelector("[data-rps-message]"),
  btnEl: document.querySelector("[data-rps-btn]"),
};
const { itemsListEl, botScoreTextEl, yourScoreTextEl, messageTextEl, btnEl } =
  refs;

let botScore = 0;
let yourScore = 0;
let yourSelectedElem = "";

itemsListEl.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    Array.from(e.currentTarget.children).forEach((item) => {
      item.classList.remove("rps--selected");
    });
    let indexOfClickedItem = 0;
    if (e.target.classList.contains("rps__item")) {
      indexOfClickedItem = Array.from(e.currentTarget.children).findIndex(
        (elem) => elem === e.target
      );
      yourSelectedElem = e.target.classList[1];
    } else {
      indexOfClickedItem = Array.from(e.currentTarget.children).findIndex(
        (elem) => elem === e.target.parentNode
      );
      yourSelectedElem =
        e.currentTarget.children[indexOfClickedItem].classList[1];
    }

    e.currentTarget.children[indexOfClickedItem].classList.add("rps--selected");

    if (e.target.classList.contains("rps__item")) {
    }
  } else {
    Array.from(e.currentTarget.children).forEach((item) => {
      item.classList.remove("rps--selected");
    });
  }
});

btnEl.addEventListener("click", (e) => {
  function clearItems() {
    Array.from(itemsListEl.children).forEach((item) =>
      item.classList.remove("rps--selected")
    );
    yourSelectedElem = "";
  }
  function showScore() {
    botScoreTextEl.textContent = botScore;
    yourScoreTextEl.textContent = yourScore;
  }
  function win() {
    messageTextEl.textContent = "Ви виграли раунд!";
    yourScore += 1;
    showScore();
    clearItems();
  }
  function lose() {
    messageTextEl.textContent = "Комп’ютер виграв раунд!";
    botScore += 1;
    showScore();
    clearItems();
  }
  function draw() {
    messageTextEl.textContent =
      "Нічия. Ви з компьютером думаєте на одному рівні.";
    showScore();
    clearItems();
  }
  function gameFn(yourAns, botAns) {
    switch (yourAns) {
      case "rock":
        if (botAns === "paper") {
          lose();
          return;
        }
        win();
        return;
        break;
      case "paper":
        if (botAns === "scissors") {
          lose();
          return;
        }
        win();
        break;
      case "scissors":
        if (botAns === "rock") {
          lose();
          return;
        }
        win();
        return;
      default:
        console.log("Error");
        return;
    }
  }
  if (yourSelectedElem !== "") {
    const arrayOfElems = ["rock", "scissors", "paper"];
    const botAnswer = arrayOfElems[Math.round(Math.random() * 2 - 0)];
    console.log(botAnswer);
    console.log(yourSelectedElem);
    if (botAnswer === yourSelectedElem) {
      draw();
      return;
    }
    if (botAnswer !== yourSelectedElem) {
      gameFn(yourSelectedElem, botAnswer);
      return;
    }
  }
});
