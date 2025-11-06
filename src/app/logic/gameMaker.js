/* eslint-disable import/extensions */
/* eslint-disable import/named */
import MainQuestionManager from './mainQuestionManager.js';
import { Player } from './player.js';
import GameTimer from './timer.js';
import { DIFFICULTY_LEVELS, DEFAULT_TIME } from '../data/consts.js';

class GameMaker {
  constructor(gameModesProperty, difficultyLevelsProperty) {
    this.mainQuestionManager = new MainQuestionManager(gameModesProperty);
    this.difficultyLevelsProperty = difficultyLevelsProperty;
    this.timer = new GameTimer(DEFAULT_TIME);
    this.player = new Player();
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

  createPlayerAndRunTimer(callbackOnInterval, callbackOnEndOfTime) {
    this.player = new Player();

    // Stop existing timer if any
    if (this.timer) {
      console.log('Stopping existing timer before creating new one');
      this.timer.stopGame = true;
    }

    if (DIFFICULTY_LEVELS[this.difficultyLevelsProperty].time !== null) {
      this.timer = new GameTimer(
        DIFFICULTY_LEVELS[this.difficultyLevelsProperty].time,
      );
      this.timer.runTimer(callbackOnInterval, callbackOnEndOfTime);
    }
  }

  checkAndRegisterAnswer(answer) {
    const isAnswerCorrect = this.player.checkAndRegisterAnswer(
      this.questionObject.image,
      answer,
      this.questionObject.rightAnswer,
      this.difficultyLevelsProperty,
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
