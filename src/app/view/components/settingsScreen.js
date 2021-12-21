import elementCreator from '../../utils/elementCreator';

function levelHeader(text) {
  const chooseLevel = elementCreator('div', { class: 'game__mode' }, text);
  return chooseLevel;
}
export default levelHeader;
