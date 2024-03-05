// there are two way to use Memory by javascript data type.

// Stak Memory(Primitive), Heap Memory(Non-Primitive/Reference).

// let name = "behan";
// let anotherName = name;
// anotherName = "sitesh";

// console.log(name);
// console.log(anotherName);

// const user = {
//     userEmail:"behan@google.com",
//     userUpiId:"behan@okybl"
// }

// let userTwo = user;

// userTwo.userEmail = "sitesh@microshoft.com";

// console.log(user.userEmail);
// console.log(userTwo.userEmail);

// second time practice:

// there are two way to use memory by javascript:

// 1: Stack(used by primitive data type), 2: Heap(used by none-primitive or Reference).

// let userName = "behan";
// let userEmail = "behan@google.com";

// userEmail = "sitesh@yahoo.com";
// console.log(userEmail);

// let anotherUserName = userName;
// anotherUserName = "sitesh";

// console.log(anotherUserName);
// console.log(userName);

const user = {
    userEmail:"behan@google.com",
    userUpiId:"behan@okybl"
}

const userTwo = user;

userTwo.userEmail = "sitesh@gmail.com";

console.log(userTwo.userEmail);
console.log(user.userEmail);

// console.log(user.userEmail);
// user.userEmail = "sitesh@fackbook.com";
// console.log(user.userEmail);