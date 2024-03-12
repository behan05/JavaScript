// ### 4. Loops
//    - **for Loop**: Executes a block of code a specified number of times.
//    - **while Loop**: Executes a block of code while a specified condition is true.
//    - **do...while Loop**: Executes a block of code once before checking if the condition is true, and then repeats the loop as long as the condition is true.
//    - **for...in Loop**: Iterates over the enumerable properties of an object.
//    - **for...of Loop**: Iterates over iterable objects such as arrays and strings.

// ### 5. Control Flow Keywords
//    - **break**: Terminates the current loop or switch statement and transfers control to the statement following the terminated statement.
//    - **continue**: Skips the current iteration of a loop and continues with the next iteration.
//    - **return**: Exits the current function execution and returns a value to the caller.



// for loop =>

// syntax:) for(initializer; condition; updatation) {block of code};


for (let i = 0; i < 11; i++) {
    // console.log(i); // output 1 to 10;
}

let i = 10;
for (i; i < 20; i++) {
    // console.log(i);
}


// create nested loop;

for (let i = 2; i < 11; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    // console.log();
}

let myArray = ["abc", "bca", "cab", "cba", "bac"];

for (index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// Array specific Loop =>
for (let i of myArray) {
    // console.log(i);
}

const obj = {
    name: "behan",
    age: 24,
    bio: "Hello world",
    isLoggedIn: false
}

// Object specific Loop =>
for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
        // console.log(`object has own property: ${i} ${obj[i]}`);
    }
    else {
        // console.log(`${i} not own property`);
    }
}

// while loop =>

let a = 5;

while (a <= 10) {
    // console.log(a);
    a++;
}


// do while =>

let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 10);