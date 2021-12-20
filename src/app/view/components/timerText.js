import elementCreator from '../../utils/elementCreator';

function timerCountdown(time) {
  const timer = elementCreator('p', { class: 'game-timer__text' });
  timer.innerHTML = `${time}`;

  console.log('TIMERTEXT DZIAŁA');

  if (time < -1) {
    console.log('czas mniejszy od');
  } else if (time < 20) {
    timer.style.color = 'rgba(255, 0, 0, 0.8)';
  }

  return timer;
}

export default timerCountdown;
