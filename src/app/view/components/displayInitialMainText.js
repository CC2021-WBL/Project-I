import elementCreator from '../../utils/elementCreator';

const displayInitialMainText = [
  elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    'Lets find out if you are true wizard or regular  muggle!',
  ),
  elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    // 'jezuzmaria',
    `Test yourself and check if you know all  of the Hogwart’s secrets. Pick the game mode from main menu and answer all the question we prepared for you.`,
  ),
];

export default displayInitialMainText;
