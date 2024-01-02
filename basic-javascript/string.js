// Concatinaton method..

const name = "behan";
const repo = 50;

// console.log("my name is " + name + " my repo is " + repo); // Avoid this concatinate method

// String interpolation.

// console.log(`My name is ${name.toUpperCase()} and i have ${repo.toFixed(2)} repository on GitHub account! `);

// Define String using construt method.

let anotherString = new String('Behan');

// console.log(anotherString);
// console.log(anotherString[0]);

let changed = anotherString[0] = 'R';
// console.log(changed);

// Experiment Some String Methods:

// console.log(anotherString.charAt(0));
// console.log(changed.indexOf("R"));
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(`i have ${String(repo).repeat(3)} repository `);

// let url = "https://github.com%20%behan05";
// console.log((url));
// console.log(url.replace('%20%','/'));

// console.log(anotherString.slice(0,3));

let str = "the quick brown box jumps over the lazy dog."
let arr = str.split(); // copy string into subString as an Array.
// arr = str.split(' '); // Seperator.
// console.log(arr[1]);
// console.log(arr.length);

let str2 = "    behan  ";

// console.log(str2);
// console.log(str2.trimStart());
// console.log(str2.trimEnd());

// console.log(str2.trim())










