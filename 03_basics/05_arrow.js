// --- Normal Function ---
function add(a, b) {
  return a + b;
}

// --- Arrow Function ---
// Shorter syntax with implicit return

const addArrow = (a, b) => a + b;

console.log(add(5, 3));      // Output: 8
console.log(addArrow(5, 3)); // Output: 8


// ---------*---------

const person = {
  name: "Abhey",
  
  // Normal Function
  sayNameNormal: function() {
    console.log("Normal:", this.name); 
  },

  // Arrow Function
  sayNameArrow: () => {
    console.log(`${this.username} ,welcome to website`);
  }
};

//  In arrow function, 'this' does not refer to the 'person' object .

person.sayNameNormal(); // Output: "Normal: Abhey" (Refers to the 'person' object)
person.sayNameArrow();  // Output: "Arrow: undefined" (Refers to global window/scope, NOT 'person')