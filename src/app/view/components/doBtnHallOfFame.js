import elementCreator from '../../utils/elementCreator';
import HallOfFameBtn from '../../../../static/assets/img/HallOfFameBtn.svg';

function doBtnHallOfFame(text) {
  // eslint-disable-next-line prettier/prettier
  const imageCup = elementCreator('img', {
    src: HallOfFameBtn,
    class: 'game__button-icon',
    alt: 'Victory Cup',
  });

  // let buttonCreator;

  // if (typeof mode === 'undefined') {
  //   buttonCreator = elementCreator(
  //     'button',
  //     {
  //       class: 'game__button game__button--disabled',
  //       disabled: 'disabled',
  //     },
  //     imageCup,
  //     text,
  //   );
  // } else {
  const hofButton = elementCreator(
    'button',
    {
      class: 'game__button',
    },
    imageCup,
    text,
  );
  // }

  hofButton.addEventListener('click', () => {
    window.app.view.toggleHofView(window.app.model.gameMode);
    console.log('toggleHofView zawiadomiony przez eventListener');
  });
  // this.render('.game__btns', doBtnHallOfFame('hof'), buttonPlay('Play'));

  return hofButton;
}

export default doBtnHallOfFame;
