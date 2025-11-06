/* eslint-disable import/extensions */
import QuestionGenerator from './questionGenerator.js';
import DataManager from './dataManager.js';
import { GAME_MODES } from '../data/consts.js';

class MainQuestionManager {
  constructor(gameModesProperty) {
    this.urlAdress = GAME_MODES[gameModesProperty].urlAdress;
    this.amountOfIDs = GAME_MODES[gameModesProperty].ids;
    this.answerProperty = GAME_MODES[gameModesProperty].answerProperty;
    this.imgSubfolder = GAME_MODES[gameModesProperty].imgSubfolder;
    this.filterKey = GAME_MODES[gameModesProperty].filterKey;
    this.filterValue = GAME_MODES[gameModesProperty].filterValue;
    this.arrayWithObjectsForMode = [];
    this.usedQuestionIndices = []; // Track already used questions
  }

  async getQuestion() {
    // First, get or filter the data
    const dataManager = new DataManager(
      this.urlAdress,
      0, // temporary, will be set later
      this.answerProperty,
      this.imgSubfolder,
      [], // temporary, will be set later
      this.filterKey,
      this.filterValue,
    );

    // Fetch and filter data if not already done
    if (this.arrayWithObjectsForMode.length === 0) {
      await dataManager.getDataByAPI();
      this.arrayWithObjectsForMode = dataManager.getDataForMode();
      console.log(`Loaded ${this.arrayWithObjectsForMode.length} characters for mode`);
    } else {
      dataManager.arraywithHPObjects = this.arrayWithObjectsForMode;
    }

    // Check if all questions have been used
    if (this.usedQuestionIndices.length >= this.arrayWithObjectsForMode.length) {
      console.log('All questions used! Game over.');
      return null; // No more questions available
    }

    // Get available indices (not yet used as main question)
    const availableIndices = [];
    for (let i = 0; i < this.arrayWithObjectsForMode.length; i++) {
      if (!this.usedQuestionIndices.includes(i)) {
        availableIndices.push(i);
      }
    }

    console.log(`Available questions: ${availableIndices.length}, Total: ${this.arrayWithObjectsForMode.length}`);

    // Pick a random question from available ones
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    const idOfCorrectAnswer = availableIndices[randomIndex];

    // Mark this question as used
    this.usedQuestionIndices.push(idOfCorrectAnswer);
    console.log(`Used ${this.usedQuestionIndices.length}/${this.arrayWithObjectsForMode.length} questions`);

    // Generate answer options - filter by gender of correct answer
    const correctCharacter = this.arrayWithObjectsForMode[idOfCorrectAnswer];
    const correctGender = correctCharacter.gender;

    // Get all characters with the same gender
    const sameGenderIndices = [];
    for (let i = 0; i < this.arrayWithObjectsForMode.length; i++) {
      if (this.arrayWithObjectsForMode[i].gender === correctGender) {
        sameGenderIndices.push(i);
      }
    }

    console.log(`Correct answer gender: ${correctGender}, available same gender: ${sameGenderIndices.length}`);

    // Generate 3 wrong answers with the same gender
    let arrayWithID = [idOfCorrectAnswer]; // Start with correct answer

    if (sameGenderIndices.length >= 4) {
      // We have enough same-gender characters, pick 3 random wrong ones
      const wrongAnswers = [];
      while (wrongAnswers.length < 3) {
        const randomIndex = Math.floor(Math.random() * sameGenderIndices.length);
        const candidateId = sameGenderIndices[randomIndex];
        if (candidateId !== idOfCorrectAnswer && !wrongAnswers.includes(candidateId)) {
          wrongAnswers.push(candidateId);
        }
      }
      arrayWithID.push(...wrongAnswers);
    } else {
      // Not enough same-gender characters, use all available characters
      console.warn(`Not enough same-gender characters (${sameGenderIndices.length}), using all characters`);
      const actualAmount = this.arrayWithObjectsForMode.length - 1;
      arrayWithID = QuestionGenerator.generateQuestionsForCurrentMode(actualAmount);

      // Make sure the correct answer is in the options
      if (!arrayWithID.includes(idOfCorrectAnswer)) {
        const replaceIndex = Math.floor(Math.random() * arrayWithID.length);
        arrayWithID[replaceIndex] = idOfCorrectAnswer;
      }
    }

    // Shuffle the array so correct answer is not always first
    for (let i = arrayWithID.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayWithID[i], arrayWithID[j]] = [arrayWithID[j], arrayWithID[i]];
    }

    // Update dataManager with correct IDs
    dataManager.idOfRightAnswer = idOfCorrectAnswer;
    dataManager.IDsArray = arrayWithID;

    // Get answers and image
    dataManager.arraywithAnswersForQuestion = dataManager.getDataForIDs(
      dataManager.arraywithHPObjects,
    );
    await dataManager.getDataForCorrectAnswer();

    const { arraywithAnswersForQuestion, rightAnswer, base64dataImg } =
      dataManager;

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
