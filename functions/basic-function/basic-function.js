// Function Declaration and Function Expression
// Function Parameters and Arguments
// Nested Function.
// Default Parameters (ES6)
// function with Array
// function with Object
// Rest Parameters (ES6)
// Named Function Expression


// Function Declaration and Function Expression =>

function add(a, b) {
    return a + b;
}

// function expression.

const holdFunc = function (a, b) {
    return a + b;
}

// console.log(add(2,2));
// console.log(holdFunc(2,3));

// Function Parameters and Arguments =>

function addNum(para1, para2) {
    return para1 + para2; // para1 & para2 is a function parameter.
}

const result1 = addNum(2, 5) // 2 & 5 is argument
// console.log(result1);


// Nested Function =>
// a function define inside the function.

function greet() {
    const message = `Hello i am outer space!`;

    return function inner() {
        // inner access paranet variable or properties or methods as well.
        return message;
    };
};

// console.log(greet());
const resultFunc = greet()
// basically here is a closer concept but skip for now learn in scope folder.
// console.log(resultFunc());


// Default Parameters (ES6) =>

// name parameter is default parameter, when you pass argument it will orverride.
function printName(name = "Behan") {
    if (name === "Behan") {
        console.log(`my name is ${name}`);
    } else {
        console.log(`my name is ${name} and i am overrided!`);
    }
}

// printName(); // without argument.
// printName("Sitesh"); // with argument.

// function with Array =>
// function expression.

const funcArray = function (arr) {
    if (Array.isArray(arr)) {
        let modifyArry = arr.map((item) => item * 10).filter((items) => items > 100);
        return modifyArry;
    }
}

const score1 = 100;
const score2 = 200;
const score3 = 300;

const holdFuncArray = funcArray(Array.of(score1, score2, score3));
// console.log(holdFuncArray);


function functionObject(obj) {
    if (typeof obj === "object" && obj !== null) {
        for (const i in obj) {
            // console.log(`${i} : ${obj[i]}`);
            if (i == "greet") {
                console.log(obj[i]());
            }
        }
    }
}

// sorthand object literal.
const obj = {
    name: "behan",
    age: 24,
    greet() {
        return `hello my name is ${this.name} & i am ${this.age} years old.`;
    }
}


// for(let i of Object.keys(obj)) {
//     console.log(i, obj[i]);
// }
// passing object as an argument.
// functionObject(obj);


// Rest Parameters (ES6) =>
// work with array pass infinite array as an argument.

function arrayFunc(...arr) {
    return arr.reduce((accu, current) => accu + current, 0)
}

// var a = [1, 2, 3, 4, 5, 6]
let arrfunc = arrayFunc(1, 2, 3, 4, 5, 6);
// console.log(arrfunc);


// Named Function Expression =>

const funcExpression = function () {
    console.log('i am called function expression because i am just i expression and hold in in variable!');

    const funcNameExpression = function nameOfFunction() {
        console.log("this is function expression along with,this is store in variable as well! so called as function name expression");
    }

    return funcNameExpression();
}

// funcExpression();