export class Player {
  constructor() {
    this.correctAnswersScore = 0;
    this.detailQuestionData = [];
    this.amountOfAnsweredQuestions = 0;
  }

  registerAnswer(correctAnswer, playerAnswer) {
    if (!playerAnswer) {
      throw new Error(
        'error with given argument: playerAnswer, the value is incorrect, it should be string',
      );
    }

    const isAnswerCorrect = correctAnswer === playerAnswer;
    if (isAnswerCorrect) {
      this.correctAnswersScore += 1;
    }
    this.detailQuestionData.push({
      playerAnswer,
      isAnswerCorrect,
      answer: correctAnswer,
    });
    this.amountOfAnsweredQuestions += 1;
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
