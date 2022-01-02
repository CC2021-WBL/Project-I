import GameMaker from '../logic/gameMaker';
import { startCountdown } from '../view/components/timerText';

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
    console.log('END GAME DATA:');
    console.log(endGameData);
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

    // TODO: quit game
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

  changeDifficultyLevel = (difficultyLevel) => {
    console.log(difficultyLevel);
    this.model.difficultyLevel = difficultyLevel.toLowerCase();
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
