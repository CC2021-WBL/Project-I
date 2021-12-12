// put path to this file into index.html

/* eslint-disable import/extensions */
import MainQuestionManager from '../src/app/logic/mainQuestionManager.js';

// -------------FOR TESTING VARIABLES----------------------------
// const urlStudents = 'http://hp-api.herokuapp.com/api/characters/students';
const urlStaff = 'http://hp-api.herokuapp.com/api/characters/staff';
// const idsStudents = 10;
const idsStaff = 7;
const nameProperty = 'name';
// const houseProperty = 'house'; - DONT USE IT NOW IT WON'T WORK CORRECTLY!!!!!!!!!!!!!!!!!! (new issue - new way of creating answers)
// const gameModeStudents = 'students';
const gameModeStaff = 'staff';

//----------------------------------------------------------------

const mainQuestionManager = new MainQuestionManager(
  urlStaff,
  idsStaff,
  nameProperty,
  gameModeStaff,
);

const question = await mainQuestionManager.getQuestion();
console.log(question);
const modeObjects = mainQuestionManager.getObjectsForMode();
console.log(modeObjects);

// 11.12.2021 - there will be errors with images with .png or .jpeg --> Kasia Ch. is working on replace that images and add new ones

const image = new Image();
image.src = question.image;
document.body.appendChild(image);
