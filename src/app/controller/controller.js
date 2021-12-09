import gameModeButtons from '../view/components/gameModeButtons';
import logo from '../view/components/logo';
import createLogo from '../view/components/logo';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // If rankings is empty arrays set this in localStorage
    localStorage.setItem('rankings', JSON.stringify(this.model.rankings));

    // INIT LOOK OF OUR APP

    // RENDER LOGO
    this.view.render('.header__game-logo', createLogo());
    // RENDER GAME MODE BUTTONS
    this.view.render('.header__game-nav', ...gameModeButtons);
    // RENDER INIT LOOK OF GAME_MODE
    this.view.render('.game__mode', 'Choose category');
    // RENDER RULES
    this.view.render('.game__mode-rules', 'Harry Potter Quiz Game');
  }

  // Funkcja znajduje się w kontrolerze, odpalana jest w momencie kliknięcia buttona na stronie.
  // Po kliknięciu kontroler:
  // a) zmienia wartość gameMode w obiekcie model
  // b) używa metody showQuestionForChoosenMode, żeby zaktualizować tekst w odpowiednim
  // elemencie DOM
  gameModeChoosen(mode) {
    this.model.gameMode = mode;
    this.view.showViewsForChosenMode(mode);
  }
}
export default Controller;
