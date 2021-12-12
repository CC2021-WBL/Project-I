import elementCreator from "../../utils/elementCreator";

const imageNode = {};

const updateImage = (imageSource) => {
  // Checking that img source is in base64 format
  // FIXME: If we should use only base64/jpg, delete one condition in if
  const reg = /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/;

  if (reg.test(imageSource) || /.jpg/.test(imageSource)) {
    imageNode.ref.setAttribute('src', imageSource);
  } else {
    throw new Error('Ups, format of input string is incorrect');
  }
};

const altDescription = 'blablabla'; // do podmianki w przyszłości

function displaceImage(imageSource, altDescription) {
    const image = elementCreator('img', {class: 'game-image__content-image', alt: `${altDescription}`});
    imageNode.ref = image;
    updateImage(imageSource);
    return image;
};

export default displaceImage;
