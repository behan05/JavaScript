

//thefunction parameter is like variable but here no need to include variable type.

/*
function functionName(parameter1, paremeter2){
    // block of code // sometime called as block space;
}

functionName(argument1, argument2); // call a function by its function name.
*/


// function addTwoNumber(num1, num2){
//     const addCalculation = num1 + num2;
//     console.log(addCalculation);
// }

// // calling a function.

// addTwoNumber(2, 5);


function addTwoNumber(num1, num2) {
    const addCalculation = num1 + num2;
    console.log("i am able to display")
    return addCalculation; // this function is returning the result of calculation;
    // console.log("i am not able to display"); // this will not display why because once the function will return and the code which is written after the return keyword will not reachable.
}

// calling a function.

// console.log(addTwoNumber(2, 5)); // when function will return something then you need to store on new variable or price directly.



// function userLoginMessage(userName){
//     console.log(`${userName}, just logged in`);
// }

// userLoginMessage("Behan")
// userLoginMessage("")
// userLoginMessage(4)

function userLoginMessage(userName) {
    if (userName === undefined) {
        console.log("Please enter your name: ");
    } else {
        console.log(`${userName}, just logged in`);
    }
}

// userLoginMessage() 

function userLoginMessage(userName = "defalutUserName") { // if during the function call pass the argument ,override the default value.
    if (!userName) {
        console.log("Please enter your name: ");
    } else {
        console.log(`${userName}, just logged in`);
    }
}
// userLoginMessage();
// userLoginMessage("behan") 

// calculateCartPrice.
// using rest (...val) method and it return as an Array.
function calculateCartPrice(...getPrice) {
    return getPrice;
}

const getCalculationOfPrice = calculateCartPrice(200, 300, 400, 500, 600);
// console.log(getCalculationOfPrice);

// function with object data type.

const studentInfo = new Object();


studentInfo.name = "behan";
studentInfo.age = 24;
studentInfo.email = "behan@google.com";
studentInfo["college"] = "shree sukhmani institute and technology";

function handleObject(anyobject) {
    return `my name is ${anyobject['name']} and my age is ${anyobject.age}`;
}

// console.log(handleObject(studentInfo));
// console.log(handleObject({
//     name: "behan",
//     age: 24,
//     email: "behan@google.com",
//     college: "shree sukhmani institute and technology"
// }));


// function with Array data type.

function calculateArrayValues(getArray){
    console.log(getArray);
}

const myNewArray = [200,300,400,500];
// calculateArrayValues(myNewArray);
// calculateArrayValues([200,300,400,500]);
