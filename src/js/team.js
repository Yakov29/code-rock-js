const refs = {
  sliderEl: document.querySelector("[data-slider]"),
  listEl: document.querySelector(".team__list"),
  cardsElems: document.querySelectorAll(".team__item"),
  paginationEl: document.querySelector(".team__pagination"),
  bulletsElems: document.querySelectorAll(".team__bullet"),
  leftArrowEl: document.querySelector("[data-team-left]"),
  rightArrowEl: document.querySelector("[data-team-right]"),
};

const {
  sliderEl,
  listEl,
  cardsElems,
  bulletsElems,
  leftArrowEl,
  rightArrowEl,
} = refs;

let i = Array.from(cardsElems).findIndex((card) =>
  card.classList.contains("is-shown")
); //!! error

function showNext() {
  if (i === cardsElems.length - 1) {
    cardsElems[i].classList.remove("is-shown");
    bulletsElems[i].classList.remove("active-bullet");
    i = 0;
    cardsElems[i].animate(
      [{ transform: "translate(100px)" }, { transform: "translate(0px)" }],
      {
        duration: 370,
        delay: 30,
      }
    );
    cardsElems[i].classList.add("is-shown");
    bulletsElems[i].classList.add("active-bullet");

    return;
  }
  cardsElems[i].classList.remove("is-shown");
  cardsElems[i + 1].classList.add("is-shown");
  cardsElems[i + 1].animate(
    [{ transform: "translate(100px)" }, { transform: "translate(0px)" }],
    {
      duration: 370,
      delay: 30,
    }
  );
  bulletsElems[i].classList.remove("active-bullet");
  bulletsElems[i + 1].classList.add("active-bullet");
  i++;
}

function showPrevious() {
  if (i === 0) {
    cardsElems[i].classList.remove("is-shown");
    bulletsElems[i].classList.remove("active-bullet");
    i = cardsElems.length - 1;
    cardsElems[i].animate(
      [{ transform: "translate(-100px)" }, { transform: "translate(0px)" }],
      {
        duration: 370,
        delay: 30,
      }
    );
    cardsElems[i].classList.add("is-shown");
    bulletsElems[i].classList.add("active-bullet");
    return;
  }
  cardsElems[i].classList.remove("is-shown");
  cardsElems[i - 1].classList.add("is-shown");
  cardsElems[i - 1].animate(
    [{ transform: "translate(-100px)" }, { transform: "translate(0px)" }],
    {
      duration: 370,
      delay: 30,
    }
  );
  bulletsElems[i].classList.remove("active-bullet");
  bulletsElems[i - 1].classList.add("active-bullet");
  i--;
}

function elemInViewport(elem) {
  const box = elem.getBoundingClientRect();
  const top = box.top;
  const left = box.left;
  const bottom = box.bottom;
  const right = box.right;
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const maxWidth = 0;
  const maxHeight = 0;
  return (
    Math.min(height, bottom) - Math.max(0, top) >= maxHeight &&
    Math.min(width, right) - Math.max(0, left) >= maxWidth
  );
}

rightArrowEl.addEventListener("click", showNext);
leftArrowEl.addEventListener("click", showPrevious);

document.addEventListener(
  "keydown",
  _.throttle((e) => {
    if (
      elemInViewport(sliderEl) &&
      document
        .querySelector(".thanks-backdrop")
        .classList.contains("is-hidden-thanks") &&
      document
        .querySelector(".nickname-backdrop")
        .classList.contains("is-hidden-nickname")
    ) {
      if (e.code === "ArrowRight" || e.code === "ArrowUp") {
        showNext();
      }
      if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
        showPrevious();
      }
    }
  }, 180)
);

refs.paginationEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("team__bullet")) {
    const arrayOfBullets = Array.from(bulletsElems);
    const indexOfClickedElem = arrayOfBullets.findIndex(
      (bullet) => bullet === e.target
    );
    const indexOfCurrentElem = Array.from(cardsElems).findIndex((card) =>
      card.classList.contains("is-shown")
    );
    if (indexOfClickedElem !== indexOfCurrentElem) {
      if (indexOfClickedElem > indexOfCurrentElem) {
        cardsElems[indexOfCurrentElem].classList.remove("is-shown");
        bulletsElems[indexOfCurrentElem].classList.remove("active-bullet");
        cardsElems[indexOfClickedElem].classList.add("is-shown");
        cardsElems[indexOfClickedElem].animate(
          [{ transform: "translate(100px)" }, { transform: "translate(0px)" }],
          {
            duration: 370,
            delay: 30,
          }
        );
        bulletsElems[indexOfClickedElem].classList.add("active-bullet");
      }
      if (indexOfClickedElem < indexOfCurrentElem) {
        cardsElems[indexOfCurrentElem].classList.remove("is-shown");
        bulletsElems[indexOfCurrentElem].classList.remove("active-bullet");
        cardsElems[indexOfClickedElem].classList.add("is-shown");
        cardsElems[indexOfClickedElem].animate(
          [{ transform: "translate(-100px)" }, { transform: "translate(0px)" }],
          {
            duration: 370,
            delay: 30,
          }
        );
        bulletsElems[indexOfClickedElem].classList.add("active-bullet");
      }
    }
  }
});
