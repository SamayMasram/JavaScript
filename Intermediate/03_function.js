function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName() // function calling

/*
function addTwoNumbers(num1 , num2) {
    console.log(num1+num2);
}
//addTwoNumbers(3, 5)
/*
    input in function called parameters
    values given to a function called arguments

const result = addTwoNumbers(4, 2)
console.log("Result: ", result);
*/

function addTwoNumbersnew(num1 , num2) {
    //let result = num1 + num2
    //return result
    return num1+num2
}
const result = addTwoNumbersnew(4, 2)
console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 600));

const user = {
    username: "amar",
    price: 1999
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 2999
})


const myNewArray = [400, 100, 300]
function returnSecondValue(getArray) {
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([800, 900, 700]));

//  node 03_function.js