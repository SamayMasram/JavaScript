// singleton

// object literals
//Object.create // constructor method
const mySym = Symbol("key1")

const Jsuser = {
    name: "Dio",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "dio@email.com",
    lastLoginDays: ["Monday", "Saturday"]
} 

//console.log(Jsuser.email);
//console.log(Jsuser["email"]); //always use this
//console.log(Jsuser[mySym]);

Jsuser.email = "dio@zohomail.com"
//Object.freeze(Jsuser)
Jsuser.email = "dio@gmail.com"
//console.log(Jsuser)

Jsuser.greeting = function() {
    console.log("Hello JsUser");
}
console.log(Jsuser.greeting);

Jsuser.greeting2 = function() {
    console.log(`Hello JsUser ${this.name}`); //this for refering same object
}
console.log(Jsuser.greeting2());


// Using Constructor
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "email@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Samay",
            lastname: "masram"
        }
    } 
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const users = [
    {id:1, email:"h@gmail.com"},{id:2, email:"j@gmail.com"},{id:3, email:"h@gmail.com"}
]
console.log(users[1].email);

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('LoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "9999",
    courseinstructor: "hitesh"
}

const {courseinstructor: instructor} = course
//console.log(courseinstructor);
console.log(instructor);
/*
const navbar = ({company}) => {

}
navbar(company = "hitesh") // destructuring
*/

/*
{   //JSON
    "name": "hitesh",
    "price": "free" // both should be string
}
*/

