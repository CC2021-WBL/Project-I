import elementCreator from '../../../utils/elementCreator';
import displayImage from '../displayImage';

function modalTable(gameData) {
  function getAnswersRows() {
    const gameDetails = gameData.detailQuestionData;
    const answersRows = [];
    for (let i = 0; i < gameDetails.length; i++) {
      const element = gameDetails[i];
      const name = element.playerAnswer;
      const { answer } = element;
      const imageBase = element.imageBase64;

      const imageCell = elementCreator(
        'td',
        { class: 'details__td' },
        displayImage(imageBase, 'very handsome someone'),
      );
      const playerAnswer = elementCreator('td', { class: 'details__td' }, name);
      const correctAnswer = elementCreator(
        'td',
        { class: 'details__td' },
        answer,
      );
      const newRow = elementCreator(
        'tr',
        { class: 'details__tr' },
        imageCell,
        playerAnswer,
        correctAnswer,
      );
      answersRows.push(newRow);
    }
    return answersRows;
  }

  // answersRows should be iterable
  const table = getAnswersRows(gameData);

  const tableBody = elementCreator('tbody', {}, ...table);

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
