class GameTimer {
  constructor(gameTime) {
    this.gameTime = gameTime;
    this.isTimeLeft = true;
  }

  runTimer(callbackOnInterval, callbackOnEndOfTime) {
    const initialTimeInMilisec = this.gameTime * 60 * 1000;
    const totalTimeInSec = this.gameTime * 60;
    const timeInterval = 1000;
    let timeLeft = initialTimeInMilisec;
    this.isTimeLeft = true;

    const timer = setInterval(() => {
      timeLeft -= timeInterval;
      const timeLeftInSec = timeLeft / 1000;
      // const minutes = Math.floor(timeLeft / (1000 * 60));
      // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      callbackOnInterval(timeLeftInSec, totalTimeInSec);
      if (timeLeft <= 0) {
        clearInterval(timer);
        console.log(timeLeft + 'THE END');
        this.isTimeLeft = false;
        callbackOnEndOfTime();
        // FINISH GAME FUNCTION / DISPLAY GAME OVER MODAL -- z innych miejsc podpięcie się pod ten callback
      }
    }, timeInterval);
  }
}
export default GameTimer;

// DZIAŁA I CALLBACKI SIE WYWOŁUJĄ 
