import GameMaker from '../logic/gameMaker';
import { DIFFICULTY_LEVELS, GAME_MODES } from '../data/consts';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.endGameData = {};

    // this.view.renderModal();
    this.view.renderInitialScreen();
    this.bindModeButtons();

    // TODO: przeniesienie bindowania Settings do controllera this.view.bindSettingsButton(this.view.toggleSettingsView);
  }

  doAtInterval = (timeInSeconds, initialTime) => {
    this.view.renderTimer(timeInSeconds, initialTime);
  };

  doAtEnd = () => {
    this.endGameData = this.model.gameMaker.getEndGameData();
    this.view.renderModal(this.endGameData);
    this.view.bindModalButton(this.saveName);
    this.view.appearBackgroundAndButtons();
    this.view.renderAfterQuitGame();
  };

  saveName = (name) => {
    this.model.name = name;
    this.saveResult();
  };

  startGame = async () => {
    this.model.gameMaker = new GameMaker(
      this.model.gameMode,
      this.model.difficultyLevel,
    );
    this.model.gameMaker.createPlayerAndRunTimer(
      this.doAtInterval,
      this.doAtEnd,
    );
    const closure = this;
    await closure.showQuestion();
    this.view.disappearButtonsAndBackground();
    this.view.renderQuitGame();
    this.view.bindQuitGameButton(this.doAfterQuitGame);
    this.view.changeCursorToCustom();
    this.view.changeGridSizes();
    this.view.changeNavStyles();
  };

  doAfterQuitGame = () => {
    this.model.gameMaker.clearCurrentGameData();
    this.changeGameMode(GAME_MODES[this.model.gameMode].gamemode.toLowerCase());
    this.view.appearBackgroundAndButtons();
    this.view.renderAfterQuitGame(this.model.difficultyLevel);
  };

  async showQuestion() {
    const { question } = GAME_MODES[this.model.gameMode.toLowerCase()];
    this.view.renderQuestion(
      await this.model.gameMaker.createQuestion(),
      question,
    );
    const closure = this;
    this.view.bindAnswerButtons(async (answer) => {
      const isAnswerCorrect =
        closure.model.gameMaker.checkAndRegisterAnswer(answer);
      this.view.changeAnswrBtnBgColor(isAnswerCorrect);
      await closure.showQuestion();
    });
  }

  changeGameMode = (mode) => {
    const level = this.model.difficultyLevel;
    this.model.gameMode = mode.toLowerCase();
    if (this.view.toggleRulesHof === 'hall of fame') {
      this.view.showViewsForChosenMode(mode, level);
      this.bindInitialHofAndPlay();
    } else {
      this.showHofView();
    }
  };

  toggleRulesHof = () => {
    if (this.view.toggleRulesHof === 'hall of fame') {
      this.showHofView();
      this.view.toggleRulesHof = 'rules';
    } else if (this.view.toggleRulesHof === 'rules') {
      this.showRulesForChosenMode();
      this.view.toggleRulesHof = 'hall of fame';
    }
  };

  bindInitialHofAndPlay = () => {
    this.view.bindHofButton(this.toggleRulesHof);
    this.view.bindButtonPlay(this.startGame);
  };

  bindInitialRulesAndPlay = () => {
    this.view.bindRulesButton(this.toggleRulesHof);
    this.view.bindButtonPlay(this.startGame);
  };

  changeDifficultyLevel = (difficultyLevelIndex) => {
    const levels = Object.keys(DIFFICULTY_LEVELS);
    const level = levels[difficultyLevelIndex];
    this.model.difficultyLevel = DIFFICULTY_LEVELS[level].level;
  };

  showSettingsScreen() {
    this.view.showSettings();
  }

  updateViewsForHallOfFameAtChosenMode(mode) {
    this.view.updateViewsForHallOfFameAtChosenMode(mode);
  }

  saveResult() {
    const { rankings, name, gameMode, difficultyLevel } = this.model;
    const result = this.endGameData.correctAnswerScore;
    const mode = `${gameMode}_${difficultyLevel}`;

    rankings[mode].push({ name, result });
    rankings[mode].sort((a, b) => (a.result < b.result ? 1 : -1));
    if (rankings[mode].length > 3) rankings[mode].pop();
    this.model.localStorageService.saveRankings(rankings);
  }

  showHofView = () => {
    this.view.showHof(this.model.gameMode, this.model.difficultyLevel);
    this.bindInitialRulesAndPlay();
  };

  showRulesForChosenMode = () => {
    this.view.showViewsForChosenMode(this.model.gameMode);
    this.view.bindModeButtons(this.changeGameMode);
    this.bindInitialHofAndPlay();
  };

  bindModeButtons = () => {
    this.view.bindModeButtons(this.changeGameMode);
  };
}
export default Controller;
