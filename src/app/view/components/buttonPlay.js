import elementCreator from '../../utils/elementCreator';

const buttonPlay = elementCreator(
  'button',
  { class: 'buttonPlay' },
  `Play the game`,
);

/* buttonPlay.addEventListener('click', () => {
  window.app.startGame();
}); */

export default buttonPlay;
