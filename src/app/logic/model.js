import LocalStorageService from './localStorage';

class Model {
  constructor(object) {
    this.title = object.title;
    this.apiBase = object.options.hpApiBaseUrl;
    this.quizMaxTime = object.options.quizMaxTime;
    this.gameModeInfo = '';
    this.rankings = LocalStorageService.loadRankings();
    this.localStorageService = LocalStorageService;
  }
}

export default Model;
