import elementCreator from '../../../utils/elementCreator';

function modalForm() {
  const modalInput = elementCreator(
    'input',
    {
      class: 'modal__input',
      placeholder: 'your nickname',
      type: 'text',
      name: 'name',
      id: 'name',
      required: null,
    },
    'Input',
  );

  const playerFormLabel = elementCreator(
    'label',
    {
      class: 'modal__text',
      for: 'name',
    },
    'Please fill your name to bring glory to your house!',
  );

  const modalButton = elementCreator(
    'button',
    { class: 'game__button game__button-modalBtn' },
    'Save result and return to lobby!',
  );

  const modalFormConstructor = elementCreator(
    'div',
    { class: 'modal__form' },
    playerFormLabel,
    modalInput,
    modalButton,
  );
  function closeModal() {
    const modal = document.querySelector('.modal');
    // modal.classList.toggle('modal__button');
    modal.classList.add('modal__hidden');
  }

  modalButton.addEventListener('click', () => {
    closeModal();
  });

  return modalFormConstructor;
}
export default modalForm;
