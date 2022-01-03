import elementCreator from '../../../utils/elementCreator';

function modalTable(gameData) {
  console.log(gameData);
  function getAnswersRows() {
    const gameDetails = gameData.detailQuestionData;
    let answersRows = [];
    for (let i = 0; i < gameDetails.length; i++) {
      const element = gameDetails[i];
      console.log(element);
      const name = element.playerAnswer;
      const answer = element.answer;
      const imageCell = elementCreator(
        'td',
        { class: 'details__td' },
        'picture',
      );
      const playerAnswer = elementCreator('td', { class: 'details__td' }, name);
      const correctAnswer = elementCreator(
        'td',
        { class: 'details__td' },
        answer,
      );
      const newRow = elementCreator(
        'tr',
        { class: 'details__tbody' },
        imageCell,
        playerAnswer,
        correctAnswer,
      );
      console.log(newRow);
      console.log(answersRows);
      answersRows.push(newRow);
    }
    return answersRows;
  }

  // answersRows should be iterable
  const table = getAnswersRows(gameData);
  console.log(table);

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
