
const myArray = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];

myArray.forEach(function (item) { // forEach loop take callBack function, no need to write a function.
    // console.log((item));
})

// myArray.forEach((items) => console.log(items))

// const res = myArray.forEach((items) => {  // not return value.
//     return items
// }) 
// console.log(res);

/*
const coding = ["python", ["java","Node.js"], "javascript", "php", "Ruby"];

function printMe(item){

    if (Array.isArray(item)){
        item.forEach((element) => {
            console.log(element);
        })
    }
    else{
        console.log(item);
    }
}
coding.forEach(printMe)
*/

/*
const coding = [
    "python", ["java", "Node.js"], { 'name': "behan" }, "javascript", "php", ["java", "Node.js"], "Ruby", "cpp"
];

coding.forEach((item, index) => {

    if (Array.isArray(item)) {
        for (const i of item) {
            console.log(i, index)
        }
    }

    else if (index === 2) {
        console.log(item.name);
    }

    else {
        console.log(item, index);
    }
})
*/

const myCoding = [
    {
        languageName : "javaScript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
    {
        languageName : "php",
        languageFile : "php"
    },
    {
        languageName : "C++",
        languageFile : "cpp"
    },
];


myCoding.forEach((item) => {
    // console.log(Object.entries(item), index);
    // console.log((Object.keys(item)).toString(), Object.values(item).toString() , index); 
    // console.log(Object.values(item).toString()); 

    Object.entries(item).forEach((item) => {
        console.log(item);
    });
});



