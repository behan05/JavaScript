// synchronous.(Default)

// document.getElementById('h1').addEventListener('click', () => {
//     console.log('text clicked');
// }, false)

// Asynchronous.

/*
const text = document.querySelector('#h1');
const btnStop = document.querySelector('#btn-stop');
const btnStart = document.querySelector("#btn-start")

function TextChange() {
    const startTextChange = setTimeout(function () {
        console.log('change text after 2 second!');
        text.innerHTML = "Welcome Behan Kumar!"
    }, 2000);

    // **********************
    // Stop text changing.
    btnStop.addEventListener('click', function () {
        console.log('Stop Text Chnage Process!');
        clearTimeout(startTextChange);
    })

    // Start text chnage when click on start button.

    btnStart.addEventListener('click', () => {
        setTimeout(() => {
            console.log('change text after 2 second!');
            text.innerHTML = "Welcome Behan Kumar!"
        }, 2000)
    })
}
TextChange()
*/

// setInterval

const text = document.querySelector('#h1');
const btnStop = document.querySelector('#btn-stop');
const btnStart = document.querySelector("#btn-start");

// function to execute the code.

function printContinue() {
    function printStart() {

        const exeContinue = setInterval(function () {
            text.innerHTML = "change by javaScript! | check console now to check behavior";
            console.log('changed text by javaScript!', new Date().toLocaleTimeString());
        }, 1000);

        btnStop.addEventListener('click', () => {
            clearInterval(exeContinue);
            document.querySelector('#h1').innerHTML = "welcome users! | open console to check behavior.";
        })

    }
    printStart()

    btnStart.addEventListener('click', () => {
        printStart()
    })

}
printContinue()
