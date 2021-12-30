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
import displayTimerText from './components/displayTimerText';
import answersButtons from './components/answersButtons';
import clearActive from '../utils/clearActive';
import displayQuitGameButton from './components/displayQuitGameButton';

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
    console.log(mode);
    this.render('.game__mode', questionForMode(mode));
    this.render('.game__mode-rules', ...modeRules(mode));
  }

  renderInitialScreen() {
    this.render('.header__game-logo', createLogo());
    this.render('.header__game-nav', ...modeButtons);
    this.render('.game__mode', INITIAL_GAME_MODE_TEXT);
    this.render('.game__mode-rules', INITIAL_MAIN_TEXT);
    this.render('.game__btns', buttonPlay);
    this.render('.game-image__content', createImage());
  }

  renderTimer(timeInSeconds) {
    this.render('.game-timer', displayTimerText(timeInSeconds));
  }

  renderModal() {
    this.render('.modal', ModalWindow());
  }

  renderImage() {
    this.render('.game-image__content', displayImage());
  }

  // @quit game test

  renderQuitGame() {
    this.render('.game__btns', displayQuitGameButton());
  }

  backRes() {
    const backRes = document.querySelector('.game__mode-rules');
    backRes.style.background = '#FFF';
    backRes.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25);';
  }

  renderQuestion(question) {
    this.render('.game__mode', 'Who is this? What is his house');
    this.render('.game__mode-rules', ...answersButtons(question));
    this.render(
      '.game-image__content',
      displayImage(question.image, 'very handsome Harry'),
    );
    console.log('question w view');
    console.log(question);
  }

  bindButtonPlay(handler) {
    buttonPlay.addEventListener('click', () => {
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

  bindQuitGameButton(handler) {
    const quitButtonEvent = document.querySelector('.fa-times-circle');
    quitButtonEvent.addEventListener('click', () => {
      handler();
    });
  }
}

export default View;
