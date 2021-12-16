/* eslint-disable import/named */
import GameMaker from '../src/app/logic/bigBossGameMaker.js';
// eslint-disable-next-line import/extensions
import { GAME_MODES } from '../src/app/data/consts.js';

function doSomething() {
  console.log('-----------------the end-----------------------');
}

function doAtInterval(timeLeftInSec, totalTimeInSec) {
  console.log('time left from timer:' + timeLeftInSec);
}
//connect this file to index.html

const gameMaker = new GameMaker('students', 0.5);

// works in live server
const question = await gameMaker.startGameAndGetFirstQuestion(
  doAtInterval,
  doSomething,
);
console.log(question);

// works in live server
const isAnswerCorrect = gameMaker.checkAndRegisterAnswer('Heremione');
console.log(isAnswerCorrect);
console.log(gameMaker.player.detailQuestionData);

// works in live server
const nextQuestion = await gameMaker.createQuestion();
console.log(nextQuestion);

// works in live server
const data = gameMaker.player.detailQuestionData;
console.log(data);

const aaa = gameMaker.player.getPlayerQuestionsData();
console.log(aaa);


// funkcja przerywająca timer, resetująca timer i dane tej rozgrywki
gameMaker.clearCurrentGameData();

const array2 = gameMaker.getPlayerQuestionData();
console.log(array2);
