import elementCreator from '../../utils/elementCreator';

export default function displayQuitGameButton() {
  const quitElem = elementCreator('i', {
    class: 'far fa-times-circle',
  });

  const quitGameButton = elementCreator(
    'div',
    { class: 'quit-game' },
    'Quit Game',
    quitElem,
  );
  const clearNav = document.querySelector('.header__game-nav');
  clearNav.style.visibility = 'hidden';
  return quitGameButton;
}
