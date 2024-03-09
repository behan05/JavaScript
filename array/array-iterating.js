// ## Iterating Over Arrays:
// - for Loop
// Mathods & Functional Programming with Arrays => 
// - forEach Method
// - map Method
// - filter Method
// - reduce Method

// for =>

// find the average temprature =>
const temprature = [22, 23, 24, 25, 26];

let sum = 0;
for (let i = 0; i < temprature.length; i++) {
    sum += temprature[i];
}

const averageTemprature = `the average temprature is ${sum / temprature.length} °C`;
// console.log(averageTemprature);

// reverse Array =>

let reverseArray = [];
for (let i = temprature.length - 1; i >= 0; i--) {
    reverseArray.push(temprature[i]);
}
// console.log(reverseArray);
// *********************************************************************************
// - forEach Method
// forEach method will work as loop and it take callbackFucntion => a function which pass as a parameter called callBackFunction.

// here item is a parameter of callback function, and parameter can iterate over the temprature array one by one.
temprature.forEach(function (items) {
    // console.log(items);
})


let marvelHeros = ["Iron-Man", "Thor", "Nick-Fury", "Hulk"];
let dcHeros = ["Super-Man", "Bat-Man", "Onda-Woman", "Flash"];

const allHeros = [...marvelHeros, ...dcHeros];

let storeValue = allHeros.forEach((items) => {
    // return items; // forEach can not return value.
})

function printMe(items, index) {
    if (Array.isArray(items)) {
        items.forEach((elements) => {
            console.log(elements);
        })
    }
    else {
        console.log(index, items);
    }
}

const myCoding = [
    {
        languageName: "javaScript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
    {
        languageName: "php",
        languageFile: "php"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    },
];

myCoding.forEach((items) => {
    if (true) {
        Object.entries(items).forEach((item) => {
            item.forEach((elements) => {
                // console.log(elements);
            })
        })
    }
})

// allHeros.forEach(printMe);

// - map Method => 
let arr = [];
marvelHeros.map((element) => {
    arr.push(`hello ${element}`);
});
// console.log(arr);

let num = [1, 2, 3, 4, 5, 6, 7, 8];

num.map((item, index) => {
    setTimeout(() => {
        // console.log(index, item * 10);
    }, 1000);
})

// map another approach.
let printMap = function (item) {
    console.log(item * 10); // return number.
}
// num.map(printMap);


let num2 = [2, 3, 4, 5, 6, 7];

let storeMap = num2.map((items) => {
    return items * 10; // return as an Array.
})

// console.log(storeMap);

// - filter Method => 

let filValue = storeMap.filter((item) => {
    return item >= 40; // return a new filtered array.
});

// console.log(filValue);

// - reduce Method => 

let pay = filValue.reduce((accu, items) => {
    return accu = items;
}, 0)

// console.log(pay);

const shoppingCart = [
    {
        itemName: "python Cource",
        price: 999
    },
    {
        itemName: "java Cource",
        price: 1999
    },
    {
        itemName: "javaScript Cource",
        price: 2999
    },
    {
        itemName: "php Cource",
        price: 999
    },
    {
        itemName: "data science Cource",
        price: 12999
    },
    {
        itemName: "Ruby Cource",
        price: 1999
    },
]

let payAmout = shoppingCart.reduce((accu, currentVal) => {
    return currentVal.price + accu;
}, 0);

// console.log(payAmout);


// Function chaining, also known as method chaining =>

let numbers = [12, 3, 4, 5, 6, 7];

let newNums = numbers
    .map((encreValue) => {
        return encreValue * 10;
    })
    .filter((i) => {
        return i > 30;
    })
    .reduce((acc, cureent) => {
        return acc + cureent;
    },0)
// console.log(newNums);