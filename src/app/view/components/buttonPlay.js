import elementCreator from '../../utils/elementCreator';

function buttonPlay(text) {
  const buttonCreator = elementCreator(
    'button',
    { class: 'game__button game__button--orange' },
    text,
  );
  return buttonCreator;
}
export default buttonPlay;
