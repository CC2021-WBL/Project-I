export class Player {
  constructor() {
    this.correctAnswersScore = 0;
    this.amountOfAnsweredQuestions = 0;
    this.detailQuestionData = [];
    this.endGameData = {};
  }

  registerAnswer(correctAnswer, playerAnswer, isAnswerCorrect) {
    if (!this.playerAnswer?) {
      throw new Error(
        'error with playerAnswer, playerAnswer is null or undefined',
      );
    }
    if (isAnswerCorrect) {
      this.correctAnswersScore += 1;
    }
    this.detailQuestionData.push({
      playerAnswer,
      isAnswerCorrect: isAnswerCorrect,
      answer: correctAnswer,
    });
    this.amountOfAnsweredQuestions += 1;
  }

  clearGameData() {
    this.correctAnswersScore = 0;
    this.amountOfAnsweredQuestions = 0;
    this.detailQuestionData = [];
  }

  createEndGameData() {
    this.endGameData.correctAnswersScore = this.correctAnswersScore;
    this.endGameData.amountOfAnsweredQuestions = this.amountOfAnsweredQuestions;
    this.endGameData.detailQuestionData = this.detailQuestionData;
  }

  getEndGameData() {
    this.createEndGameData();
    return this.endGameData;
  }
}

export default Player;
