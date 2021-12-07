import 'regenerator-runtime/runtime'; // async/await with Parcel
import Model from './app/logic/model';
import View from './app/view/view';
import Controller from './app/logic/controller';

const ONE_SECOND_MILLIS = 1000;
const HP_API_BASE_URL =
  process.env.HP_API_BASE_URL || 'https://hp-api.herokuapp.com/api/characters';
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS
  ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS
  : 120 * ONE_SECOND_MILLIS;

// create new class instance for our model
const model = new Model({
  title: 'Harry Potter Quiz Game',
  options: {
    hpApiBaseUrl: HP_API_BASE_URL,
    quizMaxTime: QUIZ_MAX_TIME,
  },
});

// create new class instance for our view
const view = new View();

// create new class instance for our app
const app = new Controller(model, view);

// loading our site in webbrowser
window.onload = () => app;

// we can control from console our app
window.app = app;
