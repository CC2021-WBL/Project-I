class Model {
  constructor(object) {
    this.title = object.title;
    this.apiBase = object.options.hpApiBaseUrl;
    this.quizMaxTime = object.options.quizMaxTime;
    this.gameMode = 'People';

    // This is our rankings objects, it's loaded from localStorage or initialize empty
    this.rankings = JSON.parse(localStorage.getItem('rankings')) || {
      students: [],
      staff: [],
      houses: [],
    };
  }
}

export default Model;
