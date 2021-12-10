//--------variables for testing, to be replaced in future---------------------------------------------------
let urlAdress1 = 'http://hp-api.herokuapp.com/api/characters';
let urlAdress2 = 'http://hp-api.herokuapp.com/api/characters/students';
let urlAdress3 = 'http://hp-api.herokuapp.com/api/characters/staff';
const amountOfIDs = 30;
const playerName = 'Matylda';
const gameTime = 2;

//---------------------------------------------------------------------------------------------------------------

import { MainQuestionManager } from './mainQuestionManager.js';
import { Player } from './player.js';
import { Timer } from './timer.js';
//import {correctAnswer} from './correctAnswer.js'

//STARTING NEW GAME---------------------------------------------------------------------------------------------------------
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
    this.timer = new Timer(gameTime);
    this.initialGameTimeMinutes = 2;
    this.objectsForMode = [];
    this.questionObject;
  }

  //GENEROWANIE PYTANIA DLA GRACZA
  createQuestion(callbackOnNewQuestionTaken) {
    this.questionObject = await this.#mainQuestionManager.GetQuestion();
    if (this.objectsForMode.length === 0) {
      this.objectsForMode = this.#mainQuestionManager.arrayWithObjectsForMode;
    }
    callbackOnNewQuestionTaken(this.questionObject);
  }

  //ZADANIE PYTANIA GRACZOWI

  showQuestionAndAnswers() {
    //document.getElementById('Answer1').innerHTML = questionObject.answers[0];
    //document.getElementById('Answer2').innerHTML = questionObject.answers[1];
    //document.getElementById('Answer3').innerHTML = questionObject.answers[2];
    //document.getElementById('Answer4').innerHTML = questionObject.answers[3];
  }

  //ZAPISYWANIE ODPOWIEDZI GRACZA

  setAnswer(e) {
    this.#player.playerAnswer = e.target.innerText;
  }

  //SPRAWDZANIE POPRAWNOŚCI ODPOWIEDZI
  /*
  checkAnswer(callbackOnAnswerChecked){
  const rightAnswer = this.questionObject.rightAnswer;
  const isAnswerCorrect = correctAnswer(rightAnswer, this.#player.playerAnswer)
  }
  
   */
}

//---------------------PRZEPROWADZANIE ROZGRYWKI-----------------------------------------------------------------
let gameMaker = new GameMaker();

//startGameButton.AddEventLisneter('click', startGame());

//ODLICZANIE CZASU DO KOŃCA ROZGRYWKI (//FUNKCJE NA ZAKOŃCZENIE ROZGRYWKI)
gameMaker.timer.runTimer(callbackOnEndOfTime);

//PRZEPROWADZANIE ROZGRWYKI
do {
  //GENEROWANIA PYTANIA DLA GRACZA     (//ZADANIE PYTANIA GRACZOWI)
  gameMaker.createQuestion(gameMaker.showQuestionAndAnswers());
  //REAGOWANIE NA ODP GRACZA
  //AnswerButton.AddEventListener('Click', setAnswer(e))
  //SPRAWDZANIE POPRAWNOŚCI ODPOWIEDZI (//KONTYNUACJA ROZGRYWKI)
  //checkAnswer(callbackOnAnswerChecked)
} while (gameMaker.timer.isTimeLeft === true);
//ew.co ma się dziać po końcu czasu / lub podpięte pod callbackOnEndOfTime
