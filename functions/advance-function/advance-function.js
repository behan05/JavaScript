// Generator Functions
// Currying and Partial Application
// Debouncing in JavaScript
// Throttling in JavaScript
// Hoisting in JavaScript
// strict mode.


"use strict"
// Generator Functions =>
// generator function is function that are used to control the block og code or line of code. the generator function can create by using astrisk "*".

function* generator() {
    console.log("Hello");
    yield "yield one!";
    console.log("Hey!");
}

let g = generator();
// g.next();


const func = function* (obj) {

    let stop = setInterval(() => {
        const tm = new Date();
        console.log(tm.toLocaleTimeString());
    }, 1000)

    yield console.log("pause!");

    if (typeof obj === "object" && !null) {
        for (let key in obj) {
            console.log(`${key} : ${obj[key]}`);
        }
        let symbols = Object.getOwnPropertySymbols(obj);
        for (let symbol in symbols) {
            console.log(`${symbol} : ${obj[symbol]}`);
        }
        clearInterval(stop);
    }
    else {
        console.log("Don't have an Object!");
    }

}

let symbolId = Symbol("symKey");
let obj = {
    name: "behan",
    age: 24,
    bio: "Reach people can not sleep 8 hours a day.",
    [symbolId]: Math.floor(Math.random(10) * 10) // symbolId is a computed key
}

let gen = func(obj);
// gen.next();
// gen.next();

// strict mode.
// help to debug your code.

"use strict"

// let num = 10;
// console.log(num);

// Currying function =>

// normal function.
function addition(a, b, c) {
    return a + b + c;
}
// curring function
function curring(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// normal.
const normalRes = addition(2,3,4);
// console.log(normalRes);

// curring.
const curreingRes = curring(2);
const curreingRes2 = curreingRes(3);
const curreingRes3 = curreingRes2(4)
// console.log(curreingRes3);

// partial way.
const res = curring(2)(3)(4);
// console.log(res);


// Hoisting in JavaScript =>


// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation, before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are moved to the top, which allows you to use them before they're actually declared in your code.

hoisting();
// console.log(num); // undifined

var num = 5;

function hoisting() {
    // console.log("hello World!");
}
