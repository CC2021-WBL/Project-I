import elementCreator from '../../utils/elementCreator';
import HallOfFameBtn from '../../../../static/assets/img/HallOfFameBtn.svg';

function buttonHallOfFame(text) {
  // eslint-disable-next-line prettier/prettier
  const imageCup = elementCreator('img', {
    src: HallOfFameBtn,
    class: 'halloffame-icon',
    alt: 'Victory Cup',
  });
  const buttonCreator = elementCreator(
    'button disabled',
    {
      class: 'buttonHallOfFame',
    },
    imageCup,
    text,
  );

  return buttonCreator;
}
export default buttonHallOfFame;
