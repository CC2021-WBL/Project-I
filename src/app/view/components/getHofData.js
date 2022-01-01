import obj from '../../../../tests/localStorage/przykladowyranking';

// tablica zlozona z obiektow - definicja trybu gry //
// pierwszy obiekt w tablicy: easy, drugi: medium, trzeci: hard //
const arrStudents = [obj.students_easy, obj.students_medium, obj.students_hard];
const arrHouses = [obj.houses_easy, obj.houses_medium, obj.houses_hard];
const arrStaff = [obj.staff_easy, obj.staff_medium, obj.staff_hard];

function getHofData(mode, level, place, property) {
  mode = mode.toLowerCase();
  level = level.toLowerCase();
  // flow do wyboru poziomu gry
  let selectedLevel;
  if (level === 'easy') {
    selectedLevel = 0;
  } else if (level === 'medium') {
    selectedLevel = 1;
  } else if (level === 'hard') {
    selectedLevel = 2;
  } else {
    throw Error('Wrong level data');
  }
  // flow do wyboru poziomu trudnosci
  if (mode === 'staff') {
    selectedMode = arrStaff;
  } else if (mode === 'students') {
    selectedMode = arrStudents;
  } else if (mode === 'houses') {
    selectedMode = arrHouses;
  } else {
    throw Error('Wrong mode data');
  }
  // flow do selekcji kolejnosci zawodnika
  if (place === '1') {
    selectedPlace = 0;
  } else if (place === '2') {
    selectedPlace = 1;
  } else if (place === '3') {
    selectedPlace = 2;
  } else {
    throw Error('Wrong place data');
  }

  console.log(`wybrane: ${mode}, ${level}, ${place}`);
  console.log(typeof (selectedMode[selectedLevel][selectedPlace][property]))
  if (typeof (selectedMode[selectedLevel][selectedPlace][property]) === 'undefined') { // TODO: tutaj nie dziala w przypadku braku wpisu w źródle danych - wyjaśnić
    console.log('No ranking data in local storage!');
  } else return selectedMode[selectedLevel][selectedPlace][property];
}

export default getHofData;
