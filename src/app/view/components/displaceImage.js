import elementCreator from "../../utils/elementCreator";

import imageSrc from '../../../../static/assets/img/images/staff/1.jpg';

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

function displaceImage(imageSource, altDescription) {
    const image = elementCreator('img', {src: imageSrc, class: 'game-image__content--image', alt: 'blablabl'});
    image.src = `./static/assets/img/images/students/${imageSource}`;
    image.alt = `${altDescription}`;
    return image;
};
