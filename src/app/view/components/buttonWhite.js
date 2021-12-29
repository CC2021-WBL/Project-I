import elementCreator from '../../utils/elementCreator';

function buttonWhite(text) {
  const buttonCreatorWhite = elementCreator(
    'button',
    { class: 'game__button game__button--settingsBtn' },
    text,
  );
  return buttonCreatorWhite;
}
export default buttonWhite;
