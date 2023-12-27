// accourding to the ECMA Script Document:
// There are two type of data type:
// 1 ==> Primitive Data Type (Number, String, Boolean, Null, Undefined, BigInt, Symbol).
//  Let's goes through example;

let fullName = "Behan Kumar";

console.log(typeof fullName);

let age = 18;
console.log(typeof age);

let isUserLoggedIn = true;
console.log(typeof(isUserLoggedIn));

let weatherReport = null; // null means null ==> empty value.
console.log(typeof(weatherReport)); // data type return Object but consider as primitive data type.

let clientEmail;

let largeNumber = 12323424256436n;
console.log(typeof largeNumber);

let uniqueId = Symbol("123"); // Symbol data type use for uniqueness.
let anotherUniqueId = Symbol("123");
console.log(typeof uniqueId);

console.log(uniqueId === anotherUniqueId);

// 2==> Non-primitive or reference data type(object, array, function).

// mutable data can called object in javaScript.

const person = { 
    name: "behan", // remember one thing in object key is consider as string by javaScript.
    age: 18,
    isLoggedIn: true,
}

const employees = new Object(); // this way call as constructor object.

employees.name = "Rohan";
employees.age = 23;

console.log(person["isLoggedIn"]);
console.log(typeof person);

// Array.

let fruit = ["Apple", "Banana", "Pine Apple", "kiwi", "orange"];
console.log(fruit);
console.log(typeof fruit);

// create array using constructor.

let arry = new Array();

for(let i=1; i<=5; i++){
    arry.push(String(i));
}
console.log(arry);
console.log(typeof arry);

