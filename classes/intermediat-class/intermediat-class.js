// ## Intermediate Concepts

// ### Class Members
//    - Understanding class properties and methods.
//    - How to access and modify class members.

// ### Inheritance
//    - Extending classes to create subclasses.
//    - Using `extends` keyword for inheritance.

// ### Getter and Setter Methods
//    - Defining getter and setter methods to control access to class properties.



// Class Members =>
//    - Understanding class properties and methods.
//    - How to access and modify class members.


class Profile {

    // constructor method used to provide the class properties.
    constructor(name, age, id) {
        // class properties.
        this.name = name;
        this.age = age;
        this.id = id
    }

    // prototype method / instance method.
    printProfileDetail() {
        //using template literal
        console.log(`my name id ${this.name} \ni am ${this.age} years old \nmy collage id is ${this.id}.`);
    }

}

// creating instance or object of class Profile.
const behan = new Profile("Behan", 24, "FN213");
// behan.printProfileDetail();

// modify class properties.
behan.name = "sitesh kumar"
// behan.printProfileDetail(); // modify successfully.



// Inheritance =>
//    - Extending classes to create subclasses.
//    - Using `extends` keyword for inheritance.


// inheritance achive by using extend keyword.


class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    eating() {
        console.log(`${this.name} is eating!`);
    }

    color() {
        console.log(`${this.name} color is ${this.color}`);
    }
}

// inherit class Animal.

class Monkey extends Animal {

    speak() {
        console.log(`${this.name} is speaking!`);
    }

    running() {
        console.log(`${this.name} is running!`);
    }
}

const ani = new Animal("cat", "white");
const mon = new Monkey("monkey", "orange");

// ani.eating();
// mon.eating();
// mon.running()
// ani.running(); // not runnig because animal did't have runnig function.


// console.log(this);

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;

        // return this;
    }

}
// behind the scen new keyword call constructor.
const sitesh = new User("sitesh@google.com", 123);
// console.log(sitesh);

// use of super method() =>

class Profiles {
    constructor(name, age, git) {
        this.name = name;
        this.age = age;
        this.git = git;
    }
}


class Student extends Profiles {

    constructor(name, age, git, message) {
        super(name, age, git);
        this.message = message;
    }

    studentDetail() {
        console.log(`my name is ${this.name}\nmy age is ${this.age}\nmy gitHub url ${this.git}\n${this.message}`);
    }
}

const john = new Student("john", 24, "https://github.com/behan05", "Hello World");
// john.studentDetail();

// console.log("*********************************************");
// class Student1 extends Student {
//     constructor(name,lol) {
//         super(name);
//         this.lol = lol;
//     }
//     detail() {
//         console.log(`${this.name}, ${this.age}, ${this.git}, ${this.message}`);
//         console.log(this);
//     }
// }

// const checkValue = new Student1("rohan", 34, "https://github.com/hiteshcoudhari", "Hey");


// checkValue.detail();

// const url = new Profile("nehal", 32, "https://github.com/behan05");
// console.log(url.git);

// Getter and Setter Methods
//    - Defining getter and setter methods to control access to class properties or object properties as well.





