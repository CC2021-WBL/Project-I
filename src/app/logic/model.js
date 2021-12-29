import { DEFAULT_DIFFICULTY_LEVEL } from '../data/consts';
import LocalStorageService from './localStorage';

class Model {
  constructor() {
    this.gameMode = '';
    this.difficultyLevel = DEFAULT_DIFFICULTY_LEVEL;
    this.rankings = LocalStorageService.loadRankings();
    this.localStorageService = LocalStorageService;
    this.gameMaker = undefined;
  }
}

export default Model;
