import elementCreator from '../../../utils/elementCreator';
import modalDetails from './modalDetails';
import modalForm from './modalForm';

function ModalWindow(gameData) {
  const text = chooseText(gameData);
  // parametry//
  const modalHeader = elementCreator(
    'h2',
    { class: 'modal__header' },
    'Game Over',
  );
  const modalText = elementCreator('p', { class: 'modal__text' }, text);

  // DETAILS SECTION
  const detailsContainer = modalDetails(gameData);

  // FORMS SECTION
  const modalFormContainer = modalForm();

  // modalContainer construction //
  const modalContainer = elementCreator(
    'div',
    {
      class: 'modal__container',
    },

    modalHeader,
    modalText,
    detailsContainer,
    modalFormContainer,
  );
  const modal = elementCreator('div', { class: 'modal' }, modalContainer);

  return modal;
}

function chooseText(gameData) {
  const playerPoints = gameData.correctAnswerScore;
  const questions = gameData.askedQuestions;
  let text = '';
  switch (true) {
    case playerPoints < -10:
      text = `Your result: ${playerPoints} / ${questions}. \n"Honestly, if you were any slower, you'd be going backward." — Draco Malfoy`;
      break;

    case playerPoints >= -10 && playerPoints < 1:
      text = `Your result: ${playerPoints} / ${questions}. \n"I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed." ― Hermione Granger`;
      break;

    case playerPoints >= 1 && playerPoints < 11:
      text = `Your result: ${playerPoints} / ${questions}. \n"When in doubt, go to the library." — Ron Weasley " `;
      break;

    case playerPoints >= 11:
      text = `Your result: ${playerPoints} / ${questions}. \n"You're a little scary sometimes, you know that? Brilliant ... but scary." — Ron Weasley`;
      break;

    default:
      text = `This is magic! You've got ${playerPoints}/${questions}  questions! Congratulations!`;
      break;
  }

  return text;
}

export default ModalWindow;
