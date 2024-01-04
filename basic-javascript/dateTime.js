
const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); // return date and time.
// console.log(myDate.toDateString());// return date string only.
// console.log(myDate.toLocaleString());// return local date and time string.
// console.log(myDate.toLocaleDateString()); // return local date string.
// console.log(myDate.toLocaleTimeString()); // return local time string
// console.log(myDate.toISOString()) // return universal time and date.

// let myCreatedDate = new Date(2024, 0, 4);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024,0,4,8,57);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-01-04") // we can also pass string as parameter. 
let myCreatedDate = new Date("02-14-2025"); // "mm-dd-yyyy"
// console.log(myCreatedDate.toDateString());

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());

let timeStamp = Date.now(); 

// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getMonth());
// console.log(myCreatedDate.getFullYear());

// console.log(Math.floor(Date.now()/1000));







