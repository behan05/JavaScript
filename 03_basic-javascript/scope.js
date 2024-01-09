let a = 200;
const b = 400;

if (true) {
    let a = 300;
    const b = 400;
    // console.log("inner: ",a);
}

// console.log(a);
// console.log(b);

function one(){
    const name = "behan";

    function two(){
        const website = "https://www.youtube.com"
        console.log(`my name is ${name}`);
    }
    // console.log(website); // raise error because access outside of inner scope.

    two()
}

// console.log(name); //raise error because access outside of its scope.

// one()

// if (true) {
//     const name = "behan";

//     if (true) {
//         const website = "https://www.youtube.com"
//         console.log(`my name is ${name}`);
//     }
// }


// way to define function:

addOne(5)
function addOne(num){
    return num + 1;

}
addTwo(5) // Raise Error: Cannot access 'addTwo' before initialization//

const addTwo = function(num){ // javascript variable is very powerful it can store anything.
    return num + 2;
}


