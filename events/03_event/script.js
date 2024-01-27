// event propagation(event bubble is by (default),
//  event capturing)

// document.querySelector("#images").addEventListener('click', function (e) {
//     console.log('clicked inside the ul tag');
// }, false)

// const img = document.getElementById("dog");
// img.addEventListener('click', (e) => {
//     console.log("clicked on dogs image");
// }, false) // false propagate button to top.


// ******************************************************************


// document.querySelector("#images").addEventListener('click', function (e) {
//     console.log('clicked inside the ul tag');
// }, true)

// const img = document.getElementById("dog");
// img.addEventListener('click', (e) => {
//     console.log("clicked on dogs image");
// }, true) // // true propagate top to button.

// *****************************************************************

// document.getElementById("images").addEventListener('click', (e) => {
//     console.log('clicked inside the ul tag');
// })

// const dog = document.getElementById("dog")
// dog.addEventListener('click', (e) => {
//     console.log('clicked on dogs');
//     e.stopPropagation() // help to stop bubbling.
// })

// const google = document.querySelector('#google')
// google.addEventListener('click', function (e) {
//     console.log("clicked on google ");
//     e.preventDefault() // now google will not redirect to the another tab after click.
//     e.stopPropagation()
// })

// **********************************************************

// remove image item when clicked.

const items = document.getElementById('images')
items.addEventListener('click', (e) => {
    console.log(e.target.tagName);

    if (e.target.tagName === "IMG") {
        const removeIt = e.target.parentElement;
        removeIt.remove()
    }
    else if (e.target.tagName === "LI" || e.target.tagName === "A") {
        const removeIt = e.target;
        removeIt.remove()
    }

}, false)