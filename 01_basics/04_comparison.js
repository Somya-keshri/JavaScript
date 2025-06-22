// console.log(3 > 1);       // true
// console.log(3 >= 1);      // true
// console.log(3 < 1);       // false
// console.log(3 == 1);      // false
// console.log(3 != 1);      // true

console.log("2" > 1);        // true  (do conversion first then compare)

// we should avoid these type of conversion

console.log(null > 0);       //false
console.log(null == 0);      // false (equality check)
console.log(null >= 0);      // true  (comparison) converts null = 0

console.log(undefined > 0);      // false
console.log(undefined == 0);     // false
console.log(undefined <= 0);     // false

// ===   also check datatype  (no conversion)
console.log("2" === 2);    // false