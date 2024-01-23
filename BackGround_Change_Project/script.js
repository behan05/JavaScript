
const h2 = document.createElement('h2');
const addHeading = document.createTextNode("Click to change background color!")
h2.appendChild(addHeading)

const div = document.querySelector('div');
div.appendChild(h2)


const main = document.getElementById('main');
main.addEventListener('click', function(e){
    main.style.backgroundColor = e.target.className
}, false)


