"use strict"


// ### 2. Conditional Statements
//    - **if Statement**: Executes a block of code if a specified condition is true.
//    - **else Statement**: Specifies a block of code to be executed if the condition in the if statement is false.
//    - **else if Statement**: Specifies a new condition to test if the first condition is false.

// ### 3. Switch Statement
// Evaluates an expression, matches the expression's value to a case clause, and executes the statements associated with that case.


// if statement => 
// if can true that code will be executed which inside the if scope.

if (true) {
    // console.log("hello"); // executed
}
if (false) {
    console.log("hello"); // Not executed
}

let age = 16;

if (age >= 18) {
    // console.log("Vote!");
} else {
    // console.log("Not Vote!");
}


let list = [2, 3, 6, 4, 9, 5];

if (Array.isArray(list)) {
    let os = null;
    let dbms = null;
    let cn = null;

    let subs = {
        os: os,
        dbms: dbms,
        cn: cn
    }

    let storeResult = list.map((i) => i * 10)
        .filter((item) => {
            return item >= 45;
        })

    storeResult.forEach((i) => {
        for (const key in subs) {
            if (subs[key] === null) {
                subs[key] = i;
                break;
            }
        }
    })
    // console.log(subs);
} else {
    console.log("Not Array");
}

// switch =>

let days = "";

switch (days) {
    case "monday": console.log("Today Is Monday!");
        break;
    case "tuesday": console.log("Today is Tuesday!");
        break;
    default:
        console.log("Does not find Days!");
}

