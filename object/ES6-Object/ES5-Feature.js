// 8. ES6 Object Features
//    - Object Destructuring
//    - Spread Operator (...)
//    - Object Shorthand Notation
//    - Computed Property Names
//    - Method Definitions in Objects
//    - Object.entries(), Object.fromEntries()
//    - Object.keys() with for...of Loop


// Object Destructuring =>

const profile = {
    name: "behan",
    age: 24
}

// console.log(profile.name);
// object destructured.
const { name, age } = profile;
// console.log(name);
const { name: n, age: a } = profile; // now called by n, a.
// console.log(a);


// Spread Operator (...) =>

const user = {
    roll: 2207102,
    course: "javascript",
    bio: "the reach people can never ever sleep 8 hours a day!",
    __proto__: profile // inherit object profile.
}

// const merged = Object.assign({}, profile, user);
// console.log(merged);

const mergedObj = { ...profile, ...user };
// console.log(mergedObj);
// console.log(user.name); // access because name will inherited.

const { roll, ...remain } = user;
// console.log(remain);

// Object Shorthand Notation =>

const name1 = "behan";
const age1 = 24;

const person = {
    name1,
    age1
}

const person1 = {
    name: name1,
    age: age1
}

// console.log(person1.name);

// Computed Property Names =>
// help to props dynamically.

const propName1 = "name";
const propName2 = "age";

const person2 = {
    [propName1]: "behan",
    [propName2]: 24
}
const descriptor = {
    writable: true,
    enumerable: true,
    configurable: false
}
Object.defineProperty(person2, propName1, descriptor);
delete person2.propName1; // ignoreed.
// console.log(person2);
const getDescriptor = Object.getOwnPropertyDescriptor(person2, propName1);

// Method Definitions in Objects => 
// Method Definitions in Objects allows you to create functions as object properties directly within the object literal syntax, this is a convenent way to create method that are associated with object.

const sayAge = "sayAge"
const objectDefination = {
    // regular method defination.
    greet() {
        return "hello";
    },

    // method defination using sorthand notation.
    sayName: function () {
        return 'hello Behan';
    },

    // conputed mehtod name.
    [sayAge]() {
        return "hey i am 24 years old."
    }
}

// console.log(objectDefination.greet());
// console.log(objectDefination.sayName());
// console.log(objectDefination.sayAge());


// Object.entries(), Object.fromEntries() =>

// console.log(Object.entries(objectDefination)); // return Array for each key and pair value.

const entries = Object.entries(objectDefination);
// console.log(entries);

// convert Array Entries(key:value) into Object.
const arr = [["name","behan"], ["age", 24], ["state", "bihar"]]
// console.log(Object.fromEntries(arr));
// console.log(Object.fromEntries(entries));

// Object.keys() with for...of Loop =>

for(const key of Object.keys(objectDefination)) {
    // console.log(key);
}
