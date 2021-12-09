export class Player {
  constructor(name) {
    this.name = name;
    this.correctAnswersScore = 0;
    this.amountOfDoneQuestions = 0;
    this.detailQuestionData = [];
    this.playerAnswer;
  }

  takeNewQuestion(callbackOnNewQuestionTaken) {
    const questionObject = this.#mainQuestionManager.GetQuestion();
    callbackOnNewQuestionTaken(questionObject);
  }

  setPlayerAnswer(answer) {
    this.playerAnswer = answer;
  }

  registerAnswer(isanswerCorrect, callbackOnRegisteredAnswer) {
    if (this.playerAnswer === false) {
      throw new Error(
        'error with playerAnswer, playerAnswer is null or undefined',
      );
    }
    if (isanswerCorrect) {
      this.correctAnswersScore += 1;
    }
    this.detailQuestionData.push({ playerAnswer, isanswerCorrect });
    this.amountOfDoneQuestions += 1;
    callbackOnRegisteredAnswer();
  }
}
