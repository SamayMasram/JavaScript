/*Operators
    < > <= >= == !=
*/
//IF
if(2==2) {
    console.log("True");
}
const isUserLoggedIn = true
if(2 == "2") {
    console.log("executed");
}

const temperature = 41
if(temperature < 50) {
    console.log("less than 50");
} else {
    console.log("more than 50");
}

const score = 200
if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);

//Implicit scope
const balance = 1000
//if(balance>500) console.log("test1"),  Don't do this
//console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
}else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && loggedInFromGoogle) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}

//SWITCH CASE
const month = "March";
switch(month) {
    case "jan": 
        console.log("January");
        break;
    case "feb": 
        console.log("February");
        break;
    case "March": 
        console.log("March");
        break;
    case 4: 
        console.log("April");
        break;
    default: 
        console.log("Default");
        break;
}


//Truethy value
const userEmail1 = []
if(userEmail1) {
    console.log("got user email");
} else {
    console.log("did not get user email");
}
/*
    values that can assume to be true
    "0", 'false', " ", [], {}, function(){}
*/
if(userEmail1.length===0) {
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj.length === 0)){
    console.log("Object is empty");
}
//Falsey value
/* values that can assume to be false
   false, 0, -0, BigInt 0n, "", null, undefined, NaN 
*/


//  Nullish Coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
var1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//Terniary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



// node 07_conditional.js