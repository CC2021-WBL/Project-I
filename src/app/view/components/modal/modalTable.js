import elementCreator from '../../../utils/elementCreator';

function modalTable() {
  const tableCell1 = elementCreator(
    'td',
    { class: 'details__text' },
    'Game Picture',
  );
  const tableCell2 = elementCreator(
    'td',
    { class: 'details__text' },
    'Human Answer',
  );
  const tableCell3 = elementCreator(
    'td',
    { class: 'details__text' },
    'Correct Answer',
  );

  const TableConstructor = elementCreator(
    'div',
    { class: 'details__table' },
    tableCell1,
    tableCell2,
    tableCell3,
  );

  return TableConstructor;
}
export default modalTable;

// function chooseStyleAndAnswer(round) {
//   if (!round) {
//     return ['', ''];
//   }
//   return round.isCorrect
//     ? [round.answer, 'details__table__answer--correct']
//     : [round.answer, 'details__table__answer--incorrect'];
// }

// function modalTable(quiz, humanData, computerData) {
//   const {
//     humanAnswers,
//     computerAnswers,
//     rightAnswers,
//     paths,
//   } = prepareDataForDetailsTable(quiz, humanData, computerData);

//   const answersRows = rightAnswers.map((rightAnswer, index) => {
//     const [humanAnswer, humanStyle] = chooseStyleAndAnswer(
//       humanAnswers[index],
//     );
//     const [computerAnswer, computerStyle] = chooseStyleAndAnswer(
//       computerAnswers[index],
//     );
//     const imageToInsert = elementCreator('img', {
//       src: paths[index],
//     });
//     const newImageCell = elementCreator(
//       'td',
//       {
//         className: 'details__table__image',
//       },
//       imageToInsert,
//     );
//     const newHumanAnswer = elementCreator(
//       'td',
//       humanStyle === '' ? {} : { className: humanStyle },
//       humanAnswer,
//     );
//     const newComputerAnswer = elementCreator(
//       'td',
//       computerStyle === '' ? {} : { className: computerStyle },
//       computerAnswer,
//     );
//     const newCorrectAnswer = elementCreator(
//       'td',
//       {
//         className: 'details__table__answer',
//       },
//       rightAnswer,
//     );
//     const newRow = elementCreator(
//       'tr',
//       {},
//       newImageCell,
//       newHumanAnswer,
//       newComputerAnswer,
//       newCorrectAnswer,
//     );
//     return newRow;
//   });

//   // TABLE BODY
//   const tableBody = elementCreator(
//     'tbody',
//     {
//       className: 'details__table__body',
//     },
//     ...answersRows,
//   );

//   // JOIN TOGETHER
//   const tableHeaders = ['', 'You', 'Computer', 'Answer'];
//   const tableHeadersElements = tableHeaders.map((header) => {
//     const tableHeader = elementCreator(
//       'th',
//       {
//         className: 'details__table__head',
//       },
//       header,
//     );
//     return tableHeader;
//   });
//   const tableHeadRow = elementCreator('tr', {}, ...tableHeadersElements);

//   const tableHead = elementCreator('thead', {}, tableHeadRow);
//   const newTable = elementCreator(
//     'table',
//     {
//       className: 'details__table',
//     },
//     tableHead,
//     tableBody,
//   );

//   return newTable;
// }

// export default modalTable;
