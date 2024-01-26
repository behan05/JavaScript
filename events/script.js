// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('button was clicked');
// }, false)

// const div = document.querySelector('.div');
// const body = document.querySelector('body');
// div.addEventListener('mouseover', () => {
//     console.log('hover on div');

//     body.style.backgroundColor = "blue"
// })

// something need to know about event Objects / properties.

// const div = document.querySelector(".div");
// div.addEventListener("mouseout", function(e) {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.timeStamp);
//     console.log(e.screenX);
//     console.log(e.screenY);
//     console.log(e.currentTarget);
// })

const button = document.querySelector('#btn');
const body = document.querySelector('body')

button.addEventListener('click', () => {
    if (button.style.backgroundColor === "white") {
        body.style.backgroundColor = "#212121"
        body.style.color = "white"
        button.style.backgroundColor = "#212121"
        button.style.color = "white"
        // body.classList.add("black");
        console.log('if condition execute');
    }
    else {
        body.style.backgroundColor = "white"
        body.style.color = "#212121"
        button.style.backgroundColor = "white"
        button.style.color = "#212121"
        // body.classList.add("white");
        console.log("else condition Execute")
    }
})


