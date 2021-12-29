import elementCreator from '../../utils/elementCreator';

// const displayInitialMainText = () => {
//   const textPartTwo = elementCreator(
//     'p',
//     { class: 'game__mode-rules-text' },
//     'Let’s find out if you are true wizard or regular  muggle!',
//   );

//   const textPartOne = elementCreator(
//     'p',
//     { class: 'game__mode-rules-text' },
//     'Test yourself and check if you know all  of the Hogwart’s secrets. Pick the game mode from main menu and answer all the question we prepared for you.',
//     textPartTwo,
//   );

//   const fullElement = textPartOne;

//   return fullElement;
// };

// export default displayInitialMainText;

const displayInitialMainText = [
  elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    'Lets find out if you are true wizard or regular  muggle!',
  ),
  elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    'jezuzmaria',
    // `Test yourself and check if you know all  of the Hogwart’s secrets. Pick the game mode from main menu and answer all the question we prepared for you.`,
  ),
];

// displayInitialMainText.map((p) =>
//   button.addEventListener('click', () => {
//     clearActive(levelButtons);
//     button.classList.add('active');
//   }),
// );

export default displayInitialMainText;
