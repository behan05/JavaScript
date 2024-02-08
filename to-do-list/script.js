
(function () {
    const currentTime = document.querySelector('#time');
    currentTime.style.fontSize = "1.1rem";

    setInterval(() => {
        const time = new Date();
        currentTime.innerHTML = time.toLocaleTimeString();
    }, 1000);
})();

function addElement() {
    const ul = document.querySelector('ul'); // target ul.
    const addBtn = document.querySelector('#addBtn'); // target ul.

    addBtn.addEventListener('click', () => {
        const title = document.querySelector('#title').value; // target ul.

        const createDiv = document.createElement('div') //create element.
        const createPara = document.createElement('p') //create element.
        const createbtn = document.createElement('button') //create element.

        createDiv.setAttribute('id', 'itemsContainer');
        createPara.setAttribute('id', 'pItems');
        createbtn.setAttribute('id', 'cancel');


        const addtitle = document.createTextNode(title);
        createPara.appendChild(addtitle);

        const addBtn = document.createTextNode('Cancel');
        createbtn.appendChild(addBtn);

        createDiv.appendChild(createPara),
            createDiv.appendChild(createbtn),
            ul.appendChild(createDiv);
    })


}

addElement();


function removeElement() {
    const ul = document.querySelector('ul');

    ul.addEventListener('click', (e) => {

        if (e.target.tagName == "BUTTON") {
            const removeIt = e.target.parentElement;
            removeIt.remove()
        }
    })
}
removeElement();


