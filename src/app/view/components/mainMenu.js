import elementCreator from '../../utils/elementCreator.js';
import clearActive from '../../utils/clearActive.js';

const modeButtons = [
  elementCreator('button', { class: 'button' }, 'Students'),
  elementCreator('button', { class: 'button' }, 'Houses'),
  elementCreator('button', { class: 'button' }, 'Staff'),
];

modeButtons.map(button =>
  button.addEventListener('click', () => {
    clearActive(modeButtons);
    button.classList.add('active')
    window.app.changeGameMode(button.textContent);
  }),
);

export default modeButtons;
