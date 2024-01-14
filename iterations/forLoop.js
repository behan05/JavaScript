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



const books = [
    {
        title: "book One",
        genre: "history",
        publish: 1995,
        edition: 2005
    },
    {
        title: "book Two",
        genre: "science",
        publish: 2000,
        edition: 2007
    },
    {
        title: "book Three",
        genre: "biology",
        publish: 1997,
        edition: 2013
    },
    {
        title: "book Four",
        genre: "computer vision",
        publish: 1985,
        edition: 2014
    },
    {
        title: "book Five",
        genre: "Agreegetion",
        publish: 2015,
        edition: 2017
    },
    {
        title: "book One",
        genre: "history",
        publish: 2000,
        edition: 2005
    },
]
// console.log(books.length);

for(let index = 0; index < books.length; index++){
    if (books[index].genre === "history" && books[index].publish >= 2000){
        // console.log(books[index]);
    }
}


