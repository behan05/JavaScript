// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;
// }
// console.log(x);

// if (Math.random() > 0.5) {
//     const x = 1;
// } else {
//     const x = 2;
//     console.log(x);
// }
// console.log(x);


let a = 200;
const b = 400;

if (true) {
    let a = 300;
    const b = 400;
    // console.log("inner: ",a);
}

// console.log(a);
// console.log(b);

function one() {
    const name = "behan";

    function two() {
        const website = "https://www.youtube.com"
        console.log(`my name is ${name}`);
    }
    // console.log(website); // raise error because access outside of inner scope.

    two()
}

// console.log(name); //raise error because access outside of its scope.

// one()

// if (true) {
//     const name = "behan";

//     if (true) {
//         const website = "https://www.youtube.com"
//         console.log(`my name is ${name}`);
//     }
// }


// way to define function:

// addOne(5)
function addOne(num) {
    return num + 1;

}
// addTwo(5) // Raise Error: Cannot access 'addTwo' before initialization//

const addTwo = function (num) { // javascript variable is very powerful it can store anything.
    return num + 2;
}



// Second time practice =>

//Global Scope:
var globalVariable = "Hello JavaScript!";

function accessVar() {
    // block scope 
    // here you can acess globalVariable;
    // console.log(globalVariable);
    return globalVariable;
}

let instance = accessVar();
// console.log(instance);

//Local Scope (Function Scope):

const localScope = () => {
    var local = 'i love javaScript!';
    return local;
}

const local = localScope();
// console.log(local);


// Block Scope (ES6) => 

// Variables declared with let and const keywords have block scope.
// Block scope refers to the area within curly braces {} in conditional statements (if, for, while, etc.) and block statements.
// Block-scoped variables are only accessible within the block where they are declared.

if (true) {
    let mess = "Hey this available only inside the if!"

    // console.log(mess); // output will be a: Hey this available only inside the if!
}

// Lexical Scope (Closure) => 

let closer = function (num) {
    console.log(num);

    let num2 = 5;

    // define annonymous function => function who don't have name.
    return function (num3) {
        // console.log(num + num2 + num3);
        return num + num2 + num3;
    }
}


// let store = closer(3)
// console.log(store(6));

// function outer(a) {
//     console.log(a);

//     let b = 5;
//     function inner() {
//         console.log(b);
//         // return b;
//     }

//     return inner;
// }

// const c = outer(3);
// // console.log(c);
// // c();
// console.log(c);


function counter() {

    // private variable.
    let count = 0;
    
    // annonymous function
    return function() {
        // access parent count variable.
        return ++count; // closure over count variable
    }
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

// In this example, the count variable is private to the counter function. The inner function returned by counter forms a closure over count, allowing it to access and modify the count variable even though it's not directly accessible from outside the counter function.



