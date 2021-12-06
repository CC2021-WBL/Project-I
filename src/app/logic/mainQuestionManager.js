import { QuestionGenerator } from './questionGenerator.js';
import { DataManager } from './dataManager.js';

//--------variables for testing, to be replaced in future---------------------------------------------------
let urlAdress = 'http://hp-api.herokuapp.com/api/characters';
let amountOfIDs = 50;
//---------------------------------------------------------------------------------------------------------------

export class MainQuestionManager {
  constructor(urlAdress, amountOfIDs) {
    this.urlAdress = urlAdress;
    this.amountOfIDs = amountOfIDs;
    
  }

  GetQuestion() {
    let arrayWithID =
      QuestionGenerator.generateQuestionsForCurrentMode(this.amountOfIDs);
    let idOfCorrectAnswer = QuestionGenerator.chooseCorrectAnswer(arrayWithID);

    let dataManager = new DataManager(
      arrayWithID,
      urlAdress,
      idOfCorrectAnswer,
    );
    await dataManager.getDataByAPI();
    let arraywithAnswersForQuestion = dataManager.arraywithAnswersForQuestion;
    let rightAnswer = dataManager.rightAnswer;
    let base64imgForRightAnswer = dataManager.base64dataImgForRightAnswer;

    return question = {
      image: base64imgForRightAnswer,
      answers: arraywithAnswersForQuestion,
      rightAnswer: rightAnswer,
    }

  };
 
}

