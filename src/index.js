import 'regenerator-runtime/runtime'; // async/await with Parcel
import { App } from './app/App';

const ONE_SECOND_MILLIS = 1000;
const HP_API_BASE_URL = process.env.HP_API_BASE_URL || 'https://hp-api.herokuapp.com/api/characters';
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS
  ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS
  : 120 * ONE_SECOND_MILLIS;

window.onload = () => App({
  title: 'Harry Potter Quiz Game',
  options: {
    hpApiBaseUrl: HP_API_BASE_URL,
    quizMaxTime: QUIZ_MAX_TIME,
  },
});
