import elementCreator from '../../utils/elementCreator';
import getHofData from './getHofData';

function hofTable(mode, level) {
  if (level === 'easy') {
    const altText = elementCreator(
      'p',
      { class: 'hof__table-alttxt' },
      'Easy mode has no ranking available!!!',
    );
    return altText;
  }

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
    'Points',
  );

  const tableRow1stPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table-place' }, '1'),
    elementCreator(
      'td',
      { class: 'hof__table-player1' },
      `${getPlayerNameOrDefaultName(mode, level, '1')}`,
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
      `${getPlayerNameOrDefaultName(mode, level, '2')}`,
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
      `${getPlayerNameOrDefaultName(mode, level, '3')}`,
    ),
    elementCreator(
      'td',
      { class: 'hof__table-answered3' },
      `${getHofData(mode, level, '3', 'result')}`,
    ),
  );

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

function getPlayerNameOrDefaultName(mode, level, place) {
  if (getHofData(mode, level, place, 'name') === '') {
    return 'Noname Muggle';
  }
  return getHofData(mode, level, place, 'name');
}

export default hofTable;
