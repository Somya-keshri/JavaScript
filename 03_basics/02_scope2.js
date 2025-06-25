function one(){
    const username = "Harry"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);         // ReferenceError
    two()
}
one()          // Harry

if(true){
    const username = "Harry"
    if(username === "Harry"){
        const website = " youtube"
        console.log(username + website);       // Harry youtube
    }
    // console.log(website);      // ReferenceError
}
// console.log(username);        // ReferenceError


// ++++++++++++++++++++ interesting +++++++++++++++++++++

// console.log(addone(5))       // 6   can access before initialization
function addone(num){
    return num + 1
}
console.log(addone(5))       // 6


// addTwo(5)        // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){   // hoisting
    return num + 2
}
console.log(addTwo(5))       // 7