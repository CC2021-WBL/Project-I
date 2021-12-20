import elementCreator from '../../utils/elementCreator';
import harryPotterImg from '../../../../static/assets/img/images/students/0.jpg';

function createImage() {
  const image = elementCreator('img', {
    src: harryPotterImg,
    class: 'game-image__content-image',
    alt: 'very handsome Harry',
  });

  return image;
}

export default createImage;
