export class Player {
  constructor() {
    this.correctAnswersScore = 0;
    this.detailQuestionData = [];
  }

  checkAndRegisterAnswer(playerAnswer, correctAnswer) {
    if (!playerAnswer) {
      throw new Error(
        'error with given argument: playerAnswer, the value is incorrect, it should be string',
      );
    }
    let isAnswerCorrect = true;
    if (playerAnswer === correctAnswer) {
      this.correctAnswersScore += 1;
      isAnswerCorrect = true;
    } else {
      isAnswerCorrect = false;
    }
    this.registerAnswer(correctAnswer, playerAnswer, isAnswerCorrect);
    return isAnswerCorrect;
  }

  registerAnswer(correctAnswer, playerAnswer, isAnswerCorrect) {
    this.detailQuestionData.push({
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
