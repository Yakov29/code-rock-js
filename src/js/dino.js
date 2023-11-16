const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const message = document.getElementById("message");
const scoreElement = document.getElementById("score"); // Доданий елемент для відображення рахунку

let isJumping = false;
let isRunning = false;
let isGameStarted = false;
let cactusInterval;
let score = 0; // Лічильник очок

function jump() {
  if (!isRunning) {
    return; // Запобігти стрибанню, коли не виконується біг
  }

  if (!isJumping) {
    isJumping = true;
    dino.style.backgroundImage = "url('../img/dino-run1.png')"; // Встановити зображення звичайного бігу
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
      isJumping = false;
    }, 300);
  }
}

function toggleRunImage() {
  const currentImage = dino.style.backgroundImage;
  const newImage = currentImage.includes("dino-run1.png") ? "url('../img/dino-run2.png')" : "url('../img/dino-run1.png')";
  dino.style.backgroundImage = newImage;
}

function startRunning() {
  if (!isGameStarted) {
    isGameStarted = true;
    isRunning = true;
    dino.style.backgroundImage = "url('../img/dino-run1.png')"; // Встановити початкове зображення бігу
    cactusInterval = setInterval(placeCactus, 1000); // Розміщувати кактуси кожну секунду
    setInterval(toggleRunImage, 100); // Змінювати зображення бігу кожну 0.1 секунду
    message.style.display = "none"; // Приховати початкове повідомлення
  }
}

function placeCactus() {
  if (isRunning) {
    // Ваш код для розміщення кактусів тут
    if (!isJumping) {
      // Якщо динозавр не стрибає, збільшити рахунок при переході через кактус
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
  }
}

let isAlive = setInterval(function () {
  // Отримати поточне положення Y динозавра
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // Отримати поточне положення X кактуса
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // Виявити зіткнення
  if (isRunning && cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 120) {
    // зіткнення
    alert(`Гра закінчена! Ваш рахунок: ${score}`);
    dino.style.backgroundImage = "url('../img/dino-dead.png')";
    resetGame();
  }
}, 10);

document.addEventListener("keydown", function (event) {
  console.log(event.code)
  if (event.code === "ArrowUp", "KeyW", "Space") {
    if (!isGameStarted) {
      startRunning();
    } else {
      jump();
    }
  }
});

function resetGame() {
  // Скинути стан гри і показати початкове повідомлення
  isRunning = false;
  isGameStarted = false;
  clearInterval(cactusInterval); // Очистити інтервал для розміщення кактусів
  setTimeout(function () {
    dino.style.backgroundImage = "url('../img/dino-run1.png')"; // Встановити зображення звичайного бігу після затримки
    score = 0; // Скинути лічильник очок
    scoreElement.textContent = "Score: 0"; // Оновити відображення рахунку
  }, 2000); // Відрегулювати затримку за потребою
  message.style.display = "block";
}
