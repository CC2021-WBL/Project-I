import elementCreator from '../../../utils/elementCreator';

// function modalTable() {
//   const modalTableBody = elementCreator(
//     'table',
//     { class: 'details__table' },
//     'Here Comes the table',
//   );
//   const tableCell1 = elementCreator(
//     'td',
//     { class: 'column_1' },
//     'Gamee Picture',
//   );
//   const tableCell2 = elementCreator(
//     'td',
//     { class: 'column_2' },
//     'Human Answer',
//   );
//   const tableCell3 = elementCreator(
//     'td',
//     { class: 'column_3' },
//     'Correct Answer',
//   );

//   const TableConstructor = elementCreator(
//     'div',
//     { class: 'modal__text' },
//     modalTableBody,
//     tableCell1,
//     tableCell2,
//     tableCell3,
//   );

//   return TableConstructor;
// }
// export default modalTable;

function ModalScoreTable() {
  const imageCell = elementCreator(
    'td',
    {
      class: 'details__table__image',
    },
    'image',
  );
  const playerAnswer = elementCreator(
    'td',
    {
      class: 'details__table__image',
    },
    'player answear',
  );
  const correctAnswer = elementCreator(
    'td',
    {
      class: 'details__table__image',
    },
    'correct answear',
  );
  const newRow = elementCreator(
    'tr',
    {},
    imageCell,
    playerAnswer,
    correctAnswer,
  );
  return newRow;
});


export default ModalScoreTable;
