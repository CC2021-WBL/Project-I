import elementCreator from '../../utils/elementCreator';
import logoPath from '../../../../static/assets/img/logo.png';

const createLogo = () => {
  const logo = elementCreator('img', {
    class: '.header__game-logo',
    src: logoPath,
  });

  logo.addEventListener('click', () => {
    console.log('You have clicked LOGO');
    console.log(logo);
  });

  return logo;
};
export default createLogo;
