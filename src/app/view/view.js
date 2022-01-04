import elementInjector from '../utils/elementInjector';
import questionForMode from './components/questionForMode';
import displayImage from './components/displayImage';
import modeButtons from './components/mainMenu';
import createLogo from './components/createLogo';
import ModalWindow from './components/modal/modalWindow';
import {
  DIFFICULTY_LEVELS,
  GAME_MODES,
  INITIAL_GAME_MODE_TEXT,
} from '../data/consts';
import modeRules from './components/modeRules';
import buttonPlay from './components/buttonPlay';
import createImage from './components/createImage';
import doBtnHallOfFame from './components/doBtnHallOfFame';
import doHallOfFameContent from './components/doHallOfFameContent';
import displayTimerText from './components/displayTimerText';
import doButtonRules from './components/buttonRules';
import levelButtons from './components/settingsLevel';
import answersButtons from './components/answersButtons';
import clearActive from '../utils/clearActive';
import displayQuitGameButton from './components/displayQuitGameButton';
import displayWand from './components/wand';
import displayInitialMainText from './components/displayInitialMainText';
import displayButtonSettings from './components/displaySettingsBtn';

class View {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
    this.hofIsOn = false;
    this.settings = false;
  }

  // eslint-disable-next-line class-methods-use-this
  render(query, ...children) {
    if (children.length === 0 || !query) {
      throw new Error('Required query and at least one child in arguments');
    }
    const parentElem = document.querySelector(query);
    parentElem.innerHTML = '';
    if (!parentElem) {
      throw new Error(`Not found element by query ${query}`);
    }
    elementInjector(parentElem, children);
  }

  renderInitialScreen() {
    this.render('.header__game-logo', createLogo());
    this.render('.header__game-nav', ...modeButtons);
    this.render('.game__mode', INITIAL_GAME_MODE_TEXT);
    this.render('.game__mode-rules', ...displayInitialMainText);
    this.render('.game-image__content', createImage());
  }

  showViewsForChosenMode = (mode) => {
    this.render('.game__mode', questionForMode(mode));
    this.render('.game__mode-rules', ...modeRules(mode));
    this.render(
      '.game__btns',
      doBtnHallOfFame(`Hall of fame`),
      buttonPlay('Play the game'),
    );
    const settingsButton = displayButtonSettings('settings');
    settingsButton.addEventListener('click', this.toggleSettingsView);
    this.render('.game-image__btns', settingsButton);
  };

  showRulesButtons() {
    this.render(
      '.game__btns',
      doButtonRules('rules'),
      buttonPlay('Play the game'),
    );
  }

  // Hof - Hall of Fame
  showHof = (gameMode, difficultyLevel) => {
    this.render('.game__mode', 'HALL OF FAME');
    this.render(
      '.game__mode-rules',
      ...doHallOfFameContent(gameMode, difficultyLevel),
    );
    this.showRulesButtons();
  };

  showSettings() {
    this.render('.game__mode', 'Choose level');
    this.render('.game__mode-rules', ...levelButtons);
    const settingsButton = displayButtonSettings('Save&back');
    settingsButton.addEventListener('click', this.toggleSettingsView);
    this.render('.game-image__btns', settingsButton);
    this.bindDifficultyLevelButton(window.app.changeDifficultyLevel);
  }

  hideSettings() {
    this.showViewsForChosenMode();
  }

  toggleSettingsView = () => {
    if (!this.settings) {
      this.showSettings();
    } else {
      this.hideSettings();
    }
    this.settings = !this.settings;
  };

  renderTimer(timeInSeconds, initialTime) {
    this.render('.game-timer', ...displayWand(timeInSeconds, initialTime));
    this.render('.game-timer__text-wrapper', displayTimerText(timeInSeconds));
  }

  renderModal() {
    this.render('.modal', ModalWindow());
  }

  renderImage() {
    this.render('.game-image__content', displayImage());
  }

  changeAnswrBtnBgColor(answer) {
    const posAnswrBtn = document.querySelectorAll('.game__mode-rules-answrBtn');
    if (answer === true) {
      posAnswrBtn.forEach((el) =>
        el.classList.add('game__mode-rules-answrBtn-correct'),
      );
    } else {
      posAnswrBtn.forEach((el) =>
        el.classList.add('game__mode-rules-answrBtn-false'),
      );
    }
  }

  renderQuitGame() {
    this.render('.header__game-nav', displayQuitGameButton());
  }

  renderQuestion(question, modeQuestion) {
    this.render('.game__mode', modeQuestion);
    this.render('.game__mode-rules', ...answersButtons(question));
    this.render(
      '.game-image__content',
      displayImage(question.image, 'very handsome Harry'),
    );
  }

  disappearButtonsAndBackground() {
    const playAndHofButtons = document.querySelector('.game__btns');
    // playAndHofButtons.classList.add('hidden-elements');
    playAndHofButtons.style.display = 'none';
    const settingsButton = document.querySelector('.game-image__btns');
    // settingsButton.classList.add('hidden-elements');
    settingsButton.style.display = 'none';
    const gameModeContainer = document.querySelector('.game__mode-rules');
    gameModeContainer.id = 'question-mode';
  }

  appearBackgroundAndButtons() {
    const playAndHofButtons = document.querySelector('.game__btns');
    playAndHofButtons.classList.remove('hidden-elements');
    const settingsButton = document.querySelector('.game-image__btns');
    settingsButton.classList.remove('hidden-elements');
    const gameModeContainer = document
      .querySelector('.game__mode-rules')
      .removeAttribute('id');
  }

  changeCursorToCustom() {
    const customCursor = document.querySelector('.game');
    customCursor.classList.add('custom-cursor');
    const custCursor = document.querySelector('.header');
    custCursor.classList.add('custom-cursor');
  }

  changeGridSizes() {
    const changedGrid = document.querySelector('.game-wrapper');
    changedGrid.style.gridTemplateRows = '1fr 2fr 1fr';
  }

  changeNavStyles() {
    const changedNav = document.querySelector('.header__game-nav');
    changedNav.style.justifyContent = 'flex-end';
  }

  renderAfterQuitGame(level) {
    this.render('.header__game-nav', ...modeButtons);
    const normalCursor = document.querySelector('.game');
    normalCursor.classList.remove('custom-cursor');
    const normalHeaderCursor = document.querySelector('.header');
    normalHeaderCursor.classList.remove('custom-cursor');
    const rmvStyle = document.querySelector('.header__game-nav');
    rmvStyle.removeAttribute('style');
    const removeStyle = document.querySelector('.game-wrapper');
    removeStyle.removeAttribute('style');
    const gameButtonsOn = document.querySelector('.game__btns');
    gameButtonsOn.removeAttribute('style');
    const setButtonsOn = document.querySelector('.game-image__btns');
    setButtonsOn.removeAttribute('style');
    if (level !== DIFFICULTY_LEVELS.easy.level) {
      const timerWand = document.querySelector('.game-timer__wand-wrapper');
      timerWand.remove(timerWand);
      const timerText = document.querySelector('.game-timer__text');
      timerText.remove(timerText);
    }
  }

  // -------------- BINDINGS ------------------------------------

  bindButtonPlay(handler) {
    const playButton = document.querySelector('.game__button--orange');
    playButton.addEventListener('click', () => {
      handler();
    });
  }

  bindModeButtons(handler) {
    modeButtons.map((button) =>
      button.addEventListener('click', () => {
        clearActive(modeButtons);
        button.classList.add('active');
        handler(button.textContent.toLowerCase());
      }),
    );
  }

  bindAnswerButtons(handler) {
    const answerButtons = [
      ...document.getElementsByClassName('game__mode-rules-answrBtn'),
    ];
    answerButtons.map((button) =>
      button.addEventListener('click', () => {
        handler(button.textContent);
      }),
    );
  }

  bindQuitGameButton(handler) {
    const quitButtonEvent = document.querySelector('.quit-game');
    quitButtonEvent.addEventListener('click', () => {
      handler();
    });
  }

  bindHofButton(handler) {
    const hofButton = document.querySelector('.game__button-hof');
    hofButton.addEventListener('click', () => {
      handler();
    });
  }

  bindRulesButton(handler) {
    const rulesButton = document.querySelector('.game__button-rules');
    rulesButton.addEventListener('click', () => {
      handler();
    });
  }

  // TODO: przeniesienie funkcji bindujących do controllera
  bindDifficultyLevelButton(handler) {
    levelButtons.map((button, index) =>
      button.addEventListener('click', () => {
        clearActive(levelButtons);
        button.classList.add('active');
        handler(index);
      }),
    );
  }
}

export default View;
