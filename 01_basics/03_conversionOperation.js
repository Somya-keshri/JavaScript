let score = "33abc"

console.log(typeof score);         // string
console.log(typeof (score));       // string
//const {score} = requestAnimationFrame.body

let valueInNumber = Number(score)
console.log(valueInNumber)         // NaN  (not a number)
console.log(typeof valueInNumber);  // number

let abc = null
let valueInNumbe = Number(abc)
console.log(valueInNumbe)     // 0
console.log(abc)              // null
console.log(typeof abc);      // object

let mark = undefined
let valueInNum = Number(mark)
console.log(valueInNum)     // NaN
console.log(mark)              // undefined
console.log(typeof mark);  // undefined

let bool = true
let valueInN = Number(bool)
console.log(valueInN)     // 1
console.log(bool)              // true
console.log(typeof bool);      // boolean

// "33" => 33
// "33abc" => NaN (type num)
// true => 1; false => 0 
// " " => false
// "somya" => true

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);        // false

let someNum = 55
let stringNum = String(someNum)
console.log(stringNum);         // 55
console.log(typeof stringNum);  // string