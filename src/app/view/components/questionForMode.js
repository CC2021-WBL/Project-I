import elementCreator from '../../utils/elementCreator';

const questionForMode = (mode) => {
  const questions = {
    Students: "Who is this Hogwart's student?",
    Staff: "Who is this from Hogwart's staff?",
    Houses: 'To which house do they belong\n?',
  };
  return elementCreator('div', {}, `MODE: ${questions[mode]}`);
};

export default questionForMode;
