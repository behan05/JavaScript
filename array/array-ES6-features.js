// ## ES6+ Features => 

// - Spread Operator
// - Array.from Method
// - Array.of Method
// - Array.find
// - Array.findIndex
// - Array.entries
// - Array.keys
// - Array.values
// - Array Destructuring


// - Spread Operator(concate two diff array) =>

let num = [1, 2, 3, 4, 5, 67, 88];
let num2 = [88, 77, 6, 5, [54, 67, [99, 67]], 4, 3, 2, 1];

let concateNum = [...num, ...num2.flat(Infinity)];
// console.log(concateNum);


// - Array.from Method =>
//convert iterators in Array.
let word = 'Behan';
// console.log(Array.from(word));

// - Array.of Method =>
let score = 100;
let score2 = 200;
// console.log(Array.of(score,score2));

// Array Destructuring =>

let colorArray = ["red", "green", "blue", "yellow", "pink", "black"];
const [firstColor, secondColor, thirdColor, ...restAll] = colorArray;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(...restAll);

let num3 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = num3;

// console.log(first);
// console.log(second);
// console.log(...rest);