import elementCreator from '../../../utils/elementCreator';
import modalTable from './modalTable';
import ModalDetailsTable from './modalDetailsTableTest';

function modalDetails() {
  const detailsHeader = elementCreator(
    'div',
    { class: 'modal__text' },
    'Game details',
  );
  const detailsTable = modalTable();

  const detailsContainer = elementCreator(
    'div',
    { class: 'modal__text' },
    detailsHeader,
    detailsTable,
    ModalDetailsTable,
  );

  return detailsContainer;
}

export default modalDetails;
