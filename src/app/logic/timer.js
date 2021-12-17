// eslint-disable-next-line import/extensions
import { ONE_SECOND_MILLIS, ONE_MINUTE_SECONDS } from '../data/consts.js';

class GameTimer {
  constructor(gameTime) {
    this.gameTime = gameTime;
    this.stopGame = false; // zmiana wartości z zewnątrz zatrzyma timer?
  }

  setGameTime(newGameTime) {
    this.gameTime = newGameTime;
  }

  runTimer(callbackOnInterval, callbackOnEndOfTime) {
    this.stopGame = false;
    const initialTimeInMilisec =
      this.gameTime * ONE_MINUTE_SECONDS * ONE_SECOND_MILLIS;
    const totalTimeInSec = this.gameTime * ONE_MINUTE_SECONDS;
    const timeInterval = ONE_SECOND_MILLIS;
    let timeLeft = initialTimeInMilisec;

    const timer = setInterval(() => {
      timeLeft -= timeInterval;
      const timeLeftInSec = timeLeft / ONE_SECOND_MILLIS;
      callbackOnInterval(timeLeftInSec, totalTimeInSec);
      if (timeLeft <= 0 || this.stopGame === true) {
        clearInterval(timer);
        timeLeft = initialTimeInMilisec; // restet do wartości pierwotnej
        callbackOnEndOfTime();
        // FINISH GAME FUNCTION / DISPLAY GAME OVER MODAL -- z innych miejsc podpięcie się pod ten callback
      }
    }, timeInterval);
  }
}
export default GameTimer;

// DZIAŁA I CALLBACKI SIE WYWOŁUJĄ
