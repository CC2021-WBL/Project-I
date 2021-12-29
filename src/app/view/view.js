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

class View {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
    this.toggle = false;
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
  }

  renderInitialScreen() {
    this.render('.header__game-logo', createLogo());
    this.render('.header__game-nav', ...modeButtons);
    this.render('.game__mode', INITIAL_GAME_MODE_TEXT);
    this.render('.game__mode-rules', INITIAL_MAIN_TEXT);
    // this.render(
    //   '.game__btns',
    //   doBtnHallOfFame('Hall of fame'),
    //   buttonPlay('Play'),
    // );
    this.render('.game-image__content', createImage());
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

  renderTimer() {
    this.render('.game-timer', displayTimerText());
  }

  renderModal() {
    this.render('.modal', ModalWindow());
  }

  renderImage() {
    this.render('.game-image__content', displayImage());
  }
}

export default View;
