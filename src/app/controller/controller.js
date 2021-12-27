import GameMaker from '../logic/gameMaker';
import answersButtons from '../view/components/answersButtons';
import { startCountdown } from '../view/components/timerText';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP

    this.view.renderModal();
    this.view.renderInitialScreen();
    this.view.bindButtonPlay(this.startGame);
    this.view.bindModeButtons(this.changeGameMode);
  }

  doAtInterval = (timeInSeconds) => {
    this.view.renderTimer(timeInSeconds);
    // @TODO do dodania różdżka czasu
  };

  doAtEnd = () => {
    console.log('dupa');
  };

  startGame = async () => {
    console.log('pipa');
    this.model.gameMaker = new GameMaker(
      this.model.gameMode,
      this.model.gameTime,
    );
    this.model.gameMaker.createPlayerAndRunTimer(
      this.doAtInterval,
      this.doAtEnd,
    );
    const closure = this;
    await closure.showQuestion();
    // @TODO funckja blokująca przyciski
    // @TODO zamiana przycisku play gme na quit game
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
