class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP

    this.view.renderModal();
    this.view.renderInitialScreen();
    this.view.renderImage();
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
}
export default Controller;
