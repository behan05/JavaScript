// Singleton pattern or approach: 

// IIFE(immediate invoked function expression).

// singleton means to create only one instance of any Object.


const singleTon = (function () {
    let instance = null;

    // "createInstance is not a function," is because the createInstance function is defined inside the scope of the immediately-invoked function expression (IIFE) and is not directly accessible outside of it.

    function createInstance() {
        return {
            name: "behan",
            age: 24,
            email: "behan@google.com",
            score: Math.floor(Math.random() * 100)
        };
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// const instance1 = singleTon.getInstance();
// const instance2 = singleTon.getInstance();
// console.table([instance1, instance2])

// singleton using object literals => 

const singleton = {
    instance: null,
    // javascript sorthand method to create function without using semicolon(:)
    getInstance() {
        if (!this.instance) {
            this.instance = {
                name: "behan",
                email: "behan@outlook.com",
                score: Math.floor(Math.random() * 100),
            }
            return this.instance;
        }
        return this.instance;
    }
}

// instance1 = singleton.getInstance();
// console.log(instance1);

// function greent() {
//     console.log("hello bhaisahab!");
// }
// greent();

// instance2 = singleton.getInstance();
// console.log(instance2);
// console.table([instance1, instance2]);


// Example of literals: 

// String literals => 
const name = "behan";

// number literals =>
const age = 24;

// Boolean literals =>
const isLoggedIn = false;

// null literals =>
const email = null;

// undefine literals =>
let upi;

// object literals => 

const user = {
    name: "behan",
    greeting() {
        let data = `hey ${this.name} ${Math.floor(Math.random() * 100)}`;
        return data;
    }
}

// const inst1 = user.greeting();
// const inst2 = user.greeting();
// console.table()

// array literals => 

let myArray = [1,2,3,4,5];
// console.log(myArray);