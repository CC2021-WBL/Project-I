class Consts {
  static GAME_MODES = {
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

  static rankingsTemplate = {
    students: [],
    staff: [],
    houses: [],
  };

  static DEFAULT_BASE_URL = Consts.GAME_MODES.students.urlAdress;

  static ONE_SECOND_MILLIS = 1000;

  static DEFAULT_MAX_TIME = 2; // in minutes
}

export default Consts;
