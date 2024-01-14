// Array Specific  Loop.
// for of.

const supermans = ["superman", "ironman", "thor", "capton america", "loki", "fury", "spiderman"];


for (const superman of supermans) {
    // console.log(superman);
}

const n = []

for (const superman of supermans) {
    if (superman === "fury"){
        break;
    }
    n.push(superman)
}

// console.log(n)



// for (const name of "behan".toUpperCase()) {
//     console.log(name);
// }

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

for (const book of books) {
    if (book.genre === "history"){
        // console.log(book); 
    }  
}



// Map (non-primitive data type) // map does not contain duplicate value.

const map = new Map();

map.set("name", "behan");
map.set("age", 24);
map.set("email", "behankrbth@gmail.com")



// key value manipulation.

map.set('name', "sitesh")
// console.log(typeof map);

// map.delete("name")
// console.log(map.values());
// console.log(map.keys());
// console.log(map);

