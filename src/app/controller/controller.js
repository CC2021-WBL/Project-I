import { startCountdown } from '../view/components/timerText';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP

    this.view.renderModal();
    this.view.renderInitialScreen();
  }

  changeGameMode(mode) {
    this.model.gameMode = mode;
    const level = this.model.difficultyLevel;
    this.view.showViewsForChosenMode(mode, level);
  }

  startCountdown() {
    this.view.renderTimer();
    startCountdown();
  }
}
export default Controller;
