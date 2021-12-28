import elementCreator from '../../utils/elementCreator';

function buttonRules(text) {
  const buttonCreator = elementCreator(
    'button',
    { class: 'game__button game__button--orange' },
    text,
  );
  return buttonCreator;
}
export default buttonRules;
