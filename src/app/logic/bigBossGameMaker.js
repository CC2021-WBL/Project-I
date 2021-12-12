/* eslint-disable import/named */

// import { MainQuestionManager } from './mainQuestionManager.js';
import { Player } from './player.js';
// eslint-disable-next-line import/extensions
import correctAnswer from './correctAnswer.js';
// import GameTimer

// -------- VARIABLES FOR TESTING----------------------------------------------------------------------------------
const urlAdress1 = 'http://hp-api.herokuapp.com/api/characters/students';
// const urlAdress3 = 'http://hp-api.herokuapp.com/api/characters/staff';
const amountOfIDs = 30;
const playerName = 'Matylda';
const gameTime = 2;

//-----------------------------------------------------------------------------------------------------------------

export class GameMaker {
  // ---------------------------------PRIVATE METHODS----------------------------------------------

  // GENEROWANIE PYTANIA DLA GRACZA
  async #createQuestion() {
    this.questionObject = await this.#mainQuestionManager.GetQuestion();
    if (this.objectsForMode.length === 0) {
      this.objectsForMode = this.#mainQuestionManager.arrayWithObjectsForMode;
    }
    return this.questionObject;
  }

  // SPRAWDZANIE POPRAWNOŚCI ODPOWIEDZI

  async #checkAnswer() {
    isAnswerCorrect = correctAnswer(
      this.questionObject.rightAnswer,
      this.#player.playerAnswer,
    );
  }

  // ZAPISYWANIE ODPOWIEDZI GRACZA

  #setAnswer(answer) {
    this.#player.playerAnswer = answer;
    // this.#player.playerAnswer = e.target.innerText;
  }

  constructor() {
    this.mainQuestionManager = new MainQuestionManager(
      urlAdress1,
      amountOfIDs,
    );
    this.player = new Player();
    this.timer = new GameTimer(gameTime);
    this.initialGameTimeMinutes = 2;
    this.objectsForMode = [];
    this.questionObject = {};
  }

  // FUNKCJE NA ZEWNĄTRZ ---------------------------------------------------------------------------

  // Starting game

  async startGameAndGetFirstQuestion() {
    this.timer.runTimer(callbackOnEndOfTime);
    return await this.#createQuestion();
  }
  // Checking answer nad generating nex question

  async setAndCheckAnswer(answer) {
    this.#setAnswer(answer);
    const isAnswerCorrect = await this.#checkAnswer();
    this.player.registerAnswer(answer, isAnswerCorrect);
    return isAnswerCorrect
  }

  async getNextQuestion() {
    return await this.#createQuestion();
  }

  finishGame() {
  
  }
  
  dlazniknieciaeslinta()

}

// ---------------------PRZEPROWADZANIE ROZGRYWKI-----------------------------------------------------------------

// startGameButton.AddEventLisneter('click', startGame());
const gameMaker = new GameMaker();

// ROZPOCZĘCIE ROZGRYWKI, WŁĄCZENIE TIMERA I WYGENEROWANIE PIERWSZEGO PYTANIA

await gameMaker.startGameAndGetFirstQuestion();
await gameMaker.checkAnswerAndGetNewQuestion(answer);

// co ma się dziać po końcu czasu / lub podpięte pod callbackOnEndOfTime
