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
// node 07_loop.js