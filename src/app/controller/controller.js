import GameMaker from '../logic/gameMaker';
import { DIFFICULTY_LEVELS, GAME_MODES } from '../data/consts';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.renderModal();
    this.view.renderInitialScreen();
    this.bindModeButtons();

    // TODO: przeniesienie bindowania Settings do controllera this.view.bindSettingsButton(this.view.toggleSettingsView);
  }

  doAtInterval = (timeInSeconds, initialTime) => {
    this.view.renderTimer(timeInSeconds, initialTime);
  };

  doAtEnd = () => {
    const endGameData = this.model.gameMaker.getEndGameData();
    this.view.renderModal();
    // TODO: zdjąć klasę i ID chowające przyciski i tło po rozpoczęciu rozgrywki
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
      this.bindSettingsButton();
    } else {
      this.showHofView();
      this.bindSettingsButton();
    }
  };

  bindSettingsButton = () => {
    this.view.bindSettingsButton(this.toggleSettings);
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

  toggleSettings = () => {
    if (this.view.toggleSettings === 'settings') {
      this.showSettingsScreen();
      this.view.toggleSettings = 'save & back';
    } else if (this.view.toggleSettings === 'save & back') {
      this.hideSettingsScreen();
      this.view.toggleSettings = 'settings';
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
    this.bindSettingsButton(this.toggleSettings);
  }

  hideSettingsScreen() {
    this.view.hideSettingsScreen();
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
