// DATES 

let myDate = new Date()

console.log(myDate)
console.log(typeof myDate)             // object

console.log(myDate.toString())             // good    Mon Jun 23 2025 23:23:28 GMT+0530
console.log(myDate.toDateString())          // good     Mon Jun 23 2025
console.log(myDate.toLocaleDateString())     // good     23/6/2025
console.log("")

console.log(myDate.toISOString())     
console.log(myDate.toJSON())
console.log(myDate.toTimeString())

let myCretedDate = new Date(2025, 0, 23)
console.log(myCretedDate.toDateString());      //Thu Jan 23 2025

let todayDate = new Date(2025, 5, 23, 23, 31)
console.log(todayDate.toLocaleDateString())     // 23/6/2025
console.log(todayDate.toLocaleString())         // 23/6/2025, 11:31:00 pm

let myTimeStamp = Date.now()
console.log(myTimeStamp);               // 1750702323746
console.log(myCretedDate.getTime());   // 1737570600000  to compare in seconds

console.log(Math.floor(Date.now()/1000));    // 1750702556

let newDate = new Date()

console.log(newDate);                // 2025-06-23T18:20:48.839Z
console.log(newDate.getMonth());      // 5
console.log(newDate.getDate());       // 23
console.log(newDate.getHours());      // 23
console.log(newDate.getDay());        // 1
console.log(newDate.getFullYear());   // 2025
console.log(newDate.getTime());      // 1750702848839

newDate.toLocaleString('default', {
    weekday: "long",
})