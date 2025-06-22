// PRIMITIVE
// 7 types : String, Numbers, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)     // false

const bigNumber = 321548412484515648n

// NON PRIMITIVE (Reference)
// Array, Objects, Functions

const heros = ["saktiman", "naagraj", "doga"];
let myObj = {
    name: "somya",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof scoreValue);        // number
console.log(typeof isLoggedIn);        // boolean
console.log(typeof outsideTemp);       // object
console.log(typeof anotherId);         // symbol
console.log(typeof bigNumber);         // bigint
console.log(typeof myFunction);         // function