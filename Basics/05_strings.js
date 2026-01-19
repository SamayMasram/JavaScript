const name = "hitesh"
const repoCount = 50
//console.log(name + repoCount + " value");     //AVOID

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')

console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringone = "           hitesh         "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url);
console.log(url.replace('%20', '-'));
console.log(url.includes('com'));

console.log(gameName.split('-'));