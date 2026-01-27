const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
console.log(this);

function chai0() {
    console.log(this);
}
chai0()

const chai = function() {
    let username = "hitesh"
    console.log(this.username);
}
chai()

const chai1 = () => {
    let username = "harry"
    console.log(this.username);
    console.log(this);
}
chai1()

// () => {} Arrow Function
const addtwo = (num1, num2) => {
    return num1 + num2
}
const addtwo1 = (num1, num2) => (num1 + num2) // or num1 + num2
console.log(addtwo1(3, 3));
/*
    If you use in curly braces then must write return statement
*/

const myArray = [2, 5, 7, 9]
//myArray.forEach(function () {})
//myArray.forEach( () => ())


    
// node 05_arrowfunc.js