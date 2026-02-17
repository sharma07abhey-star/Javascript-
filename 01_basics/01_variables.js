// variables

let name = "Abhey";
let age = 18;
let isStudent = true;
var city = "New York"; // var is function-scoped, let is block-scoped
const country = "USA"; // const is block-scoped and cannot be reassigned

// prefer not to use var because of issue in block scope and function scope

// country = "Canada"; // This will throw an error

console.table([ name, age, isStudent, city, country ])
