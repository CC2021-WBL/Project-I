// eslint-disable-next-line import/no-absolute-path,import/no-unresolved
import logo from '/static/assets/img/logo.png';
import elementCreator from '../../utils/elementCreator';

const createLogo = () => {
  const img = elementCreator('img', { src: logo, class: '.header__game-logo' });
  return img;
};

export default createLogo;
