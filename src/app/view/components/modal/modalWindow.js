import elementCreator from '../../../utils/elementCreator';
import modalDetails from './modalDetails';
import modalForm from './modalForm';

function ModalWindow() {
  // parametry//
  const modalHeader = elementCreator(
    'h2',
    { class: 'modal__header' },
    'Game Over',
  );
  const modalText = elementCreator(
    'p',
    { class: 'modal__text' },
    'This is  This is magic! During 1 minute you have answered 10 / 23 questions. And Computer quessed 5 / 23.Magic!.',
  );

  // DETAILS SECTION
  const detailsContainer = modalDetails();

  // FORMS SECTION

  const modalFormSection = modalForm();

  // modalContainer construction //
  const modalContainer = elementCreator(
    'div',
    {
      class: 'modal__container',
    },

    modalHeader,
    modalText,
    detailsContainer,
    modalFormSection,
  );
  const modal = elementCreator('div', { className: 'modal' }, modalContainer);

  return modal;
}

export default ModalWindow;
