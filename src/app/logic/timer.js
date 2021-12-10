export class Timer {
    constructor(gameTime) {
        this.gameTime = gameTime;
        this.isTimeLeft;
    }
  runTimer(callbackOnEndOfTime) {
    const initialTimeInMilisec = this.gameTime * 60 * 1000;
    const timeInterval = 1000;
      let timeLeft = initialTimeInMilisec;
      this.isTimeLeft = true;

    let timer = setInterval(() => {
      timeLeft = timeLeft - timeInterval;
      let minutes = Math.floor(timeLeft / (1000 * 60));
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      document.getElementById(
        'TIMER-ELEMENT-WILL-BE-HERE',
      ).innerHTML = `Time left: ${minutes}m ${seconds}s`;
      if (timeLeft < 0) {
          clearInterval();
          this.isTimeLeft = false;
          callbackOnEndOfTime()
        //FINISH GAME FUNCTION / DISPLAY GAME OVER MODAL
      }
    }, timeInterval);
  }
}