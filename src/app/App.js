import elementCreator from './utils/elementCreator';
import elementInjector from './utils/elementInjector';

const App = ({ title, options }) => {
  const headerLogo = document.getElementsByClassName('header__game-logo')[0];
  const headerNav = document.getElementsByClassName('header__game-nav')[0];
  const asideImage = document.getElementsByClassName('game-image__content')[0];
  const mainMode = document.getElementsByClassName('game__mode')[0];
  const mainModeRules = document.getElementsByClassName('game__mode-rules')[0];
  const mainButtons = document.getElementsByClassName('game__btns')[0];

  const footerTimer = document.getElementsByClassName('game-timer')[0];

  const quizTitle = elementCreator('h3', { style: 'color:white' }, title);
  const quizNav = elementCreator('h3', {}, 'Here we will have our nav');
  const image = elementCreator('h3', {}, 'Here we will have our image');
  const mode = elementCreator('h1', {}, 'Students / Staff / Houses');
  const modeRules = elementCreator('h2', {}, 'Here we will have our rules');
  const testText = elementCreator('h2', {}, 'Test1');
  const buttons = elementCreator('h2', {}, 'Here we will have our buttons');
  const timer = elementCreator(
    'h2',
    { style: 'color:white' },
    'Here we will have our magic wand game-timer',
  );

  const testDiv = elementCreator(
    'div',
    { style: 'color:white' },
    elementCreator('p', {}, 'VOLDEMORT TEST'),
  );

  elementInjector(mainModeRules, testDiv);

  elementInjector(headerLogo, quizTitle);
  elementInjector(headerNav, quizNav);

  elementInjector(asideImage, image);

  elementInjector(mainMode, mode);
  elementInjector(mainModeRules, modeRules, testText);
  elementInjector(mainButtons, buttons);

  elementInjector(footerTimer, timer);
};

export default App;
