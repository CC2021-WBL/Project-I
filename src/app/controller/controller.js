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
    this.model.gameMaker = new GameMaker(
      this.model.gameMode,
      this.model.gameTime,
    );
    console.log(this.model.gameMode);
    const question = await this.model.gameMaker.startGameAndGetFirstQuestion(
      this.doAtInterval,
      this.doAtEnd,
    );
    console.log(question);
    console.log(this.model.gameMaker.questionObject);
    this.view.renderQuestion(question);
    const closure = this;
    this.view.bindAnswerButtons(async (answer) => {
      const isAnswerCorrect =
        closure.model.gameMaker.checkAndRegisterAnswer(answer);
      console.log(isAnswerCorrect);
      await closure.showQuestion();
    });
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
}
export default Controller;
