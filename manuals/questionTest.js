/* eslint-disable import/extensions */
import MainQuestionManager from '../src/app/logic/mainQuestionManager.js';

// -------------FOR TESTING VARIABLES----------------------------
const urlStudents = 'http://hp-api.herokuapp.com/api/characters/students';
// const urlStaff = 'http://hp-api.herokuapp.com/api/characters/staff';
const idsStudents = 11;
// const idsStaff = 8;
const nameProperty = 'name';
// const houseProperty = 'house'; - DONT USE IT NOW IT WON'T WORK CORRECTLY!!!!!!!!!!!!!!!!!!

//----------------------------------------------------------------

const mainQuestionManager = new MainQuestionManager(
  urlStudents,
  idsStudents,
  nameProperty,
);

const question = await mainQuestionManager.GetQuestion();
console.log(question);
const modeObjects = mainQuestionManager.GetObjectsForMode();
console.log(modeObjects);
