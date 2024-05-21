//"use strict"; // treat all js code as newer version

// alert(3+3) // we are using nodejs, not browser

// console.log(3+3)

// console.log("Gourav")

// null => standalone value

// console.log(typeof "Gourav");
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

const id = symbol('123');
const anotherId = symbol('123');

console.log(id === anotherId);