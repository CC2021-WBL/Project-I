import elementCreator from '../../utils/elementCreator';

function hofTable() {
  // (Definicja) naglowkow
  const tableHead1 = elementCreator(
    'td',
    { class: 'hof__table hof__table-header' },
    'Place',
  );
  const tableHead2 = elementCreator(
    'td',
    { class: 'hof__table hof__table-header' },
    'Player',
  );
  const tableHead3 = elementCreator(
    'td',
    { class: 'hof__table hof__table-header' },
    'Answered',
  );
  //
  // (Definicja) mniejszych bloków (table row)
  //
  const tableRow1stPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table hof__table-place' }, '1'),
    elementCreator(
      'td',
      { class: 'hof__table hof__table--player' },
      'Anna Maria',
    ),
    elementCreator('td', { class: 'hof__table hof__table-answered' }, '30/30'),
  );
  const tableRow2ndPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table hof__table-place' }, '2'),
    elementCreator(
      'td',
      { class: 'hof__table hof__table--player' },
      'Maria Janiak',
    ),
    elementCreator('td', { class: 'hof__table hof__table-answered' }, '20/30'),
  );
  const tableRow3rdPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table hof__table-place' }, '3'),
    elementCreator(
      'td',
      { class: 'hof__table hof__table--player' },
      'Jopek Czesław',
    ),
    elementCreator('td', { class: 'hof__table hof__table-answered' }, '10/30'),
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
