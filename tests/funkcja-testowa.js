const obj = {
  students_medium: [
    {
      name: 'Albus Dumbledore Brother',
      result: 451,
    },
    {
      name: 'Rubeus Hagrid',
      result: 300,
    },
    {
      name: 'Severus Snape',
      result: 125,
    },
  ],
  students_hard: [
    {
      name: 'Albus Dumbledore Brother',
      result: 451,
    },
    {
      name: 'Rubeus Hagrid',
      result: 300,
    },
    {
      name: 'Severus Snape',
      result: 125,
    },
  ],
  staff_medium: [
    {
      name: 'Robert Mateja',
      result: 9999,
    },
    {
      name: 'Adam Małysz',
      result: 999,
    },
    {
      name: 'Narcissa Malfoy',
      result: 3,
    },
  ],
  staff_hard: [],
  houses_medium: [
    {
      name: 'Gregory Goyle',
      result: 517,
    },
  ],
  houses_hard: [
    {
      name: 'Hermine Granger',
      result: 999,
    },
    {
      name: 'Vincent Crabbe',
      result: 500,
    },
    {
      name: 'Vic Random',
      result: 400,
    },
  ],
};

/* // przyklad dostepu do wlasciwosci name poprzez wywolanie [0] elementu array
const obiektyHouses = obj.houses_hard[0];
console.log(obiektyHouses.result);
// tablica zlozona z obiektow - definicja trybu gry //
const arrStudents = [obj.students_easy, obj.students_medium, obj.students_hard];
const arrHouses = [obj.houses_easy, obj.houses_medium, obj.houses_hard];
const arrStaff = [obj.staff_easy, obj.staff_medium, obj.staff_hard];
// pierwszy obiekt: easy, drugi: medium, trzeci: hard //
console.log(arrStaff[1]);

const staffMedium = obj.staff_medium;

console.log('pierwszy zawodnik trybu staff:', staffMedium[0]);
console.log('imie:', staffMedium[0].name);
console.log('wynik:', staffMedium[0].result);

console.log('drugi zawodnik trybu staff:', staffMedium[1]);
console.log('imie:', staffMedium[1].name);
console.log('wynik:', staffMedium[1].result);

console.log('trzeci zawodnik trybu staff:', staffMedium[2]);
console.log('imie:', staffMedium[2].name);
console.log('wynik:', staffMedium[2].result);
 */
