import testGameInfos from './localStorageTestData';
import LocalStorageService from '../../src/app/logic/localStorage';

// TESTING GUIDE
// in controller.js add the first lines:

// import testGameInfos from '../../../tests/localStorage/localStorageTestData';
// import testLocalStorage from '../../../tests/localStorage/localStorageTest';

// in controller constructor add:
// testLocalStorage(this.model.rankings, testGameInfos);
// npm start
// open http://localhost:1234
// F12 and check Application/Local Storage
// The init look will look like this: {"students":[],"staff":[],"houses":[]}
// When you click button, the rankings will be saved in localStorage;

/**
 * Pattern of input object:
 * return gameInfo = {
 *   name: String,
 *   result: Number,
 *   mode: String,
 * }
 */

function addResult(rankings, gameInfo, amountOfResults) {
  const { name, result, mode, level } = gameInfo;
  // push gameinfo (only name and result, we don't need mode in this place) into the right mode in
  // rankings
  const modeAndLevel = mode + '_' + level;
  console.log(modeAndLevel)
  rankings[modeAndLevel].push({ name, result });
  // sort in descending order by points
  rankings[modeAndLevel].sort((a, b) => (a.result < b.result ? 1 : -1));
  // remove last element if there's to many gameinfos in our game ranking
  if (rankings[modeAndLevel].length > amountOfResults) rankings[modeAndLevel].pop();
  // update rankings in localStorage
  LocalStorageService.saveRankings(rankings);
}

function testLocalStorage(rankings) {
  const button = document.createElement('button');
  button.innerText = 'TEST - Save gameInfos in localStorage';
  button.setAttribute('id', 'localstorage');
  document.querySelector('.header__game-logo').append(button);

  const buttonLS = document.getElementById('localstorage');
  buttonLS.addEventListener('click', (event) => {
    event.preventDefault();
    buttonLS.innerText = 'TEST - Now check the localStorage';
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      const info = `The result of ${testGameInfos[i].name} is ${testGameInfos[i].result} (in ${testGameInfos[i].mode} mode).`;
      console.log(info);
      document.querySelector('.game__mode').innerHTML = info;
      document.querySelector('.game__mode-rules').innerHTML =
        JSON.stringify(rankings);

      addResult(rankings, testGameInfos[i], 3);
      if (i >= testGameInfos.length - 1) {
        clearInterval(interval);
      }
    }, 2000);
  });
}

export default testLocalStorage;
