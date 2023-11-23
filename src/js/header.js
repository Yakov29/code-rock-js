// Получаем чекбокс для переключения темы
const themeToggle = document.querySelector('.switchInput');

// Получаем все секции, контейнер и header
const modalThank = document.querySelector(".thanks__modal")
const sections = document.querySelectorAll('section');
const container = document.querySelectorAll('.container');
const header = document.querySelector('header');
const textElements = document.querySelectorAll('p, span, label, h1, h2, h3, h4, h5, h6, a');
const footballBlock = document.querySelector(".football-block");
const footer = document.querySelector("footer");
const mainElement = document.querySelector("main"); // Додано <main>
const thanksClose = document.querySelector(".thanks__modal__close")
const nicknameClose = document.querySelector(".nickname__close__svg")
const nickname = document.querySelector(".nickname");
const headerItem = document.querySelector(".header__list__item")
const underLinkBorder= document.querySelector(".under__link__border")
const underLinkList= document.querySelector(".under__link__list")
const underLinkItem = document.querySelectorAll(".under__link__list__item")
const underLink = document.querySelector(".under__link")
const body = document.querySelector("body")
const sectionBefore = document.querySelectorAll(".main section")

headerItem.addEventListener("click", () => {
    if (underLink.classList.contains("is-shown_header")){
        underLink.classList.remove("is-shown_header")
    } else {
        underLink.classList.add("is-shown_header")
    }
})

// Функция для обработки изменения темы
function toggleTheme() {
  if (themeToggle.checked) {
    // Если чекбокс отмечен, применяем темную тему
    sections.forEach(section => {
      section.style.backgroundColor = "#333"; // Темно-серый цвет фона
      section.style.color = "white";
    });
    container.forEach(elem => {
        elem.style.backgroundColor = "#333"
    })
    underLinkItem.forEach(elem =>{
        elem.classList.add("underLinkHover")
    })
    console.log(sectionBefore) 
    
    sectionBefore.forEach((elem) => {
      elem.style.setProperty("--cl", "white")
    })
    mainElement.style.backgroundImage = "url('../img/back-image@1x.png')"
    modalThank.style.backgroundColor = "#333"
    underLink.style.backgroundColor = "#333"
    underLinkBorder.style.border = "2px solid white"
    thanksClose.firstElementChild.firstElementChild.setAttribute("stroke", "white")
    nicknameClose.firstElementChild.setAttribute("stroke", "white");
    console.log(nicknameClose.firstElementChild.stroke)
    nickname.style.backgroundColor = "#333"
    nicknameClose.style.fill = "white"
    footer.style.backgroundColor = "#333"
    footballBlock.style.backgroundColor = "#5ABB58"
    header.style.backgroundColor = "#333"; // Темно-серый цвет фона
    header.style.color = "white";
    textElements.forEach(element => {
      element.style.color = "white";
    });
  } else {
    // В противном случае используем светлую тему
    sections.forEach(section => {
      section.style.backgroundColor = "white";
      section.style.color = "#333"; // Темно-серый цвет текста
    });
    container.forEach(elem => {
        elem.style.backgroundColor = "white"
    })
    underLinkItem.forEach(elem =>{
        elem.classList.remove("underLinkHover")
    })
    sectionBefore.forEach((elem) => {
      elem.style.setProperty("--cl", "#000")
    })
    modalThank.style.backgroundColor = "white"
    mainElement.style.backgroundImage = "url('../img/back-image@1x.png')"
    thanksClose.firstElementChild.firstElementChild.setAttribute("stroke", "black")
    underLink.style.backgroundColor = "white"
    underLinkBorder.style.border = "2px solid black"
    nicknameClose.firstElementChild.setAttribute("stroke", "#333");
    footer.style.backgroundColor = "white"
    nickname.style.backgroundColor = "white"
    nicknameClose.style.fill = "#333"
    footballBlock.style.backgroundColor = "#5ABB58"
    header.style.backgroundColor = "white";
    header.style.color = "#333"; // Темно-серый цвет текста
    textElements.forEach(element => {
      element.style.color = "#333"; // Темно-серый цвет текста
    });
  }
}

// Добавляем обработчик события для чекбокса
themeToggle.addEventListener("change", toggleTheme);

// Вызываем функцию toggleTheme() для установки начальных стилей
toggleTheme();


const numerical = [
  document.querySelector(".years"),
  document.querySelector(".numbers"),
  document.querySelector(".calc"),
  document.querySelector(".time"),
  document.querySelector(".max")
];
const playing = [
  document.querySelector(".rps"),
  document.querySelector(".dino__section"),
  document.querySelector(".football")
];
const acquaintance = [
  document.querySelector(".team"),
  document.querySelector(".experts")
];
const sectionItem = document.querySelector(".under__link__list");
const sectionItems = document.querySelectorAll(".under__link__list__item");

sectionItem.addEventListener("click", (e) => {
  const clickedElement = e.target.closest('.under__link__list__item');
  if (clickedElement) {
    const indexOfClickedElem = Array.from(sectionItems).indexOf(clickedElement);

    if (indexOfClickedElem === 0) {
      numerical.forEach((elem) => {
        elem.style.display = "block";
      });
      playing.forEach((elem) => {
        elem.style.display = "block";
      });
      acquaintance.forEach((elem) => {
        elem.style.display = "block";
      });
      playing.forEach((elem, index) => {
        elem.style.display = "none";
      });
      acquaintance.forEach((elem, index) => {
        elem.style.display = "none";
      });

    } else if (indexOfClickedElem === 2) {
      numerical.forEach((elem) => {
        elem.style.display = "block";
      });
      playing.forEach((elem) => {
        elem.style.display = "block";
      });
      acquaintance.forEach((elem) => {
        elem.style.display = "block";
      });
      numerical.forEach((elem, index) => {
        elem.style.display = "none";
      });
      playing.forEach((elem, index) => {
        elem.style.display = "none";
      })} else if (indexOfClickedElem === 1) {
        numerical.forEach((elem) => {
          elem.style.display = "block";
        });
        playing.forEach((elem) => {
          elem.style.display = "block";
        });
        acquaintance.forEach((elem) => {
          elem.style.display = "block";
        });
        numerical.forEach((elem, index) => {
          elem.style.display = "none";
        });
        acquaintance.forEach((elem, index) => {
          elem.style.display = "none";
        })}
  }
});
