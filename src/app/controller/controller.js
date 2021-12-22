import GameMaker from '../logic/gameMaker';
import { startCountdown } from '../view/components/timerText';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP

    this.view.renderModal();
    this.view.renderInitialScreen();
  }

  static doAtInterval(time) {
    console.log(`time to end: ${time}`);
  }

  async startGame() {
    this.model.gameMaker = new GameMaker(
      this.model.gameMode,
      this.model.gameTime,
    );
    const question = await this.model.gameMaker.startGameAndGetFirstQuestion(
      Controller.doAtInterval,
    );
    this.view.renderQuestion(question);

    // await this.showQuestion();
  }

  async showQuestion() {
    this.view.renderQuestion(await this.model.gameMaker.createQuestion());
  }

  changeGameMode(mode) {
    this.model.gameMode = mode.toLowerCase();
    this.view.showViewsForChosenMode(mode);
  }

  startCountdown() {
    this.view.renderTimer();
    startCountdown();
  }
}
export default Controller;
