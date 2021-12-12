import elementCreator from "../../utils/elementCreator";

import imageSrc from '../../../../static/assets/img/images/staff/1.jpg';

//  moja funkcja czyli domyślnie to co mam zrobić ?---------------------------------

// const imageNode = {};

// const updateImage = (imageSource) => {
//   // Checking that img source is in base64 format
//   // FIXME: If we should use only base64/jpg, delete one condition in if
//   const reg = /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/;

//   if (reg.test(imageSource) || /.jpg/.test(imageSource)) {
//     imageNode.ref.setAttribute('src', imageSource);
//   } else {
//     throw new Error('Ups, format of input string is incorrect');
//   }
// };

// function imageViewer(imageSource) {
//     const image = elementCreator('img', {src: imageSrc, class: 'game-image__content--image', alt: 'blablabl'});
    // image.src = `./static/assets/img/images/students/${imageSource}`;
//     return image;
// }


//  !!!--------------------------------------------

// kod działający na liveServer ale nie przez parcel //działa po sztywnym zaimportowaniu ścieżki


const image = elementCreator('img', {src: imageSrc, class: 'game-image__content--image', alt: 'blablabl'});
document.querySelector('.game-image__content').appendChild(image);


// stworzyć funkcję, która przyjmuje dwa argumenty - MODE - people i ścieżkę ? albo ścieżkę i wyświetla ${} src i końcówkę np. 0.jpg ? - numer zdjęcia ?
// 