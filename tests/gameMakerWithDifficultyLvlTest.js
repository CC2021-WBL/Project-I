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
function doSomethingAtTheEndOfTime() {
  console.log('-----------------the end-----------------------');
}

function doAtInterval(timeLeftInSec, totalTimeInSec) {
  console.log(`time left from timer: ${timeLeftInSec} from ${totalTimeInSec}`);
}

const wrappedLogic = async () => {
  const question = await gameMaker.startGameAndGetFirstQuestion(
    doAtInterval,
    doSomethingAtTheEndOfTime,
  );
  console.log(`first question:`);
  console.log(question);

  const isAnswerCorrect = gameMaker.checkAndRegisterAnswer('Heremione');
  console.log(`is answer correct? ${isAnswerCorrect}`);
  console.log(gameMaker.player.detailQuestionData);

  const nextQuestion = await gameMaker.createQuestion();
  console.log('next question: ');
  console.log(nextQuestion);

  const data = gameMaker.getEndGameData();
  console.log('endGameData:');
  console.log(data);
};

// ---wywoływanie------------------------------------------------------------------------------------
const gameMaker = new GameMaker(
  gameModesProperties[0],
  difficultyLevelsProperty[2],
);

console.log(`Difficulty level: ${gameMaker.difficultyLevelsProperty}`);

const question = wrappedLogic();
