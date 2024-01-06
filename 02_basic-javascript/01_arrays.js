const myArr = [1,2,3,4,5];
const nameString = ["Behan", "Sitesh", "Jitesh", "Hitesh", "Ritesh"];

// Access element of Array by index.
// console.log("myArr: ", myArr[0]); // 1
// console.log("nameString: ", nameString[1]); // Sitesh

// Using Constructor method.

const myArr2 = new Array(1,2,3,4,5,6,7);
// console.log(myArr2[3]); // 4

// Array Methods

myArr.push(6);
// console.log(myArr);
myArr.pop();

myArr.unshift(0);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(1,0));
// console.log(myArr.indexOf(1));
// console.log(myArr.reverse());

let newArr = myArr.join(); // return as String Element.
// console.log(newArr);

// Slice & Splice.

console.log("Slice: ", myArr.slice(0,3)); // return valuse from 0 index to 2 index value last rage can be avoided.
console.log(myArr)

console.log("Splice: ", myArr.splice(0,1,54)); // 0=index, 1=deleteValue, 66=addValue on deleted place.
console.log(myArr);














