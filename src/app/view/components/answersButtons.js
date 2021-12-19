import elementCreator from '../../utils/elementCreator';

function answersButtons(question) {
  const buttons = [];
  question.answers.forEach((button, index) => {
    buttons.push(
      elementCreator(
        'button',
        { class: 'answerButton' },
        question.answers[index],
      ),
    );
  });

  buttons.map((button) =>
    button.addEventListener('click', () => {
      window.app.checkPlayerAnswer(question.rightAnswer, button.innerHTML);
      window.app.generateAndShowQuestion();
    }),
  );

  return buttons;
}

export default answersButtons;
