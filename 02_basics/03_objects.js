// singleton   (literals , constructors)
// constructors : Object.create - form singleton

// object literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Somya",
    "full name": "Somya Keshri",
    [mySym]:"mykey1",
    age: 19,
    location: "Jaipur",
    email: "sona@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Friday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

JsUser.email = "somya@chatgpt.com"
//Object.freeze(JsUser)                   // fix the value
JsUser.email = "somya@microsoft.com"    // not updated
console.log(JsUser);

// comment Object.freeze
JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());   // Hello JS user undefined
console.log(JsUser.greeting);        // [Function (anonymous)]

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());      // Hello JS user, Somya undefined