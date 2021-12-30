// link this file to index.html

import { calculatePoints } from '../src/app/logic/calculatePoints.js';

const pointsMediumTrue = calculatePoints(10, true, 'medium');
console.log(`Medium Level with true: ${pointsMediumTrue}`);

const pointsMediumFalse = calculatePoints(10, false, 'medium');
console.log(`Medium Level with false: ${pointsMediumFalse}`);

const pointsHardTrue = calculatePoints(10, true, 'hard');
console.log(`Hard Level with true: ${pointsHardTrue}`);

const pointsHardFalse = calculatePoints(10, false, 'hard');
console.log(`Hard Level with false: ${pointsHardFalse}`);
