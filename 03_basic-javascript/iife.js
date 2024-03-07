// IIFE (Immediatly Invoked Function Expression).

// Use of IIFE: that function which need to execute immediately.

(function one() {
    console.log(`DB Connected`);  // named Function
})();


(function two(name) { // named function with parameter
    console.log(`${name}, DB Connected`);
})('behan');

(() => { // unnamed function
    console.log(`DB Connected`);
})();

((name) => { // unnamed function with parameter
    console.log(`${name}, DB Connected`);
})('sitesh');



let singleTon = (function () {
    let instance = null;

    function createInstance() {
        return {
            name: "behan",
            age: 24,
            score: Math.floor(Math.random() * 100)
        }
    }

    return {

        getInstance: function () {
            if (!instance) {
                instance = createInstance();
                return instance;
            }
            else {
                return instance;
            }
        }
    }
})();

let instance1 = singleTon.getInstance();
let instance2 = singleTon.getInstance();

setTimeout(() => {
    console.table([instance1, instance2]);
}, 5000);

for (let i = 0; i <= 5; i++) {
    (function (para) {
        setTimeout(() => {
            console.log(para);
        }, 3000)
    })(i);

}