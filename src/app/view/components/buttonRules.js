import elementCreator from '../../utils/elementCreator';
// import HallOfFameBtn from '../../../../static/assets/img/HallOfFameBtn.svg';

export default function buttonRules(text) {
  // eslint-disable-next-line prettier/prettier
  const rulesIcon = elementCreator('span', {
    class: 'rules-icon fas fa-graduation-cap',
  });

  const buttonCreator = elementCreator(
    'button',
    {
      class: 'game__button game__button--rules',
    },
    rulesIcon,
    text,
  );

  return buttonCreator;
}
// dzialanie przycisku - eventlistener
// doBtnHallOfFame.map((button) =>
//   doBtnHallOfFame.addEventListener('click', () => {
//     clearActive(modeButtons);
//     doBtnHallOfFame.classList.add('active');
//     window.app.changeGameMode(button.textContent);
//   }),
// );

// export default doBtnHallOfFame;
