// connect this file to index.html

/* eslint-disable import/named */
// eslint-disable-next-line import/extensions
import GameMaker from '../src/app/logic/gameMaker.js';
// eslint-disable-next-line import/extensions
import { GAME_MODES } from '../src/app/data/consts.js';
import { DIFFICULTY_LEVELS } from '../src/app/data/consts.js';

const gameModesProperties = Object.getOwnPropertyNames(GAME_MODES);
const difficultyLevelsProperty = Object.getOwnPropertyNames(DIFFICULTY_LEVELS);

// ----deklaracje funckji----------------------------------------------------------------------------
const WrappedStartGameAndGetFirstQuestion = async () => {
  const question = await gameMaker.startGameAndGetFirstQuestion(
    doAtInterval,
    doSomethingAtTheEndOfTime,
  );
  console.log(`first question: ${question}`);
  return question;
};

const wrappedNextQuestion = async () => {
  const nextQuestion = await gameMaker.createQuestion();
  console.log(nextQuestion);
  return nextQuestion;
};

function doSomethingAtTheEndOfTime() {
  console.log('-----------------the end-----------------------');
}

function doAtInterval(timeLeftInSec, totalTimeInSec) {
  console.log(`time left from timer: ${timeLeftInSec} from ${totalTimeInSec}`);
}

// ---wywoływanie------------------------------------------------------------------------------------
const gameMaker = new GameMaker(
  gameModesProperties[0],
  difficultyLevelsProperty[1],
);

console.log(`Difficulty level: ${gameMaker.difficultyLevelsProperty}`);

const question = WrappedStartGameAndGetFirstQuestion();

const isAnswerCorrect = gameMaker.checkAndRegisterAnswer('Heremione');
// TU PROBLEM!!! NIE REJESTRUJE PRAWIDŁOWEJ ODP
console.log(`is answer correct? ${isAnswerCorrect}`);
console.log(gameMaker.player.detailQuestionData);

const nextQuestion = wrappedNextQuestion();

// works in live server
const data = gameMaker.getEndGameData();
console.log(data);

// funkcja przerywająca timer, resetująca timer i dane tej rozgrywki
// gameMaker.clearCurrentGameData();

const array2 = gameMaker.getEndGameData();
console.log(array2);
