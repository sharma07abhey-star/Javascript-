// 1. primitive data types / stack

//  7 types [string, number, bigint, boolean, undefined, symbol, null]

let name = "John"; // string
let age = 30; // number
let isStudent = false; // boolean
let email; // undefined
let uniqueId = Symbol("id"); // symbol
let emptyValue = null; // null
let bigIntValue = 567890n; // bigint

// 2. reference types / non primitive / heap

// 3 types [object, array, function]

let hobbies = ["reading", "gaming"]; // array
let address = { city: "New York", zip: 10001 }; // object
const myfunc = function(){
    console.log("Hello, World!");
}
myfunc();
