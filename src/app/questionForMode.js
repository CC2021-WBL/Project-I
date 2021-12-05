export const questionForMode = (mode) => {
  const questions = {
    People: 'Who is this character?',
    Houses: 'What is this house?',
    Wands: 'Who this wand belongs to?',
  };

  const modeQuestion = `MODE: ${questions[mode]}`;

  document.querySelector('.game__mode').textContent = modeQuestion;
};
