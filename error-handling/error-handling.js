// Error handling is a technique or machanism, that are used to handle error.
// there are mainly two type of error :
// 1 => Syntax Error.
// 2 => Runtime Error(type Error, Reference Error, Range Error).

// syntax to handling Error:

// try {

// } catch {}

"use strict"

// try {
//     const res = 10 / 0;
//     console.log(res);
// } catch (error) {
//     console.error("An error occurred:", error.message);
// }


function checkVal(x) {
    if (x === 0) {

        // custom Error.
        throw new Error("X is a 0, which is not allowed!");
    }
    return x;
}

try {
    const res = checkVal(0);
    console.log(res);
} catch (error) {
    // console.error(error);
    // console.error(error.name); // return error name.
    // console.error(error.message); // return error message.
}


class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    runnig() {
        if (this.name === "monkey") {
            throw new Error("Monkeys don't run, they swing!")
        }
        return `${this.name} is running!`
    }
}

// try {
//     let monkey = new Animal('monkey', "brown");
//     console.log(monkey.runnig());
// } catch (error) {
//     console.error(error.name);
//     console.error(error.message);
// } finally {
//     console.log("Cleanup task...");
// }

// Asynchronous Error Handling:

function fetchData() {
    const requestUrl = "https://api.github.com/users/behan05";

    return fetch(requestUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error to propagate it further if needed
        });
}

fetchData()
    .then(data => {
        console.log(data); // Log the fetched data when the Promise resolves
    });