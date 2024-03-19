// Introduction to DOM

// What is DOM?
// How DOM represents documents?
// DOM vs. HTML
// DOM Structure and Hierarchy

// Nodes in the DOM
// Node types (Element, Text, Comment, etc.)
// Tree structure of the DOM
// Accessing DOM Elements

// Selecting elements using selectors (getElementById, getElementsByClassName, querySelector, etc.)
// Traversing the DOM (parentNode, childNodes, nextSibling, previousSibling, etc.)
// Modifying DOM Elements

// Adding and removing elements
// Modifying element attributes
// Modifying element content (textContent, innerHTML)

// ********************************************************

// * Browsers understand HTML, CSS, and JavaScript in the following ways:

// HTML (HyperText Markup Language): When a browser receives an HTML document from a web server, it parses the HTML code to understand the structure of the web page. It creates a Document Object Model (DOM) tree based on the HTML elements, their attributes, and their relationships. This DOM tree represents the structure of the webpage and allows the browser to render it visually.

// CSS (Cascading Style Sheets): Once the browser has parsed the HTML and constructed the DOM tree, it applies CSS stylesheets to the DOM elements. CSS rules define how elements should be styled, including properties like color, size, layout, and positioning. The browser's rendering engine uses these styles to determine how each element should appear on the screen.

// JavaScript: When the browser encounters JavaScript code in the HTML document or linked JavaScript files, it executes this code using its JavaScript engine. JavaScript can manipulate the DOM (e.g., adding or removing elements, changing styles), handle user interactions (e.g., clicking buttons, submitting forms), fetch data from servers (e.g., AJAX requests), and perform various other tasks to make web pages interactive and dynamic.

// In summary, browsers understand HTML to create the structure of web pages (DOM), CSS to apply styles to these elements, and JavaScript to add interactivity and dynamic behavior to the webpage. This combination allows browsers to render and display web content as intended by web developers.


// Accessing DOM Elements =>

// const container = document.getElementById("container");
// const navbar = document.getElementsByClassName("container__navbar");
// const tag  = document.getElementsByTagName("div");
// console.log(container);
// console.log(navbar);
// console.log(tag);

// const conatiner = document.querySelector("#container");
// console.log(conatiner);

// const div = document.querySelectorAll("div")
// console.log(div[2]);


// Selecting elements using selectors (getElementById, getElementsByClassName, querySelector, etc.) =>

// const container = document.getElementById("container");
// const navbar = document.getElementsByClassName("container__navbar");
// const tag  = document.getElementsByTagName("div");
// console.log(container);
// console.log(navbar);
// console.log(tag);

// const conatiner = document.querySelector("#container");
// console.log(conatiner);

// const div = document.querySelectorAll("div")
// console.log(div[2]);

// properties & method =>

// const container = document.getElementById("container");
// console.log(container.tagName);
// const logo = document.querySelectorAll("div")
// console.log(container.innerText = "hello");
// console.log(container.innerHTML = "hello");
// console.log(container.ELEMENT_NODE);
// console.log(container.attributes);
// console.log(container.id);
// console.log(logo[2].className);
// logo[2].style.color = "lightseagreen";
// logo[2].style.fontSize = "2rem";
// logo[2].style.fontWeight = "900";
// logo[2].style.padding = "1rem";
// logo[2].style.letterSpacing = "0.5rem";
// logo[2].style.textShadow = "0 0 1rem #000"

// console.log(logo[2].parentElement);
// console.log(logo[2].parentNode);
// console.log(logo[2].childNodes);

// const menu = document.querySelector(".menu");
// console.log(menu.attributes);

// for (let i=0; i < menu.children.length; i++) {
//     console.log(menu.children[i].textContent);
// }

// const li = document.querySelector("li");
// // console.log(li.parentNode);
// // console.log(li.parentElement);
// console.log(menu.firstElementChild);
// console.log(menu.lastChild);
// console.log(menu.childNodes);
// // console.log(li.className);
// try {
//     menu.classList.add("myClass");
//     console.log(menu.classList);
// } catch (error) {
//     console.log(error);
// }
// menu.classList.remove("myClass");

// ****************************************************

// Traversing the DOM (parentNode, childNodes, nextSibling, previousSibling, etc.) =>


// const li = document.querySelector("ul");

// let child = menu.children; // return html collection
// // console.log(child[2]
// console.log(li.parentNode);
// console.log(li.parentElement);
// console.log(li.nextElementSibling);
// console.log(li.previousElementSibling);
// console.log(li.parentNode);
// console.log(li.childNodes);

// ************************************************************

// Modifying DOM Elements


const li = document.querySelector(".menu");
// li.className = "menubar";
// console.log(li);

const createElement = document.createElement("li");
createElement.setAttribute("title", "Hello DOM");
createElement.className = "createElement";
const addText = document.createTextNode("I am created by DoM technique!");
createElement.appendChild(addText);
createElement.classList.add("myClass");
li.appendChild(createElement);

// ****************************************************

// Adding and removing elements =>

function element(elementName, height, width) {
    const div = document.createElement(elementName);
    div.className = "containerDiv";
    const addtext = document.createTextNode("Box");
    // div.innerHTML = addtext;
    div.appendChild(addtext)
    div.classList.add("center");
    div.style.height = height;
    div.style.width = width;
    document.body.appendChild(div);
}

element("div", "auto", "auto");


// removing elements =>

// const ul = document.querySelector(".menu");
// console.log(ul.childNodes);
// let holdNodes = ul.children;
// console.log(holdNodes[1].remove())


const ul = document.querySelector(".menu");
ul.addEventListener("click", (e) => {
    e.target.remove();
})


// Modifying element attributes

ul.setAttribute("width", "auto")
ul.setAttribute("height", "auto")
ul.classList.add("myClass")

// console.log(ul.attributes);

// Modifying element content (textContent, innerHTML, innerText);

class ModifyElement {
    constructor(message) {
        this.message = message;
    }

    fetchData() {
        const div = document.querySelector(".containerDiv");
        return div;
    }

    modyfyData() {
        const data = this.fetchData();
        // data.appendChild(this.message)
        data.innerHTML = this.message;
        // data.textContent = this.message;
        // data.innerText = this.message;
    }

}

const obj1 = new ModifyElement(`
    <h1>Hello World</h1>
    <p>my name is Behan and i am 24 years old.</p>
`);
// obj1.modyfyData();

const obj2 = new ModifyElement(`
    <h1>Hello JavaScript</h1>
    <p>my name is Sitesh and i am 22 years old.</p>
`);

obj2.modyfyData();