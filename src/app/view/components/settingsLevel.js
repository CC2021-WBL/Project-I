import clearActive from '../../utils/clearActive';
import elementCreator from '../../utils/elementCreator';

const levelButtons = [
  elementCreator(
    'button',
    { class: 'game__button game__button--lvlSettings' },
    'Easy',
  ),
  elementCreator(
    'button',
    { class: 'game__button game__button--lvlSettings' },
    'Medium',
  ),
  elementCreator(
    'button',
    { class: 'game__button game__button--lvlSettings' },
    'Hard',
  ),
];

/* levelButtons.map((button) =>
  button.addEventListener('click', () => {
    clearActive(levelButtons);
    button.classList.add('active');
    window.app.changeDifficultyLevel(button.innerText);
  }),
); */

export default levelButtons;
