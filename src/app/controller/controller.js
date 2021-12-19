import { GAME_MODES } from '../data/consts';
import MainQuestionManager from '../logic/mainQuestionManager';
import Player from '../logic/player';
import Timer from '../logic/timer';
import GameTimer from '../logic/timer';
import { GAME_TIME } from '../data/config';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // INIT LOOK OF OUR APP
    this.view.renderInitialScreen();
  }

  // Funkcja znajduje się w kontrolerze, odpalana jest w momencie kliknięcia buttona na stronie.
  // Po kliknięciu kontroler:
  // a) zmienia wartość gameMode w obiekcie model
  // b) używa metody showQuestionForChoosenMode, żeby zaktualizować tekst w odpowiednim
  // elemencie DOM

  changeGameMode(gameMode) {
    this.model.gameModeInfo = GAME_MODES[`${gameMode}`];
    this.view.showViewsForChosenMode(gameMode);
  }

  async startGame(gameModeInfo, gameTime) {
    this.model.mainQuestionManager = new MainQuestionManager(gameModeInfo);
    this.model.player = new Player();
    this.model.timer = new GameTimer(gameTime);
    this.model.timer.runTimer(
      (timeLeftInSec, totalTimeInSec) => {
        console.log(`Time left: ${timeLeftInSec}/${totalTimeInSec} s`);
      },
      () => {
        console.log('End of time');
      },
    );
    await this.generateAndShowQuestion();
    this.view.renderQuitGameButton();
  }

  async generateAndShowQuestion() {
    this.view.renderQuestion(
      await this.model.mainQuestionManager.getQuestion(),
    );
  }

  checkPlayerAnswer(correctAnswer, playerAnswer) {
    console.log(`Player: ${playerAnswer} | Correct: ${correctAnswer}`);
    this.model.player.registerAnswer(correctAnswer, playerAnswer);
    console.log(
      `Your score: ${this.model.player.correctAnswersScore}/${this.model.player.amountOfAnsweredQuestions} pts`,
    );
  }
}

export default Controller;
