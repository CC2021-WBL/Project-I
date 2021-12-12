import logo from '/static/assets/img/logo.png';
import elementCreator from '../utils/elementCreator';

export const createLogo = () => {
  const img = elementCreator('img', { src: logo, class: '.header__game-logo' });
  img.addEventListener('click', () => {
    // the page will be reload
  });
  return img;
};

export default createLogo;
