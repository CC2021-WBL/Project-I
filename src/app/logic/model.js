import { DEFAULT_DIFFICULTY_LEVEL, DEFAULT_TIME } from '../data/consts';
import GameMaker from './gameMaker';
import LocalStorageService from './localStorage';

class Model {
  constructor() {
    this.gameMode = '';
    this.difficultyLevel = DEFAULT_DIFFICULTY_LEVEL;
    this.gameTime = DEFAULT_TIME;
    this.rankings = LocalStorageService.loadRankings();
    this.localStorageService = LocalStorageService;
    this.gameMaker = undefined;
  }
}

export default Model;
