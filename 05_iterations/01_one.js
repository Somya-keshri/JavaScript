// FOR

for(let i=0; i<7; i++){
    const element = i ;
    if(element == 5){
        console.log("5 is best num")
    }
    console.log(element);
}
// console.log(element);         // ReferenceError: element is not defined (scope)

for(let i=0; i<=5; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=0; j<=2; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' +i*j);
    }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// BREAK AND CONTINUE

console.log("BREAK");
for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}


console.log("CONTINUE");
for (let index = 0; index <= 7; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}