/* eslint-disable import/extensions */
import elementInjector from '../utils/elementInjector';
import questionForMode from './components/questionForMode';
import modeButtons from './components/mainMenu.js';
import createLogo from './components/createLogo';
import { INITIAL_GAME_MODE_TEXT, INITIAL_MAIN_TEXT } from '../data/consts';
import modeRules from './components/modeRules';
import buttonPlay from './components/buttonPlay';
import answersButtons from './components/answersButtons';
import buttonQuitGame from './components/buttonQuitGame';
import displayImage from './components/displayImage';
import wand from './components/wand';
import harryPotterImg from '../../../static/assets/img/images/students/0.jpg';

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
    this.render('.game__mode', questionForMode(mode));
    this.render('.game__mode-rules', ...modeRules(mode));
    this.render('.game__btns', buttonPlay('Play the game'));
  }

  renderInitialScreen() {
    this.render('.header__game-logo', createLogo());
    this.render('.header__game-nav', ...modeButtons);
    this.render('.game__mode', INITIAL_GAME_MODE_TEXT);
    this.render('.game__mode-rules', INITIAL_MAIN_TEXT);
    this.render('.game-image__content', displayImage(harryPotterImg));
  }

  renderQuestion(question) {
    this.render('.game__mode', 'Who is this? What is his house');
    this.render('.game__mode-rules', ...answersButtons(question));
    this.render('.game-image__content', displayImage(question.image));
  }

  renderQuitGameButton() {
    this.render('.game__btns', buttonQuitGame('Quit game'));
  }

  renderWand(gameTime) {
    this.render('.game-timer', ...wand(gameTime));
  }

  renderQuitView(text, result, questions) {
    this.render('.game__mode', text);
    this.render(
      '.game__mode-rules',
      `YOUR GAME IS OVER | Your result is ${result}/${questions}`,
    );
  }
}

export default View;
