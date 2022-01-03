import elementCreator from '../../../utils/elementCreator';
import prepareDataForDetailsTable from './prepareDatForDetails';

function modalTable(gameData = []) {
  console.log(gameData);
  let answersRows = (gameData = []) => {
    answersRows = [];
    for (let i = 0; i < gameData.length; i++) {
      const element = gameData[i];
      console.log(element);
      const imageCell = elementCreator(
        'td',
        { class: 'details__td' },
        'picture',
      );
      const playerAnswer = elementCreator(
        'td',
        { class: 'details__td' },
        element.playerAnswer,
      );
      const correctAnswer = elementCreator(
        'td',
        { class: 'details__td' },
        element.anwswer,
      );
      const newRow = elementCreator(
        'tr',
        { class: 'details__tbody' },
        imageCell,
        playerAnswer,
        correctAnswer,
      );
      answersRows.push(newRow);
    }
    // return newRow;
  };

  // answersRows should be iterable
  const table = answersRows(gameData);
  console.log(table);

  const tableBody = elementCreator('tbody', {}, answersRows(gameData));

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
