import elementCreator from '../../../utils/elementCreator';
import prepareDataForDetailsTable from './prepareDatForDetails';

function modalTable() {
  const answersRows = () => {
    const imageCell = elementCreator('td', { class: 'details__td' }, 'picture');
    const playerAnswer = elementCreator(
      'td',
      { class: 'details__td' },
      'playerAnswer',
    );
    const correctAnswer = elementCreator(
      'td',
      { class: 'details__td' },
      'correctAnswer',
    );
    const newRow = elementCreator(
      'tr',
      { class: 'details__tbody' },
      imageCell,
      playerAnswer,
      correctAnswer,
    );
    return newRow;
  };

  // answersRows should be iterable
  const tableBody = elementCreator('tbody', {}, answersRows());

  // table headeer
  const tableHeaders = ['Picture', 'You', 'Answer'];
  const tableHeadersElements = tableHeaders.map((header) => {
    const tableHeader = elementCreator(
      'th',
      {
        class: 'details__td',
      },
      header,
    );
    return tableHeader;
  });
  const tableHeadRow = elementCreator(
    'tr',
    { class: 'details__thead' },
    ...tableHeadersElements,
  );

  const tableHead = elementCreator('thead', {}, tableHeadRow);
  const newTable = elementCreator(
    'table',
    {
      class: 'details__table',
    },
    tableHead,
    tableBody,
  );
  return newTable;
}
export default modalTable;
