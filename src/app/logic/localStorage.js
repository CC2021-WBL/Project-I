const testObject1 = {
  name: 'Albus Dumbledore',
  result: 225,
  mode: 'Characters',
};
const testObject2 = {
  name: 'Severus Snape',
  result: 125,
  mode: 'Characters',
};

const testObject3 = {
  name: 'Rubeus Hagrid',
  result: 300,
  mode: 'Characters',
};

const rankings = [];

function addResult(resultObject) {
  rankings.push(resultObject);
}

addResult(testObject1);
addResult(testObject2);
addResult(testObject3);

console.log(rankings);

function _saveGameInfoInLocalStorage(object) {
  localStorage.setItem('gameinfo', JSON.stringify(object));
}
