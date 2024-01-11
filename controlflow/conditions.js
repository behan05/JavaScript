const num = 3

// if (true) {
//     console.log("executed if true");
// }

// if(num === 3){
//     console.log("equal");
// }

// const temperature = 0;

// if(temperature === 40){
//     console.log("equal");
// }
// else if (temperature < 40 && temperature !== 0){
//     console.log("less than 40");
// }
// else if(temperature > 40){
//     console.log("greater than 40");
// }
// else{
//     console.log("enter integer value only!");
// }


const userLoggedInByEmail = false;
const userLoggedInBygoogle = true;
const userAddOwnDebitCard = false;

// if (userLoggedInByEmail || userLoggedInBygoogle && userAddOwnDebitCard){
//     function greetingMessage(){
//         console.log("Thank you for chosing out website!");
//     }
//     greetingMessage()
// }
// else if(userLoggedInByEmail || userLoggedInBygoogle){
//     console.log("please add your Debit Card to Access our website!");
// }

const arr = [];

// if (arr.length != 0){
//     console.log(arr);
// } else{
//     console.log("array is empty!");
// }

const str = ""; // flase.

// if (str){
//     console.log("empty str");
// }

const obj = {
    name : 'behan',
    age : 24,
    email : "behankrbth@google.com"
}

if (Object.keys(obj).length != 0){ // Object.keys() return as an array. 
    console.log(Object.keys(obj));
}
else{
    console.log("Object is empty!");
}


// Switch

const month = 2;

switch(month){
    case 1: console.log("January")
    break;

    case 2: console.log("February")
    break;

    case 3: console.log("March")
    break;

    default:
        console.log("Enter a valid value!")
        break;
}