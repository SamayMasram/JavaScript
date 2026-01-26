//var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER: ", a);
    
}
console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //1.console.log(website);
    two()//2.
}
one()

if (true) {
    const username = "atha"
    if(username === "atha") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//          Interseting
function addone(num) {
    return num + 1
}
console.log(addone(5));

const addtwo = function (num) { //Expression
    return num + 2
}
console.log(addtwo(5))
//node 04_scope.js