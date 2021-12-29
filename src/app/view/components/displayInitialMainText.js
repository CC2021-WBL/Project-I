import elementCreator from '../../utils/elementCreator';

const displayInitialMainText = () => {
  const textPartTwo = elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    'Let’s find out if you are true wizard or regular  muggle!',
  );

  const textPartOne = elementCreator(
    'p',
    { class: 'game__mode-rules-text' },
    'Test yourself and check if you know all  of the Hogwart’s secrets. Pick the game mode from main menu and answer all the question we prepared for you.',
    textPartTwo,
  );

  const fullElement = textPartOne;

  return fullElement;
};

export default displayInitialMainText;
