/* eslint-disable import/extensions */
/* eslint-disable import/named */
import MainQuestionManager from './mainQuestionManager.js';
import { Player } from './player.js';
import { correctAnswer } from './correctAnswer.js';
import GameTimer from './timer.js';

class GameMaker {
  // ---------------------------------PRIVATE METHODS----------------------------------------------

  constructor(gameModesProperty, gameTime) {
    this.mainQuestionManager = new MainQuestionManager(gameModesProperty);
    // this.correctAnswer = correctAnswer();
    this.player = new Player();
    this.timer = new GameTimer(gameTime);
    this.initialGameTimeMinutes = 2;
    this.objectsForMode = [];
    this.questionObject = {};
  }

  async createQuestion() {
    this.questionObject = await this.mainQuestionManager.getQuestion();
    if (this.objectsForMode.length === 0) {
      this.objectsForMode = this.mainQuestionManager.arrayWithObjectsForMode;
    }
    return this.questionObject;
  }

  checkAnswer(playerAnswer) {
    const isAnswerCorrect = correctAnswer(
      this.questionObject.rightAnswer,
      playerAnswer,
    );
    return isAnswerCorrect;
  }

  // FUNKCJE NA ZEWNĄTRZ ---------------------------------------------------------------------------

  // Starting game

  async startGameAndGetFirstQuestion(callbackOnEndOfTime) {
    this.timer.runTimer(callbackOnEndOfTime);
    const question = await this.createQuestion();
    return question;
  }
  // Checking answer nad generating nex question

  checkAndRegisterAnswer(answer) {
    const isAnswerCorrect = this.checkAnswer(answer);
    this.player.registerAnswer(
      this.questionObject.rightAnswer,
      answer,
      isAnswerCorrect,
    );
    return isAnswerCorrect;
  }

  getPlayerQuestionData() {
    const playerQuestionData = this.player.getPlayerQuestionsData;
    return playerQuestionData;
  }

  clearCurrentGameData() {
    this.player.detailQuestionData = [];
    this.timer.makeAStopGame = true;
  }
}

export default GameMaker;

// ---------------------PRZEPROWADZANIE ROZGRYWKI-----------------------------------------------------------------
/* 
// startGameButton.AddEventLisneter('click', startGame());
const gameMaker = new GameMaker();

// ROZPOCZĘCIE ROZGRYWKI, WŁĄCZENIE TIMERA I WYGENEROWANIE PIERWSZEGO PYTANIA

await gameMaker.startGameAndGetFirstQuestion();

// po kliknięciu odpowiedzi przez gracza --> sprawdzenie, zapisanie i zwrócenie czy odp była dobra

gameMaker.checkAndRegisterAnswer(answer);

// po wyświetleniu czy odp gracza była prawidłowa --> wygenerowanie nowego pytania
await gameMaker.getNextQuestion();

// po zakończeniu gry / lub podpięte pod callbackOnEndOfTime
gameMaker.getPlayerQuestionData();
gameMaker.clearCurrentGameData(); */
