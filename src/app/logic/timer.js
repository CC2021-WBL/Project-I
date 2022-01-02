// eslint-disable-next-line import/extensions
import { ONE_SECOND_MILLIS, ONE_MINUTE_SECONDS } from '../data/consts.js';

class GameTimer {
  constructor(gameTime) {
    this.gameTime = gameTime;
    this.stopGame = false;
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
      if (timeLeft <= 0 || this.stopGame === true) {
        clearInterval(timer);
        timeLeft = initialTimeInMilisec;
        callbackOnEndOfTime();
      } else {
        timeLeft -= timeInterval;
        const timeLeftInSec = timeLeft / ONE_SECOND_MILLIS;
        callbackOnInterval(timeLeftInSec, totalTimeInSec);
      }
    }, timeInterval);
  }
}
export default GameTimer;
