import elementCreator from '../../utils/elementCreator';

function buttonQuitGame(text) {
  const buttonCreator = elementCreator('button', { class: 'buttonPlay' }, text);

  buttonCreator.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('quit game');
    console.log('We add here some function in the future');
  });

  return buttonCreator;
}
export default buttonQuitGame;
