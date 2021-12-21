import elementCreator from '../../utils/elementCreator';

// const tylko do testów, docelowo time powinien być pobierany z zewnątrz
// const time = 45;

export default function displayTimerText(time) {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  const timer = elementCreator('p', { class: 'game-timer__text' });

  if (time <= 20) {
    timer.style.color = 'rgba(255, 0, 0, 0.8)';
  }

  if (time < 10 || time % 60 === 0) {
    timer.innerHTML = `Time Left: ${min}m 0${sec}s`;
  } else {
    timer.innerHTML = `Time Left: ${min}m ${sec}s`;
  }
  // console.log(timerCreator);
  return timer;
}
