/* eslint-disable import/extensions */
import elementInjector from '../utils/elementInjector';
// import rules from './components/rules';
import displaceImage from './components/displaceImage';
// eslint-disable-next-line import/no-named-as-default
import modeRules from './components/modeRules'; // FIXME - add mode changes

import modeButtons from './components/mainMenu.js';
// development

// import createLogo from './components/createLogo';
// import gameModeButtons from './components/gameModeButtons';
// import createLogo from './components/createLogo';

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
    // eslint-disable-next-line no-undef
    this.render('.game__mode', questionForMode(mode));
    // this.render('.game__mode-rules', ...modeRules());
  }

  renderInitialScreen() {
    // RENDER LOGO
    // this.render('.header__game-logo', //createlogo);
    // // RENDER GAME MODE BUTTONS
    this.render('.header__game-nav', ...modeButtons);
    // // RENDER INIT LOOK OF GAME_MODE
    this.render('.game__mode', 'Choose category');
    // // RENDER RULES
    this.render('.game__mode-rules', ...modeRules());
  }

  renderImage() {
    this.render(
      '.game-image__content',
      displaceImage(
        '../../../static/assets/img/images/staff/1.jpg',
        'altDescription',
      ),
    );
  }
}

export default View;
