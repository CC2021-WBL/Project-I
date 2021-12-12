/* eslint-disable import/named */

// import { MainQuestionManager } from './mainQuestionManager.js';
import { Player } from './player.js'
// eslint-disable-next-line import/extensions
import { correctAnswer } from './correctAnswer.js';
import GameTimer from './timer.js';

// -------- VARIABLES FOR TESTING----------------------------------------------------------------------------------
const urlAdress1 = 'http://hp-api.herokuapp.com/api/characters/students';
// const urlAdress3 = 'http://hp-api.herokuapp.com/api/characters/staff';
const amountOfIDs = 20;
const playerName = 'Matylda';
const gameTime = 2;

//-----------------------------------------------------------------------------------------------------------------

export class GameMaker {
  // ---------------------------------PRIVATE METHODS----------------------------------------------

  // GENEROWANIE PYTANIA DLA GRACZA
  async #createQuestion() {
    this.questionObject = await this.mainQuestionManager.GetQuestion();
    if (this.objectsForMode.length === 0) {
      this.objectsForMode = this.#mainQuestionManager.arrayWithObjectsForMode;
    }
    return this.questionObject;
  }

  // SPRAWDZANIE POPRAWNOŚCI ODPOWIEDZI

   #checkAnswer(playerAnswer) {
    isAnswerCorrect = correctAnswer(
      this.questionObject.rightAnswer,
      playerAnswer,
     );
     return isAnswerCorrect;
  }

  constructor() {
    this.mainQuestionManager = new MainQuestionManager(
      urlAdress1,
      amountOfIDs,
    );
    //this.correctAnswer = correctAnswer();
    this.player = new Player();
    this.timer = new GameTimer(gameTime)
    this.initialGameTimeMinutes = 2;
    this.objectsForMode = [];
    this.questionObject = {};
  }

  // FUNKCJE NA ZEWNĄTRZ ---------------------------------------------------------------------------

  // Starting game

  async startGameAndGetFirstQuestion() {
    this.timer.runTimer(callbackOnEndOfTime);
    const question = await this.#createQuestion();
    return question;
  }
  // Checking answer nad generating nex question

  checkAndRegisterAnswer(answer) {
    const isAnswerCorrect = this.#checkAnswer(answer);
    this.player.registerAnswer(this.questionObject.rightAnswer, answer, isAnswerCorrect);
    return isAnswerCorrect
  }

  async getNextQuestion() {
    return await this.#createQuestion();
  }

  finishGame() {
  
  }
  
  dlazniknieciaeslinta(){

}

// ---------------------PRZEPROWADZANIE ROZGRYWKI-----------------------------------------------------------------

// startGameButton.AddEventLisneter('click', startGame());
const gameMaker = new GameMaker();

// ROZPOCZĘCIE ROZGRYWKI, WŁĄCZENIE TIMERA I WYGENEROWANIE PIERWSZEGO PYTANIA

await gameMaker.startGameAndGetFirstQuestion();
gameMaker.checkAndRegisterAnswer(answer);
await gameMaker.getNextQuestion();

// co ma się dziać po końcu czasu / lub podpięte pod callbackOnEndOfTime