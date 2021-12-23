/* eslint-disable no-plusplus */
// const inner = document.querySelector('.inner');
// const start = document.querySelector('.start');
import elementCreator from '../../utils/elementCreator';
import img from '../../../../static/assets/img/wand.png';
// const bbb = () => {
//   let time = 30;

//   let countDown = setInterval(() => {
//     time--;
//     const progressWidth = (time / 30) * 100;

//     if (time > 0) {
//       inner.style.width = `${progressWidth}%`;
//     } else {
//       clearInterval(countDown);
//       inner.style.width = '0%';
//     }
//   }, 1000);
// };

// const bbb = (timeStart, timeLeft) => {
//   let timeLeft = timeLeft;
//   const timeStart = timeStart;

//   const progressWidth = (timeLeft / timeStart) * 100;

//   inner.style.width = `${progressWidth}%`;

// };

// const timeStart = 5;

// const wand = () => {
//   let time = timeStart;

//   const countDown = setInterval(() => {
//     time--;
//     const progressWidth = (time / timeStart) * 100;

//     if (time > 0) {
//       inner.style.width = `${progressWidth}%`;
//     } else {
//       clearInterval(countDown);
//       inner.style.width = '0%';
//       inner.style.border = 'none';
//     }
//   }, 1000);
// };
// src="./static/assets/img/wand.png" alt="The shaft of the wand"
// const timeStart = 60;

export default function displayWand() {
  const image = elementCreator('img', {
    class: 'game-timer__image',
    src: img,
    alt: 'The shaft of the wand',
  });

  const wandInner = elementCreator('div', {
    class: 'game-timer__wand-inner',
  });

  const wand = elementCreator(
    'div',
    {
      class: 'game-timer__wand',
    },
    wandInner,
  );

  const fullWand = [image, wand];

  return fullWand;
  // const endWand = () => {
  //   inner.style.width = '0%';
  // };
  // const wandStart = (timeLeft, timeStart) => {
  //   // let time = timeStart;

  //   const progressWidth = (timeLeft / timeStart) * 100;

  //   inner.style.width = `${progressWidth}%`;
  // };
}

displayWand();
// start.addEventListener('click', wand);
