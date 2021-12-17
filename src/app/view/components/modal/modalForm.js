import elementCreator from '../../../utils/elementCreator';

function modalForm() {
  const modalInput = elementCreator(
    'input',
    { class: 'modal__input' },
    'Input',
  );
  const modalButton = elementCreator(
    'div',
    { class: 'modal__button' },
    'Save result and return to lobby!',
  );

  const modalFormConstructor = elementCreator(
    'div',
    { class: 'modal__text' },
    modalInput,
    modalButton,
  );
  return modalFormConstructor;
}
export default modalForm;
