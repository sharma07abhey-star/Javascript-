// calculate cart price 
function calculatecartprice(...num1){
    return num1;
}
console.log(calculatecartprice(100,200,300,400));


// creating different functions 

// 1.
function returnsecondval(getarray){
    return getarray[1];
}
const newarray = [1,2,3,4,5];
console.log(returnsecondval(newarray));

// 2.
function loginusermessage(username = "abhey"){
    return `${username} just logged in`;
}
const message = loginusermessage("parneet");
console.log(message);

// 3.
function handleobject(anyobject){
    return (`username is ${anyobject.username} and price is ${anyobject.price}`);
}
const user = {
    username:"john",
    price:0
};
console.log(handleobject(user));