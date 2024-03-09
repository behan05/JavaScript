// 1. What is an Object? =>

// In JavaScript, an object is a fundamental data type that represents a collection of key-value pairs, where each key is a unique identifier (property) associated with a value.

// Reference Type: Objects are reference types in JavaScript, meaning when you assign an object to a variable, you're actually assigning a reference to the object's location in memory. As a result, variables that reference the same object will reflect changes made to the object.

// 2. Properties and Methods =>
// keys are treated as string by defauly by javascript internally.

const person = {
    name: "Behan",
    age: 24,
    greet: () => {
        return `hey ${this.name}`
    }
}

// name, age is a properties of person object while greet is a method of person object.

// 3. Object Literal Notation =>

const person1 = {
    name: "Behan",
    age: 24,
    greet: () => {
        return `hey ${this.name}`
    }
}

// ******************************************************************

// 4. Creating Objects
//    - Object Literal
//    - Constructor Function
//    - ES6 Class Syntax
//    - Object.create() Method

// Object Literal =>

const person3 = {
    prop: "i am literal notation"
}

// Constructor Function => 

const person4 = new Object();
person4.name = "behan"
person4.age = 24

// console.table([person4.name, person4.age]);

// ES6 Class Syntax =>

class person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `hello my name is ${this.name}`;
    }
}


// Object.create() Method =>
// The Object.create() method expects an object to be passed as an argument to serve as the prototype of the newly created object.

const mess = {
    greet: function () {
        return `hey my name is ${this.name} and i am ${this.age} years old.`
    }
}

const person6 = Object.create(mess);
person6.name = "behan";
person6.age = 24;

// console.log(person6.greet());

const obj = Object.create({
    name: "code",
    ip: '192.168.1.1',
    id: 223n
})

// console.log(obj);

// **************************************************************

// 5. Accessing and Modifying Objects
//    - Dot Notation vs Bracket Notation
//    - Adding and Deleting Properties
//    - use Symbol as key.
//    - Nested Objects
//    - Object Property Descriptors
//    - Immutable Objects


// Dot Notation vs Bracket Notation =>

let sym = Symbol('par')
const profile = {
    name: "behan",
    age: 24,
    gitRepo: false,
    [sym]: Symbol(123),
    function() {
        return `Hello ${this.name}, i am ${this.age} years olds!`
    }
}

let hold = profile;
// console.log(hold.function());
profile.name = "sitesh";
profile["age"] = 22;
profile["gitRepo"] = "not use!"
// console.log(profile);


// - Adding and Deleting Properties =>

profile[sym] = Symbol(345);
profile.url = "github.com/behan05/javaScript.git" // adding url.

// delete profile.gitRepo // delete gitRepo key and its value.
// console.log(profile);

// Nested Objects =>

const createElement = {
    tag: "img",
    props: {
        id: "cart--image",
        alt: "developer-image",
        width: 200,
        height: 200
    },
    src: "avatar.png"
}

createElement.props.width = 300
createElement.props.height = 300
// console.log(createElement);


// Object Property Descriptors =>

const users = {
    userName: "behan",
    userEmail: "behan@google.com",
    id: Symbol(123)
}

Object.defineProperty(users, "id", {
    value: "abc",
    writable: false,
    enumerable: true,
    configurable: false
})

delete users.id; // not delete because of property descriptor.
const descriptor = Object.getOwnPropertyDescriptor(users, "id")
// console.log(descriptor);

Object.defineProperties(users, {
    userName: {
        value: "sitesh",
        writable: true,
        enumerable: true,
        configurable: true
    },
    userEmail: {
        value: "behankrbth@outlook.com",
        writable: true,
        enumerable: true,
        configurable: false
    }
})


const descriptor2 = Object.getOwnPropertyDescriptors(users);
// another way to do same =>
const descriptorProperties = {
    userName: {
        value: "sitesh",
        writable: true,
        enumerable: true,
        configurable: true
    },
    userEmail: {
        value: "behankrbth@outlook.com",
        writable: true,
        enumerable: true,
        configurable: false
    }
}

Object.defineProperties(users, descriptorProperties);


// Immutable Objects =>
// in javascript object are mutable means after create a object can change or modify although removed, one of the populater method we have that can be a immutable the object called Object.freeze();


const githubProfile = {
    profileUrl: "https//api/github/users/behan05/avatar",
    profileName: "behan kumar".toUpperCase(),
    isLoggedIn: false
}

Object.freeze(githubProfile);
githubProfile.isLoggedIn = true;

// console.log(githubProfile);
// *************************************************************

// 6. Iterating Over Objects
//    - for...in Loop
//    - Object.keys(), Object.values(), Object.entries()
//    - Object.getOwnPropertyNames(), Object.getOwnPropertySymbols()
//    - Object.getOwnPropertyDescriptors()









// 7. Object Methods and Operations
//    - Object.assign()
//    - Object.freeze(), Object.seal(), Object.preventExtensions()
//    - Object.is()
//    - Object.prototype.hasOwnProperty(), Object.prototype.toString()