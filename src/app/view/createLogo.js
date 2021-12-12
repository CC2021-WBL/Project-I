import logo from '/static/assets/img/logo.png';
import elementCreator from '../utils/elementCreator';

export const createLogo = () => {
  const img = elementCreator('img', { src: logo, class: '.header__game-logo' });
  return img;
};

export default createLogo;
