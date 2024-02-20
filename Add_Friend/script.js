
const main = document.querySelector('.main');
main.addEventListener('click', (e) => {
    if (e.target.className === "add") {
        e.target.innerHTML = 'Requested'
    }
    else if (e.target.className === "remove") {
        const parent = e.target.parentElement;
        parent.remove();
    }
})