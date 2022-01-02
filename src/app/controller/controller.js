import GameMaker from '../logic/gameMaker';
import { startCountdown } from '../view/components/timerText';
import { DIFFICULTY_LEVELS } from '../data/consts';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP

    this.view.renderModal();
    this.view.renderInitialScreen();
    this.view.bindModeButtons(this.changeGameMode);
    // TODO: przeniesienie bindowania Settings do controllera this.view.bindSettingsButton(this.view.toggleSettingsView);
  }

  doAtInterval = (timeInSeconds, initialTime) => {
    this.view.renderTimer(timeInSeconds, initialTime);
    // TODO: do dodania różdżka czasu
  };

  doAtEnd = () => {
    const endGameData = this.model.gameMaker.getEndGameData();
    console.log(endGameData);
    console.log('dupa');
    this.view.renderModal();
    // TODO: zdjąć klasę i ID chowające przyciski i tło po rozpoczęciu rozgrywki
    // render modal
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

    // TODO: pojawia się quit game
  };

  async showQuestion() {
    this.view.renderQuestion(await this.model.gameMaker.createQuestion());
    const closure = this;
    this.view.bindAnswerButtons(async (answer) => {
      const isAnswerCorrect =
        closure.model.gameMaker.checkAndRegisterAnswer(answer);
      console.log(isAnswerCorrect);
      await closure.showQuestion();
    });
  }

  changeGameMode = (mode) => {
    this.model.gameMode = mode.toLowerCase();
    this.view.showViewsForChosenMode(mode);
    this.view.bindButtonPlay(this.startGame);
  };

  changeDifficultyLevel = (difficultyLevelIndex) => {
    const levels = Object.keys(DIFFICULTY_LEVELS);
    const level = levels[difficultyLevelIndex];
    this.model.difficultyLevel = DIFFICULTY_LEVELS[level].level;
    // this.view.showViewsForDifficultyLevel(difficultyLevel);
  };

  startCountdown() {
    this.view.renderTimer();
    startCountdown();
  }

  showSettingsScreen() {
    this.view.showSettings();
  }

  updateViewsForHallOfFameAtChosenMode(mode) {
    // this.model.gameMode = mode;
    this.view.updateViewsForHallOfFameAtChosenMode(mode);
  }
}
export default Controller;
