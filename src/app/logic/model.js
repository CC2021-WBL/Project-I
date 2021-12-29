import LocalStorageService from './localStorage';

class Model {
  constructor(object) {
    this.title = object.title;
    this.apiBase = object.options.hpApiBaseUrl;
    this.quizMaxTime = object.options.quizMaxTime;
    this.gameMode = '';
    this.rankings = LocalStorageService.loadRankings();
    this.localStorageService = LocalStorageService;
    this.difficultyLevel = DEFAULT_DIFFICULTY_LEVEL;
    this.gameMaker = undefined;
  }
}

export default Model;
