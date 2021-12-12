class Consts {
  static GAME_MODES = {
    Students: {
      gamemode: 'students',
      question: 'Who is this student?',
      urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
      ids: '28',
      answerProperty: 'name',
    },
    Staff: {
      gamemode: 'staff',
      question: 'Who is this staff?',
      urlAdress: 'http://hp-api.herokuapp.com/api/characters/staff',
      ids: '20',
      answerProperty: 'name',
    },
    Houses: {
      gamemode: 'students',
      question: 'From which house is this student?',
      urlAdress: 'http://hp-api.herokuapp.com/api/characters/students',
      ids: '28',
      answerProperty: 'house',
    },
  };

  static DEFAULT_BASE_URL = Consts.GAME_MODES.students.urlAdress;

  static ONE_SECOND_MILLIS = 1000;

  static DEFAULT_MAX_TIME = 2; // in minutes
}

export default Consts;
