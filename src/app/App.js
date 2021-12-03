export const App = ({ title, options }) => {
  const quizTitle = document.createElement('h1');
  quizTitle.textContent = (document.querySelector('#hpquiz-app')).append(title);
};
