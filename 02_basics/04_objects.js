const tinderUser = new Object()        // singleton obj
// const tinderUser = {}  (same thing)  non-singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)
// { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Somya",
            lastname: "Keshri"
        }
    }
}
console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2};         // array k andar array
console.log(obj3)
// {obj1: {'1': 'a', '2': 'b'}, obj2: {'3': 'a', '4': 'b'}}

const obj4 = Object.assign({}, obj1, obj2)  //{} optional parameter but should write
console.log(obj4);        // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2};         // combine 1 and 2
console.log(obj5);           // same output as obj4


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));       // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));     // ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser));    // key value pair
// [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));      // true
console.log(tinderUser.hasOwnProperty('age'));      // false