// connect this file to index.html to test pure timer

import GameTimer from '../src/app/logic/timer.js';

const timer = new GameTimer(0.5);
// to check if setting function works:
// timer.setGameTime(0.1);
function doSomethingAtTheEndOfTime() {
  console.log('-----------------the end-----------------------');
}

function doAtInterval(timeLeftInSec, totalTimeInSec) {
  console.log(`time left from timer: ${timeLeftInSec} from ${totalTimeInSec}`);
}

timer.runTimer(doAtInterval, doSomethingAtTheEndOfTime);

// property to chceck option to stop timer
// timer.stopGame = true;
