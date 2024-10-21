import { yearUntilRetirement } from './ageCalculator.js';
import { addNumber } from './sumCalculator.js';
import { calculateArea } from './areaCalculator.js';
import { makeAjaxRequest } from './ajaxRequest.js';

yearUntilRetirement({ year: 1987, firstName: 'John' });
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

let area21 = calculateArea({ radius: 21 });
let area7 = calculateArea({ radius: 7, power: 3 });
console.log(`Area with radius 21: ${area21}, and area with radius 7 and power 3: ${area7}`);

makeAjaxRequest('https://www.google.com', 'POST');
