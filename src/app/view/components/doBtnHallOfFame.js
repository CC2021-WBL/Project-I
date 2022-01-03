import elementCreator from '../../utils/elementCreator';
import HallOfFameBtn from '../../../../static/assets/img/HallOfFameBtn.svg';

function doBtnHallOfFame(text) {
  // eslint-disable-next-line prettier/prettier
  const imageCup = elementCreator('img', {
    src: HallOfFameBtn,
    class: 'game__button-icon',
    alt: 'Victory Cup',
  });

  const hofButton = elementCreator(
    'button',
    {
      class: 'game__button game__button-hof',
    },
    imageCup,
    text,
  );

  return hofButton;
}

export default doBtnHallOfFame;
