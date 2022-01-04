import GameMaker from '../logic/gameMaker';
import { DIFFICULTY_LEVELS, GAME_MODES } from '../data/consts';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.renderModal();
    this.view.renderInitialScreen();
    this.view.bindModeButtons(this.changeGameMode);
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
    this.view.renderAfterQuitGame();
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
    this.view.showViewsForChosenMode(mode, level);
    this.view.bindHofButton(this.showHofView);
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

  showHofView = () => {
    this.view.showHof(this.model.gameMode, this.model.difficultyLevel);
    this.view.bindRulesButton(this.showRulesForChosenMode);
    this.view.bindModeButtons(this.changeHofView);
    this.view.bindButtonPlay(this.startGame);
  };

  changeHofView = () => {
    this.showHofView();
  };

  showRulesForChosenMode = () => {
    this.view.showViewsForChosenMode(this.model.gameMode);
    this.view.bindModeButtons(this.changeGameMode);
    this.view.bindHofButton(this.showHofView);
    this.view.bindButtonPlay(this.startGame);
  };
}
export default Controller;
