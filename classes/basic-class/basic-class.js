// ## Basic Concepts

// ### 1. Introduction
//    - Explanation of classes in JavaScript.

// ### 2. Creating Classes
//    - How to define classes using the `class` keyword.
//    - The role of constructors in initializing class instances.
//    - there three method used in class (constructure mehtod, prototype method, static method).

// ### 3. Instance Methods
//    - Defining methods within a class to perform actions on class instances.


// Introduction of class =>
// in javascript class is a template and basically class provide a way to create a blue print for object with properties and mehtods.


// Creating Classes =>
// create class with using class keyword "class".

class Car {

    // function keyword not use to create a mehtod inside the class.
    greet() {
        console.log("hello world");
    }
}


let obj1 = new Car();
// obj1.greet();

// regular function called constructor function.
function Cars(name, model) {
    this.name = name;
    this.model = model;

    function greet() {
        console.log(`${this.name}: ${this.model}`);
    }
}

// const suzuki = new Cars("Suzuki", 2024);
// console.log(suzuki);
// const maruti = new Cars("maruti", 2022);
// console.log(maruti);

// The role of constructors in initializing class =>

// Constructors are special methods within a class that are automatically invoked when a new instance of the class is created using the new keyword.

// Inside the constructor, you can define parameters that allow you to pass initial values when creating an instance.


// Constructors can accept arguments that are passed when creating instances, allowing for customization of each object's initial state.
// These arguments can be used to set up the object's properties based on the values provided during instantiation.


// ### This ensures that each instance of the class starts with the correct initial state as defined by the constructor.


class Student {
    constructor(name, age) {
        this.name = name; // this keyword refer to current context.
        this.age = age;
    }

    studentInfo() {
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    }
}

const behan = new Student("Behan", 24); // new keyword used to create a new instance or object of class Student.
const sitesh = new Student("Sitesh", 22);
// behan.studentInfo();
// sitesh.studentInfo();


class Profile {

    constructor(obj) {
        this.name = Profile.capitalize(obj.name);
        this.age = obj.age;
        this.id = String(obj.id);
        this.time = obj.tm;
        // console.log(this);

    }

    static capitalize(name) {
        return `${name.charAt(0).toUpperCase()}${name.slice(1, name.length)}`
    }

}

const profile = {
    name: "behan",
    age: 24,
    id: Symbol(123),
    tm: new Date().toLocaleTimeString()
}

const behanProfile = new Profile(profile);
// console.log(this);
// console.log(behanProfile.name);
