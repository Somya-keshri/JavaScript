function calculateCartPrice(val1, val2, ...num){
    return num;
}
console.log(calculateCartPrice(300, 550, 452, 23, 78, 321)); // [452, 23, 78, 321]

const user = {
    username: "Henry",
    price: 399
}
function handleObject(anyobj){
    console.log(`Useraname is ${anyobj.username} and price is ${anyobj.price}`);
}
handleObject(user)   // Useraname is Henry and price is 399

handleObject({
    username: "sam",
    price: 350
})                    // Useraname is sam and price is 350

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));