const studentInfo = {
    name : "behan",
    age : 24,
    email : "behan@google.com",
    college : "Shree sukhmani institute and technology",
    session : 2022,
    departmentHod : "Ms.Ranju"
}


// Normally we access like:

// console.log(studentInfo.departmentHod);

// now we de-structure object.

const {departmentHod : hod} = studentInfo;

// console.log(departmentHod);
console.log(hod);


