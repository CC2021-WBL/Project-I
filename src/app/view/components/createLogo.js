import logo from '../../../../static/assets/img/logo.png';
import elementCreator from '../../utils/elementCreator';

const createLogo = () => {
  const img = elementCreator('img', { src: logo });
  return img;
};

export default createLogo;
