import { startCountdown } from "../view/components/timerText";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP

    this.view.renderModal();
    this.view.renderInitialScreen();


    const playButton = document.querySelector('.buttonPlay');
    playButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.app.startCountdown();
    });
  }

  // Funkcja znajduje się w kontrolerze, odpalana jest w momencie kliknięcia buttona na stronie.
  // Po kliknięciu kontroler:
  // a) zmienia wartość gameMode w obiekcie model
  // b) używa metody showQuestionForChoosenMode, żeby zaktualizować tekst w odpowiednim
  // elemencie DOM

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
