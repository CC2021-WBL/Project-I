export const questionForMode = (mode) => {
  const questions = {
    People: 'Who is this character?',
    Houses: 'What is this house?',
    Wands: 'Who this wand belongs to?',
  };

  const modeQuestion = `MODE: ${questions[mode]}`;

  const el = document.createElement('p');
  document.body.appendChild(el);
  el.classList.add('.game-main__content-mode');
  el.textContent = modeQuestion;
};
