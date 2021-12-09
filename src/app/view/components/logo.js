import elementCreator from '../../utils/elementCreator';

const createLogo = () => {
  const logo = elementCreator('img', {
    class: '.header__game-logo',
    src: '../static/assets/img/logo.png',
  });

  logo.addEventListener('click', () => {
    console.log('You have clicked LOGO');
    console.log(logo);
  });

  return logo;
};
export default createLogo;
