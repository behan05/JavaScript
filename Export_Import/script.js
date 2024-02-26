import { render } from "./function.js";


// Usage.
const createElement = {
    tag: "img",
    props: {
        src: "https://avatars.githubusercontent.com/u/83676505?v=4",
        alt: "image",
        width: 300,
        class: 'imgBox'
    }
};


// get element.
const root = document.querySelector('.root');
render(root, createElement, "img");

const imgBox = document.querySelector(".imgBox");

imgBox.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.remove();
    }
})