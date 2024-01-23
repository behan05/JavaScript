// write a code to display a current time.

setInterval(() => {
    const div = document.querySelector('.watchBox');
    div.style.backgroundColor = "yellow"
    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.justifyContent = "center"
    div.style.color = "black"
    div.style.borderRadius = "10px"
    div.style.fontSize = "1.3rem"

    const time = new Date();
    div.innerHTML = time.toLocaleTimeString();
}, 1000)