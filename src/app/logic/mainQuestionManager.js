/* eslint-disable import/extensions */
import QuestionGenerator from './questionGenerator.js';
import DataManager from './dataManager.js';
import { GAME_MODES } from '../data/consts.js'

class MainQuestionManager {
  constructor(gameModesProperty) {
    this.urlAdress = GAME_MODES[gameModesProperty].urlAdress;
    this.amountOfIDs = GAME_MODES[gameModesProperty].ids;
    this.answerProperty = GAME_MODES[gameModesProperty].answerProperty;
    this.imgSubfolder = GAME_MODES[gameModesProperty].imgSubfolder;
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
