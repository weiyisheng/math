require('esm')

import { integerD2B } from './Decimal2Binary'
import { integerB2D } from './Binary2Decimal'

let d = 391

let b = integerD2B(d)

console.log(`${d} to binary is ${b}`);

console.log(`${b} to decimal is ${integerB2D(b)}`);
