// ARRAYS

const myArr = [5, 7, 23, 51, true, "notebook"]
const myHeros = ["spiderman", "batman", "ironman", "superman", "hulk"]

const myArr2 = new Array(1, 2, 3) 
console.log(myArr[0]);         // 5
console.log(myHeros);        // ['spiderman', 'batman', 'ironman', 'superman', 'hulk']

// ARRAY METHODS

myArr.push(7)           // add 7 at end
myArr.push(63) 
myArr.pop()             // remove num from end
myArr.unshift(9)            // add num in start
myArr.shift()             // remove num from start
console.log(myArr);

console.log(myArr.includes(5))          // true
console.log(myArr.indexOf(3))           // -1
console.log(myArr.indexOf(23))          // 2

const newArr = myArr.join();        // changes array to string
console.log(myArr);               // [ 5, 7, 23, 51, true, 'notebook' ]
console.log(newArr);              // 5,7,23,51,true,notebook
console.log(typeof newArr);         // string

// SLICE , SPLICE 

const myArr1 = [9, 75, 31, 53, true, "trolley"]

console.log("A ", myArr1);         // A  [ 9, 75, 31, 53, true, 'trolley' ]

const myn1 = myArr1.slice(1, 4);        // index num
console.log(myn1);                     // [ 75, 31, 53 ] (exclude last element)
console.log("B", myArr1)            // B [ 9, 75, 31, 53, true, 'trolley' ]

const myn2 = myArr1.splice(1, 4);        // include last element
console.log(myn2);                     // [ 75, 31, 53, true ]
console.log("C ", myArr1);     // splice manipulate original array (remove splice part)
// C  [ 9, 'trolley' ]