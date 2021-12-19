import elementCreator from '../../utils/elementCreator';

const questionForMode = (mode) => {
  const questions = {
    students: "Who is this Hogwart's student?",
    staff: "Who is this from Hogwart's staff?",
    houses: 'To which house do they belong\n?',
  };
  return elementCreator('h1', {}, `MODE: ${questions[mode]}`);
};

export default questionForMode;
