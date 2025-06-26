// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10            // 5
// val1 = null ?? 10         // 10

// val1 = undefined ?? 15      // 15
val1 = null ?? 10 ?? 20          // 10

console.log(val1);


// TERNARY OPERATOR
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")