// MAP   FILTER

const myNums = [1, 2, 3, 4, 5, 6, 7];

const Nums = myNums.map( (num) => num + 10 )    // [11, 12, 13, 14, ... 17]
// if open scope then use return
console.log(Nums)

const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 30 );      // [ 31, 41, 51, 61, 71 ]
console.log(newNums);

