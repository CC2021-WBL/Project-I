// connect this file to index.html, replace "./src/index.js"
// results will be shown at console

import obj from './funkcja-testowa.js';
const firstData = obj;

export default function getHofData(mode, level, data, placeAsNumber, property) {
  console.log(mode);
  console.log(level);
  console.log(placeAsNumber);
  console.log(property);

  if (mode === 'students' && level === 'medium') {
    return data.students_medium[placeAsNumber - 1][property];
  }
  if (mode === 'students' && level === 'hard') {
    return data.students_hard[placeAsNumber - 1][property];
  }
  if (mode === 'staff' && level === 'medium') {
    return data.staff_medium[placeAsNumber - 1][property];
  }
  if (mode === 'staff' && level === 'hard') {
    return data.staff_hard[placeAsNumber - 1][property];
  }
  if (mode === 'houses' && level === 'medium') {
    return data.houses_medium[placeAsNumber - 1][property];
  }
  if (mode === 'houses' && level === 'hard') {
    return data.houses_hard[placeAsNumber - 1][property];
  }

  throw new Error('wrong hof data');
}

console.log('program się odpala');
const finalData = getHofData('students', 'medium', firstData, 1, 'name');
console.log(finalData);
