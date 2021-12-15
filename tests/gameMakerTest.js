/* eslint-disable import/named */
import GameMaker from '../src/app/logic/bigBossGameMaker.js';
import { GAME_MODES } from '../src/app/data/consts.js';

function doSomething() {
  console.log('-----------------the end-----------------------');
}
//connect this file to index.html

const gameMaker = new GameMaker('students', 3);

const question = await gameMaker.startGameAndGetFirstQuestion(doSomething);
console.log(question);

const isAnswerCorrect = gameMaker.checkAndRegisterAnswer('Heremione');
console.log(isAnswerCorrect);

const nextQuestion = await gameMaker.createQuestion();
console.log(nextQuestion);

// nie działa zwracanie questionData

const aaa = gameMaker.player.getPlayerQuestionsData;
console.log(aaa);

const array1 = gameMaker.getPlayerQuestionData;
console.log(array1);

// funkcja opóźniająca wywołanie clearCurrentGameData na jakiś czas??

gameMaker.clearCurrentGameData();

const array2 = gameMaker.getPlayerQuestionData;
console.log(array2);
