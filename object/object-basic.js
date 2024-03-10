
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
const inheritObject = {
    name: "mai nahi bataunga",
    id: "kyu janna hai"
}
const userApi = {
    login: "behan05",
    id: 83676505,
    node_id: "MDQ6VXNlcjgzNjc2NTA1",
    avatar_url: "https://avatars.githubusercontent.com/u/83676505?v=4",
    gravatar_id: "",
    inher: inheritObject.name,
    url: "https://api.github.com/users/behan05",
    html_url: "https://github.com/behan05",
    followers_url: "https://api.github.com/users/behan05/followers",
    following_url: "https://api.github.com/users/behan05/following{/other_user}",
    gists_url: "https://api.github.com/users/behan05/gists{/gist_id}",
    starred_url: "https://api.github.com/users/behan05/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/behan05/subscriptions",
    organizations_url: "https://api.github.com/users/behan05/orgs",
    repos_url: "https://api.github.com/users/behan05/repos",
    events_url: "https://api.github.com/users/behan05/events{/privacy}",
    received_events_url: "https://api.github.com/users/behan05/received_events",
    type: "User",
    site_admin: false,
    name: "Behan kumar",
    company: null,
    blog: "",
    location: "New Delhi",
    email: null,
    hireable: true,
    bio: "Passionate developer on a journey to explore the realms of software engineering. Committed to continuous learning and innovation.",
    twitter_username: null,
    public_repos: 15,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2021-05-04T22:15:20Z",
    updated_at: "2024-03-06T21:17:12Z"
}

// for...in Loop =>
// it return keys of Object.
// also called object specific loop.

for (const key in userApi) {
    if (userApi.hasOwnProperty(key)) {
        // console.log(`${key} : ${userApi[key]}`);
    }
    else {
        break;
    }
}

// Object.keys(), Object.values(), Object.entries() =>

const keys = Object.keys(userApi); // return array
const values = Object.values(userApi); // return array
// console.log(keys) 
// console.log(values) 

keys.forEach((items) => {
    if (items === "bio") {
        // console.log(userApi[items].toUpperCase());
    }
})

const entries = Object.entries(userApi);
// console.log(entries); separate each key and value in array.
entries.forEach(([key, value]) => { // [key,value] destructuring.
    // console.log(key,value);
})
// *****************************************************************

// 7. Object Methods and Operations
//    - Object.assign()
//    - Spread Operator (...)
//    - Object.freeze(), Object.seal(), Object.preventExtensions()
//    - Object.is()
//    - Object.prototype.hasOwnProperty(), Object.prototype.toString()
//    - Object.hasOwnProperty.call()

// - Object.assign() =>
// use for concate.
const obj1 = {
    name: "behan",
    age: 24
};

const obj2 = {
    student: true,
    branch: "cse"
};

const mergedObj = Object.assign({}, obj1, obj2);
// console.log(mergedObj);

//  Spread Operator (...) =>
const merged = { ...obj1, ...obj2 };
// console.log(merged);

// Object.freeze(), Object.seal(), Object.preventExtensions() =>

// Object.freeze(obj1) // after freeze you can't be change anything.

// Object.seal(obj1) // seal the object which means you can't add or remove properties but still modify them.

// obj1.form = "input" // this operation will ignore!
// delete obj1.name // this operation will ignore!

obj1.name = "shree ram"; // happen
obj1.age = "Infinity"; // happen
// console.log(obj1);


// Object.preventExtensions() => 
// Object.preventExtensions() is a method in JavaScript that prevents any new properties from being added to an object, but allows the modification or deletion of existing properties.

// Object.preventExtensions(obj1);
// obj1.name = "jai shree ram"; // success.

// delete obj1.age // success.

// obj1.cource = "Javascript" // ignored.

// console.log(obj1);


//    - Object.hasOwnProperty.call()


// - Object.is() => trurn true/ false.
const object1 = {
    name: "name",
    age: 24,
    toString() {
        return `my name is ${this.name} & i am ${this.age} years old.`
    }
}

for (let key in object1) {
    if (Object.is(key, object1[key])) {
        // console.log(key + " : " + object1[key]);
    }
}

// Object.prototype.hasOwnProperty(), Object.prototype.toString() =>
// return true / false :)
// console.log(object1.hasOwnProperty('name'));

// console.log(object1.toString());

// Object.hasOwnProperty.call() =>

// Object: This refers to the built-in Object constructor function in JavaScript.
// hasOwnProperty: This is a method available on all JavaScript objects, including objects created with object literals or constructed with constructor functions. It checks if an object has a property with a specified name.
// call: This is a method available on all JavaScript functions. It allows you to invoke a function with a specified this value and additional arguments.


console.log(Object.hasOwnProperty.call(object1, "name"));