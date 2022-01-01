// connect this file to index.html, replace "./src/index.js"
// results will be shown at console

import obj from './funkcja-testowa.js';

export default function getHofData(mode, level, placeAsNumber, property) {
  if (mode === 'students' && level === 'medium') {
    return obj.students_medium[placeAsNumber - 1][property];
  }
  if (mode === 'students' && level === 'hard') {
    return obj.students_hard[placeAsNumber - 1][property];
  }
  if (mode === 'staff' && level === 'medium') {
    return obj.staff_medium[placeAsNumber - 1][property];
  }
  if (mode === 'staff' && level === 'hard') {
    return obj.staff_hard[placeAsNumber - 1][property];
  }
  if (mode === 'houses' && level === 'medium') {
    return obj.houses_medium[placeAsNumber - 1][property];
  }
  if (mode === 'houses' && level === 'hard') {
    return obj.houses_hard[placeAsNumber - 1][property];
  }

  throw new Error('wrong hof data');
}

console.log('program się odpala');
const data = getHofData('students', 'medium', 1, 'name');
console.log(data);
