// there are two way to use Memory by javascript data type.

// Stak Memory(Primitive), Heap Memory(Non-Primitive/Reference).

let name = "behan";
let anotherName = name;
anotherName = "sitesh";

console.log(name);
console.log(anotherName);

const user = {
    userEmail:"behan@google.com",
    userUpiId:"behan@okybl"
}

let userTwo = user;

userTwo.userEmail = "sitesh@microshoft.com";

console.log(user.userEmail);
console.log(userTwo.userEmail);

   