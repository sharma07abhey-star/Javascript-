// object literals
const mysym = Symbol("key1");

const person = {
  name: "Abhey",
  [mysym]:"mykey1",
  age: 18,
  city: "New York",
  country: "USA"
  
};
person.email = "abhey@chatgpt.com"
Object.freeze(person); //freeze the object so that no new properties can be added

console.log(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person[mysym]);