// 1. conversions

let score = 69;
console.log(typeof score);

let valuechange = String(score);
console.log(typeof(valuechange));
console.log(valuechange);

let isstudent = 1;
console.log(typeof isstudent);

let isstudentString = Boolean(isstudent);
console.log(typeof(isstudentString));
console.log(isstudentString);

// 2. operations
let value = 3;
let negvalue = -value;
console.log(negvalue);

let str1 = "Hello";  // adding two strings in js
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3);

// adding strings with number will concatenate numbers
console.log("1" + 2 ); // the priority is from left to right