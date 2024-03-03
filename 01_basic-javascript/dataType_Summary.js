// accourding to the ECMA Script Document:
// There are two type of data type:
// 1 ==> Primitive Data Type (Number, String, Boolean, Null, Undefined, BigInt, Symbol).
//  Let's goes through example;

// let fullName = "Behan Kumar";

// console.log(typeof fullName);

// let age = 18;
// console.log(typeof age);

// let isUserLoggedIn = true;
// console.log(typeof(isUserLoggedIn));

//let weatherReport = null; // null means null ==> empty value.
//console.log(typeof(weatherReport)); // data type return Object but consider as primitive data type.

// let clientEmail;

// let largeNumber = 12323424256436n;
// console.log(typeof largeNumber);

// let uniqueId = Symbol("123"); // Symbol data type use for uniqueness.
// let anotherUniqueId = Symbol("123");
// console.log(typeof uniqueId);

// console.log(uniqueId === anotherUniqueId);

// 2==> Non-primitive or reference data type(object, array, function).

// mutable data can called object in javaScript.

// const person = { 
//     name: "behan", // remember one thing in object key is consider as string by javaScript.
//     age: 18,
//     isLoggedIn: true,
// }

// const employees = new Object(); // this way call as constructor object.

// employees.name = "Rohan";
// employees.age = 23;

// console.log(person["isLoggedIn"]);
// console.log(typeof person);

// Array.

// let fruit = ["Apple", "Banana", "Pine Apple", "kiwi", "orange"];
// console.log(fruit);
// console.log(typeof fruit);

// create array using constructor.

// let arry = new Array();

// for(let i=1; i<=5; i++){
//     arry.push(String(i));
// }
// console.log(arry);
// console.log(typeof arry);


// revision second time.

// accourding to ECMA Script Document:
//  there are two type of data type.
// 1 => Primitive (number, String, Boolean, undefined, null, BigInt, Symbol)
// 2 => Non-Primitive (reference)data type (Object), somthing Function and Array will consider as non-primitive data type.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1 => Primitive (number, String, Boolean, undefined, null, BigInt, Symbol)

let num = 10;
let num2 = 20;
// console.log(num + num2);
// console.log(typeof(num, num2));
// console.log(typeof Number(12));

const userName = "Behan kumar!";
// console.log(userName);
// console.log(`data type of ${userName} is ` + typeof userName);
// console.log(typeof String("xyz"));

const isLoggedIn = true;
// console.log(typeof isLoggedIn);

let uName;
// console.log(typeof uName);
const weatherReport = null;
// console.log(typeof weatherReport); // return Object.

const num3 = 12345679987654467n;
// console.log(typeof num3);


// Symbol data type used for unique id.

const uniqueId = Symbol(123);
const anotherUniqueId = Symbol(123);

// console.log(uniqueId === anotherUniqueId); // return False.
// console.log(typeof uniqueId);


// Non-Primitive or Reference data type.

// const userProfile = {};
// const studentProfile = new Object();

// console.log(typeof userProfile);
// console.log(typeof studentProfile);

const userProfile = {
    firstName: "behan",
    lastName: "kumar",
    greetMessage: function () {
        console.log(`hello ${this.firstName} ${this.lastName}`);
    }
}

// userProfile.greetMessage();
// console.log(typeof userProfile.greetMessage);
// console.log(typeof userProfile);

const myArray = [1,2,3,4,5];

// console.log(typeof myArray); // consider as Object.


