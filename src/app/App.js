import elementCreator from './utils/elementCreator';
import elementInjector from './utils/elementInjector';

const App = ({ title, options }) => {
  const gameWrapper = document.querySelector('.game-wrapper');

  // CREATE MAIN ELEMENTS
  const header = elementCreator('header', { class: 'header' });
  const aside = elementCreator('aside', { class: 'game-image' });
  const main = elementCreator('main', { class: 'game' });
  const footer = elementCreator('footer', { class: 'footer' });
  // elements injected into gameWrapper
  elementInjector(gameWrapper, header, aside, main, footer);

  // HEADER ELEMENTS
  const headerGameLogo = elementCreator(
    'div',
    { class: 'header__game-logo' },
    'logo',
  );
  const headerGameNav = elementCreator(
    'div',
    { class: 'header__game-nav' },
    'navigation',
  );
  elementInjector(header, headerGameLogo, headerGameNav);

  // ASIDE ELEMENTS
  const asideGameImage = elementCreator('div', {
    class: 'game-image__content',
  });
  elementInjector(aside, asideGameImage);

  // MAIN ELEMENTS
  const mainGameMode = elementCreator(
    'div',
    { class: 'game__mode' },
    'choose game mode',
  );
  const mainGameModeRules = elementCreator(
    'div',
    {
      class: 'game__mode-rules',
    },
    'rules',
  );
  const mainGameButtons = elementCreator('div', { class: 'game__btns' });
  elementInjector(main, mainGameMode, mainGameModeRules, mainGameButtons);

  // FOOTER ELEMENTS
  const footerGameTimer = elementCreator(
    'div',
    { class: 'game-timer' },
    'game-timer',
  );
  elementInjector(footer, footerGameTimer);

  // CREATE BUTTONS
  const gameBtn = elementCreator(
    'button',
    {
      class: 'game__btn',
      id: 'game__btn',
    },
    'random text button',
  );
  const playBtn = elementCreator(
    'button',
    {
      class: 'game__play',
      id: 'game__play',
    },
    'play button',
  );
  elementInjector(mainGameButtons, gameBtn, playBtn);

  const gameBtn2 = elementCreator(
    'button',
    {
      class: 'game__btn',
      id: 'game__btn',
    },
    'random text button in footer',
  );
  elementInjector(footer, gameBtn2);

  // HAGRID INJECTOR
  const hagrid = elementCreator('img', {
    src: 'https://pbs.twimg.com/profile_images/633953219811672064/U-Yzld1q_400x400.png',
    width: '100%',
    height: '100%',
  });
  elementInjector(asideGameImage, hagrid);
};

export default App;
