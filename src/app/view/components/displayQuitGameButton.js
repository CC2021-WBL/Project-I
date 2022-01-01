import elementCreator from '../../utils/elementCreator';

export default function displayQuitGameButton() {
  // @TODO napisz funkcję która podmienia style
  // const backChange = document.querySelector('.game__mode-rules');
  // backChange.style.background = 'none';
  // backChange.style.boxShadow = 'none';
  // -----------
  const quitElem = elementCreator('i', {
    class: 'far fa-times-circle',
  });

  const quitGameButton = elementCreator(
    'div',
    { class: 'quit-game' },
    'Quit Game',
    quitElem,
  );

  return quitGameButton;
}
