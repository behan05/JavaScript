// IIFE (Immediatly Invoked Function Expression).

// Use of IIFE: that function which need to execute immediately.

(function one(){
    console.log(`DB Connected`);  // named Function
})();


(function two(name){ // named function with parameter
    console.log(`${name}, DB Connected`);
})('behan');

(() =>{ // unnamed function
    console.log(`DB Connected`);
})();

((name) =>{ // unnamed function with parameter
    console.log(`${name}, DB Connected`);
})('sitesh');