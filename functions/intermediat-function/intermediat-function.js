// Arrow Functions (ES6)
// Immediately Invoked Function Expressions (IIFE)
// Higher-Order Functions
// Callback Functions
// Function Scope and Closure


// Arrow Functions (ES6) =>
// Arrow function is one of the most use function in advance javascript apart from this most frequently used is React js as well. and it is called as array function expression.
// syntax : (para) => {block of code}.

const arrowFunction = (a, b) => {
    return a + b;
}

const arrHold = arrowFunction(2, 3);
// console.log(arrHold);

const arrowFunction2 = (arr) => {
    arr.forEach(function (i) {
        console.log(i);
    });
}

// arrowFunction2([2, 3]);
// console.log(arrHold2);



// Immediately Invoked Function Expressions (IIFE) =>

const singleTon = (function () {

    let instance = null;

    function inner() {
        let tm = new Date();
        return {
            name: "Behan",
            age: 24,
            bio: "a reach people can never ever sleep 8 hrs a day".toLocaleUpperCase(),
            curentTime: tm.toLocaleTimeString(),
            id: Math.floor(Math.random(10) * 100)
        }
    }

    return {
        createInstance: () => {
            if (!instance) {
                instance = inner();
                return instance;
            }
            else {
                return instance;
            }
        }
    }

})();

// console.log(singleTon.createInstance());
const instance1 = singleTon.createInstance();
const instance2 = singleTon.createInstance();
// console.log(instance1);
// console.log(instance2);


// Higher-Order Functions =>
// high order function can take callback & also reture a function as result.

function hightOrder(callback) {
    console.log("before Callback!");
    callback();
    console.log("after callback!");
    // After greet finishes executing, the control flow returns to the point immediately after where callback() was invoked inside hightOrder.

}

function greet() {
    console.log("i am hight-order function result as function!");
}
// hightOrder(greet);


// Callback Functions =>
// callback function is a function that are use as parameter.

const callbackfunc = (callback) => {
    let name = "sitesh";
    console.log(callback(name));
}

function sayHello(name="behan") {
    return `hello ${name}`;
}

// callbackfunc(sayHello);

// Function Scope and Closure =>
// before understanding closure you have to understand about lexical scope. and before understanding about lexical score need to understand about scope like global, local scope.


var a = 10;

function globalScope() {
    console.log(a); // accessable a because a is in global scope, a will available for enteir application scope.
}

// as we know every code we write inside the curly braces "{}" that will be a scope.

// lets demostrate:)

// if (condition) {
//     // this is a if block scope.
// }


// for (initializer, condition, updatation) {
//     // for block scope.
// }


// in the below example : addTwoNum is outer function it have two properties & it have also function called inner so you can see inner() will access properties of its parenet that will a addTwoNum(), so it is called as lexical scope thats it.

function addTwoNum(n1, n1) {
    let num1 = n1;
    let num2 = n2; // also called local scope because it will available for outside of function.


    function inner() {
        console.log(num1 + num2);
    }

    inner()
}

// addTwoNum(2,4);


// now you are able to understand about closure and its working process.


function counter() {
    let count = 0; // private.

    //annonymous funtion.
    return function() {
        return ++count;
    }
}

let holdFunc = counter();
console.log(holdFunc());
console.log(holdFunc());
console.log(holdFunc());

