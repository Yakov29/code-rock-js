const ball = document.querySelector('.ball');
const footballBlock = document.querySelector('.football-block');

const ballWidth = ball.offsetWidth;
const ballHeight = ball.offsetHeight;
const ballHalfWidth = ballWidth / 2;
const ballHalfHeight = ballHeight / 2;

let ballX = ball.offsetLeft + ballHalfWidth;
let ballY = ball.offsetTop + ballHalfHeight;

const force = 100; // Фиксированная сила отталкивания

footballBlock.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX - footballBlock.getBoundingClientRect().left;
  const mouseY = event.clientY - footballBlock.getBoundingClientRect().top;

  const deltaX = mouseX - ballX;
  const deltaY = mouseY - ballY;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance < ballHalfWidth) {
    const angle = Math.atan2(deltaY, deltaX);

    const newBallX = ballX - force * Math.cos(angle);
    const newBallY = ballY - force * Math.sin(angle);

    const maxWidth = footballBlock.clientWidth - ballWidth;
    const maxHeight = footballBlock.clientHeight - ballHeight;
    const x = Math.min(Math.max(newBallX - ballHalfWidth, 0), maxWidth);
    const y = Math.min(Math.max(newBallY - ballHalfHeight, 0), maxHeight);

    const dx = (x - ballX) * 0.05;
    const dy = (y - ballY) * 0.05;

    ballX += dx;
    ballY += dy;

    ball.style.left = ballX - ballHalfWidth + 'px';
    ball.style.top = ballY - ballHalfHeight + 'px';
  }
});
