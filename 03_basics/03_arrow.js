const user = {
    username: "Buzz",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)   // {username.. price.. wlcmMsg..}
    }
}
user.welcomeMessage()      // Buzz, welcome to website
user.username = "Sam"
user.welcomeMessage()      // Sam, welcome to website

console.log(this);         // {}

// function chai(){
//     let username = "Harry"
//     console.log(this.username);        // undefined
// }

const chai = () => {             // arrow func
    let username = "Harry"
    console.log(this.username);        // undefined
    console.log(this);               // {}
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 
// same thing format different
const addTwo = (num1, num2) => num1 + num2    // arrow func
console.log(addTwo(3, 4))         // 7

const aadNum = (n1, n2) => ({username: "Sammy"})
console.log(aadNum())           // { username: 'Sammy' }