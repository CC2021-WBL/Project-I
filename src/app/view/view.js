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
import buttonRules from './components/buttonRules';
import levelButtons from './components/settingsLevel';
import buttonWhite from './components/buttonWhite';
import answersButtons from './components/answersButtons';
import clearActive from '../utils/clearActive';
import displayWand from './components/wand';

class View {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
    this.toggle = false;
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

  showViewsForChosenMode(mode, level) {
    this.render('.game__mode', questionForMode(mode));
    this.render('.game__mode-rules', ...modeRules(mode));
    // this.render(
    //   '.game__btns',
    //   doBtnHallOfFame(`Hall of fame`, mode),
    //   buttonPlay('Play the game'),
    // );

    const toggleRules = doBtnHallOfFame('Hall of fame', mode);
    toggleRules.addEventListener(
      'click',
      this.toggleButtons(mode, level),
      console.log('toggleRules zadziałał'),
    );
    this.render('.game__btns', toggleRules, buttonPlay('Play'));
  }

  updateViewsForHallOfFameAtChosenMode(mode, level) {
    this.render('.game__mode-rules', ...doHallOfFameContent(mode, level));
    // this.render('.game__mode', questionForMode(mode));
    this.render('.game__btns', doBtnHallOfFame(`Back`, mode));
  }
  // TODO: wyświetlanie opisu poziomu trudności w miejscu zdjęcia

  showViewsForDifficultyLevel(difficultyLevel) {
    //  wyświetlanie opisu poziomu trudności
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

  showRules() {
    this.render('.game__btns', buttonRules('rules'), buttonPlay('Play'));
  }

  showHoF() {
    this.render(
      '.game__btns',
      doBtnHallOfFame('Hall of fame'),
      buttonPlay('Play'),
    );
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

  toggleButtons = (mode, level) => {
    // const _gameMode = document.querySelector(
    //   '.header__game-nav.button.active',
    // ).textContent;
    // console.log(_gameMode);
    console.log(`toggleButtons zadzialal, ${mode}`);
    if (!this.toggle) {
      console.log('toggleButtons this.toggle zadzialal');
      this.showRules();
      //
      this.updateViewsForHallOfFameAtChosenMode(mode, level);
    } else {
      this.showHoF();
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
