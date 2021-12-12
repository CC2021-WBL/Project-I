export GAME_MODES = {
    students: {
      gamemode: 'Students',
      imgSubfolder: 'students',
      question: 'Who is this student?',
      urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
      ids: '28',
      answerProperty: 'name',
    },
    staff: {
      gamemode: 'Staff',
      imgSubfolder: 'staff',
      question: 'Who is this staff?',
      urlAdress: 'http://hp-api.herokuapp.com/api/characters/staff',
      ids: '20',
      answerProperty: 'name',
    },
    houses: {
      gamemode: 'Houses',
      imgSubfolder: 'students',
      question: 'From which house is this student?',
      urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
      ids: '28',
      answerProperty: 'house',
    },
  };

export RANKINGS_TEMPLATE = {
    students: [],
    staff: [],
    houses: [],
  };

export DEFAULT_BASE_URL = Consts.GAME_MODES.students.urlAdress;

export ONE_SECOND_MILLIS = 1000;

export ONE_MINUTE_SECONDS = 60;

export DEFAULT_MAX_TIME = 2; // in minutes

