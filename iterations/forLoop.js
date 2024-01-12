// basic loop (for loop)

for (let index = 0; index < 10; index++) {
    // console.log(index);

}


// condition

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        // console.log(`${i} is lucky number!`);
        i++;
    }
    // console.log(i);

}

// nested loop

for (let i = 1; i <= 10; i++) {

    // console.log(`the value of i is : ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(j);
        // console.log(`${i} * ${j} = ${i * j}`);

    }

}


// break & continue.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        function wishForReachHalfValue() {
            // console.log("now you reach half of 10: " + i);
        }
        wishForReachHalfValue();
        break;
    }
    // console.log(i);

}

for (let i = 1; i <= 20; i++) {

    if (i === 5) {
        // console.log(`${i} is detected`);
        continue; // skip current val   
    }
    // console.log(i);

}

const myArray = [1,22,3,43,52,66];
// console.log(`myArray length: ${myArray.length}`);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



