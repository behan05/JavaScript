// Some Advance method or concept of Array in javascript.

const marvalHeros = ["SpiderMan", "IronMan", "Thor", "CaptonAmerica"];
const dcHeros = ["Batman", "Flask"];

// do not use push method.
// example:
// marvalHeros.push(dcHeros);
// console.log(marvalHeros);

// use concat method.

// const allHeros = marvalHeros.concat(dcHeros);
// console.log(allHeros);

// spread method is Alternate of concat method.

const allHeros = [...marvalHeros, ...dcHeros]; // pass more than two array to combine into one array.

// console.log(allHeros);

// to solve complex array into one array using flat() method.

const newArray = [1,2,3, [4,5,6], 7,8,[3,6,[8,4]]];

// console.log(newArray[6][2][0]);

// console.log(newArray.flat(Infinity));
const finalOutput = newArray.flat(Infinity);
const anotherApproach = newArray.flat(2);
console.log(finalOutput);
console.log(anotherApproach);

console.log(Array.isArray("sitesh"));
console.log(Array.from("sitesh"));

// convert multiple variable items in array.

const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;
const score5 = 500.34200;

console.log(Array.of(score1,score2,score3,score4,score5.toFixed(2)));







