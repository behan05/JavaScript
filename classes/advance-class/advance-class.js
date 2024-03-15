// ## Advanced Concepts

// ### 7. Static Methods
//    - Definition and usage of static methods that belong to the class itself rather than its instances.

// ### 8. Polymorphism
//    - Explanation of polymorphism in JavaScript classes.
//    - How subclasses can override methods of their parent class.

// ### 9. Abstraction
//    - Utilizing abstraction to hide complex implementation details and expose only essential features.

// ### 10. Encapsulation
//    - Understanding encapsulation as a mechanism for bundling data and methods that operate on the data within a class.

// ### 11. Private Fields and Methods
//    - Explanation of private fields and methods introduced in newer versions of JavaScript.

// ### 12. Class Expressions
//    - Defining classes using class expressions, which can be named or unnamed.


// Static Methods =>
//    - Definition and usage of static methods that belong to the class itself rather than its instances.

class Profile {
    constructor(name, age) {
        // this can refer to a current context or instance or object of the class Profile.

        this.name = Profile.toCapitalize(name);
        this.age = age;
        // console.log(this);
    }

    // don't access static method by using instace of the calss.
    static toCapitalize(name) {
        return `${name.charAt(0).toUpperCase()}${name.slice(1, name.length)}`
    }
}

const behan = new Profile("behan", 24);
// console.log(behan.name)
// const behan = new Profile(Profile.toCapitalize("behan"), 24);
// console.log(behan.name)



// Polymorphism =>
//    - Explanation of polymorphism in JavaScript classes.
//    - How subclasses can override methods of their parent class.

// two type of polymorphism.
// 1 => compile-time polymorphism(mehtod overloading).
// 2 => run-time polymorphism(mehtod overriding).



// 1 => compile-time polymorphism(mehtod overloading) =>

class Calculate {

    // mehtod with two parameters.
    add(a, b) {
        return a + b;
    }

    // mehtod with three parameters
    add(a, b, c) {
        return a + b + c;
    }
}

const calc = new Calculate();
// console.log(calc.add(2,3)); // output NaN (not a number)
// console.log(calc.add(2,3,4)); // 9
// in javascript, if the mehtod name is same then last method is executed, in this above example three parameter is last mehtod it is called method overloading. 


// 2 => run-time polymorphism(mehtod overriding) =>
class Animal {
    makeSound() {
        return "this is a generic anomal sound!"
    }
}

class Dog extends Animal {

    // override makeSound method of Animal class
    makeSound() {
        return "woof"
    }
}

class Cat extends Animal {

    // override makeSound method of Animal class
    makeSound() {
        return "meow"
    }
}

const dog = new Dog();
const cat = new Cat();
// console.log(dog.makeSound());
// console.log(cat.makeSound());


// Abstraction =>
//    - Utilizing abstraction to hide complex implementation details and expose only essential features.

// Encapsulation =>
//    - Understanding encapsulation as a mechanism for bundling data and methods that operate on the data within a class.

// Private Fields and Methods
//    - Explanation of private fields and methods introduced in newer versions of JavaScript.

// NOTE : private fiels or properties and method can only be access from within the class itself.

class Counter {

    // private field.
    #count = 0;

    // private method.
    #increment() {
        this.#count++;
    }

    // public
    getCount() {
        return this.#count;
    }
    // public
    getCounter() {
        this.#increment();
    }

}

const con = new Counter();
console.log(con.getCount());
con.getCounter();
con.getCounter();
console.log(con.getCount());