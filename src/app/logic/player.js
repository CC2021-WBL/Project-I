export class Player {
  constructor() {
    this.name = '';
    this.correctAnswersScore = 0;
    this.amountOfAnsweredQuestions = 0;
    this.detailQuestionData = [];
  }

  registerAnswer(correctAnswer, playerAnswer, isanswerCorrect) {
    if (this.playerAnswer === false) {
      throw new Error(
        'error with playerAnswer, playerAnswer is null or undefined',
      );
    }
    if (isanswerCorrect) {
      this.correctAnswersScore += 1;
    }
    this.detailQuestionData.push({ 'playerAnswer': playerAnswer, 'isAnswerCorrect': isanswerCorrect, 'answer': correctAnswer });
    this.amountOfAnsweredQuestions += 1;
  }

  getPlayerQuestionsData() {
    return this.detailQuestionData;
 }

  clearGameData() {
    this.correctAnswersScore = 0;
    this.amountOfAnsweredQuestions = 0;
    this.detailQuestionData = [];
  }
}
