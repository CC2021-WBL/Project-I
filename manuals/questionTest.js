// put path to this file into index.html

/* eslint-disable import/extensions */
import MainQuestionManager from '../src/app/logic/mainQuestionManager.js';

// -------------FOR TESTING VARIABLES----------------------------
const urlStudents = 'http://hp-api.herokuapp.com/api/characters/students';
// const urlStaff = 'http://hp-api.herokuapp.com/api/characters/staff';
const idsStudents = 28;
// const idsStaff = 20;
const nameProperty = 'name';
// const houseProperty = 'house'; - DONT USE IT NOW IT WON'T WORK CORRECTLY!!!!!!!!!!!!!!!!!! (new issue - new way of creating answers)
const gameModeStudents = 'students';
// const gameModeStaff = 'staff';

//----------------------------------------------------------------

const mainQuestionManager = new MainQuestionManager(
  urlStudents,
  idsStudents,
  nameProperty,
  gameModeStudents,
);

const question = await mainQuestionManager.getQuestion();
console.log(question);
const modeObjects = mainQuestionManager.getObjectsForMode();
console.log(modeObjects);

const image = new Image();
image.src = question.image;
document.body.appendChild(image);

// image is under game view
