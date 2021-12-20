import { startCountdown } from "../view/components/timerText";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP

    this.view.renderModal();
    this.view.renderInitialScreen();
    this.view.renderImage();
  }

  changeGameMode(mode) {
    this.model.gameMode = mode;
    this.view.showViewsForChosenMode(mode);
  }

  startCountdown() {
    this.view.renderTimer();
    startCountdown();
  }
}
export default Controller;
