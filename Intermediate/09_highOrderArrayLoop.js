//FOR OF
const arr = [1, 2, 3, 4, 5]
for(const num of arr) {
    //console.log(num);    
}

const greetings = "Hello world"
for(const greet of greetings) {
    //console.log(`Each char is ${greet}`);    
}


//MAP
const map = new Map()
map.set('IN', "India")
map.set('CH', "China") 
map.set('FR', "France")
map.set('IN', "India")
console.log(map);

for(const [key, value] of map) {
    //console.log(key);
}
/*
const myObject = {
    'game1': 'NFS',
    'game2': 'Pokemon'
}
for(const [key, value] of myObject) {
    console.log(key, ':-', value);
}
*/

const myObject1 = {
    js: "javascript",
    r: "ruby",
    java: "java",
    mongo: "mongodb"
}
for(const key in myObject1) {
    //console.log(key);
    //console.log(myObject1[key]);
    //console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const programming = ["js", "rb", "py", "cpp"]
for(const key in programming) {
    //console.log(key);
    //console.log(programming[key]);
}



//FOREACH
const coding = ["js", "rb", "py", "cpp", "java"]
/*coding.forEach(function (element) {
    console.log(element);
})*/

/*
coding.forEach((ele) => {
    console.log(ele);
})*/

/*
function printMe(ele){
    console.log(ele);
}
coding.forEach(printMe)
*/

/*
coding.forEach((ele, index, arr) => {
    console.log(ele, index, arr);
})*/

const myCding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCding.forEach((item) => {
    console.log(item.languageName);
    
})
//node 09_highOrderArrayLoop.js