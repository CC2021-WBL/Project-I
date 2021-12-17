// const progressBar = document.querySelector('.game-timer__wand');
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

const timeStart = 60;
// const checkColors = (width) => {
//   if (width > 60) {
//     inner.style.border = 'solid green';
//   } else {
//     inner.style.border = 'solid  red';
//   }
// };
const bbb = () => {
  let time = timeStart;

  const countDown = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    time--;
    const progressWidth = (time / timeStart) * 100;

    if (time > 0) {
      inner.style.width = `${progressWidth}%`;
      // checkColors(progressWidth);
    } else {
      clearInterval(countDown);
      inner.style.width = '0%';
      inner.style.border = 'none';
    }
  }, 1000);
};

start.addEventListener('click', bbb);
