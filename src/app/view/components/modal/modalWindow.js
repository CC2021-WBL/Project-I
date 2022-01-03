import elementCreator from '../../../utils/elementCreator';
import modalDetails from './modalDetails';
import modalForm from './modalForm';
import calculatePoints from '../../../logic/calculatePoints';

function ModalWindow(gameData) {
  // parametry//
  const modalHeader = elementCreator(
    'h2',
    { class: 'modal__header' },
    'Game Over',
  );
  const modalText = elementCreator(
    'p',
    { class: 'modal__text' },
    `This is magic! You have answered  // 23 questions! Congratulations!`,
  );

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

export default ModalWindow;
