// Array Basics:
// - What is an Array? =>

// Arrays in JavaScript are used to store multiple values in a single variable, Array is a collection of different type of data.And data can be a number, string, boolean, object even other Array etc.

// - Creating Arrays =>
// let arr = [1,2,3, {name:"behan"}, "hello"]
// console.log(arr);

// - Array Literal Notation => 
// Consider as Literal Notation => defined manually.
// const myArray = ["Apple", "Mango", "Kiwi"];

// - Array Constructor => 

// let constructArray = new Array();
// constructArray = [12,32,43];
// console.log(typeof constructArray); // return Object. but the value is consider as Array.
// console.log(constructArray.values());

// console.log(constructArray.values());


// Creating a Array with number.
let numArray = [1, 2, 3, 4, 5, 6];

// Creating a Array with string.
let strArray = ["Apple", "Orange", "Banana"];

// Creating a Array with mixed data type.

let mixedArray = [1, 2, "Hello", true, { userLoggedIn: false }, ["i am zero index", 4, 5]]

// setTimeout(()=>{
//     console.table([numArray,strArray,mixedArray])
// },1000)


// you can access individual data by index.

// console.log(numArray[0]); // output : 1
// console.log(strArray[1]); // output : orange
// console.log(mixedArray[5][0]); // output : i am zero index

// console.log(strArray.length)

// **************************************************************************

// - Array Methods
// ## Accessing and Modifying Arrays:
// - Accessing Elements
// - Modifying Elements
// - Adding Elements
// - Removing Elements
// - Slicing and Splicing

// method is pre-defined function you can simply apply on array and call then by using "()".

// let fruit = ["Apple", "Orange", "Banana"];
// let fruit2 = ["Kiwi", "Baer"];

// fruit.push("Mango".toUpperCase()); // add MANGO at the end of array.

// fruit.pop(); //remove from last index => MANGO will removed.

// fruit.unshift("Kiwi") // add at the beginning of array.
// fruit.shift() // remove from beginning

// console.log(fruit.includes("kiwi"));
// console.log(fruit.indexOf("Kiwi"));
// let consFruit = fruit.concat(fruit2);
// console.log(consFruit);

// console.log(fruit.join(' ')); // return as String.
// console.log(String(fruit));

// console.log(fruit.slice(0, 2));
// console.log(fruit.splice(0, 1, "deleted!"));
// (index, delete, add-item)
// console.log(fruit);

// **************************************************************************

// ## Searching and Sorting Arrays:
// - indexOf Method
// - includes Method
// - find Method
// - findIndex Method
// - sort Method
// - reverse Method

let fruit = ["Apple", "Orange", "Banana"];

// console.log(fruit.indexOf("Apple"));
// console.log(fruit.includes("Orange"));
// let storeFind = fruit.find((item) => (item) === "Orange"); // work as iterator.
// console.log(storeFind);
// console.log(fruit.indexOf("Orange"));

let num = [1,3,6,5,43,2,6,7];

// // console.log(num.sort());
// for (let i = 0; i < num.length - 1; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//         // Bubble sorting Algorithm
//         if (num[i] > num[j]) {
//             let temp = num[j];
//             num[j] = num[i];
//             num[i] = temp;
//         }
//     }
// }

// console.log(num);

// console.log(num.reverse());
// for (let i = num.length; i >= 0; i--) {
//     const element = num[i];
//     console.log(element);
    
// }

// ## Array Properties:
// - length Property

// console.log(num.length);


