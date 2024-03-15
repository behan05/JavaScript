// 9. Prototypes and Inheritance
//    - Prototypal Inheritance
//    - Prototype Chain
//    - __proto__ vs prototype
//    - Object.getPrototypeOf(), Object.setPrototypeOf()
//    - Constructor Function and Prototype Pattern
//    - Object.create() 


// Prototypal Inheritance =>

// Prototypal Inheritanc is a key concept in javascript, allowing object to inherit properties and method from other objects.

const profile = {
    name: "behan",
    age: 24,
    greet() {
        return `my name is ${this.name} and i am ${this.age} years old`
    }
}

const student = {

    // inherit object
    // __proto__:profile
}

// another way to inherit.
Object.setPrototypeOf(profile, student);

// student.leave = function () {
//     console.log("leave granted");
// }

// profile.leave()

// for (let i in student) {
//     if (typeof student[i] === 'function') {
//         console.log(student[i]());
//     }
//     console.log(student[i]);
// }


function person(name) {
    this.name = name;
}

person.prototype.greet = function () {
    console.log(`my name is ${this.name}`);
}

const funcObj = new person("behan");
// funcObj.greet();


const myArray = [1, 2, 3, 4, 5];
const myArray2 = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.reduces = function () {
    console.log(this);
}


// console.log(myArray);
// myArray.reduces();
// myArray2.reduces();


// Prototype Chain =>


const chain = {
    name: "behan"
}

const chain2 = {
    age: 24,
    __proto__: chain
}

const chain3 = {
    bio: "marta kya nahi karta!",
    __proto__: chain2
}

// console.log(chain3.name);


// __proto__ vs prototype =>

const chain4 = {
    name: "behan"
}

const chain5 = {
    age: 24,
    __proto__: chain // inherit
}

function greeting(name) {
    this.name = name;
}

greeting.prototype.sayHello = function() {
    return `my name is ${this.name}`;
}

const hey = new greeting("behan")
// console.log(hey.sayHello());