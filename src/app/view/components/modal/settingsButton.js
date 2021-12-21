import elementCreator from '../../../utils/elementCreator';

function buttonSettings(text) {
  const buttonSet = elementCreator('button', { class: 'buttonPlay' }, text);

  return buttonSet;
}
// const openSettings(() => {
//   buttonSet.addEventListener('click', () => {
//     window.app.showSettingsScreen();
//   }),
// );
export default buttonSettings;
