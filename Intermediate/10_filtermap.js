const coding = ["js", "ruby", "java", "cpp"]
const values = coding.forEach((item) => {
    //console.log(item);
    return item
})
//console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
//const newNums = myNums.filter((num) => num > 4)
//console.log(newNums);
// OR 
const newNums = myNums.filter((num) => {
    return num > 4
})
//console.log(newNums);

const newNumb = []
myNums.forEach((num) => {
    if(num > 4){
        newNumb.push(num)
    } 
})
//console.log(newNumb);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newNums1 = myNumber.map((num) => num + 10)
//const newNums1 = myNumber.map((num) => { return num + 10})
const newNums1 = myNumber
                        .map((num) => num*10)
                        .map((num) => num+1)
                        .filter((num) => num>=40)
console.log(newNums1);

const myNums2 = [1, 2, 3] 
/*
const myTotal = myNums2.reduce(function (acc, currval) {
    console.log(`acc ${acc} and currval ${currval}`);
    return acc + currval
}, 0)
*/
const myTotal = myNums2.reduce((acc, currval) => acc+currval, 0)
console.log(myTotal);
//acc = accumulator     currval = current 



//node 10_filtermap.js