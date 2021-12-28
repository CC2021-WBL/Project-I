import elementCreator from '../../utils/elementCreator';

/**
 * At this moment our parameter for this function is question
 * @param question
 * question as an object with answers property (answers as array)
 * this function create buttons and return an array of buttons
 * @returns {*[]}
 */

function answersButtons(question) {
  const buttons = [];
  question.answers.forEach((button, index) => {
    buttons.push(
      elementCreator(
        'button',
        { class: 'game__answer' },
        question.answers[index],
      ),
    );
  });

  // buttons.map((button) =>
  //   button.addEventListener('click', () => {
  // @TODO here we add in the future some function
  //   }),
  // );

  return buttons;
}

export default answersButtons;
