import elementCreator from '../../../utils/elementCreator';
import modalTable from './modalTable';

function modalDetails(gameData) {
  const detailsHeader = elementCreator(
    'div',
    { class: 'modal__text' },
    'Game details',
  );

  const modalTab = modalTable(gameData);
  const detailsContainer = elementCreator(
    'div',
    { class: 'details' },
    detailsHeader,
    modalTab,
  );
  return detailsContainer;
}

export default modalDetails;
