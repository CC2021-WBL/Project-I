/* eslint-disable import/extensions */
import QuestionGenerator from './questionGenerator.js';
import DataManager from './dataManager.js';

class MainQuestionManager {
  constructor(urlAdress, amountOfIDs, answerProperty, imgSubfolder) {
    this.urlAdress = urlAdress;
    this.amountOfIDs = amountOfIDs;
    this.answerProperty = answerProperty;
    this.imgSubfolder = imgSubfolder;
    this.arrayWithObjectsForMode = [];
  }

  async getQuestion() {
    const arrayWithID = QuestionGenerator.generateQuestionsForCurrentMode(
      this.amountOfIDs,
    );
    const idOfCorrectAnswer =
      QuestionGenerator.chooseCorrectAnswer(arrayWithID);

    const dataManager = new DataManager(
      this.urlAdress,
      idOfCorrectAnswer,
      this.answerProperty,
      this.imgSubfolder,
      arrayWithID,
    );
    await dataManager.getDataByAPI();
    const { arraywithAnswersForQuestion, rightAnswer, base64dataImg } =
      dataManager;
    this.arrayWithObjectsForMode = dataManager.getDataForMode();

    const question = {
      image: base64dataImg,
      answers: arraywithAnswersForQuestion,
      rightAnswer,
    };

    return question;
  }

  getObjectsForMode() {
    if (this.arrayWithObjectsForMode.length > 0) {
      return this.arrayWithObjectsForMode;
    }
    throw Error(
      'arrayWithObjectsForMode is empty, lets start the game for the first time',
    );
  }
}

export default MainQuestionManager;
