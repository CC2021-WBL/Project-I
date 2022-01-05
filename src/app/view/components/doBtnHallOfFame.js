import elementCreator from '../../utils/elementCreator';

function doBtnHallOfFame(text) {
  const imageCup = elementCreator('span', {
    class: 'game__button-icon fas fa-trophy',
  });

  const hofButton = elementCreator(
    'button',
    {
      class: 'game__button game__button--hof',
    },
    imageCup,
    text,
  );

  return hofButton;
}

export default doBtnHallOfFame;
