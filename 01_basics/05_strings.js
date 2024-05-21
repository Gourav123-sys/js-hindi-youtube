const name = "Gourav"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Gourav-gc-btech');

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-7,4);
// console.log(anotherString);

const newStringone = "   Gourav  ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://gourav.com/gourav%20mondal";

console.log(url.replace('%20', '-'));

console.log(url.includes("gourav"));
console.log(url.includes("mandal"));

console.log(gameName.split('-'));