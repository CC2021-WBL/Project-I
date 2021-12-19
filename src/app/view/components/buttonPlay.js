import elementCreator from '../../utils/elementCreator';

function buttonPlay(text) {
  const buttonCreator = elementCreator('button', { class: 'buttonPlay' }, text);

  buttonCreator.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(window.app.model.gameModeInfo);
    window.app.startGame(window.app.model.gameModeInfo);
  });

  return buttonCreator;
}
export default buttonPlay;
