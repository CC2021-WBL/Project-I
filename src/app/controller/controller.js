import gameWrapper from '../view/webStructure';
// nie wiem czy już jest za późno i straciłem zdolność trzeźwego myślenia. Jak wywalę tę linijkę
// z importem to znika całą strona. Czemu się tak dzieje? Masz jakiś pomysł jak elegancko
// zainicjować ten nasz szkielet który przygotowała Kasia? Bo im dłużej kombinuję tym bardziej
// się zastanawiam czy nie zostawić tego wszystkiego w htmlu.

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // If rankings is empty arrays set this in localStorage
    localStorage.setItem('rankings', JSON.stringify(this.model.rankings));
  }

  // Funkcja znajduje się w kontrolerze, odpalana jest w momencie kliknięcia buttona na stronie.
  // Po kliknięciu kontroler:
  // a) zmienia wartość gameMode w obiekcie model
  // b) używa metody showQuestionForChoosenMode, żeby zaktualizować tekst w odpowiednim
  // elemencie DOM
  gameModeChoosen(mode) {
    this.model.gameMode = mode;
    this.view.showQuestionForChoosenMode(mode);
  }

  // Ta funkcja wywołana na obiekcie app pokaże w konsoli Obiekt modelu
  showModelObject() {
    console.log(this.model);
  }

  // Ta funkcja wywołana na obiekcie app pokaże w konsoli Obiekt widoku
  showViewObject() {
    console.log(this.view);
  }
}
export default Controller;
