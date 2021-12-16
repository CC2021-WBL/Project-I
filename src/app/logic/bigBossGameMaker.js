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

  // get next question

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

  // Starting game - set timer and get first question

  async startGameAndGetFirstQuestion(callbackOnInterval, callbackOnEndOfTime) {
    this.timer.runTimer(callbackOnInterval, callbackOnEndOfTime);
    const question = await this.createQuestion();
    return question;
  }
  // Check and register player answer after click from player

  checkAndRegisterAnswer(answer) {
    const isAnswerCorrect = this.checkAnswer(answer);
    this.player.registerAnswer(
      this.questionObject.rightAnswer,
      answer,
      isAnswerCorrect,
    );
    return isAnswerCorrect;
  }

  // returns isAnswerCorrect to make button with answer green if true=correct and red if false

  // to take next question --> createQuestion() which is upper

  // when time goes to end or player click button to go out from game = po zakończeniu gry lub podpięte pod callbackOnEndOfTime

  getPlayerQuestionData() {
    const playerQuestionData = this.player.getPlayerQuestionsData();
    return playerQuestionData;
  }

  clearCurrentGameData() {
    this.player.detailQuestionData = [];
    this.timer.makeAStopGame = true;
  }
}

export default GameMaker;
