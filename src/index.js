import Model from './app/logic/model';
import View from './app/view/view';
import Controller from './app/controller/controller';

// create new class instance for our model
const model = new Model();

// create new class instance for our view
const view = new View();

// create new class instance for our app
const app = new Controller(model, view);

// loading our site in webbrowser
window.onload = () => app;

// we can control from console our app
window.app = app;
