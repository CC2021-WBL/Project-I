// connect this file to index.html, values will be on console

/* eslint-disable import/extensions */
import { Player } from '../src/app/logic/player.js';

const player = new Player();
console.log('kontrolny wpis po uruchomieniu pliku');

const isAnser1correct = player.checkAndRegisterAnswer(
  'zombie',
  'zombie',
  'hard',
);
console.log(`is first answer correct: ${isAnser1correct}`);
console.log(
  `amount of points after good answer: ${player.correctAnswersScore}`,
);
console.log(JSON.parse(JSON.stringify(player.detailQuestionData)));
// ^ zapis niezbędny, żeby wyświetlić zawartość w formie stringa(JSON), a nie przez referencje do tablicy
console.log(
  `lenght of array with datailQuestionData ${player.detailQuestionData.length}`,
);

// await sleep(8000);

const isAnswer2correct = player.checkAndRegisterAnswer(
  'zombie',
  'yeti',
  'hard',
);
console.log(`is second answer correct: ${isAnswer2correct}`);

console.log(
  `lenght of array with datailQuestionData ${player.detailQuestionData.length}`,
);

const isAnswer3correct = player.checkAndRegisterAnswer(
  'zombie',
  'yeti',
  'hard',
);
console.log(
  `amount of points after 2 bad answers: ${player.correctAnswersScore}`,
);
console.log(`is second answer correct: ${isAnswer3correct}`);
const gameData = player.getPlayerEndGameData();

console.log(JSON.parse(JSON.stringify(gameData)));

player.clearGameData();

console.log(JSON.parse(JSON.stringify(player.getPlayerEndGameData())));

/* function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} */
