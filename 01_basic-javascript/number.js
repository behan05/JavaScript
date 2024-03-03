// const score = 400;

// using number constructor.
// const num = new Number(400);
// console.log(num);
// Expected output: 400


// methods of Number data type.
// const price = 34.54000;
// console.log(price.toFixed(2));
// Expected output: 34.54 // return string

// const wholenum = parseInt(price);
// console.log(wholenum);
// Expected output: 34

// const flot = parseFloat(price);
// console.log(flot);
// Expected output: 34.54

// console.log(Number.isFinite(price));
// Expected output: true;

// console.log(Number.isInteger(flot));
// Expected output: false;


// const val = new Number(34);
// console.log(typeof val);
// Expected output: object.
// const n = val.valueOf()
// console.log(typeof n);
// Expected output: Number.

// const balance = 1000000;
// console.log(balance.toLocaleString());
// Expected output:1,000,000
// console.log(balance.toLocaleString('en-IN')); // represent value in indian standardard.
// Expected output:10,00,000


// second time pratices:

// create number data-type using constructor => 

// let num = new Number();
// console.log(typeof num);
// num = 23;
// console.log(num);
// console.log(typeof Number(num));
// console.log(num.toExponential(23));

// let score = 40023000n;
let score = 400.23000;

// console.log(typeof score);
// console.log(score.toFixed(2));
let intWholeVal = parseInt(score);
let FloatWholeVal = parseFloat(score);
// console.table([intWholeVal, FloatWholeVal]);

// console.log(Number.isFinite(score));
// console.log(Number.isInteger(score));

const num = new Number(200);
// console.log(typeof num); // return object.
// console.log(typeof num.valueOf()); // return number.

const balance = 100000;
// console.log(`return as US dollor by default: ${balance.toLocaleString()}`);
// console.log(`return as IN rupes: ${balance.toLocaleString("en-IN")}`);