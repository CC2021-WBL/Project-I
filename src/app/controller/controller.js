import GameMaker from '../logic/gameMaker';
import { startCountdown } from '../view/components/timerText';

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
    // TODO: funckja blokująca przyciski
    // TODO: zamiana przycisku play gme na quit game
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
    const level = this.model.difficultyLevel;
    this.model.gameMode = mode.toLowerCase();
    this.view.showViewsForChosenMode(mode, level);
    this.view.bindButtonPlay(this.startGame);
  };

  changeDifficultyLevel = (difficultyLevel) => {
    console.log(difficultyLevel);
    this.model.difficultyLevel = difficultyLevel.toLowerCase();
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
