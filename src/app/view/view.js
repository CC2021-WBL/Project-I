import elementInjector from '../utils/elementInjector';
import questionForMode from './components/questionForMode';
import displayImage from './components/displayImage';
import modeButtons from './components/mainMenu';
import createLogo from './components/createLogo';
import ModalWindow from './components/modal/modalWindow';
import { INITIAL_GAME_MODE_TEXT, INITIAL_MAIN_TEXT } from '../data/consts';
import modeRules from './components/modeRules';
import buttonPlay from './components/buttonPlay';
import createImage from './components/createImage';
import doBtnHallOfFame from './components/doBtnHallOfFame';
import doHallOfFameContent from './components/doHallOfFameContent';
import displayTimerText from './components/displayTimerText';
import doButtonRules from './components/buttonRules';
import levelButtons from './components/settingsLevel';
import buttonWhite from './components/buttonWhite';
import answersButtons from './components/answersButtons';
import clearActive from '../utils/clearActive';
import displayWand from './components/wand';

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

  showViewsForChosenMode(mode) {
    this.render('.game__mode', questionForMode(mode));
    this.render('.game__mode-rules', ...modeRules(mode));
    this.render(
      '.game__btns',
      doBtnHallOfFame(`Hall of fame`),
      buttonPlay('Play the game'),
    );
  }

  renderInitialScreen() {
    this.render('.header__game-logo', createLogo());
    this.render('.header__game-nav', ...modeButtons);
    this.render('.game__mode', INITIAL_GAME_MODE_TEXT);
    this.render('.game__mode-rules', INITIAL_MAIN_TEXT);
    this.render('.game-image__content', createImage());
    const settingsButton = buttonWhite('settings');
    settingsButton.addEventListener('click', this.toggleSettingsView);
    this.render('.settings', settingsButton);
  }

  showRulesButtons() {
    this.render('.game__btns', doButtonRules('rules'), buttonPlay('Play'));
  }

  showHof() {
    this.render('.game__mode', 'showHof dupa game mode');
    this.render(
      '.game__mode-rules',
      ...doHallOfFameContent(
        window.app.model.gameMode,
        window.app.model.difficultyLevel,
      ),
    );
    console.log('showHof');
    this.showRulesButtons();

    // render('.game__btns', doBtnHallOfFame('Rules'), buttonPlay('Play'));
  }

  showSettings() {
    this.render('.game__mode', 'Choose level');
    this.render('.game__mode-rules', ...levelButtons);
    this.render(
      '.game__btns',
      buttonWhite('back'),
      buttonPlay('Save & return'),
    );
    this.bindDifficultyLevelButton(window.app.changeDifficultyLevel);
  }

  // hide settings screen
  hideSettings() {
    this.renderInitialScreen();
    // TODO: do stg after hiding the settings
  }

  toggleSettingsView = () => {
    if (!this.settings) {
      this.showSettings();
    } else {
      this.hideSettings();
    }
    this.settings = !this.settings;
  };

  // method toggles between HOF button and view - and ModeRules button and view
  toggleHofView = () => {
    if (this.hofIsOn === false) {
      this.hofIsOn = true;
      console.log('hof is on');
      this.showHof();
    } else {
      this.hofIsOn = false;
      console.log('hof is off');
    }
  };

  renderTimer(timeInSeconds, initialTime) {
    this.render('.game-timer', ...displayWand(timeInSeconds, initialTime));
    this.render('.game-timer__text', displayTimerText(timeInSeconds));
  }

  renderModal() {
    this.render('.modal', ModalWindow());
  }

  renderImage() {
    this.render('.game-image__content', displayImage());
  }

  renderQuestion(question) {
    this.render('.game__mode', 'Who is this? What is his house');
    this.render('.game__mode-rules', ...answersButtons(question));
    this.render(
      '.game-image__content',
      displayImage(question.image, 'very handsome Harry'),
    );
  }

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
        handler(button.textContent);
      }),
    );
  }

  bindAnswerButtons(handler) {
    const answerButtons = [...document.getElementsByClassName('answerButton')];
    answerButtons.map((button) =>
      button.addEventListener('click', () => {
        handler(button.textContent);
      }),
    );
  }
  // TODO: przeniesienie funkcji bindujących do controllera
  /*    bindSettingsButton(handler){
  
  } */

  /*  bindLevelButtons(handler) {
    const settingButton = document.querySelector('.game__button');
    settingButton.addEventListener('click', () => {
      handler();
    });
  } */

  bindDifficultyLevelButton(handler) {
    /* 
  TODO: przeniesienie funkcji bindujących do controllera
    const difficultyLevelButtons =
      document.querySelectorAll('.game__mode-rules'); */
    levelButtons.map((button) =>
      button.addEventListener('click', () => {
        clearActive(levelButtons);
        button.classList.add('active');
        handler(button.textContent);
      }),
    );
  }
}

export default View;
