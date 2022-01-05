import LocalStorageService from '../../logic/localStorage';

// const _ranking = app.model.localStorageService.loadRankings();
// const hofData = LocalStorageService.loadRankings();

/* const arrStudents = [
  hofData.students_easy,
  hofData.students_medium,
  hofData.students_hard,
];
const arrHouses = [
  hofData.houses_easy,
  hofData.houses_medium,
  hofData.houses_hard,
];
const arrStaff = [hofData.staff_easy, hofData.staff_medium, hofData.staff_hard]; */

function getHofData(mode, level, place, property) {
  const hofData = LocalStorageService.loadRankings();

  const arrStudents = [
    hofData.students_easy,
    hofData.students_medium,
    hofData.students_hard,
  ];
  const arrHouses = [
    hofData.houses_easy,
    hofData.houses_medium,
    hofData.houses_hard,
  ];
  const arrStaff = [
    hofData.staff_easy,
    hofData.staff_medium,
    hofData.staff_hard,
  ];

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

  if (!selectedLevel || selectedMode[selectedLevel].length < selectedPlace) {
    // optional console.log('No ranking data in local storage!');
  } else return selectedMode[selectedLevel][selectedPlace][property];
}

export default getHofData;
