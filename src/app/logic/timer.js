import { ONE_SECOND_MILLIS } from '../data/consts.js';
import { ONE_MINUTE_SECONDS } from '../data/consts.js';

class GameTimer {
  constructor(gameTime) {
    this.gameTime = gameTime;
    this.makeAStopGame = false; // zmiana wartości z zewnątrz zatrzyma timer?
  }

  runTimer(callbackOnInterval, callbackOnEndOfTime) {
    this.makeAStopGame = false;
    const initialTimeInMilisec =
      this.gameTime * ONE_MINUTE_SECONDS * ONE_SECOND_MILLIS;
    const totalTimeInSec = this.gameTime * ONE_MINUTE_SECONDS;
    const timeInterval = ONE_SECOND_MILLIS;
    let timeLeft = initialTimeInMilisec;

    const timer = setInterval(() => {
      timeLeft -= timeInterval;
      const timeLeftInSec = timeLeft / ONE_SECOND_MILLIS;
      // callbackOnInterval(timeLeftInSec, totalTimeInSec);
      console.log('time left from timer:' + timeLeftInSec);
      if (timeLeft <= 0 || this.makeAStopGame === true) {
        clearInterval(timer);
        timeLeft = initialTimeInMilisec; // restet do wartości pierwotnej
        console.log(timeLeft + 'THE END');
        callbackOnEndOfTime;
        // FINISH GAME FUNCTION / DISPLAY GAME OVER MODAL -- z innych miejsc podpięcie się pod ten callback
      }
    }, timeInterval);
  }
}
export default GameTimer;

// DZIAŁA I CALLBACKI SIE WYWOŁUJĄ
