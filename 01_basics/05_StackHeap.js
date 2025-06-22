// Stack (Primitive)  , Heap (Non Primitive)

let myYouTubename = "somyadotcom"
let anothername = myYouTubename

anothername = "chaiaurcode"

console.log(myYouTubename)        // somyadotcom
console.log(anothername)          // chaiaurcode5
 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "somya@google.com"

console.log(userOne.email);       // somya@google.com
console.log(userTwo.email);       // somya@google.com