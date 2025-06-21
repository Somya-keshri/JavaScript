const accountId = 15651
let accountEmail = "soma@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// const => not change the value
//accountId = 23         (not allowed)  TypeError: Assignment to constant variable

console.log(accountId);

accountEmail = "hello@google.com"
accountPassword = "2323"
accountCity = "Kolkata"
let accountState;

/*
Prefer not to use var
bcoz of issue in block scope
and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//               15651  'hello@google.com'  '2323'        'Kolkata'     undefined

// Scope   { ... }