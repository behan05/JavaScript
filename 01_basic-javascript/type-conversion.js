// try to understand the working of data type.

let userName = "behan";
let userAge = 24;
let isUserLoggedIn = true;
let userCity = null;
let userEmail;

// let symbol, bigInt // not use friquently.

// console.log(typeof userName);
// console.log(userName);

// console.log(typeof userAge);
// console.log(userAge);

// console.log(typeof isUserLoggedIn);
// console.log(isUserLoggedIn);

// console.log(typeof userCity);
// console.log(userCity);

// console.log(typeof userEmail);
// console.log(userEmail);

// array / objects

let items = new Array();

for(let i = 1; i <= 5; i++){
    let iConv = String(i);
    items.push(iConv)
}
items.push("END Items");

// console.log(items);

// Object by constructor: // Objects are used to store different type of datas type

const obj = new Object();

obj.name = "behan";
obj.age = 24;

// console.log(obj);

// Access Object Properties:

// console.log(obj["name"]);
// console.log(obj["age"]);

// Without using object construnctor.

const person = {
    creditName:"Behan", // Note one thing, key is treated as string.
    creditNumber:12345,
    creditEmail:'behan.google.com',
    creditIsLoggedIn:true
}

console.log(person);
console.log(typeof person);

// Access properties of object by its key name.

console.log(person["creditName"]);
console.log(typeof person.creditName);

// ********************************************************************************* //
// data conversion.

let score = 4;
let nowScoreType = String(score); // conversing number to string.

let nowScorety = Boolean(score); // conversion number to boolean.

// console.log(nowScorety);
// console.log(typeof nowScorety);



let srt = "12";
// let conv = Number(srt); // convert string to number.

// let str = "12abc"  
// let conv = Number(str); // convert in number but the output is NaN(Not a Number).

let str = ""; // "" ==> false, "behan" ==> true.
let conv = Boolean(str);
// console.log(conv);
// console.log(typeof conv);

let strVal = "behan";

// let arr = new Array(strVal); // convert in array.
// for(ar of arr){
//     console.log(ar);
// }

// console.log(arr);
// console.log(typeof arr);