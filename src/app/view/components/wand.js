import elementCreator from '../../utils/elementCreator';
import displayTimerText from './displayTimerText';

export default function displayWand(timeLeft, _timeStart) {
  const timerWrapper = elementCreator('div', {
    class: 'game-timer__text-wrapper',
  });

  // Add initial timer text
  const initialTimerText = displayTimerText(timeLeft);
  timerWrapper.appendChild(initialTimerText);

  const wandImg = new URL(
    '../../../../static/assets/img/wand.png',
    import.meta.url,
  );
  const image = elementCreator('img', {
    class: 'game-timer__image',
    src: wandImg.href,
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

  // Use CSS animation for smooth progress
  if (timeLeft === 0) {
    wandInner.style.width = '0%';
    wandInner.style.animation = 'none';
  } else {
    // Set animation duration to remaining time
    wandInner.style.animationDuration = `${timeLeft}s`;
    wandInner.style.animationPlayState = 'running';
  }

  return fullWand;
}
