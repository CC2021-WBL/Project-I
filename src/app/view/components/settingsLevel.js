import elementCreator from '../../utils/elementCreator';

function levelButtons(text) {
  const levelButton1 = elementCreator('div', { class: 'game__mode' }, text);
  const levelButton2 = elementCreator('div', { class: 'game__mode' }, text);
  const buttonContainer = elementCreator(
    'div',
    { class: '' },
    levelButton1,
    levelButton2,
  );
  const buttonsLvl = elementCreator('div', { class: '' }, buttonContainer);
  return buttonsLvl;
}
export default levelButtons;
