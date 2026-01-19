
// primitive or Call by Value
/* 7 types:
    String 
    Number
    Boolean
    Null
    Undefined
    Symbol
    BigInt
*/
const score = 100
console.log(typeof score);

const scoreValue = 100.10
console.log(typeof scoreValue);

const isLogged = false
console.log(typeof isLogged);

const outsideTemp = null
console.log(typeof outsideTemp);

let userName
console.log(typeof userName);

const id = Symbol('123')
console.log(typeof id);

const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 12345689121254n
console.log(typeof bigNumber);

// Non-primitive or Reference
/*  Array
    Objects
    Functions
*/
const heros = ["shaktiman", "naagraj", "doga"]
console.log(typeof heros);

let myObj = {
    name: "Samay",
    age: 21
}
console.log(typeof myObj);


const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof myFunction);


//  Stack (Primitive) & Heap (Non-primitive)
let myYoutubeName = "ChaiAurCode"
let anotherName = myYoutubeName
anotherName = "hitesh"
console.log(myYoutubeName);
console.log(anotherName);

let userone = {
    email : "hitesh@gmail.com",
    upi : "hitesh@icici"
}

let usertwo = userone
usertwo.email = "user@email.com"
console.log(userone.email);
console.log(usertwo.email);
