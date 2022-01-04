import elementCreator from '../../utils/elementCreator';

function displayTimerText(timeInSeconds) {
  const min = Math.floor(timeInSeconds / 60);
  const sec = timeInSeconds % 60;

  const timer = elementCreator('p', { class: 'game-timer__text' });

  if (timeInSeconds <= 20) {
    timer.style.color = '#E23336';
  }

  if (timeInSeconds < 10 || timeInSeconds % 60 === 0) {
    timer.innerText = `Time Left: ${min}m 0${sec}s`;
  } else {
    timer.innerText = `Time Left: ${min}m ${sec}s`;
  }
  return timer;
}

export default displayTimerText;
