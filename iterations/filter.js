
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90]


// const res = num.filter((item) => {
//     return item >= 40
// });
// console.log(res);


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
        title: "book six",
        genre: "history",
        publish: 2000,
        edition: 2005
    },
]


// const filteredBooks = books.filter((item) => {
//     return item.genre === "history";
// })
// console.log(filteredBooks);

const filteredBooks = books.filter((item) => {
    return item.genre === "history" && item.publish >= 2000;
})

console.log(filteredBooks);