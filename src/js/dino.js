const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const message = document.getElementById("message");

let isJumping = false;
let isRunning = false;
let isGameStarted = false;

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
    setInterval(toggleRunImage, 100); // Змінювати зображення бігу кожну секунду
    message.style.display = "none"; // Приховати початкове повідомлення
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
  if (isRunning && cactusLeft < 45 && cactusLeft > 0 && dinoTop >= 120) {
    // зіткнення
    alert("Гра закінчена!");
    dino.style.backgroundImage = "url('../img/dino-dead.png')";
    resetGame();
  }
}, 10);

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyW") {
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
  setTimeout(function () {
    dino.style.backgroundImage = "url('../img/dino-run1.png')"; // Встановити зображення звичайного бігу після затримки
  }, 2000); // Відрегулювати затримку за потребою
  message.style.display = "block";
}
