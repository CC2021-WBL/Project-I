import elementCreator from '../../utils/elementCreator';
import clearActive from '../../utils/clearActive';

const modeButtons = [
  elementCreator('button', { class: 'button' }, 'Students'),
  elementCreator('button', { class: 'button' }, 'Houses'),
  elementCreator('button', { class: 'button' }, 'Staff'),
];

modeButtons.map((button) =>
  button.addEventListener('click', () => {
    clearActive(modeButtons);
    button.classList.add('active');
    window.app.changeGameMode(button.textContent.toLowerCase());
  }),
);

export default modeButtons;
