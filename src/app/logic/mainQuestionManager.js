import { QuestionGenerator } from './questionGenerator.js';
import { DataManager } from './dataManager.js';

export class MainQuestionManager {
  constructor(urlAdress, amountOfIDs) {
    this.urlAdress = urlAdress;
    this.amountOfIDs = amountOfIDs;
    this.arrayWithObjectsForMode = [];
  }

  async GetQuestion() {
    let arrayWithID = QuestionGenerator.generateQuestionsForCurrentMode(
      this.amountOfIDs,
    );
    let idOfCorrectAnswer = QuestionGenerator.chooseCorrectAnswer(arrayWithID);

    let dataManager = new DataManager(
      arrayWithID,
      this.urlAdress,
      idOfCorrectAnswer,
    );
    await dataManager.getDataByAPI();
    let arraywithAnswersForQuestion = dataManager.arraywithAnswersForQuestion;
    let rightAnswer = dataManager.rightAnswer;
    let imgUrlForRightAnswer = dataManager.urlOfImgRightAnswer;
    this.arrayWithObjectsForMode = dataManager.arraywithHPObjects;

    const question = {
      image: imgUrlForRightAnswer,
      answers: arraywithAnswersForQuestion,
      rightAnswer: rightAnswer,
    };

    return question;
  }

  GetObjectsForMode() {
    if (this.arrayWithObjectsForMode.length > 0) {
      return this.arrayWithObjectsForMode;
    } else {
      console.log(
        'arrayWithObjectsForMode is empty, lets start the game for the first time',
      );
    }
  }
}
