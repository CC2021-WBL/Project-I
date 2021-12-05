const { addResult } = require('../src/app/logic/localStorage');

const testGameInfos = [
  {
    name: 'Albus Dumbledore',
    result: 225,
    mode: 'students',
  },
  {
    name: 'Severus Snape',
    result: 125,
    mode: 'students',
  },
  {
    name: 'Rubeus Hagrid',
    result: 300,
    mode: 'students',
  },
  {
    name: 'Albus Dumbledore Brother',
    result: 451,
    mode: 'students',
  },
  {
    name: 'Hermine Granger',
    result: 999,
    mode: 'houses',
  },
  {
    name: 'Draco Malfoy',
    result: 1,
    mode: 'staff',
  },
  {
    name: 'Lucius Malfoy',
    result: 2,
    mode: 'staff',
  },
  {
    name: 'Narcissa Malfoy',
    result: 3,
    mode: 'staff',
  },
  {
    name: 'Gregory Goyle',
    result: 517,
    mode: 'houses',
  },
  {
    name: 'Vincent Crabbe',
    result: 500,
    mode: 'houses',
  },
];

function testLocalStorage(rankings) {
  const button = document.createElement('button');
  button.innerText = 'TEST - Save gameInfos in localStorage';
  button.setAttribute('id', 'localstorage');
  document.querySelector('#hpquiz-app').append(button);

  const buttonLS = document.getElementById('localstorage');
  buttonLS.addEventListener('click', (event) => {
    event.preventDefault();
    buttonLS.innerText = 'TEST - Now check the localStorage';
    for (const info of testGameInfos) {
      addResult(rankings, info, 3);
    }
  });
}

module.exports = {
  testLocalStorage,
};
