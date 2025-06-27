// FOR OF

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
// Each char is H Each char is e...

// *******************************************************************

// MAPS

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for (const [key, Value] of map) {
    console.log(key, ':-', Value);         // IN :- India...
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, Value] of myObject){
//     console.log(key, ':-', Value);
// }
// TypeError: myObject is not iterable