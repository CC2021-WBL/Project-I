import elementCreator from '../../utils/elementCreator';

const createLogo = () => {
  const logo = new URL(
    '../../../../static/assets/img/logo.png',
    import.meta.url,
  );
  const img = elementCreator('img', {
    src: logo.href,
    class: 'header__game-img',
  });
  return img;
};

export default createLogo;
