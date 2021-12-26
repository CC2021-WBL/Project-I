import elementCreator from '../../../utils/elementCreator';

function modalForm() {
  const modalInput = elementCreator(
    'input',
    { class: 'modal__input' },
    'Input',
  );
  const modalButton = elementCreator(
    'button',
    { class: 'game__button game__button--orange' },
    'Save result and return to lobby!',
  );

  const modalFormConstructor = elementCreator(
    'div',
    { class: 'modal__form' },
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
