// REDUCE

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, curval){
    console.log(`accumulator: ${acc} and currentValue: ${curval}`);
    return acc + curval
}, 3)

console.log(myTotal);          // 9  (3+1=>4+2=>6+3)

// in Arrow Func
const newTotal = myNums.reduce( (acc, cur) => acc + cur, 0 )
console.log(newTotal)             // 6  (0+1=>1+2=>3+3)

const shoppingCart = [
    {
        itemName: "js",
        price: 2999
    },
    {
        itemName: "py",
        price: 3999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);