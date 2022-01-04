import obj from '../../../../tests/localStorage/przykladowyranking';

// tablica zlozona z obiektow - definicja trybu gry //
// pierwszy obiekt w tablicy: easy, drugi: medium, trzeci: hard //
const arrStudents = [obj.students_easy, obj.students_medium, obj.students_hard];
const arrHouses = [obj.houses_easy, obj.houses_medium, obj.houses_hard];
const arrStaff = [obj.staff_easy, obj.staff_medium, obj.staff_hard];

function getHofData(mode, level, place, property) {
  const _mode = mode.toLowerCase();
  const _level = level.toLowerCase();

  let selectedLevel;
  if (_level === 'easy') {
    selectedLevel = 0;
  } else if (_level === 'medium') {
    selectedLevel = 1;
  } else if (_level === 'hard') {
    selectedLevel = 2;
  } else {
    throw Error('Wrong level data');
  }

  let selectedMode;
  if (_mode === 'staff') {
    selectedMode = arrStaff;
  } else if (_mode === 'students') {
    selectedMode = arrStudents;
  } else if (_mode === 'houses') {
    selectedMode = arrHouses;
  } else {
    throw Error('Wrong mode data');
  }

  let selectedPlace;
  if (place === '1') {
    selectedPlace = 0;
  } else if (place === '2') {
    selectedPlace = 1;
  } else if (place === '3') {
    selectedPlace = 2;
  } else {
    throw Error('Wrong place data');
  }

  // console.log(`wybrane: ${mode}, ${level}, ${place}`);
  // console.log(typeof selectedMode[selectedLevel][selectedPlace][property]);
  if (!selectedLevel || selectedMode[selectedLevel].length < selectedPlace) {
    // console.log('No ranking data in local storage!');
  } else return selectedMode[selectedLevel][selectedPlace][property];
}

export default getHofData;
