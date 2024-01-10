// arrow function is another way to define function.


const one = function(){
    console.log("this is a normal function ");
}

// one()

const two = () => {
    console.log("this is a Arrow function ");
}

// two()

// const three = (num1, num2) => {
//     return num1 + num2;

// }
// const three = (num1, num2) => num1 + num2;

// const three = (num1, num2) => (num1 + num2);

const three = (num1, num2) => ({name:"behan"}); // beaket help to return object

// console.log(three(2,4));


const studentInfo = {
    studentName : "behan",
    age : 24,
    email : "behan@google.com",

    studentDetailInfo : function() {
        console.log(`Studen name is: ${this.studentName}`);
        console.log(`Studen age is: ${this.age}`);
        console.log(`Studen email is: ${this.email}`);
    }
}

// studentInfo.studentDetailInfo();

const studentInformation = {
    studentName : "behan",
    age : 24,
    email : "behan@google.com",

    studentDetailInfo : () => {  // Arrow function will not work in object
        console.log(`Studen name is: ${studentName}`);
        console.log(`Studen age is: ${age}`);
        console.log(`Studen email is: ${email}`);
    }
}

// studentInformation.studentDetailInfo()

const arrow = (name, age, email) => {
    if (name && age && email) {
        console.log(`Studen name is: ${name}`);
        console.log(`Studen age is: ${age}`);
        console.log(`Studen email is: ${email}`);
    }
}

const studentName = "behan";
const age = 24;
const email = "behan@google.com";

// arrow(studentName,age,email);