import elementCreator from '../../utils/elementCreator';
import { GAME_TIME } from '../../data/config';

function buttonPlay(text) {
  const buttonCreator = elementCreator('button', { class: 'buttonPlay' }, text);

  buttonCreator.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(window.app.model.gameModeInfo);
    window.app.startGame(window.app.model.gameModeInfo, GAME_TIME);
  });

  return buttonCreator;
}
export default buttonPlay;
