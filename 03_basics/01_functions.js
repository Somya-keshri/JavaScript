function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("M");
    console.log("Y");
    console.log("A");
}
sayMyName()

// sayMyName     // reference
// sayMyName()    // execution

function addTwoNum(num1, num2){      // (num1, num2 are parameters)     
    console.log(num1 + num2);
}
addTwoNum(5,4)                       // 9  (same datatype) (5,4 are argument)
const result = addTwoNum(3,9)         // 12
console.log("Result: ", result);       // Result:  undefined

// addTwoNum()          //  NaN
// addTwoNum(3, "4")    // 34
// addTwoNum(3, null)      // 3

function addTwoNumbers(n1, n2){
    // let Result = n1 + n2;
    // return Result
    return n1+n2;
}
const Result = addTwoNumbers(6, 7)
console.log(Result)                  // 13

function loginUserMessage(username){    // to avoid undefined case (username = "sam")
    //if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Somya"))       // Somya just logged in
console.log(loginUserMessage())          // undefined just logged in (before if else)