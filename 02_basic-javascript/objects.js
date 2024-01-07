// two way to declear object in javaScript.
// constructor: Object.create(), const val = new Object(); (singleton)

// literals: let obj = {}


// literals:

// defining Symbol data type.

const sym = Symbol("key1");

const jsUser = {
    userName : "behan",
    "full name" : "behan kumar",
    [sym] : "myKey",
    email : "behan@google.com",
    age : 24,
    isLoggedIn : false,
    lastLoginDays : ["monday", "Tuesday"]
}

// Access Object.

// console.log(jsUser.email);
// console.log(jsUser['email']); // javascript saved keys as string in memory.
// console.log(jsUser["full name"]);
// console.log(jsUser.lastLoginDays[0]);
// console.log(jsUser);

// Modify object items:

jsUser.email = "something@outlook.com";
// console.log(jsUser);
jsUser["isLoggedIn"] = true;
// console.log(jsUser);
jsUser[sym] = "changed value of symbol";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello jsUser");
}

jsUser.greetings = function(){
    console.log(`hello jsUser ${this["userName"]}`);
}

// console.log(jsUser);
// jsUser.greeting()

// console.log(jsUser);
// jsUser.greetings()


// Some more important method or property of object.

Object.freeze(jsUser); // not assign new attribute and value to jsUser after freezed.

jsUser.gitid = "behan05";
// console.log(jsUser);
// assign method to concat two object.

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};

// console.log(obj1, obj2);
// let resObj = Object.assign({}, obj1, obj2);

// spread.

const resObj = {...obj1, ...obj2, ...jsUser};
// console.log(resObj);


// console.log(Object.keys(jsUser));// return as an array
// console.log(Object.values(jsUser));// return as an array
// console.log(Object.entries(jsUser));// return as an array
// console.log(Object.hasOwnProperty('userName'));// // return as boolean

