import elementCreator from '../../utils/elementCreator';

function buttonPlay(text) {
  const buttonCreator = elementCreator('button', { class: 'buttonPlay' }, text);
  return buttonCreator;
}
export default buttonPlay;
