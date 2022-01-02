import elementCreator from '../../utils/elementCreator';

function displayButtonSettings(text) {
  const createButtonSettings = elementCreator(
    'button',
    { class: 'game__button game__button-settingsBtn' },
    text,
  );
  return createButtonSettings;
}
export default displayButtonSettings;
