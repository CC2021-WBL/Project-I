export const GAME_MODES = {
  students: {
    gamemode: 'Students',
    imgSubfolder: 'students',
    question: 'Who is this student?',
    urlAdress: 'https://hp-api.herokuapp.com/api/characters/students',
    ids: 28,
    answerProperty: 'name',
  },
  staff: {
    gamemode: 'Staff',
    imgSubfolder: 'staff',
    question: 'Who is this staff?',
    urlAdress: 'https://hp-api.herokuapp.com/api/characters/staff',
    ids: 20,
    answerProperty: 'name',
  },
  houses: {
    gamemode: 'Houses',
    imgSubfolder: 'students',
    question: 'From which house is this student?',
    urlAdress: 'https://hp-api.herokuapp.com/api/characters/students',
    ids: 28,
    answerProperty: 'house',
  },
};

export const RANKINGS_TEMPLATE = {
  students_medium: [
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
  ],
  students_hard: [
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
  ],
  staff_medium: [
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
  ],
  staff_hard: [
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
  ],
  houses_medium: [
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
  ],
  houses_hard: [
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
    {
      name: 'unranked',
      result: '0',
    },
  ],
};

export const HOGWART_HOUSES = [
  'Gryffindor',
  'Slytherin',
  'Hufflepuff',
  'Ravenclaw',
];

export const INITIAL_GAME_MODE_TEXT = 'Harry Potter Quiz Game';
export const DIFFICULTY_LEVELS = {
  easy: {
    time: null,
    level: 'easy',
  },
  medium: {
    time: 1,
    level: 'medium',
  },
  hard: {
    time: 0.5,
    level: 'hard',
  },
};
export const DEFAULT_DIFFICULTY_LEVEL = 'medium';

// export const INITIAL_GAME_MODE_TEXT = 'Choose category';

// export const INITIAL_MAIN_TEXT = displayInitialMainText();

export const DEFAULT_BASE_URL = GAME_MODES.students.urlAdress;

export const ONE_SECOND_MILLIS = 1000;

export const ONE_MINUTE_SECONDS = 60;

export const DECIMAL_SYSTEM = 10;

export const DEFAULT_TIME = 0.5; // in minutes
