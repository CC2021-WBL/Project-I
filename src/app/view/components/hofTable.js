import elementCreator from '../../utils/elementCreator';

// importy do propozycji funkcji
import getHofData from '../../../../tests/getHofDataTest';
import obj from './../../../../tests/funkcja-testowa';
const data = obj;

function hofTable(mode, level, data) {
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
 
  // propozycja uzupełniania danych wywołując funkcję
  /*   elementCreator(
      'td',
      { class: 'hof__table-player' },
      getHofData(mode, level, data, 1, 'name'),
    ), */

    elementCreator('td', { class: 'hof__table-player' }, 'Anna Maria'),
    elementCreator('td', { class: 'hof__table-answered' }, '30/30'),
  );
  const tableRow2ndPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table-place' }, '2'),
    elementCreator('td', { class: 'hof__table-player' }, 'Maria Janiak'),
    elementCreator('td', { class: 'hof__table-answered' }, '20/30'),
  );
  const tableRow3rdPlace = elementCreator(
    'tr',
    {},
    elementCreator('td', { class: 'hof__table-place' }, '3'),
    elementCreator('td', { class: 'hof__table-player' }, 'Jopek Czesław'),
    elementCreator('td', { class: 'hof__table-answered' }, '10/30'),
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

function getHofData(mode, level, obj, place, property) {
  let index;
  if (level === 'medium') {
    index = 1;
  } else if (level === 'hard') {
    index = 2;
  } else {
    throw Error('Wrong level data');
  }
  const students = [obj.students_easy, obj.students_medium, obj.students_hard];
  const houses = [obj.houses_easy, obj.houses_medium, obj.houses_hard];
  const staff = [obj.staff_easy, obj.staff_medium, obj.staff_hard];

  const { name } = mode[index];
  const { result } = mode[index];
  return mode[index][place][property];
}
