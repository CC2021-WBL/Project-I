// put path to this file into index.html
// eslint-disable-next-line import/extensions
import { GAME_MODES } from '../src/app/data/consts.js';
/* eslint-disable import/extensions */
import MainQuestionManager from '../src/app/logic/mainQuestionManager.js';

//  gameModesProperty[2]= houses
//  gameModesProperty[1]= staff
//  gameModesProperty[0]= students

const gameModesProperties = Object.keys(GAME_MODES);

const mainQuestionManager = new MainQuestionManager(gameModesProperties[2]);

const question = await mainQuestionManager.getQuestion();
console.log(question);
const modeObjects = mainQuestionManager.getObjectsForMode();
console.log(modeObjects);

const image = new Image();
image.src = question.image;
document.body.appendChild(image);

// image is under game view
