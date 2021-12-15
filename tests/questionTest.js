// put path to this file into index.html

/* eslint-disable import/extensions */
import MainQuestionManager from '../src/app/logic/mainQuestionManager.js';

const mainQuestionManager = new MainQuestionManager('students');

const question = mainQuestionManager.getQuestion();
console.log(question);
const modeObjects = mainQuestionManager.getObjectsForMode();
console.log(modeObjects);

const image = new Image();
image.src = question.image;
document.body.appendChild(image);

// image is under game view
