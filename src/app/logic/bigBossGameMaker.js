// --------variables for testing, to be replaced in future---------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

import { MainQuestionManager } from './mainQuestionManager.js';
import { Player } from './player.js';
import correctAnswer from './correctAnswer.js';
// import GameTimer 

const urlAdress1 = 'http://hp-api.herokuapp.com/api/characters';
const urlAdress2 = 'http://hp-api.herokuapp.com/api/characters/students';
const urlAdress3 = 'http://hp-api.herokuapp.com/api/characters/staff';
const amountOfIDs = 30;
const playerName = 'Matylda';
const gameTime = 2;

// STARTING NEW GAME---------------------------------------------------------------------------------------------------------
export class GameMaker {
  #mainQuestionManager;

  #player;

  timer;

  constructor() {
    this.#mainQuestionManager = new MainQuestionManager(
      urlAdress1,
      amountOfIDs,
    );
    this.#player = new Player(playerName);
    this.timer = new GameTimer(gameTime);
    this.initialGameTimeMinutes = 2;
    this.objectsForMode = [];
    this.questionObject = {};
  }

  // GENEROWANIE PYTANIA DLA GRACZA
  async createQuestion() {
    this.questionObject = await this.#mainQuestionManager.GetQuestion();
    if (this.objectsForMode.length === 0) {
      this.objectsForMode = this.#mainQuestionManager.arrayWithObjectsForMode;
    }
    return this.questionObject;
  }

  // ZAPISYWANIE ODPOWIEDZI GRACZA

  setAnswer(answer) {
    this.#player.playerAnswer = answer;
    // this.#player.playerAnswer = e.target.innerText;
  }

  // SPRAWDZANIE POPRAWNOŚCI ODPOWIEDZI

  checkAnswer() {
    isAnswerCorrect = correctAnswer(
      this.questionObject.rightAnswer,
      this.#player.playerAnswer,
    );
  }

  // FUNKCJE NA ZEWNĄTRZ ---------------------------------------------------------------------------

  // Rozpoczynanie gry

  async startGameAndGetFirstQuestion() {
    this.timer.runTimer(callbackOnEndOfTime);
    return await this.createQuestion();
  }
  // Sprawdzanie odp i Generowanie kolejnego pytania

  async checkAnswerAndGetNewQuestion(answer) {
    this.setAnswer(answer);
    this.checkAnswer();
    return await this.createQuestion();
  }
}

// ---------------------PRZEPROWADZANIE ROZGRYWKI-----------------------------------------------------------------

// startGameButton.AddEventLisneter('click', startGame());
const gameMaker = new GameMaker();

// ROZPOCZĘCIE ROZGRYWKI, WŁĄCZENIE TIMERA I WYGENEROWANIE PIERWSZEGO PYTANIA

await gameMaker.startGameAndGetFirstQuestion();
await gameMaker.checkAnswerAndGetNewQuestion(answer);

// ew.co ma się dziać po końcu czasu / lub podpięte pod callbackOnEndOfTime
