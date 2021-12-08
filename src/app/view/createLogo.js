export const createLogo = () => {
  const img = document.createElement('img');
  document.querySelector('.header').appendChild(img);
  console.log(img);
  img.classList.add('.header__game-logo');
  img.src = 'static/assets/img/logo.png';

  img.addEventListener('click', () => {
    //the page will be reload
  });
};

//Test
//Call a function in App.js
