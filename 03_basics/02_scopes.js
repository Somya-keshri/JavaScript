var c = 300;
let a = 150;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner: ", a);
}
console.log(a);          // 150
//console.log(b);         // not defined
// console.log(c);       // 30

for(let i=0; i<array.length; i++){
    const element = array[i];
}

// scope in browser and code environment are different