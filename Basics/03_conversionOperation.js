let score = "33ac"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN not a number

let score1 = null
console.log(typeof(score1))

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1) //0

//"33" -> 33
//"33ac" -> NaN
//true -> 1 / false -> 0

let loggedIn = 1

let isBoolean = Boolean (loggedIn)
console.log(isBoolean) //true

//"" -> false
//"hi" -> true

let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//---------------OPERATIONS------------------
 
let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3+4)*5%3)

console.log(true);
console.log(+true);

