import elementCreator from '../../utils/elementCreator';

function buttonWhite(text) {
  const buttonCreatorWhite = elementCreator(
    'button',
    { class: 'game__button' },
    text,
  );
  return buttonCreatorWhite;
}
export default buttonWhite;
