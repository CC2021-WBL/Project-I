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
import buttonSettings from './components/modal/settingsButton';
import levelHeader from './components/settingsScreen';
import doBtnHallOfFame from './components/doBtnHallOfFame';
import doHallOfFameContent from './components/doHallOfFameContent';
import displayTimerText from './components/displayTimerText';
import levelButtons from './components/settingsLevel';

class View {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {
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
      doBtnHallOfFame(`Hall of fame`, mode),
      buttonPlay('Play the game'),
    );
  }

  // przygotowane pod dzialanie przycisku Hall Of Fame
  updateViewsForHallOfFameAtChosenMode(mode) {
    // this.render('.game__mode', questionForMode(mode));
    this.render('.game__mode-rules', doHallOfFameContent);
    this.render('.game__btns', doBtnHallOfFame(`Back`, mode));
  }

  renderInitialScreen() {
    this.render('.header__game-logo', createLogo());
    this.render('.header__game-nav', ...modeButtons);
    this.render('.game__mode', INITIAL_GAME_MODE_TEXT);
    this.render('.game__mode-rules', INITIAL_MAIN_TEXT);
    this.render(
      '.game__btns',
      doBtnHallOfFame('Hall of fame'),
      buttonPlay('Play'),
    );
    this.render('.game-image__content', createImage());
    const settingsButton = buttonSettings('settings');
    settingsButton.addEventListener('click', this.toggleSettingsView);
    this.render('.settings', settingsButton);
  }

  // veronicas button
  showSettings() {
    console.log('showing settings');
    this.render('.game__mode', levelHeader('Level test'));
    this.render('.game__mode-rules', levelButtons('button one'));
  }

  hideSettings() {
    console.log('hiding settings');
    // do stg after hiding the settings
  }

  toggleSettingsView = () => {
    console.log('clicked settings button');
    if (!this.settings) {
      this.showSettings();
    } else {
      this.hideSettings();
    }
    this.settings = !this.settings;
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
