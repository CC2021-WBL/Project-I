<<<<<<< HEAD
=======
// connect this file to index.html, values will be on console

>>>>>>> 872b0521d8ccb51009b9b373a732f90bf8572d72
/* eslint-disable import/extensions */
import { Player } from '../src/app/logic/player.js';

const player = new Player();

player.registerAnswer('zombie', 'zombie', true);

console.log(player.correctAnswersScore);
console.log(JSON.parse(JSON.stringify(player.detailQuestionData)));

// ^ zapis niezbędny, żeby wyświetlić zawartość w formie stringa(JSON), a nie przez referencje do tablicy
console.log(player.detailQuestionData.length);

// await sleep(8000);

player.registerAnswer('zombie', 'yeti', false);

console.log(player.detailQuestionData.length);
const gameData = player.getEndGameData();

console.log(JSON.parse(JSON.stringify(gameData)));

player.clearGameData();

console.log(JSON.parse(JSON.stringify(player.getEndGameData())));

/* function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} */

