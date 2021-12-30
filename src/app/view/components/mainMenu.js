import elementCreator from '../../utils/elementCreator';

const modeButtons = [
  elementCreator('button', { class: 'button' }, 'Students'),
  elementCreator('button', { class: 'button' }, 'Houses'),
  elementCreator('button', { class: 'button' }, 'Staff'),
];
// do przeniesienia RS
modeButtons.map((button) =>
  button.addEventListener('click', () => {
    clearActive(modeButtons);
    button.classList.add('active');
    window.app.changeGameMode(button.textContent);
    console.log('modeButton zadzialal');
  }),
);

export default modeButtons;
