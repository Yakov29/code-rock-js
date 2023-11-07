const ball = document.querySelector('.ball');
const footballBlock = document.querySelector('.football-block');

footballBlock.addEventListener('mousemove', (event) => {
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;
  const offsetX = ballWidth / 2;
  const offsetY = ballHeight / 2;
  let x = event.clientX - footballBlock.getBoundingClientRect().left - offsetX;
  let y = event.clientY - footballBlock.getBoundingClientRect().top - offsetY;

  // Ограничиваем координаты мяча, чтобы он не выходил за пределы дива
  x = Math.min(Math.max(x, 0), footballBlock.clientWidth - ballWidth);
  y = Math.min(Math.max(y, 0), footballBlock.clientHeight - ballHeight);

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
});
