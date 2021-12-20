import elementCreator from "../../utils/elementCreator";

const startingMinutes = 1;
let time = startingMinutes * 5;

export async function startCountdown() {
  setInterval(timerCountdown, 1000);
}

export const timer = elementCreator('p', { class: 'game-timer__text' });

function timerCountdown() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timer.innerHTML = `Time Left: ${minutes}m ${seconds}s`;

  time -= 1;

  function timerStop() {
    clearInterval(startCountdown);
  }

  if (time < -1) {
    console.log('czas mniejszy od');
    timerStop();
  } else if (time < 20) {
    timer.style.color = 'rgba(255, 0, 0, 0.8)';
  }

  return timer;
}
