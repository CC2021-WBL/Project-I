class View {
  constructor() {
    // Selectory przygotowane do późniejszej manipulacji
    this.gamewrapper = document.querySelector('.game-wrapper');

    this.headerGameLogo = document.querySelector('.header__game-logo');
    this.headerGameNav = document.querySelector('.header__game-nav');

    this.gameImage = document.querySelector('.game-image');
    this.gameImageContent = document.querySelector('.game-image__content');

    this.game = document.querySelector('.game');
    this.gameMode = document.querySelector('.game__mode');
    this.gameModeRules = document.querySelector('.game__mode-rules');
    this.gameBtns = document.querySelector('.game__btns');

    this.footer = document.querySelector('.footer');
    this.gameTimer = document.querySelector('.game-timer');
  }

  showQuestionForChoosenMode(mode) {
    const questions = {
      Students: "Who is this Hogwart's student?",
      Staff: "Who is this from Hogwart's staff?",
      Houses: 'To which house do they belong\n?',
    };
    this.gameMode.textContent = `MODE: ${questions[mode]}`;
  }
}

export default View;
