/* eslint-disable no-plusplus */
import elementCreator from '../../utils/elementCreator';
import imgWand from '../../../../static/assets/img/wand.png';
import elementInjector from '../../utils/elementInjector';

function wand(gameTime) {
  const imgForWand = elementCreator('img', {
    src: imgWand,
    alt: 'The shaft of the wand',
  });

  const gameTimerWand = elementCreator('div', { class: 'game-timer__wand' });

  const gameTimerWandInner = elementCreator('div', { class: 'inner' });

  elementInjector(gameTimerWand, [gameTimerWandInner]);

  const timeStart = gameTime * 60; // IN SECONDS

  let time = timeStart;

  const countDown = setInterval(() => {
    time--;
    const progressWidth = (time / timeStart) * 100;

    const inner = document.querySelector('.inner');
    if (time > 0) {
      inner.style.width = `${progressWidth}%`;
    } else {
      clearInterval(countDown);
      inner.style.width = '0%';
      inner.style.border = 'none';
    }
  }, 1000);
  return [imgForWand, gameTimerWand];
}

export default wand;
