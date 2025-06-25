const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor
const {courseInstructor: instructor} = course     // destructuring

console.log(instructor);        // hitesh

// const navbar = ({company}) => {        // destructure in react n 

// }
// navbar(company = "ZS")


// JSON format
// {
//     "name": "somya",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// API in array format
[
    {},
    {},
    {}
]