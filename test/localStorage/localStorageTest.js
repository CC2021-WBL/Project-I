import testGameInfos from './localStorageTestData';
import addResult from '../../src/app/logic/localStorage';

// TESTING GUIDE
// in controller.js add a the first lines:
// import testLocalStorage from '../../../test/localStorage/localStorageTest';
// import testGameInfos from '../../../test/localStorage/localStorageTestData';
// in controller constructor add:
// testLocalStorage(this.model.rankings, testGameInfos);
// npm start
// open http://localhost:1234
// F12 and check Application/Local Storage
// The init look will look like this: {"students":[],"staff":[],"houses":[]}
// When you click button, the rankings will be saved in localStorage;

function testLocalStorage(rankings) {
  const button = document.createElement('button');
  button.innerText = 'TEST - Save gameInfos in localStorage';
  button.setAttribute('id', 'localstorage');
  document.querySelector('.header__game-logo').append(button);

  const buttonLS = document.getElementById('localstorage');
  buttonLS.addEventListener('click', (event) => {
    event.preventDefault();
    buttonLS.innerText = 'TEST - Now check the localStorage';
    for (const info of testGameInfos) {
      addResult(rankings, info, 3);
    }
  });
}

export default testLocalStorage;
