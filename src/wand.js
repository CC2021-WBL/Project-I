/* eslint-disable no-plusplus */
const inner = document.querySelector('.inner');
const start = document.querySelector('.start');

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

const timeStart = 5;

const wand = () => {
  let time = timeStart;

  const countDown = setInterval(() => {
    time--;
    const progressWidth = (time / timeStart) * 100;

    if (time > 0) {
      inner.style.width = `${progressWidth}%`;
    } else {
      clearInterval(countDown);
      inner.style.width = '0%';
      inner.style.border = 'none';
    }
  }, 1000);
};

// const timeStart = 60;
// const endWand = () => {
//   inner.style.width = '0%';
//   inner.style.border = 'none';
// };
// const wand = (timeLeft, timeStart) => {
//   // let time = timeStart;

//   const progressWidth = (timeLeft / timeStart) * 100;

//   inner.style.width = `${progressWidth}%`;
// };

// start.addEventListener('click', wand);
