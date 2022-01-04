import elementCreator from '../../utils/elementCreator';

export default function displayQuitGameButton() {
  const quitElem = elementCreator('i', {
    class: 'far fa-times-circle',
  });

  const quitElemText = elementCreator(
    'p',
    {
      class: '.quit-game-text',
    },
    'Quit Game',
  );

  const quitGameButton = elementCreator(
    'div',
    { class: 'quit-game' },
    quitElemText,
    quitElem,
  );

  return quitGameButton;
}
