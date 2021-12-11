/* eslint-disable import/extensions */
import QuestionGenerator from './questionGenerator.js';
import DataManager from './dataManager.js';

class MainQuestionManager {
  constructor(urlAdress, amountOfIDs, answerProperty, gameMode) {
    this.urlAdress = urlAdress;
    this.amountOfIDs = amountOfIDs;
    this.answerProperty = answerProperty;
    this.gameMode = gameMode;
    this.arrayWithObjectsForMode = [];
  }

  async GetQuestion() {
    const arrayWithID = QuestionGenerator.generateQuestionsForCurrentMode(
      this.amountOfIDs,
    );
    const idOfCorrectAnswer =
      QuestionGenerator.chooseCorrectAnswer(arrayWithID);

    const dataManager = new DataManager(
      this.urlAdress,
      idOfCorrectAnswer,
      this.answerProperty,
      this.gameMode,
      arrayWithID,
    );
    await dataManager.getDataByAPI();
    const { arraywithAnswersForQuestion } = dataManager;
    const { rightAnswer } = dataManager;
    const { base64dataImg } = dataManager;
    this.arrayWithObjectsForMode = dataManager.getDataForMode();

    const question = {
      image: base64dataImg,
      answers: arraywithAnswersForQuestion,
      rightAnswer,
    };

    return question;
  }

  GetObjectsForMode() {
    if (this.arrayWithObjectsForMode.length > 0) {
      return this.arrayWithObjectsForMode;
    }
    throw Error(
      'arrayWithObjectsForMode is empty, lets start the game for the first time',
    );
  }
}

export default MainQuestionManager;
