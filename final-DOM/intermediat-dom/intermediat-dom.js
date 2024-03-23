// Event Handling

// Introduction to events in the DOM =>
// event is an action that occure as per users interuction as input and give the output in response.we can consider diff type of input such as (e.g, click, hover, press tab etc.)
// syntax : node.addEventListener("event", () => {}, false)

// way to inject Events on elements =>
// There are mainly three way to use event with HTML.

// const box = document.querySelector(".box");
// box.onclick = () => alert("box clicked!");

// function dbClick() {
//     let data = prompt("enter val: ");
//     console.log(data);
//     const box = document.querySelector(".box");
//     try {
//         box.innerHTML = data;
//         box.classList.add("myClass")
//     } catch (error) {
//         console.log(error.message);
//     }
// }


const menubtn = document.querySelector(".menubtn");
const closebtn = document.querySelector(".closebtn");

menubtn.onclick = () => {
    menubtn.style.display = "none"
    closebtn.style.display = "block"
}

closebtn.onclick = () => {
    closebtn.style.display = "none"
    menubtn.style.display = "block"
}

// Event listeners (addEventListener, removeEventListener)


const checkEventEffect = () => {
    const container = document.querySelector(".container2");
    const createElement = document.createElement("div");
    createElement.className = "box";
    let addMessage = prompt("Please enter a message to update slider!")
    let addText = document.createTextNode(addMessage);
    createElement.classList.add("myClass")
    createElement.appendChild(addText);
    container.appendChild(createElement);

    createElement.addEventListener('mouseout', () => {
        console.log(hover);
        createElement.style.backgroundColor = "cyan"
        createElement.innerHTML = null;
    }, false);
    createElement.addEventListener("click", () => {
        createElement.style.backgroundColor = "cyan"
        createElement.innerHTML = null;
    }, false)
}

// checkEventEffect();

// Event Object.
// An Event Object is a special object , when you use event each event can consider prototype object, when given event occured than return its object you can use its properties and method as well.
// example =>

// const container = document.querySelector(".container2");
// container.innerHTML = "Hello JavaScript!"
// container.classList.add("myClass")
// container.addEventListener("click", (obj) => {
//     // console.log(obj.timeStamp);
//     // console.log(obj.type);
//     // console.log(obj.target);
//     // console.log(obj.currentTarget);
//     // console.log(obj.bubbles);
//     // console.log(obj.preventDefault());
//     // console.log(obj.clientX);
//     // console.log(obj.clientY);
// }, false)


// some important events that are used frequently
// e.g => click, dbclick, mouseover, mousedown,mouseup, mousemove, keydown, keyup, for window/document event (load, unload,resize), for form e.g(focus, submit, blur, change) etc. =>

// for normal use.
// document.addEventListener("DOMContentLoaded", () => {

// const container = document.querySelector(".container2");

// container.innerHTML = "Hello JavaScript!";
// container.classList.add("myClass");
// if (container) {
//     try {
// container.addEventListener("mouseover", (e) => {
//     container.innerHTML = "Mouseover Detected!";
//     console.log("mouseover is working as expected! ", e.type);
// })
// container.addEventListener("mousedown", (e) => {
//     container.innerHTML = "Mousedown Detected!";
//     console.log("mousedown is working as expected! ", e.type);
// })
// container.addEventListener("mouseup", (e) => {
//     container.innerHTML = "Mouseup Detected!";
//     console.log("Mouseup is working as expected! ", e.type);
// })
// container.addEventListener("mousemove", (e) => {
//     container.innerHTML = "Mousemove Detected!";
//     console.log("Mousemove is working as expected! ", e.type);
// })

//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//     else {
//         console.log("container does not exist!");
//     }
// })


// For keydown / Keyup =>

// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector(".container2");

//     if (container) {
//         container.innerHTML = "I Love JavaScript!";
//         container.classList.add("myClass");
//         container.style.color = "red";

//         container.addEventListener("keyup", e => {
//             console.log("Key Pressed:", e.key);
//             console.log("Key Code:", e.code);
//             console.log("Shift Key Pressed:", e.shiftKey);

//             if (e.key === "Enter" || e.keyCode === 13) {
//                 console.log("Enter key Passed!");
//                 container.innerHTML = "Enter key Passed!";
//             } else if (e.key === "Escape" || e.keyCode === 27) {
//                 console.log("Escape key pressed!");
//             }
//         });

//         // Check if the container has focus
//         if (document.activeElement === container) {
//             console.log("Container is focused!");
//         } else {
//             console.log("Container is not focused. Click on the container to focus.");
//         }
//     } else {
//         console.error("Container does not exist!");
//     }
// });

// document.addEventListener("DOMContentLoaded", e => {
//     const container = document.querySelector(".container2");

//     if (container) {
//         container.innerHTML = "I Love JavaScript!";
//         container.classList.add("myClass");
//         container.style.color = "red";

//         container.addEventListener("load", e => {

//         })
//     }
// })

// for entire window =>
// window.addEventListener("load", e => {
//     console.log(e.type);
// })

// window.addEventListener("unload", e => {
//     console.log("Sorry this site is under the maintainence please visit after some time!", e.type);
// })
// window.addEventListener("resize", e => {
//     console.log(e.type);
// })

// Accessing form elements in the DOM.
// Form Event =>

// document.addEventListener("DOMContentLoaded", () => {

//     const form = document.querySelector("form");
//     const input = document.querySelector("input");
//     const num = document.querySelector(".num");
//     form.classList.add("myClass")

//     if (form) {
//         form.addEventListener("submit", e => {
//             console.log(e.type);
//             form.style.backgroundColor = "gray"
//         })
//         input.addEventListener("focus", e => {
//             console.log(e.type);
//             form.style.backgroundColor = "blue"
//         })
//         input.addEventListener("blur", e => {
//             console.log(e.type);
//             form.style.backgroundColor = "lightseagreen"
//             form.style.borderRadius = "15px"
//         })
//         num.addEventListener("focus", e => {
//             console.log(e.type);
//             form.style.backgroundColor = "red"
//         })
//         num.addEventListener("change", e => {
//             console.log(e.type);
//             num.style.backgroundColor = "cyan"
//             console.log(e.target.value);
//         })
//     }

// })


// Event propagation (bubbling and capturing).

document.addEventListener("click", (e) => {
    console.log("outer click");

    const d = document.querySelector('.innerDiv');
    d.classList.add("myClass")
    d.addEventListener('click', e => {
        console.log("inner div clicked!");
        e.stopPropagation();
        // console.log(e);
    },false)
})



