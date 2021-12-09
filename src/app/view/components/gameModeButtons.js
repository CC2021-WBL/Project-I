import elementCreator from '../../utils/elementCreator';

function makeButtonActive(element) {
  element.classList.add('active');
}
function makeButtonInactive(element) {
  element.classList.remove('active');
}

function makeAllButtonsInactive(buttons) {
  buttons.forEach((button) => {
    makeButtonInactive(button);
  });
}

const gameModeButtons = [
  elementCreator(
    'button',
    {
      class: 'button',
    },
    'Students',
  ),
  elementCreator(
    'button',
    {
      class: 'button',
    },
    'Staff',
  ),
  elementCreator(
    'button',
    {
      class: 'button',
    },
    'Houses',
  ),
];

gameModeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    makeAllButtonsInactive(gameModeButtons);
    makeButtonActive(button);
    window.app.gameModeChoosen(button.innerText);
  });
});

export default gameModeButtons;
