class Player {
  constructor() {
    this.name = '';
    this.correctAnswersScore = 0;
    this.amountOfDoneQuestions = 0;
    this.detailQuestionData = [];
    this.playerAnswer = '';
  }

  setPlayerAnswer(answer) {
    this.playerAnswer = answer;
  }

  registerAnswer(isanswerCorrect) {
    if (this.playerAnswer === false) {
      throw new Error(
        'error with playerAnswer, playerAnswer is null or undefined',
      );
    }
    if (isanswerCorrect) {
      this.correctAnswersScore += 1;
    }
    this.detailQuestionData.push({ 'playerAnswer': this.playerAnswer, 'isAnswerCorrect': isanswerCorrect });
    this.amountOfDoneQuestions += 1;
  }

  setName(name) {
    this.name = name;
  }

  clearGameData() {
    this.correctAnswersScore = 0;
    this.amountOfDoneQuestions = 0;
    this.detailQuestionData = [];
  }
}

export default Player;
