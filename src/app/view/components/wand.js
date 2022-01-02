import elementCreator from '../../utils/elementCreator';
import img from '../../../../static/assets/img/wand.png';

export default function displayWand(timeLeft, timeStart) {
  const timerWrapper = elementCreator('div', {
    class: 'game-timer__text-wrapper',
  });

  const image = elementCreator('img', {
    class: 'game-timer__image',
    src: img,
    alt: 'The shaft of the wand',
  });

  const wandInner = elementCreator('div', {
    class: 'game-timer__wand-inner',
  });

  const wand = elementCreator(
    'div',
    {
      class: 'game-timer__wand',
    },
    wandInner,
  );

  const wandWrapper = elementCreator(
    'div',
    {
      class: 'game-timer__wand-wrapper',
    },
    image,
    wand,
  );

  const fullWand = [wandWrapper, timerWrapper];

  // const innerPart = document.getElementsByClassName('game-timer__wand-inner');
  if (timeLeft === 0) {
    wandInner.style.width = '0%';
  } else {
    const progressWidth = (timeLeft / timeStart) * 100;

    wandInner.style.width = `${progressWidth}%`;
  }

  return fullWand;
}

// displayWand();
// start.addEventListener('click', wand);
