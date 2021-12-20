import elementCreator from '../../../utils/elementCreator';
import modalTable from './modalTable';

function modalDetails() {
  const detailsHeader = elementCreator(
    'div',
    { class: 'modal__text' },
    'Game details',
  );

  const modalTab = modalTable();
  const detailsContainer = elementCreator(
    'div',
    { class: 'details' },
    detailsHeader,
    modalTab,
  );
  return detailsContainer;
}

export default modalDetails;
