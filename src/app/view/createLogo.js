import logo from '/static/assets/img/logo.png'

export const createLogo = () => {
  const img = document.createElement('img');
  console.log(img);
  img.classList.add('.header__game-logo__img');
  console.log(img);
  img.src = logo;
  console.log(img);
  img.addEventListener('click', () => {
    // the page will be reload
  });
  const header = document.querySelector('.header__game-logo');
  header.append(img);
};

// Test
// Call a function in App.js
export default createLogo;
