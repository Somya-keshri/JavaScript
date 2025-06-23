const name = "somya "
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} Value`)
// Hello my name is somya and my repo count is 50 Value

const gameName = new String('somyak')

console.log(gameName[0]);        // s
console.log(gameName.__proto__);    // {}
console.log(gameName.length)        // 6
console.log(gameName.toUpperCase())    // SOMYAK
console.log(gameName.charAt(3));       // y
console.log(gameName.indexOf('a'));    // 4

const newString = gameName.substring(0, 5)
console.log(newString);           // somya

const anotherString = gameName.slice(-6, 3)
console.log(anotherString);       // som

const newStringOne = "    Basketball    "
console.log(newStringOne);            // '   Basketball   '
console.log(newStringOne.trim());     // 'Basketball'
console.log(newStringOne.trimEnd());   // '    Baskeball'

const url = "https://car.com/somya%20keshri"
console.log(url.replace('%20', '-'))          // https://car.com/somya-keshri
console.log(url.includes('bike'))         // false

const heroName = "spider-man"
console.log(heroName.split('-'))       // [ 'spider', 'man' ]
console.log(heroName.split([2]))       // [ 'spider-man' ]

const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.split(' '))  // ['The', 'quick'....]
const words = str.split(" ");
console.log(words[3]);     // fox

// charCodeAt  (representing the UTF-16 code unit at the given index)
console.log(str.charCodeAt(3))    // 32
console.log(str.includes("fox"));    // true
console.log(str.includes("lion"));   // false
console.log(`str ${str.includes("fox")? "contain" : "does not contain"} fox in the sentance`)
// str contain fox in the sentance

const str1 = "Table"
const str2 = "Tenis"
console.log(str1.concat(" ", str2));      // Table Tenis

const str3 = "Is this a question";
console.log(str3.startsWith("Is"))        // true
console.log(str3.endsWith("question"))    // true
console.log(str3.endsWith("ques"))        // false