import elementCreator from '../../utils/elementCreator';

const imageNode = {};

const updateImage = (imageSource) => {
  // Checking that img source is in base64 format or valid image URL
  const base64Reg =
    /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/;
  const imageUrlReg = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;

  if (base64Reg.test(imageSource) || imageUrlReg.test(imageSource) || imageSource.startsWith('http')) {
    imageNode.ref.setAttribute('src', imageSource);
  } else {
    throw new Error('Ups, format of input string is incorrect');
  }
};

function displayImage(imageSource, altDescription) {
  const image = elementCreator('img', {
    class: 'game-image__content-image modal-img-node',
    alt: `${altDescription}`,
  });
  imageNode.ref = image;
  updateImage(imageSource);
  return image;
}

export default displayImage;
