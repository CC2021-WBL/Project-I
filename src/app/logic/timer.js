class GameTimer {
  constructor(gameTime) {
    this.gameTime = gameTime;
    this.isTimeLeft = true;
  }

  runTimer(callbackOnEndOfTime) {
    const initialTimeInMilisec = this.gameTime * 60 * 1000;
    const timeInterval = 1000;
    let timeLeft = initialTimeInMilisec;
    this.isTimeLeft = true;

    // było const timer = setInterval...

    setInterval(() => {
      timeLeft -= timeInterval;
      const minutes = Math.floor(timeLeft / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      document.getElementById(
        'TIMER-ELEMENT-WILL-BE-HERE',
      ).innerHTML = `Time left: ${minutes}m ${seconds}s`;
      if (timeLeft <= 0) {
        clearInterval();
        this.isTimeLeft = false;
        callbackOnEndOfTime();
        // FINISH GAME FUNCTION / DISPLAY GAME OVER MODAL -- z innych miejsc podpięcie się pod ten callback
      }
    }, timeInterval);
  }
}

export default GameTimer;
