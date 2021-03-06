// eslint-disable-next-line import/extensions
import { DIFFICULTY_LEVELS } from '../data/consts.js';
// eslint-disable-next-line import/extensions
import { calculatePoints } from './calculatePoints.js';

export class Player {
  constructor() {
    this.correctAnswersScore = 0;
    this.detailQuestionData = [];
  }

  checkAndRegisterAnswer(
    imageBase64,
    playerAnswer,
    correctAnswer,
    difficultyLevelsProperty,
  ) {
    if (!playerAnswer) {
      throw new Error(
        'error with given argument: playerAnswer, the value is incorrect, it should be string',
      );
    }
    const isAnswerCorrect = playerAnswer === correctAnswer;

    if (difficultyLevelsProperty !== DIFFICULTY_LEVELS.easy.level) {
      this.correctAnswersScore = calculatePoints(
        this.correctAnswersScore,
        isAnswerCorrect,
        difficultyLevelsProperty,
      );
      this.registerAnswer(
        imageBase64,
        correctAnswer,
        playerAnswer,
        isAnswerCorrect,
      );
    }
    return isAnswerCorrect;
  }

  registerAnswer(imageBase64, correctAnswer, playerAnswer, isAnswerCorrect) {
    this.detailQuestionData.push({
      imageBase64,
      playerAnswer,
      isAnswerCorrect,
      answer: correctAnswer,
    });
  }

  clearGameData() {
    this.correctAnswersScore = 0;
    this.detailQuestionData.length = 0;
  }

  getPlayerEndGameData() {
    return {
      correctAnswersScore: this.correctAnswersScore,
      detailQuestionData: this.detailQuestionData,
    };
  }
}

export default Player;
