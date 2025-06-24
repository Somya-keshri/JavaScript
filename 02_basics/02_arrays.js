const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros)
console.log(marvel_heros);  
// ['thor','Ironman','spiderman',['superman','flash','batman']]
console.log(marvel_heros[3][1]);       // flash


// concat :Combines two or more arrays & returns a new array without modifying any existing array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// same work concat and spread
const all_newHeros = [...marvel_heros, ...dc_heros]  // spread
console.log(all_newHeros)

const another_array = [1,2,3,[4,5],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);          // flat merge all array in one

console.log(Array.isArray("Somya"))      // false
console.log(Array.from("Somya"))     // ['S','o','m','y','a']  from: convert to array

console.log(Array.from({name: "Somya"}))   // []    (interesting)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));     // [ 100, 200, 300 ]