const GAME_MODES = {
  students: {
    question: 'Who is this student?',
    urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
    lastId: '29',
  },
  staff: {
    question: 'Who is this staff?',
    urlAdress: 'http://hp-api.herokuapp.com/api/characters/staff',
    lastId: '21',
  },
  houses: {
    question: 'From which house is this student?',
    urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
    lastID: '29',
  },
};

const ONE_SECOND_MILLIS = 1000;

const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS
  ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS
  : 120 * ONE_SECOND_MILLIS;

const HP_API_BASE_URL =
  process.env.HP_API_BASE_URL || 'https://hp-api.herokuapp.com/api/students';

// lastId equals amount Of ID - 1 (numeration od IDs started from 0)
