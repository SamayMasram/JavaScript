//FOR
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        console.log("5 is best number") 
    }
}
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop value ${i}`);
        //console.log(i + '*' + j + '=' + i*j);   
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index1 = 0; index1 < myArray.length; index1++) {
    const element1 = myArray[index1];
    //console.log(element1);
}

//BREAK AND CONTINUE
/*for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log("5 deteced");
        break;
    }console.log(`Value of i is ${index}`);
}
*/
for (let index = 1; index <= 20; index++) {
    if(index == 5){
       // console.log("5 deteced");
        continue;
    }//console.log(`Value of i is ${index}`);
}


//WHILE
let index2 = 0
while(index2 <= 10) {
    //console.log(`Value of index is ${index2}`);
    index2 = index2 + 2;
}

let myArray1 = ["flash", "batman", "superman"]
let arr = 0
while(arr<myArray1.length) {
    //console.log(`value is ${myArray1[arr]}`);
    arr = arr + 1; 
}

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);

//node 08_iterations.js