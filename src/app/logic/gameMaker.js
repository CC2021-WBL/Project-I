/* eslint-disable import/extensions */
/* eslint-disable import/named */
import MainQuestionManager from './mainQuestionManager.js';
import { Player } from './player.js';
import GameTimer from './timer.js';

class GameMaker {
  // ---------------------------------PRIVATE METHODS----------------------------------------------

  constructor(gameModesProperty, gameTime) {
    this.mainQuestionManager = new MainQuestionManager(gameModesProperty);
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

  async startGameAndGetFirstQuestion(callbackOnInterval, callbackOnEndOfTime) {
    this.player = new Player();
    this.timer.runTimer(callbackOnInterval, callbackOnEndOfTime);
    const question = await this.createQuestion();
    return question;
  }

  checkAndRegisterAnswer(answer) {
    const isAnswerCorrect = this.player.checkAndRegisterAnswer(
      answer,
      this.questionObject.rightAnswer,
    );
    return isAnswerCorrect;
  }

  getEndGameData() {
    const playerQuestionData = this.player.getPlayerEndGameData();
    return {
      correctAnswerScore: playerQuestionData.correctAnswersScore,
      detailQuestionData: playerQuestionData.detailQuestionData,
      askedQuestions: playerQuestionData.detailQuestionData.length,
    };
  }

  clearCurrentGameData() {
    this.player.clearGameData();
    this.timer.stopGame = true;
  }
}

export default GameMaker;
