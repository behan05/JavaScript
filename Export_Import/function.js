
export function render(root, createElement, className) {
    // create element.
    const createTagElement = document.createElement(createElement.tag);

    // set attribute.
    for (const prop in createElement.props) {
        createTagElement.setAttribute(prop, createElement.props[prop]);
    }

    // add style.
    if (className) {
        createTagElement.classList.add(className);
    }

    root.appendChild(createTagElement);
}




