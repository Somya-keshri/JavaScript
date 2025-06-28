const coding = ["js", "ruby", "java","py", "cpp"];

const values = coding.forEach((item) => {
    console.log(item);                // js ruby java...
    return item
} )
console.log(values)            // undefined


// FILTER
const myNums = [1, 2, 3, 4, 5, 6, 7];
// const newNums = myNums.filter( (num) => num > 4 );
//                      OR
const newNums = myNums.filter( (num) => {
    return num > 4;                   
    // if scope is open then its compulsary to write return keyword
} );
console.log(newNums);       // [5, 6, 7]


// another method without filter
const score = [25, 59, 72, 85, 63, 15]
const Numbers = []

score.forEach( (num) => {
    if(num > 50){
        Numbers.push(num);
    }
} )
console.log("Scores: " + Numbers);      // Scores: 59,72,85,63