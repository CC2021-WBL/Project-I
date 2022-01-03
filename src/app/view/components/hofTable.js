import elementCreator from '../../utils/elementCreator';
import getHofData from './getHofData';

function hofTable(mode, level) {
  // console.log(mode);

  if (level === 'easy') {
    const altText = elementCreator(
      'p',
      { class: 'hof__table-alttxt' },
      'Easy mode has no ranking available!!!',
    );
    return altText;
  }
  // (Definicja) naglowkow
  const tableHead1 = elementCreator(
    'td',
    { class: 'hof__table-header' },
    'Place',
  );
  const tableHead2 = elementCreator(
    'td',
    { class: 'hof__table-header' },
    'Player',
  );
  const tableHead3 = elementCreator(
    'td',
    { class: 'hof__table-header' },
    'Answered',
  );

  //
  // (Definicja) mniejszych bloków (table row)
  //
  const tableRow1stPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table-place' }, '1'),
    elementCreator(
      'td',
      { class: 'hof__table-player1' },
      `${getHofData(mode, level, '1', 'name')}`,
    ),
    elementCreator(
      'td',
      { class: 'hof__table-answered1' },
      `${getHofData(mode, level, '1', 'result')}`,
    ),
  );
  const tableRow2ndPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table-place' }, '2'),
    elementCreator(
      'td',
      { class: 'hof__table-player2' },
      `${getHofData(mode, level, '2', 'name')}`,
    ),
    elementCreator(
      'td',
      { class: 'hof__table-answered2' },
      `${getHofData(mode, level, '2', 'result')}`,
    ),
  );
  const tableRow3rdPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table-place' }, '3'),
    elementCreator(
      'td',
      { class: 'hof__table-player3' },
      `${getHofData(mode, level, '3', 'name')}`,
    ),
    elementCreator(
      'td',
      { class: 'hof__table-answered3' },
      `${getHofData(mode, level, '3', 'result')}`,
    ),
  );
  // (Definicja) zlozenie calej tabeli
  const wholeTable = elementCreator(
    'table',
    { class: 'hof__table' },
    tableHead1,
    tableHead2,
    tableHead3,
    tableRow1stPlace,
    tableRow2ndPlace,
    tableRow3rdPlace,
  );

  return wholeTable;
}
export default hofTable;
