// if

const isUserloggedIn = true
if(2 == "2"){
    console.log("Executed");
}
// <, >, <=, >=, ==, !=, ===(also check datatype), !==

const temp = 41;
if(temp === 41){
    console.log("less than 50");
} else {
    console.log("temp is greater than 50");
}
console.log("Execute");

const score = 200;
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);   // User power: fly
}

// console.log(`User power: ${power}`);
// ReferenceError: power is not defined (for let/const)

const balance = 1000;
if(balance > 500) console.log("test"),
console.log("test2");             // ; necessary

if(balance < 500){
    console.log("less than 500");
} 
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else if(balance >= 1000){
    console.log("greater than 1000");
}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard){
    console.log("Allow to buy course");      // Allow to buy course
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");          // User logged in
}