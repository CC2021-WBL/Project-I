import { testLocalStorage } from '../../test/LocalStorageTest';

const App = ({ title, options }) => {
  const quizTitle = document.createElement('h1');
  quizTitle.textContent = document.querySelector('#hpquiz-app').append(title);

  // This is our rankings objects, it's loaded from localStorage or initialize empty
  const rankings = JSON.parse(localStorage.getItem('rankings')) || {
    students: [],
    staff: [],
    houses: [],
  };
  // If rankings is empty arrays set this in localStorage
  localStorage.setItem('rankings', JSON.stringify(rankings));

  // Adam TEST branch: #10/logic/localstorage
  // Create a test button with function that add results and refresh localStorage
  testLocalStorage(rankings);
};

export default App;
