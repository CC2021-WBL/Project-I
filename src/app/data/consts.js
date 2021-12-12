export const GAME_MODES = {
  Students: {
    gamemode: 'Students',
    imgSubfolder: 'students',
    question: 'Who is this student?',
    urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
    ids: '28',
    answerProperty: 'name',
  },
  Staff: {
    gamemode: 'Staff',
    imgSubfolder: 'staff',
    question: 'Who is this staff?',
    urlAdress: 'http://hp-api.herokuapp.com/api/characters/staff',
    ids: '20',
    answerProperty: 'name',
  },
  Houses: {
    gamemode: 'Houses',
    imgSubfolder: 'students',
    question: 'From which house is this student?',
    urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
    ids: '28',
    answerProperty: 'house',
  },
};

export const RANKINGS_TEMPLATE = {
  students: [],
  staff: [],
  houses: [],
};

export const DEFAULT_BASE_URL = GAME_MODES.students.urlAdress;

export const ONE_SECOND_MILLIS = 1000;

export const ONE_MINUTE_SECONDS = 60;

export const DEFAULT_MAX_TIME = 2; // in minutes
