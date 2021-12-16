// put path to this file into index.html
// eslint-disable-next-line import/extensions
import { GAME_MODES } from '../src/app/data/consts.js';
/* eslint-disable import/extensions */
import MainQuestionManager from '../src/app/logic/mainQuestionManager.js';

// const gameModesProperty[2]= 'house'; - DONT USE IT NOW IT WON'T WORK CORRECTLY!!!!!!!!!!!!!!!!!! (new issue - new way of creating answers)

const gameModesProperties = Object.keys(GAME_MODES);

const mainQuestionManager = new MainQuestionManager(gameModesProperties[0]);

const question = await mainQuestionManager.getQuestion();
console.log(question);
const modeObjects = mainQuestionManager.getObjectsForMode();
console.log(modeObjects);

const image = new Image();
image.src = question.image;
document.body.appendChild(image);

// image is under game view
