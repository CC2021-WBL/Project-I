import createHousesQuestion from '../src/app/logic/housesAnswersGenerator.js';

const answers = createHousesQuestion('Slytherin', 3, [1, 3, 15, 27]);

console.log(answers);
