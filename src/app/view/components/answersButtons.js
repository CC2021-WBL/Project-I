import elementCreator from '../../utils/elementCreator';

function answersButtons(question) {
  const buttons = [];
  question.answers.forEach((button, index) => {
    buttons.push(
      elementCreator(
        'button',
        { class: 'game__mode-rules-answrBtn' },
        question.answers[index],
      ),
    );
  });

  return buttons;
}

export default answersButtons;
