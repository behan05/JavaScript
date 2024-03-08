// ## Multidimensional Arrays:
// - Creating Multidimensional Arrays
// - Accessing Elements in Multidimensional Arrays

// const myArray = [1,2,3, [4,5,6, [7,8]]];
// console.log(myArray);

// accessing element.

// return entire Array =>
// console.log(myArray);

// return index 3 of Array that will be a Array as well =>
// console.log(myArray[3]);

// return index 3 and index 3 of Array which is inside of Array  that will be a Array as well =>
// console.log(myArray[3][3]);

// // now you can get the index 1 of last array which is inside of array and this is consider as multi-dimension Array =>
// console.log(myArray[3][3][1]);
// console.log("***************************");
// ***********************************************************

// ## Array Methods:
// - concat Method
// - join Method
// - toString Method
// - fill Method
// - copyWithin Method
// - isArray Method
// - flat mehtod

// there are two way to concate Array => 

let marvelHeros = ["Iron-Man", "Thor", "Nick-Fury", "Hulk"];
let dcHeros = ["Super-Man", "Bat-Man", "Onda-Woman", "Flash"];

let indiaHeros = ["Krish", "Saktiman"];

// this is not a good practice to concate. because push method can pussh the dcHeros Array at the end of the marverlHeros.
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// unnecessary for loop => 
for (let i = 0; i < dcHeros.length - 1; i++) {
    marvelHeros.push(dcHeros[i]);
}
// console.log(marvelHeros);
// using concate method.
// console.log(marvelHeros.concat(dcHeros));

// in ECMA-script(ES6), introduse one mehtod called spread. because using for, push and contacte method you can contact one array at the same time. 

// syntax use "...array, ...array2" and so on.
// called spread method it return a new array =>
const allHeros = [...marvelHeros, ...dcHeros, ...indiaHeros]; 
// console.log(allHeros);


// Join method => 
// join method return string.

const stringByJoinMethod = allHeros.join(' ');
// console.log(stringByJoinMethod);

// toString method =>
// array represen as string.
// console.log(allHeros.toString());

// isArray method => 
// retun true or false.
// console.log(Array.isArray(allHeros)); // true
// console.log(Array.isArray({name:true})); // flase

// flat method =>
// flat method will solve complex array into sinle array.
const myArray2 = [1,2,3, [4,5,6, [7,8]]];
// console.log(myArray2.flat(Infinity));
// console.log(myArray2.flat(1));

let str = "the brown fox jumps over the lazy dog"
// console.log(Array.from(str));

// convert all these score number into Array => 
const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;
const score5 = 500;

// console.log(Array.of(score1,score2,score3,score4,score5));

// **********************************************************************************************
