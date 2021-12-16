// connect this file to index.html

/* eslint-disable import/named */
// eslint-disable-next-line import/extensions
import GameMaker from '../src/app/logic/bigBossGameMaker.js';
// eslint-disable-next-line import/extensions
import { GAME_MODES } from '../src/app/data/consts.js';

const gameModesProperties = Object.getOwnPropertyNames(GAME_MODES);

function doSomethingAtTheEndOfTime() {
  console.log('-----------------the end-----------------------');
}

function doAtInterval(timeLeftInSec, totalTimeInSec) {
  console.log(`time left from timer: ${timeLeftInSec} from ${totalTimeInSec}`);
}

const gameMaker = new GameMaker(gameModesProperties[0], 0.5);

// works in live server
const question = await gameMaker.startGameAndGetFirstQuestion(
  doAtInterval,
  doSomethingAtTheEndOfTime,
);
console.log(`first question: ${question}`);

// works in live server
const isAnswerCorrect = gameMaker.checkAndRegisterAnswer('Heremione');
console.log(`is answer correct? ${isAnswerCorrect}`);
console.log(gameMaker.player.detailQuestionData);

// works in live server
const nextQuestion = await gameMaker.createQuestion();
console.log(nextQuestion);

// works in live server
const data = gameMaker.player.detailQuestionData;
console.log(data);

const aaa = gameMaker.player.getEndGameData();
console.log(aaa);

// funkcja przerywająca timer, resetująca timer i dane tej rozgrywki
gameMaker.clearCurrentGameData();

const array2 = gameMaker.getPlayerQuestionData();
console.log(array2);
