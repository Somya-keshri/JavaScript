// FOR EACH

const coding = ["js", "ruby", "java","py", "cpp"];
coding.forEach( function (item){
    console.log(item);             // js ruby...
} )

coding.forEach((val) => {
    console.log(val);          // js ruby...
})

function printMe(item){
    console.log(item);         // js ruby..
}
coding.forEach(printMe);      
 
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    // js 0 [ 'js', 'ruby', 'java', 'py', 'cpp' ].....
} )


// ****************************************************************
// foreach in ARRAY
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
    console.log("");
} )