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

const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["superman", "batman", "flash"]
//marvel_heros.push(dc_heros);
console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //give depth
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); //convert to array
console.log(Array.from({name: "hitesh"})); // Interesting

let score1 = 100
let score2 = 200
console.log(Array.of(score1, score2));