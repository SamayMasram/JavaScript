// ARRAY
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);

// ARRAY methods
myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(-9));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

// Slice, Splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);
//slice doesn't not modify original array

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);
// splice modify original array