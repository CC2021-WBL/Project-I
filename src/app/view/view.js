/* eslint-disable import/extensions */
import elementInjector from '../utils/elementInjector';
import questionForMode from './components/questionForMode';
import displayImage from './components/displayImage';
// import createLogo from './components/createLogo';
// import gameModeButtons from './components/gameModeButtons';
import modeButtons from './components/mainMenu.js';
import createLogo from './components/createLogo';
import ModalWindow from './components/modal/modalWindow';
import { INITIAL_GAME_MODE_TEXT, INITIAL_MAIN_TEXT } from '../data/consts';
import modeRules from './components/modeRules';
import buttonPlay from './components/buttonPlay';
import { timer } from './components/timerText';

class View {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {}

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
  }

  renderInitialScreen() {
    // RENDER LOGO
    this.render('.header__game-logo', createLogo());
    // // RENDER GAME MODE BUTTONS
    this.render('.header__game-nav', ...modeButtons);
    // // RENDER INIT LOOK OF GAME_MODE
    this.render('.game__mode', INITIAL_GAME_MODE_TEXT);
    // // RENDER RULES
    this.render('.game__mode-rules', INITIAL_MAIN_TEXT);
    // // RENDER BUTTON
    this.render('.game__btns', buttonPlay('Play the game'));
  }

  renderTimer() {
    this.render('.game-timer', timer);
  }

  renderModal() {
    this.render('.modal', ModalWindow());
  }

  renderImage() {
    this.render('.game-image__content', displayImage());
  }
}

export default View;
