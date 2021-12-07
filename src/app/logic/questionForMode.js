export const questionForMode = (mode) => {
  const questions = {
    People: 'Who is this character?',
    Houses: 'What is this house?',
    Wands: 'Whose is this wand?',
  };

  if (mode === 'People' || mode === 'Houses' || mode === 'Wands') {
    const modeQuestion = `MODE: ${questions[mode]}`;
    document.querySelector('.game__mode').textContent = modeQuestion;
  } else {
    throw new Error('Unsuported game type');
  }
};
