const testObject = {
  name: 'Albus Dumbledore',
  result: 200,
  mode: 'Characters',
};

function _saveGameInfoInLocalStorage(object) {
  localStorage.setItem('gameinfo', JSON.stringify(object));
}
