import elementCreator from '../../utils/elementCreator';

export default function displayTimerText(timeInSeconds) {
  const min = Math.floor(timeInSeconds / 60);
  const sec = timeInSeconds % 60;

  const timer = elementCreator('p', { class: 'game-timer__text' });

  if (timeInSeconds <= 20) {
    timer.style.color = 'rgba(255, 0, 0, 0.8)';
  }

  if (timeInSeconds < 10 || timeInSeconds % 60 === 0) {
    timer.innerText = `Time Left: ${min}m 0${sec}s`;
  } else {
    timer.innerText = `Time Left: ${min}m ${sec}s`;
  }
  return timer;
}
