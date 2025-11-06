import elementCreator from '../../utils/elementCreator';

function createImage() {
  const harryPotterImg = new URL(
    '../../../../static/assets/img/images/students/0.jpg',
    import.meta.url,
  );
  const image = elementCreator('img', {
    src: harryPotterImg.href,
    class: 'game-image__content-image',
    alt: 'very handsome Harry',
  });

  return image;
}

export default createImage;
