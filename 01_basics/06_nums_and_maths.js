const score = 400;
console.log(score)       // 400

const balance = new Number(100)
// console.log(balance);         // [Number: 100]

// console.log(balance.toString());          // 100
// console.log(balance.toString().length);   // 3
// console.log(balance.toFixed(2));          // 100.00

const otherNum = 23.576
// console.log(otherNum.toPrecision(3))      // 23.6
// console.log(otherNum.toPrecision(2))      // 24

const hundreds = 10000000
// console.log(hundreds.toLocaleString());          // 1,00,00,000
// console.log(hundreds.toLocaleString('en-IN'));   // 1,00,00,000

//const Number;
// console.log(Number.MAX_VALUE);            // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE);            // 5e-324
// console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER);     // -9007199254740991
// console.log(Number.EPSILON);              // 2.220446049250313e-16
// console.log(Number.isFinite);             // [Function: isFinite]
// console.log(Number.isInteger);            // [Function: isInteger]
// console.log(Number.isSafeInteger);        // [Function: isSafeInteger]

// ++++++++++++++++++++  MATHS  +++++++++++++++++++++

// console.log(Math);              // Object [Math]
// console.log(Math.abs(-4));        // 4
// console.log(Math.round(3.6));      // 4
// console.log(Math.floor(3.9))      // 3
// console.log(Math.ceil(3.3))       // 4
console.log(Math.sqrt(25))           // 5

console.log(Math.max(53, 54, 2, 35, 15));      // 54
console.log(Math.min(53, 54, 2, 35, 15));      // 2

console.log(Math.random());     // decimal btw 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);    // 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);    // btw 10 and 20