// import gameModeButtons from '../view/components/gameModeButtons';
// import logo from '../view/components/createLogo';
// import createLogo from '../view/components/createLogo';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // If rankings is empty arrays set this in localStorage
    localStorage.setItem('rankings', JSON.stringify(this.model.rankings));

    // INIT LOOK OF OUR APP
    this.view.renderInitialScreen();
    this.view.renderImage();
    this.view.renderModeRules();
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
