// Immediately Invoked Function Expressions (IIFE)
// IIFE: to remove pollution from Global scope

(function one(){
    console.log(`DB CONNECTED`);
})();              // DB CONNECTED


( () => {
    console.log(`DB CONNECTED TWO`);         // DB CONNECTED TWO
} )();               // TypeError if upperfunc does not end with semicolon

(function aurcode(){
    // named IIFE
    console.log(`DB CONNECTED THREE`);       // DB CONNECTED THREE
})();                     // must use semicolon

// OR
((name) => {
    // unamed IIFE
    console.log(`DB CONNECTED ${name}`);
})('Sinchan');          // DB CONNECTED TWO Sinchan