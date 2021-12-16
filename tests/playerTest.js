/* eslint-disable import/extensions */
import { Player } from '../src/app/logic/player.js';

const player = new Player();

player.registerAnswer('zombie', 'zombie', true);

console.log(player.correctAnswersScore);
console.log(JSON.parse(JSON.stringify(player.detailQuestionData)));
console.log(player.detailQuestionData.length);
/* console.log('jakim cudem?');

await sleep(8000); */

player.registerAnswer('zombie', 'yeti', false);

/* console.log('dopiero tu rejestruje sie drugi obiekt'); */

console.log(player.detailQuestionData.length);
const gameData = player.getPlayerQuestionsData();

console.log(gameData);

player.clearGameData();

console.log(player.getPlayerQuestionsData());

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
