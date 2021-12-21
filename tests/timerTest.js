// connect this file to index.html to test pure timer

import GameTimer from '../src/app/logic/timer.js';
import View from '../src/app/view/view.js';

const timer = new GameTimer(0.5);
const view = new View();
// to check if setting function works:
// timer.setGameTime(0.1);
function doSomethingAtTheEndOfTime() {
  console.log('-----------------the end-----------------------');
}

function doAtInterval(timeLeftInSec, totalTimeInSec) {
  view.renderInitialScreen(timeLeftInSec);
  console.log(`time left from timer: ${timeLeftInSec} from ${totalTimeInSec}`);
}

timer.runTimer(doAtInterval, doSomethingAtTheEndOfTime);

// property to chceck option to stop timer
// timer.stopGame = true;
