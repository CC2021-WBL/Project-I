import LocalStorageService from './localStorage';
import { DEFAULT_DIFFICULTY_LEVEL } from '../data/consts';

class Model {
  constructor(object) {
    this.title = object.title;
    this.apiBase = object.options.hpApiBaseUrl;
    this.quizMaxTime = object.options.quizMaxTime;
    this.gameMode = '';
    this.rankings = LocalStorageService.loadRankings();
    this.localStorageService = LocalStorageService;
    this.difficultyLevel = DEFAULT_DIFFICULTY_LEVEL;
    console.log(this.difficultyLevel);
    this.gameMaker = undefined;
  }
}

export default Model;
