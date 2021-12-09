//--------variables for testing, to be replaced in future---------------------------------------------------
let urlAdress1 = 'http://hp-api.herokuapp.com/api/characters';
let urlAdress2 = 'http://hp-api.herokuapp.com/api/characters/students';
let urlAdress3 = 'http://hp-api.herokuapp.com/api/characters/staff';
let amountOfIDs = 30;

//---------------------------------------------------------------------------------------------------------------

import { MainQuestionManager } from './mainQuestionManager.js';
import { Player } from './player.js';

//STARTING NEW GAME---------------------------------------------------------------------------------------------------------
export class GameMaker {
  #mainQuestionManager;

  constructor() {
    this.#mainQuestionManager = new MainQuestionManager(urlAdress, amountOfIDs);
    this.initialGameTimeMinutes = 2;
  }

  //startGameButton.AddEventLisneter('click', createQuestion());

  createQuestion() {
    let questionObject = await this.#mainQuestionManager.GetQuestion();
    //document.getElementById('Answer1').innerHTML = questionObject.answers[0];
    //document.getElementById('Answer2').innerHTML = questionObject.answers[1];
    //document.getElementById('Answer3').innerHTML = questionObject.answers[2];
    //document.getElementById('Answer4').innerHTML = questionObject.answers[3];
  }

  runTimer() {
    const initialTimeInMilisec = this.initialGameTimeMinutes * 60 * 1000;
    const timeInterval = 1000;
    let timeLeft = initialTimeInMilisec;

    let timer = setInterval(() => {
      timeLeft = timeLeft - timeInterval;
      let minutes = Math.floor(timeLeft / (1000 * 60));
      let seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
      document.getElementById('TIMER-ELEMENT-WILL-BE-HERE').innerHTML = `Time left: ${minutes}m ${seconds}s`;
      if (timeLeft <0) {
        clearInterval();
        //FINISH GAME FUNCTION / DISPLAY GAME OVER MODAL
      }
    }, timeInterval);
  }

//

}
